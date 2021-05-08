import React, { Component } from 'react';
import './MyKart.css';
import axios from 'axios';
import ProductTableRow from './ProductTableRow';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class MyKart extends Component {
  
    constructor(props) {
        super(props);
        // Setting up state
        this.state = {
            products:[],
            customerName: '',
            orderId: '',
            state: '',
        }       
        this.addOrder = this.addOrder.bind(this);
    }

    addOrder = (orderId, customerName) => {
        
        const orderObject = {
          customerName: customerName,
          orderId: "productName",
          state: false
        };
        
        axios.post('http://localhost:4000/orders/addOrder', orderObject)
          .then(res => console.log(res.data));
        
        console.log(orderObject)
        this.setState({
          customerName: '',
          orderId: '',
          state: ''
        });
        console.log(orderObject)
    }
    
    componentDidMount() {
        axios.get('http://localhost:4000/product/')
          .then(res => {
            this.setState({
                products: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
      DataTable() {
        return this.state.products.map((res, i) => {
          return <ProductTableRow obj={res} key={i} />;
        });
      }

    
    render() {

        return (
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Shop Name</th>
                        <th>Product Name</th>
                        <th>Cost</th>
                        <th>Update Section</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
                <Button onClick={this.placeOrder} size="sm" variant="danger" style={{marginLeft:"40%"}}>PLACE ORDER</Button>
            </div>
        )
    }
}

export default MyKart