import React, { Component } from 'react'
import CartRow from './CartRow'
import CartResult from './CartResult'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <section className="section">
                    <div className="table-responsive">
                        <table className="table product-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng Cộng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <CartRow/>
                                <CartResult/>
                               
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        )
    }
}
