import React, { useState } from "react";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import "./edit-product-page.styles.scss";
import Form from "../../components/upload-form/upload.component";

interface IProps {
  match: any;
  location: any;
  history: any;
}

interface IState {
  title: string;
  price: number;
  id: any;
  imageUrl: any;
}

class EditProduct extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      title: "",
      price: 0,
      id: null,
      imageUrl: null,
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
      <form className="conteiner">
        <div className="form-group">
          <label>Title</label>
          <input
            value={this.state.title}
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
            value={this.state.price}
            type="text"
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

export default EditProduct;
