import React, { Component } from 'react'

class CartRow extends Component {
    modalBox = (item) => {
        let confirm = window.confirm("Ban chac chan muon xoa san pham khoi gio hang khong ?");
        if(confirm) return this.props.handleDelete(item)
        else return -1
    }
    render() {
        let  {product, handleClick  } = this.props;
        if (product)
            return product.map((item ,index) => {
                return (
                    <tr key = {index}>
                        <th scope="row">
                            <img src={item.product.img}
                                alt="mota" className="img-fluid z-depth-0" />
                        </th>
                        <td>
                            <h5>
                                <strong>{item.product.name}</strong>
                            </h5>
                        </td>
                        <td>{item.product.cost}$</td>
                        <td className="center-on-small-only">
                            <span className="qty">{item.num}</span>
                            <div className="btn-group radio-group" data-toggle="buttons">
                                <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
                                                onClick = {() => handleClick(item ,"decrease")}>
                                    <span > — </span>
                                </label>
                                <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
                                                onClick = {() => handleClick(item , "increase")}>
                                    <span > + </span>
                                </label>
                            </div>
                        </td>
                        <td>{item.product.cost * item.num}</td>
                        <td>
                            <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                                title="" data-original-title="Remove item" onClick= {() => this.modalBox(item)}>
                                X
                            </button>
                        </td>
                    </tr>
                )
            })
    }
}

export default CartRow