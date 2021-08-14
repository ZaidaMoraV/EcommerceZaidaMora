import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { CartProvider } from './Context/CartContext';
import { NavbarComponent } from './Components/Navbar';
import { ItemListContainer } from './Container/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './Container/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (

    <div className="App">
    {/* <CartProvider> */}
        <BrowserRouter>
          <NavbarComponent />

          <Switch>
            <Route exact path="/">
              <ItemListContainer greenting={'¡¡Gracias por Visitarnos!!'} />
            </Route>
            <Route exact path="/cart">
            </Route>

            <Route exact path="/category/:id">
              <ItemListContainer />
            </Route>

            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>

          </Switch>
        </BrowserRouter>
      {/* </CartProvider> */}
    </div>
  );
}

export default App;
