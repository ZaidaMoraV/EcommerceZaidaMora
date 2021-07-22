
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { ItemListContainer } from './Container/ItemListContainer/ItemListContainer';
import { NavbarComponent } from './Components/NavbarComponent/Navbar';
import { ItemDetailContainer } from './Container/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HeaderComponent } from './Components/HeaderComponent';



// import { ShopContext } from './context/ShopContext';

function App() {
  return (

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

          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
