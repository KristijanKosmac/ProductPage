import React from "react";
import { useEffect } from "react";
import "./../../../node_modules/bootstrap/scss/bootstrap.scss";
import "./../../../node_modules/bootstrap/scss/bootstrap-grid.scss";
import "./product-item.styles.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { Link } from "react-router-dom";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../../firebase/config";

const ProductItem = ({ item, addItem }) => {
  const { title, price, imageUrl, id } = item;

  const Delete = () => {
    console.log("tuka");

    const collectionRef = projectFirestore.collection("products");

    collectionRef.onSnapshot((snap) => {
      snap.forEach((doc) => {
        if (doc.id === id) {
          collectionRef.doc(id).delete();
        }
      });
    });
  };

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
            <button
              className="btn btn-primary btn-lg"
              onClick={() => addItem(item)}
            >
              <i>Add</i>
            </button>
          </li>
          <li>
            <button class="btn btn-sm">
              <Link
                to={{
                  pathname: "/edit",
                  state: {
                    title: { title },
                    id: { id },
                    price: { price },
                    imageUrl: { imageUrl },
                  },
                }}
              >
                <i>Edit</i>
              </Link>
            </button>
          </li>
          <li>
            <button className="btn btn-danger btn-sm" onClick={Delete}>
              <i>Delete</i>
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
