import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



export class MyOrders extends Component {
    
    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Order Status</th>
                    </tr>
                    </thead>
                    <tbody>
              <tr>
                <td>1</td>
                <td>Pending</td>
                
              </tr>
          </tbody>
                </Table>
                
            </div>
        )
    }
}

export default MyOrders
