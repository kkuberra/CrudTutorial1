import React, { Component } from "react";

class ProductForm extends Component {
  state = { 
    product: {}
  };

  valueChanged = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      product: {
        ...prevState.product,
        [name]: value
      }
    }))
  };

  formSubmited = (event) => {
    event.preventDefault();
    console.log(this.state.product)
  }

  render() {
    return (
      <form onSubmit={this.formSubmited}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input onChange={this.valueChanged} type="text" className="form-control" name="title" id="title" placeholder="Enter a title" required />
        </div>
        <div className="form-group">
          <label for="description">Description</label>
          <textarea onChange={this.valueChanged} className="form-control" name="description" id="description" placeholder="Enter a Description" rows="3" required />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input onChange={this.valueChanged} type="text" className="form-control" name="price" id="price" placeholder="Enter a price" required />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input onChange={this.valueChanged} type="number" step="1" min="0" className="form-control" name="quantity" id="quantity" placeholder="Enter a quantity" required />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input onChange={this.valueChanged} type="url" className="form-control" name="image" id="image" placeholder="http://example.com/image.jpg" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default ProductForm;