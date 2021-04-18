// Libraries
import { connect } from 'react-redux';
import { Theme, makeStyles, createStyles, Card, Modal, Button } from '@material-ui/core';
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
    Modal: {
      backgroundColor: theme.palette.common.white,
      padding: theme.spacing(50),
    },
    Card: {
      padding: theme.spacing(5),
    },
  }),
);
// Interfaces
interface ILoginActionProps {
  email: string;
  password: string;
}

interface IAuthenticatePageProps {
  login: React.Dispatch<ILoginActionProps>;
}

const AuthenticatePage = (props: IAuthenticatePageProps) => {
  // Style Hooks
  const classes = useStyles();
  // Custom Hooks
  const { showModal, setShowModal, submitHandler } = AuthenticatePageLogic({ login: props.login });
  // Render
  return (
    <div>
      <Modal className={classes.Modal} open={showModal} onClose={() => setShowModal(false)}>
        <Card className={classes.Card}>
          <BasicForm form={form} onSubmit={submitHandler} />
        </Card>
      </Modal>
      <Button onClick={() => setShowModal(true)}>Sign In</Button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  authStore: state.authStore,
});

const mapDispatchToProps = (dispatch: any) => ({
  login: (loginData: ILoginActionProps) => dispatch(ActionAuth.loginAction(loginData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatePage);
