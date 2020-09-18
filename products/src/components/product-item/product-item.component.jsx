import React from "react";
import "./../../../node_modules/bootstrap/scss/bootstrap.scss";
import "./../../../node_modules/bootstrap/scss/bootstrap-grid.scss";
import "./product-item.styles.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const ProductItem = ({ item, addItem }) => {
  const { title, price, imageUrl } = item;
  return (
    <div className="col-md-3 col-sm-6">
      <div className="product-grid6">
        <div className="product-image6">
          <a>
            <img className="pic-1 Img" src={imageUrl}></img>
          </a>
        </div>
        <div className="product-content">
          <h3 className="title">
            <a>{title}</a>
          </h3>
          <div className="price">${price}</div>
        </div>
        <ul className="social">
          <li>
            <button className="btn btn-primary" onClick={() => addItem(item)}>
              <i>Add</i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchtoProps)(ProductItem);
