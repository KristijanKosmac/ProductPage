import React, { useState } from "react";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import "./add-product-page.styles.scss";
import Form from "../../components/upload-form/upload.component";
import { timestamp } from "../../firebase/config";

interface IProps {
  history: any;
}

interface IState {
  title: string;
  price: number;
  id: any;
}

class addEditProduct extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      title: "",
      price: 0,
      id: null,
    };
  }

  handleChangePrice(event: any) {
    this.setState({
      price: event.target.value,
    });
  }

  handleChangeTitle(event: any) {
    this.setState({
      title: event.target.value,
    });
  }
  render() {
    return (
      <form className="conteiner">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            onChange={(event) => this.handleChangeTitle(event)}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            onChange={(event) => this.handleChangePrice(event)}
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="price"
          />
        </div>

        <div className="form-group">
          <Form
            title={this.state.title}
            price={this.state.price}
            id={this.state.id}
            history={this.props.history}
          ></Form>
        </div>
      </form>
    );
  }
}

export default addEditProduct;
