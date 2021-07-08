// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { NavbarComponent } from './Components/NavbarComponent/Navbar';
import { ItemDetailContainer } from './Container/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './Container/ItemListContainer/ItemListContainer';
import { ItemCount } from './Container/ItemListContainer/ItemCount';



function App() {
  return (
    <>
      <NavbarComponent />

      <ItemListContainer greenting={'¡¡Gracias por Visitarnos!!'} />

      <ItemDetailContainer />

      <ItemCount />

    </>
    
  )
}


export default App;
