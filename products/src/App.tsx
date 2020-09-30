import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/home-page/home-page";
import { Route, Link, Switch, Router } from "react-router-dom";
import Header from "./components/header/header.component";
import ShoppingCart from "./pages/shopping-cart-page/shopping-cart-page.component";
import addEditProduct from "./pages/add-product-page/add-product-page.component";
import EditProduct from "./pages/edit-product-page/edit-product-page.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shoping-cart" component={ShoppingCart}></Route>
          <Route exact path="/add" component={addEditProduct}></Route>
          <Route exact oath="/edit" component={EditProduct}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
