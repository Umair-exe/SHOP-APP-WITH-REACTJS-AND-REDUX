import './App.css';
import Products from './components/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Product from './components/Product';


function App() {

  return (

    <div className="container">
      <h1>Fake Shop</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/product/:id">
            <Product />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
