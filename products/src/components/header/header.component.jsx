import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ itemCount }) => (
  <div>
    <Link to="/">
      <h1>Phones</h1>
    </Link>
    <span className="cart">
      <Link to="/shoping-cart">
        <b>SHOPING CART</b>
      </Link>
      <span> {itemCount}</span>
    </span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps)(Header);
