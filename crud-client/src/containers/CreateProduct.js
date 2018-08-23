import React, { Component } from "react";
import ProductForm from './ProductForm';

class CreateProduct extends Component {
  state = {
    product: {
      title: "",
      description: "",
      price: "",
      quantity: 0,
      image: ""
    },
    creating: false
  };

  createProduct = (product) => {
    console.log('')
  }

  render() {
    return (
    <div>
      <h1>Create Product</h1>
      <ProductForm onFormSubmitted={this.createProduct} product={this.state.product} />
    </div>
    )
  }
}

export default CreateProduct;
