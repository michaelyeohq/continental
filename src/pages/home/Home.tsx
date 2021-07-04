import './Home.css';
// Fonts
import '@fontsource/roboto';
// Components
import TopBar from './TopBar';
import InventoryTable from './Inventory/InventoryTable';

interface IHomeProps {
  logout: () => void;
}

export const HomePage = (props: IHomeProps) => (
  <div>
    <TopBar logout={props.logout} />
    <InventoryTable />
  </div>
);

export default HomePage;
