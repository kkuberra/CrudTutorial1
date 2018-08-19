import React, { Component } from "react"

import Product from '../components/Product';
import { getProduct } from '../API'

class ViewProduct extends Component {
    state = {
        isloading: true,
        product: {}
    }

    componentDidMount() {
        const { id } = this.props.match.params 
        getProduct(id)
        .then(product => {
            setTimeout(() => {
                this.setState({
                product,
                isLoading: false
            })
            }, 1000) 
        })
    }

    render() {
        return this.state.isLoading ? <h3>
            Loading product...
          </h3> : <Product product={this.state.product} cols="col-12" showStock={true} showEdit={true}/>;
    }
}

export default ViewProduct;