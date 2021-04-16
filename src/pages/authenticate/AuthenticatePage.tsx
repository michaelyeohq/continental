// Libraries
import React from 'react';
import { connect } from 'react-redux';
// Action Creators
import ActionAuth from '../../stores/actions/action-auth';
// Components
import BasicForm from '../../components/forms/BasicForm';
// Mocks
import { form } from './mock';

interface ILoginActionProps {
  email: string;
  password: string;
}

interface IAuthenticatePageProps {
  login: React.Dispatch<ILoginActionProps>;
}

const AuthenticatePage = (props: IAuthenticatePageProps) => {
  // Handlers
  const submitHandler = (event: React.FormEvent, data: FormFields) => {
    event.preventDefault();
    props.login({ email: 'AdamChew@email.com', password: 'password' });
  };
  // Render
  return (
    <div>
      <BasicForm form={form} onSubmit={submitHandler} />
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
