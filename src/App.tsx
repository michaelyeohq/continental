// Libraries
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// Action Creators
import ActionAuth from './stores/actions/action-auth';
// Routes
import Routes from './routes';

// Interfaces
interface IAppProps {
  isLogin: React.Dispatch<void>;
}
function App(props: IAppProps) {
  // React Hooks
  useEffect(() => {
    props.isLogin();
  }, []);
  // Render
  return (
    <div className="App">
      {/* <header>React Typescript Starter</header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav> */}
      <main>
        <Routes />
      </main>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  authStore: state.authStore,
});

const mapDispatchToProps = (dispatch: any) => ({
  isLogin: () => dispatch(ActionAuth.isLoginAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
