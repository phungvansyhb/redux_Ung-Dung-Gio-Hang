import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class Products extends Component {
    showListProduct = () => {
        if (this.props.product.length > 0 )
        return this.props.product.map( (item , key) => {
            return ( <ProductItem product = {item} key = {key} handleclick = {this.props.handleclick}/>)
        })
    }
    render() {
        return (
            <div>
                <section className="section">
                    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                    <div className="row">
                        {this.showListProduct()}
                    </div>
                </section>
            </div>
        )
    }
}
