/* eslint-disable no-unused-vars */
// Libraries
import { connect } from 'react-redux';
import { Delete } from '@material-ui/icons';
import { Theme, makeStyles, createStyles, Card, Modal, Button, Snackbar, Typography } from '@material-ui/core';
// Logics
import useAuthenticatePageLogic from './useAuthenticatePageLogic';
// Action Creators
import ActionAuth from '../../stores/actions/action-auth';
// Components
import MaterialUIInputField from '../../components/inputs/MaterialUIInputField';
// Mocks
import { form } from './mock';
// CSS
import './Authenticate.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    AuthenticatePage: {},
    Modal: {
      backgroundColor: theme.palette.common.white,
      padding: theme.spacing(50),
    },
    Card: {
      padding: theme.spacing(10),
    },
    Snackbar: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.warning.main,
    },
    Typography: {
      color: theme.palette.text.secondary,
      textTransform: 'capitalize',
    },
    Button: {
      flexShrink: 1,
    },
  }),
);
// Page
export const AuthenticatePage = (props: any) => {
  // Style Hooks
  const classes = useStyles();
  // Custom Hooks
  const logic = useAuthenticatePageLogic({ ...props, loginForm: form });
  // Generators
  const generateLoginFormInputs = Object.keys(logic.loginForm).map(name => (
    <MaterialUIInputField key={name} name={name} input={logic.loginForm[name]} onChange={logic.loginFormChangeHandler} />
  ));
  // Render
  return (
    <div>
      <Card className="AuthCard">
        <form className="basic-form basic-form-column" onSubmit={logic.loginHandler}>
          {generateLoginFormInputs}
          <Button type="submit" variant="outlined" color="primary">
            Log In
          </Button>
        </form>
      </Card>
      <Snackbar
        className={classes.Snackbar}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={logic.showErrorMessage}
        onClose={logic.closeErrorMessageHandler}
        autoHideDuration={5000}
      >
        <>
          <Typography className={classes.Typography} variant="h6">
            {logic.errorMessage}
          </Typography>
          <Button data-testid="AuthenticatePage-Snackbar-Button" className={classes.Button} onClick={logic.closeErrorMessageHandler}>
            <Delete />
          </Button>
        </>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  authStore: state.authStore,
});

const mapDispatchToProps = (dispatch: any) => ({
  clearError: () => dispatch(ActionAuth.clearErrorAction()),
  login: (loginData: ILoginActionProps) => dispatch(ActionAuth.loginAction(loginData)),
  logout: () => dispatch(ActionAuth.logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatePage);
