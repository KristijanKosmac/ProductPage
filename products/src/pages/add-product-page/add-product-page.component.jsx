import React from "react";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import "./add-product-page.styles.scss";
import Form from "../../components/upload-form/upload.component";

const addEditProduct = () => {
  return (
    <form class="conteiner">
      <div class="form-group">
        <label for="exampleInputEmail1">Title</label>
        <input type="text" class="form-control" placeholder="Title" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Price</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="price"
        />
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Quantity</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="quantity"
        />
      </div>
      <div class="form-group">
        <Form></Form>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default addEditProduct;
// // title: "Tel2",
// imageUrl: "https://i.ibb.co/x29RBL9/5103-Xi7y-Qg-L-SX466.jpg",
// id: 2,
// linkUrl: "shop/jackets",
// price: 200,
// quantity: 0,
