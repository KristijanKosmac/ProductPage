import React, { useState } from "react";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import "./add-product-page.styles.scss";
import Form from "../../components/upload-form/upload.component";
import { timestamp } from "../../firebase/config";

class addEditProduct extends React.Component {
  constructor() {
    super();

    this.state = {
      title: null,
      price: 0,
    };
  }

  handleChangePrice(event) {
    this.setState({
      price: event.target.value,
    });
  }

  handleChangeTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }
  render() {
    return (
      <form class="conteiner">
        <div class="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input
            type="text"
            class="form-control"
            placeholder="Title"
            onChange={(event) => this.handleChangeTitle(event)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Price</label>
          <input
            onChange={(event) => this.handleChangePrice(event)}
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="price"
          />
        </div>

        <div class="form-group">
          <Form title={this.state.title} price={this.state.price}></Form>
        </div>
      </form>
    );
  }
}

export default addEditProduct;
