import React, { useState } from "react";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import "./edit-product-page.styles.scss";
import Form from "../../components/upload-form/upload.component";

class EditProduct extends React.Component {
  constructor() {
    super();

    this.state = {
      title: null,
      price: 0,
      id: null,
      imageUrl: null,
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
  componentDidMount() {
    const { handle } = this.props.match.params;
    this.setState({
      title: this.props.location.state.title.title,
      price: this.props.location.state.price.price,
      id: this.props.location.state.id.id,
      imageUrl: this.props.location.state.imageUrl.imageUrl,
    });
  }
  render() {
    return (
      <form class="conteiner">
        <div class="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input
            value={this.state.title}
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
            value={this.state.price}
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="price"
          />
        </div>

        <div class="form-group">
          <Form
            title={this.state.title}
            price={this.state.price}
            imageUrl={this.state.imageUrl}
            id={this.state.id}
          ></Form>
        </div>
      </form>
    );
  }
}

export default EditProduct;
