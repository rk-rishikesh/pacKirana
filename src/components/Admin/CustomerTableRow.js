import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class CustomerTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct() {
        axios.delete('http://localhost:4000/orders/deleteOrder/' + this.props.obj._id)
            .then((res) => {
                console.log('Product successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.shopName}</td>
                <td>{this.props.obj.productName}</td>
                <td>{this.props.obj.cost}</td>
                <td>
                    {/* <Link className="edit-link" to={"/editOrder/" + this.props.obj._id}>
                        Edit
                    </Link> */}
                    <Button onClick={this.deleteProduct} size="sm" variant="danger" style={{marginLeft:"25%"}}>Delete</Button>
                </td>
            </tr>
        );
    }
}

export default CustomerTableRow