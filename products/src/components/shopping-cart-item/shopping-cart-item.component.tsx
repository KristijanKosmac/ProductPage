import React from "react";
import "./shopping-cart-item.style.scss";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import { connect } from "react-redux";
import {
  addItem,
  decreaseItem,
  removeItem,
} from "../../redux/cart/cart.actions";

interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  handleChange: any;
  quantity: number;
}

interface ShoppingItemInterface {
  cartItem: CartItem;
  addItem: any;
  decreaseItem: any;
  removeItem: any;
}

const ShoppingItem = ({
  cartItem,
  addItem,
  decreaseItem,
  removeItem,
}: ShoppingItemInterface) => {
  const { id, title, price, imageUrl, handleChange } = cartItem;
  return (
    <div className="panel-body" key={id}>
      <div className="row">
        <div className="col-xs-2">
          <img className="img-responsive" src={imageUrl}></img>
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
                <span className="removeX" onClick={() => removeItem(cartItem)}>
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
            <button type="button" className="btn btn-link btn-xs">
              <span className="glyphicon glyphicon-trash"> </span>
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: any) => dispatch(addItem(item)),
  decreaseItem: (item: any) => dispatch(decreaseItem(item)),
  removeItem: (item: any) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(ShoppingItem);
