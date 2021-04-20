// Libraries
import { connect } from 'react-redux';
import { Delete } from '@material-ui/icons';
import { Theme, makeStyles, createStyles, Card, Modal, Button, Snackbar, Typography } from '@material-ui/core';
// Logics
import AuthenticatePageLogic from './AuthenticatePageLogic';
// Action Creators
import ActionAuth from '../../stores/actions/action-auth';
// Components
import MaterialUIInputField from '../../components/inputs/MaterialUIInputField';
// Mocks
import { form } from './mock';
// Styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    AuthenticatePage: {},
    Modal: {
      backgroundColor: theme.palette.common.white,
      padding: theme.spacing(50),
    },
    Card: {
      padding: theme.spacing(5),
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
  const logic = AuthenticatePageLogic({ ...props, loginForm: form });
  // Generators
  const generateLoginFormInputs = Object.keys(logic.loginForm).map(name => (
    <MaterialUIInputField key={name} name={name} input={logic.loginForm[name]} onChange={logic.loginFormChangeHandler} />
  ));
  // Render
  return (
    <div data-testid="AuthenticatePage" className={classes.AuthenticatePage}>
      <Modal data-testid="AuthenticatePage-Modal" className={classes.Modal} open={logic.showModal} onClose={() => logic.setShowModal(false)}>
        <Card className={classes.Card}>
          <form className="basic-form basic-form-column" onSubmit={logic.loginHandler}>
            {generateLoginFormInputs}
            <Button type="submit" variant="outlined" color="primary">
              Login
            </Button>
          </form>
        </Card>
      </Modal>
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
          <Button className={classes.Button} onClick={logic.closeErrorMessageHandler}>
            <Delete />
          </Button>
        </>
      </Snackbar>
      <Button className={logic.isLoggedIn ? 'hide' : undefined} variant="outlined" color="secondary" onClick={() => logic.setShowModal(true)}>
        Sign In
      </Button>
      <Button className={logic.isLoggedIn ? undefined : 'hide'} variant="outlined" color="secondary" onClick={logic.logoutHandler}>
        Sign Out
      </Button>
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
