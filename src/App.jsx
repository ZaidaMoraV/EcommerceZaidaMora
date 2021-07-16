// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HeaderComponent } from './Components/HeaderComponent';
import { NavbarComponent } from './Components/NavbarComponent/Navbar';
import { ItemDetailContainer } from './Container/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './Container/ItemListContainer/ItemListContainer';
import { ItemCount } from './Container/ItemListContainer/ItemCount';

     function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        
        <NavbarComponent />

        <Switch>

          <Route exact path="/">
            <ItemListContainer greenting={'¡¡Gracias por Visitarnos!!'} />
          </Route>

          <Route exact path="/category/:id">
            <ItemListContainer />
          </Route>

          <Route exact path="/detalle"> 
            <ItemDetailContainer />
          </Route>

          <ItemCount />

        </Switch>
      </BrowserRouter>
    </>

  )
}



export default App;
