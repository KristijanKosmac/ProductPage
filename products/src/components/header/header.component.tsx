import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";

const Header = ({ itemCount }: any) => (
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

const mapStateToProps = ({ cart: { cartItems } }: any) => ({
  itemCount: cartItems.reduce(
    (accumulatedQuantity: number, cartItem: any) =>
      accumulatedQuantity + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps)(Header);
