import React from "react";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import ShoppingItem from "../shopping-cart-item/shopping-cart-item.component";
import { connect } from "react-redux";

const ShoppingPreview = ({ cartItems, Total }) => (
  // this.setState((state) => {
  //   const products = state.products.map((item, j) => {
  //     if (j === id - 1) {
  //       return item.pieces + 1;
  //     } else {
  //       return item.pieces;
  //     }
  //   });
  //   return {
  //     products,
  //   };
  // });

  //   IncerementPiece(Id, number) {
  //     this.state.products
  //       .filter((product) => product.id === id)
  //       .map((filteredProduct) => this.setState({filteredProduct.pieces: filteredProduct.pieces++}));
  //   }
  <div className="row">
    <div className="col-xs-8">
      <div className="panel panel-info">
        <div className="panel-heading">
          <div className="panel-title">
            <div className="row p-1">
              <div className="col-xs-6">
                <h5>
                  <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                  Shopping Cart
                </h5>
              </div>
              <div className="col-xs-6 a">
                <button
                  type="button"
                  className="btn btn-primary btn-sm btn-block"
                >
                  <span className="glyphicon glyphicon-share-alt"></span>{" "}
                  Continue shopping
                </button>
              </div>
            </div>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <ShoppingItem key={cartItem.Id} cartItem={cartItem}></ShoppingItem>
        ))}

        <hr />
      </div>
      <div className="panel-footer">
        <div className="row text-center">
          <div className="col-xs-9">
            <h4 className="text-right">
              Total <strong>$ {Total}</strong>
            </h4>
          </div>
          <div className="col-xs-3 b">
            <button type="button" className="btn btn-success btn-block but">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  Total: cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  ),
  cartItems: cartItems,
});
export default connect(mapStateToProps)(ShoppingPreview);
