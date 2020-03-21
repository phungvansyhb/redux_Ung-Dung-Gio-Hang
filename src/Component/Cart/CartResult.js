import React, { Component } from 'react'

export default class CartResult extends Component {
    render() {
        let {product } = this.props;
        var totalcost = 0;
        if(product.length > 0) {
            product.map(  (item) => { return totalcost += item.product.cost*item.num})
        }
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        {
                          
                        }
                        <strong>{totalcost}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                    <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        )
    }
}
