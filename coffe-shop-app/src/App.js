import './App.scss';
import { useDispatch } from 'react-redux';
import React from 'react';
import { getCoffees } from './store/redux/Coffees/CoffeeActions';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Products from './Components/Shop/Products';
import Home from './Components/Home';
import Orders from './Components/Shop/Orders';




function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    getCoffees()(dispatch);
  }, [dispatch])

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Shop">
            <Products />
          </Route>
          <Route exact path="/Kitchen">
            <Orders />
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
