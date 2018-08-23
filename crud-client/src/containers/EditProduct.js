import React, { Component } from "react";
import { getProduct } from "../API";
import ProductForm from './ProductForm';
// import Product from './Product';

class EditProduct extends Component {
    state = {
        isLoading: true,
        product: {},
        isEditing: true
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        getProduct(id)
        .then(product => {
            setTimeout(() => {
                this.setState({
                product,
                isLoading: false
            })
            }, 2000);
        }) 
    }
    
    render() {
    return this.state.isLoading ?
        <h2>Loading...</h2> :
        <ProductForm product={this.state.product} />
    }
}

export default EditProduct;