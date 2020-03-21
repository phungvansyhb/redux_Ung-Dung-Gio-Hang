import React, { Component } from 'react'
import { connect } from 'react-redux'
import Products from '../Component/Product/Products'
import {addToCart} from '../Action/index'
import {bindActionCreators} from 'redux'


class ProductItemContainer extends Component {
    
  
    render() {
        return (
            <Products product={this.props.product} handleclick = { this.props.addToCart} />
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        product: state.product.product,
    }
}
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators( { addToCart:addToCart }, dispatch),
})
export default connect(mapStateToProps,mapDispatchToProps)(ProductItemContainer)