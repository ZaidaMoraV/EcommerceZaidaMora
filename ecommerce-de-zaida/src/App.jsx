// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { NavbarComponent } from './Components/NavbarComponent/Navbar';
import { CartWidget } from './Components/NavbarComponent/CartWidget';
import { ItemListContainer } from './Container/ItemListContainer';


function App() {
  return (
    <div className= "App">
    <CartWidget/> 
    <ItemListContainer greenting={'¡¡Gracias por Visitarnos!!'} /> 
    </div>
  );
}


export default App;
