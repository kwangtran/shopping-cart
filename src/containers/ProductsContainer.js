import React, { Component } from 'react'
import Product from '../components/Product';
import Products from '../components/Products';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import * as actions from '../constants/ActionsTypes'
import { actAddToCart } from '../actions/index'
class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products >{this.showProducts(products)}</Products>
        )
    }
    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (<Product key={index} product={product} />)
            })
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            image: PropTypes.string,
            description: PropTypes.string,
            price: PropTypes.number,
            inventory: PropTypes.number,
            rating: PropTypes.number,
        })
    ).isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddToCart: (product, quantity) => {
            dispatch(actAddToCart(product, 1))
        }
    }
}
export default connect(mapStateToProps, null)(ProductsContainer);