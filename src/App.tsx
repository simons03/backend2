import React, { useEffect } from 'react';
// import './App.css';
import './style.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/navigation/Navbar';
import Home from './views/Home';
import Shop from './views/Shop';
import Login from './views/Login';
import Register from './views/Register';
import ProductDetails from './views/ProductDetails';
import Cart from './views/Cart';
import AdminHomePage from './views/Admin/AdminHomePage';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserActions } from './state';
import OrderDetails from './views/Admin/OrderDetails';
import OrderConfirmaion from './views/OrderConfirmaion';


function App() {

  const dispatch = useDispatch()
  const { CheckIfLoggedIn } = bindActionCreators(UserActions, dispatch)

  useEffect(() => {
    CheckIfLoggedIn()
      /* eslint-disable */
  },[])


  return (

    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Shop" exact component={Shop} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/ProductDetails/:id" exact component={ProductDetails} />
        <Route path="/Cart" exact component={Cart} />
        <Route path="/Admin" exact component={AdminHomePage} />
        <Route path="/OrderDetails/:id" exact component={OrderDetails} />
        <Route path="/OrderConfirmaion" exact component={OrderConfirmaion} />
        
      </Switch>

    </Router>


  );
}

export default App;
