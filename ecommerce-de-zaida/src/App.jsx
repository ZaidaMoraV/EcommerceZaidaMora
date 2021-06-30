// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'; 
import { NavbarComponent } from './Components/NavbarComponent/Navbar';
import { CartWidget } from './Components/NavbarComponent/CartWidget';
import { ItemListContainer } from './Container/ItemListContainer';
import { HomeContainer} from './Container/HomeContainer';

function App() {
  return (
    <>
    <NavbarComponent/>
    <ItemListContainer greenting={'¡¡Gracias por Visitarnos!!'}/>
    <HomeContainer />
    </>
  )
}


export default App;
