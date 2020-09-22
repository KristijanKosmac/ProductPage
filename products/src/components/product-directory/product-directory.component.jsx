import React from "react";
import "./../../../node_modules/bootstrap/scss/bootstrap.scss";
import "./product-directory.styles.scss";
import ProductItem from "./../product-item/product-item.component";
import useFirestore from "../../hooks/useFirestore";

const ProductDirectory = () => {
  const { docs } = useFirestore("products");
  console.log(docs);

  return (
    <div className="row">
      {docs &&
        docs.map((doc) => (
          <ProductItem
            key={doc.id}
            item={{
              id: doc.id,
              title: doc.title,
              price: doc.price,
              imageUrl: doc.url,
              quantity: doc.quantity,
            }}
          ></ProductItem>
        ))}
    </div>
  );
};

export default ProductDirectory;

// {products.map((product) => (
//   <ProductItem key={product.id} item={product}></ProductItem>
// ))}
