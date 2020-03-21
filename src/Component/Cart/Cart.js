import React, { Component } from 'react'
import CartRow from './CartRow'
import CartResult from './CartResult'

 class Cart extends Component {
     
    render() {
        let {product , handleClick , handleDelete} = this.props;
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
                                <CartRow product = {product} handleClick = {handleClick} handleDelete = {handleDelete}/>
                                <CartResult product = {product}/>
                               
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         dispatch1: () => {
//             dispatch(actionCreator)
//         }
//     }
// }
export default Cart