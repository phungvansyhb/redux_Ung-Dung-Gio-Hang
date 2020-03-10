import React, { Component } from 'react'
import { connect } from 'react-redux'
import Products from '../Component/Product/Products'




class ProductItemContainer extends Component {
    render() {
        return (
            <Products product={this.props.product} />
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        product: state.product.product,
    }
}

export default connect(mapStateToProps)(ProductItemContainer)