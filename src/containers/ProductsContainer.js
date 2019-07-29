import React, { Component } from 'react'
import Product from '../components/Product';
import Products from '../components/Products';
import { connect } from 'react-redux';
class ProductsContainer extends Component {
    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (<Product key={index} product={product} />)
            })
        }
        return result;
    }

    render() {
        var { products } = this.props;
        return (
            <Products >{this.showProducts(products)}</Products>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps, null)(ProductsContainer);