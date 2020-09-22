import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";

const Header = ({ itemCount }) => (
  <div className="flex-container ">
    <div>
      <Link to="/add">
        <b>Add Product</b>
      </Link>
    </div>
    <div>
      <Link to="/">
        <b>Phones</b>
      </Link>
    </div>
    <div>
      <Link to="/shoping-cart">
        <b>Shoping cart</b>
      </Link>
      <span> {itemCount}</span>
    </div>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps)(Header);
