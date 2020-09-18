import React from "react";
import "./../../../node_modules/bootstrap/scss/bootstrap.scss";
import "./product-directory.styles.scss";
import ProductItem from "./../product-item/product-item.component";

const ProductDirectory = ({ products }) => (
  <div className="row">
    {products.map((product) => (
      <ProductItem key={product.id} item={product}></ProductItem>
    ))}
  </div>
);

export default ProductDirectory;
