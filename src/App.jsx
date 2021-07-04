// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'; 
import { ItemListContainer } from './Container/ItemListContainer/ItemListContainer';
import {ItemCount} from './Container/ItemListContainer/ItemCount';
import { NavbarComponent } from './Components/NavbarComponent/Navbar';


function App() {
  return (
    <>
    <NavbarComponent/>
    <ItemListContainer  greenting={'¡¡Gracias por Visitarnos!!'}/>
    <ItemCount />
    </>
  )
}


export default App;
