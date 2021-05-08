import React, { Component } from 'react'
import './Admin.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Order from '../Orders/Order';

class Admin extends Component {
    render() {
        return (
            <Router>
            <div>
                <h1 style={{textAlign:"center", marginTop:"2%", marginBottom:"5%"}}>REMAINING ORDERS</h1>
                <div className="TableBox">
                    <table >
                        <tr >
                            <th>Order Id</th>
                            <th>Customer Name</th>
                            <th>View Order</th>
                        </tr>
                        <tr >
                            <td>1</td>
                            <td>Rishikesh Kale</td>
                            <Link to={'/order/'+ 1}><button className = "button">View Order</button></Link>
                        </tr>
                        <tr >
                            <td>2</td>
                            <td>Shreyas Kale</td>
                            <Link to={'/order/'+ 2}><button className = "button">View Order</button></Link>
                        </tr>
                        </table>
                </div>
                <div>
                    <Switch>
                        <Route path="/order/:id"  component={Order}/>
                    </Switch>                    
                </div>
                </div>
                </Router>
        )
    }
}

export default Admin
