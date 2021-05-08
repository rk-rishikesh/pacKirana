import React, { Component } from 'react'
import './Admin.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Order from '../Orders/Order';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


const green = '#39D1B4';
class Admin extends Component {
    constructor(props){
        super(props)
        this.state = {
          buttcolor : green,
        }
        this.handleClick = this.handleClick.bind(this);
        
      }
    
      handleClick() {
        this.setState(state => ({
          buttcolor : green
        }));
      }

    

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
                            <th>Packed Order</th>
                        </tr>
                        <tr >
                            <td>1</td>
                            <td>Rishikesh Kale</td>
                            <td><Link to={'/order/'+ 1}><button className = "button">View Order</button></Link></td>
                            <td><Button size="sm" onClick={this.handleClick} style={{marginLeft:"25%"}}>Packed</Button></td>
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
