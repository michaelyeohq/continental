// Libraries
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Theme, createStyles, makeStyles, AppBar, Toolbar } from '@material-ui/core';
// Action Creators
import ActionAuth from './stores/actions/action-auth';
// Routes
import Routes from './routes';
// Pages
import AuthenticatePage from './pages/authenticate/AuthenticatePage';
// Styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    App: {
      margin: theme.spacing(0),
    },
    Toolbar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  }),
);
// Interfaces
interface IAppProps {
  isLogin: React.Dispatch<void>;
}
function App(props: IAppProps) {
  // Styles
  const classes = useStyles();
  // React Hooks
  useEffect(() => {
    props.isLogin();
  }, []);
  // Render
  return (
    <div className={classes.App}>
      <nav>
        <AppBar position="static">
          <Toolbar className={classes.Toolbar}>
            <AuthenticatePage />
          </Toolbar>
        </AppBar>
      </nav>
      <main>
        <Routes />
      </main>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  isLogin: () => dispatch(ActionAuth.isLoginAction()),
});

export default connect(null, mapDispatchToProps)(App);
