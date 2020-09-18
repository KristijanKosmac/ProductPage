import React from "react";
import "./shopping-cart-item.style.scss";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import { connect } from "react-redux";
import {
  addItem,
  decreaseItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const ShoppingItem = ({ cartItem, addItem, decreaseItem, removeItem }) => {
  const { id, title, price, imageUrl, handleChange } = cartItem;
  return (
    <div className="panel-body" key={id}>
      <div className="row">
        <div className="col-xs-2">
          <img class="img-responsive" src={imageUrl}></img>
        </div>
        <div className="col-xs-4 ml-5 mr-5 pl-5 pr-5">
          <h4 className="product-name">
            <strong>{title}</strong>
          </h4>
          <h4>
            <small>Product description</small>
          </h4>
        </div>
        <div className="col-xs-6">
          <div className="col-xs-6 text-right">
            <h6>
              <strong>
                ${price}
                <span class="removeX" onClick={() => removeItem(cartItem)}>
                  {" "}
                  x
                </span>
              </strong>
            </h6>
          </div>
          <div className="col-xs-4 flex">
            <label className="remove" onClick={() => decreaseItem(cartItem)}>
              {" "}
              &#10094;{" "}
            </label>
            <span className="form-control input-sm">{cartItem.quantity}</span>
            <label className="add" onClick={() => addItem(cartItem)}>
              {" "}
              &#10095;{" "}
            </label>
          </div>
          <div className="col-xs-2">
            <button type="button" class="btn btn-link btn-xs">
              <span class="glyphicon glyphicon-trash"> </span>
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(ShoppingItem);
