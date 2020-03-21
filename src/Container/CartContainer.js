import React, { Component } from 'react'
import Cart from '../Component/Cart/Cart'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editNumberProduct, removeProduct } from '../Action/index'
class CartContainer extends Component {
    render() {
        let {editNumberProduct , removeProduct} = this.props;
        return (
            <Cart product={this.props.product} handleClick={editNumberProduct} handleDelete = {removeProduct}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        product: state.cart
    }
}
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ editNumberProduct: editNumberProduct, removeProduct: removeProduct }, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)