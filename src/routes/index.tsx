// Libraries
import { Switch, Route } from 'react-router-dom';
// Pages
import AuthenticatePage from '../pages/authenticate/AuthenticatePage';

const Routes = () => {
  const routes = [{ path: '/', component: <AuthenticatePage />, options: { exact: true } }];
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

export default Routes;
