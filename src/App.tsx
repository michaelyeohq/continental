// Libraries
import { Link } from 'react-router-dom';
// Routes
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <header>React Typescript Starter</header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes />
    </div>
  );
}

export default App;
