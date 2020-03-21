import React, { Component } from 'react'
import Message from '../Component/Message'
import {connect} from 'react-redux'
class MessageContainer extends Component {
    render() {
        return (
            <div>
                <Message cartProduct = {this.props.cartProduct}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cartProduct: state.cart
    }
}
 export default connect(mapStateToProps)(MessageContainer)