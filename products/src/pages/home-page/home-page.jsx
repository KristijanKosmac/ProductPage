import React from "react";
import "./../../../node_modules/bootstrap/scss/bootstrap.scss";
import "./home-page.style.scss";
import ProductDirectory from "../../components/product-directory/product-directory.component";
import Header from "../../components/header/header.component";

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          title: "Tel1",
          imageUrl: "https://i.ibb.co/KxCrzQT/1.jpg",
          id: 1,
          price: 150,
          quantity: 0,
        },
        {
          title: "Tel2",
          imageUrl: "https://i.ibb.co/x29RBL9/5103-Xi7y-Qg-L-SX466.jpg",
          id: 2,
          price: 200,
          quantity: 0,
        },
        {
          title: "Tel3",
          imageUrl:
            "https://i.ibb.co/z76Jmzj/apple-iphone-11-purple-450x350.webp",
          id: 3,
          price: 350,
          quantity: 0,
        },
        {
          title: "Tel4",
          imageUrl: "https://i.ibb.co/MNQJ8Cp/images.jpg",
          id: 4,
          price: 300,
          quantity: 0,
        },
        {
          title: "Tel5",
          imageUrl:
            "https://i.ibb.co/y4gP7Zm/S10-Lite-720x752-PCD-PNG-text-off.webp",
          id: 5,
          price: 165,
          quantity: 0,
        },
        {
          title: "Tel6",
          imageUrl:
            "https://i.ibb.co/kJzKwJx/Samsung-Galaxy-S10-5-G-SD855-555x555.jpg",
          id: 6,
          price: 255,
          quantity: 0,
        },
        {
          title: "Tel7",
          imageUrl:
            "https://i.ibb.co/W5b191N/zte-axon-7-128gb-with-4gb-ram-6442.jpg",
          id: 7,
          price: 500,
          quantity: 0,
        },
        {
          title: "Tel8",
          imageUrl: "https://i.ibb.co/KxCrzQT/1.jpg",
          id: 8,
          price: 650,
          quantity: 0,
        },
      ],
    };
  }
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
