import React, { Component } from 'react'
import * as Messages from '../constants/Message'
export default class CartItem extends Component {
    constructor(props) {
        super(props);
        this.setState({
            quantity:1
        });
    }
    
    deleteProduct = (product) => {
        this.props.onDeleteProduct(product);
        this.props.onChangeMessage(Messages.MSG_ADD_DELETE_PRODUCT_IN_CART_SUCCESS)
    }
    onUpdateQuantity = (product,quantity) => {
        if(quantity >0) {
            this.setState({
                quantity:quantity
            })
            this.props.onUpdateProductInCart(product,quantity);
            this.props.onChangeMessage(Messages.MSG_UPDATE_CART_SUCCESS)
        }

    }

  showSubTotal = (price,quantity) => {
    return price * quantity;
  }
    render() {
      var {item} = this.props;
      var {quantity} = item.quantity> 0?item:this.state;
        return (
            <tr>
            <th scope="row">
              <img 
              src={item.product.image} 
              alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
              <h5>
                <strong>{item.product.name}</strong>
              </h5>
            </td>
            <td>{item.product.price}$</td>
            <td className="center-on-small-only">
              <span className="qty">{quantity} </span>
              <div className="btn-group radio-group" data-toggle="buttons">
                <label 
                onClick={() => this.onUpdateQuantity(item.product,item.quantity-1)}
                className="btn btn-sm btn-primary
                                      btn-rounded waves-effect waves-light">
                  <a>—</a>
                </label>
                <label 
                 onClick={() => this.onUpdateQuantity(item.product,item.quantity+1)}
                className="btn btn-sm btn-primary
                                      btn-rounded waves-effect waves-light">
                  <a>+</a>
                </label>
              </div>
            </td>
            <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
            <td>
              <button 
                onClick={() => this.deleteProduct(item.product)}
                type="button" 
                className="btn btn-sm btn-primary waves-effect waves-light" 
                data-toggle="tooltip" data-placement="top" 
                title 
                data-original-title="Remove item">
                X
              </button>
            </td>
          </tr>
          
        )
    }
}
