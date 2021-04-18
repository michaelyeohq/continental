// Libraries
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
// Action Creators
import AuthAction from '../stores/actions/action-auth';
// Pages
import AuthenticatePage from '../pages/authenticate/AuthenticatePage';

// Interfaces
interface IRouteProps {
  authStore: { [x: string]: any };
  logout: React.Dispatch<void>;
}

const Routes = (props: IRouteProps) => {
  const initialRoutes = [{ path: '/', component: <AuthenticatePage />, options: { exact: true } }];
  const [routes, setRoutes] = useState(initialRoutes);
  useEffect(() => {
    if (props.authStore?.authentication) {
      setRoutes([
        {
          path: '/',
          component: (
            <button type="button" onClick={() => props.logout()}>
              Log Out!!
            </button>
          ),
          options: { exact: true },
        },
      ]);
    } else {
      setRoutes(initialRoutes);
    }
  }, [props.authStore.authentication]);
  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.path} path={route.path} {...route.options}>
          {route.component}
        </Route>
      ))}
    </Switch>
  );
};

const mapStateToProps = (state: any) => ({
  authStore: state.authStore,
});

const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch(AuthAction.logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
