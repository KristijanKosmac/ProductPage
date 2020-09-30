import React from "react";
import "./../../../node_modules/bootstrap/scss/bootstrap.scss";
import "./home-page.style.scss";
import ProductDirectory from "../../components/product-directory/product-directory.component";
import Header from "../../components/header/header.component";

class HomePage extends React.Component {
  /*<div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="product-grid6">
                <div class="product-image6">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo10/images/img-1.jpg">
                    </a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Men's Shirt</a></h3>
                    <div class="price">$11.00
                        <span>$14.00</span>
                    </div>
                </div>
                <ul class="social">
                    <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                    <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                    <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
        </div>*/
  render() {
    return (
      <div className="container">
        <ProductDirectory></ProductDirectory>
      </div>
    );
  }
}

export default HomePage;
