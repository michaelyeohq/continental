import './Home.css';
// Fonts
import '@fontsource/roboto';
// Components
import TopBar from './TopBar';

interface IHomeProps {
  logout: () => void;
}

export const HomePage = (props: IHomeProps) => (
  <div className="Home">
    <TopBar logout={props.logout} />
  </div>
);

export default HomePage;
