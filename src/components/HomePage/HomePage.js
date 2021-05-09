import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Shop from '../Shop/Shop';
import ShopIcon from './shop.jpg';
import './ShopName.css';
import axios from 'axios';

class HomePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             shop1:[],
             shop2:[],
             shop3:[],
             shop4:[],
        }
    }

    componentDidMount(){

        axios.get(' http://localhost:3000/shops/1')
        .then((response) => {
            console.log(response);
            this.setState({
                shop1: response.data
            })
            
        }).catch((error) => {
            console.log(error)
        });

        axios.get(' http://localhost:3000/shops/2')
        .then((response) => {
            console.log(response);
            this.setState({
                shop2: response.data
            })
            
        }).catch((error) => {
            console.log(error)
        });

        axios.get(' http://localhost:3000/shops/3')
        .then((response) => {
            console.log(response);
            this.setState({
                shop3: response.data
            })
            
        }).catch((error) => {
            console.log(error)
        });

        axios.get(' http://localhost:3000/shops/4')
        .then((response) => {
            console.log(response);
            this.setState({
                shop4: response.data
            })
            
        }).catch((error) => {
            console.log(error)
        });
    }

    render() {

        return (
            <Router>
            <div>
                <p className = "title">S H O P S</p>

                {/* Shop 1 */}
                <div className = "box">
                <Link to={'/shop/'+ 0}><img src={ShopIcon}/></Link>                  
                    <div className="container">
                        <h4><b>Balaji Kirana Bhandar</b></h4>
                        <p>Nandanvan, Nagpur</p>
                    </div>            
                </div>
                {/* Shop 2 */}
                <div className = "box">
                <Link to={'/shop/'+ 1}><img src={ShopIcon}/></Link>                                      
                    <div className="container">
                        <h4><b>Raju Kirana</b></h4>
                        <p>Nandanvan, Nagpur</p>
                    </div>            
                </div>
                {/* Shop 3 */}
                <div className = "box">
                <Link to={'/shop/'+ 2}><img src={ShopIcon}/></Link>                   
                    <div className="container">
                        <h4><b>Rashan Bhandar</b></h4>
                        <p>Dharampeth, Nagpur</p>
                    </div>            
                </div>
                {/* Shop  */}
                <div className = "box">
                <Link to={'/shop/'+ 3}><img src={ShopIcon}/></Link>                  
                    <div className="container">
                        <h4><b>Daily Needs</b></h4>
                        <p>Laxmi Nagar, Nagpur</p>
                    </div>            
                </div>
                <Switch>
                    <Route path="/shop/:id"  component={Shop}/>
                </Switch>
            </div>
            </Router>
        )
    }
}

export default HomePage
