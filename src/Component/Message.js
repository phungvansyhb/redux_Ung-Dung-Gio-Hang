import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        let num = this.props.cartProduct.length
        return (
            <div>
                <h3>
                    <span className="badge amber darken-2">{(num === 0) ? 'Mời bạn chọn hàng!' : "Mua hàng thành công!"}</span>
                </h3>
            </div>
        )
    }
}
