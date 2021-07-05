// Libraries
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Theme, createStyles, makeStyles } from '@material-ui/core';
import Routes from './routes/index';
// Action Creators
import ActionAuth from './stores/actions/action-auth';
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
    console.log(process.env.NODE_ENV);
    console.log(process.env.REACT_APP_BACKEND_URL);
    props.isLogin();
  }, []);
  // Render
  return (
    <div className={classes.App}>
      <Routes />
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  isLogin: () => dispatch(ActionAuth.isLoginAction()),
});

export default connect(null, mapDispatchToProps)(App);
