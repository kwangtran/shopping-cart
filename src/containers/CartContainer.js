import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        console.log(cart)
        return (
            <div></div>
        )
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                image: PropTypes.string,
                description: PropTypes.string,
                price: PropTypes.number,
                inventory: PropTypes.number,
                rating: PropTypes.number
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps, null)(CartContainer);