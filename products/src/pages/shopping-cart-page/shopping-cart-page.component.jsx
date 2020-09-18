import React from "react";
import "./../../../node_modules/bootstrap/scss/bootstrap.scss";
import "./shopping-cart-page.style.scss";
//import "./../../../node_modules/bootstrap/dist/js/bootstrap.js";
import ShoppingPreview from "../../components/shopping-cart-preview/shopping-cart-preview.component";

class ShoppingCart extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <ShoppingPreview></ShoppingPreview>
      </div>
    );
  }
}

export default ShoppingCart;
