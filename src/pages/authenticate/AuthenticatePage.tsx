// Libraries
import { connect } from 'react-redux';
import { Delete } from '@material-ui/icons';
import { Theme, makeStyles, createStyles, Card, Modal, Button, IconButton, Snackbar, Typography } from '@material-ui/core';
// Logics
import AuthenticatePageLogic from './AuthenticatePageLogic';
// Action Creators
import ActionAuth from '../../stores/actions/action-auth';
// Components
import BasicForm from '../../components/forms/BasicForm';
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
      padding: theme.spacing(1),
      backgroundColor: theme.palette.warning.light,
    },
    Typography: {
      color: theme.palette.text.secondary,
    },
  }),
);

const AuthenticatePage = (props: any) => {
  // Style Hooks
  const classes = useStyles();
  // Custom Hooks
  const logic = AuthenticatePageLogic(props);
  // Render
  return (
    <div className={classes.AuthenticatePage}>
      <Modal className={classes.Modal} open={logic.showModal} onClose={() => logic.setShowModal(false)}>
        <Card className={classes.Card}>
          <BasicForm form={form} onSubmit={logic.loginHandler} />
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
          <IconButton onClick={logic.closeErrorMessageHandler}>
            <Delete />
          </IconButton>
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
