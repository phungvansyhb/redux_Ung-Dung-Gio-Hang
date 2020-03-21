import React, { Component } from 'react'

class ProductItem extends Component {

    renderStart = (num) => {
        const result = [];
        for (let index = 0; index < num; index++) {
            result.push(<i className="fa fa-star" key={index}></i>)
        }
        for (let index = 0; index < (5 - num); index++) {
            result.push(<i className="fa fa-star-o" key={5 - index}></i>)
        }
        return result
    }
    render() {
        var {product, handleclick }= this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.img}
                            className="img-fluid" alt={product.name} />
                        <a href="/">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="/" >{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">

                            <li>
                                {this.renderStart(product.rate)}
                            </li>

                        </ul>
                        <p className="card-text">
                            {product.descrip}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.cost}$</span>
                            <span className="right">
                                <span href="/" className="btn-floating blue-gradient" data-toggle="tooltip" 
                                data-placement="top" title="" data-original-title="Add to Cart" onClick = {() => handleclick(product, 1)}>
                                    <i className="fa fa-shopping-cart" ></i>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default ProductItem