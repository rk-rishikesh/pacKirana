import React, { Component } from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyKart from "./components/MyKart/MyKart";
import HomePage from "./components/HomePage/HomePage";
import Admin from "./components/Admin/Admin";

// 1. Login

// 2. Customer
// Name thik kr dena
// Rename My Kart to wishlist
// New components : My Orders - Order ID Order status
// 3. Shopkeeper
// Add products Form at roiute "/"
// Add Packed Order button yeh button dabi toh customer ke isme status change honga
// In order .js
// Add buuton below table ok
// Add Packed Order button yeh button dabi toh orders packed list me jayeg

class App extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      shopkeeper : true,
      customer : false,
    }
  }
  render(){
    if(!this.state.shopkeeper && !this.state.customer){
      return(
        <h1>Login</h1>
      )
    }
    else{
      if(this.state.shopkeeper){
        return(
          <Router>
            <div className="App">
              <header className="App-header">
                <Navbar bg="dark" variant="dark">
                  <Container>
                    <Navbar.Brand>
                        PACKIRANA
                    </Navbar.Brand>
        
                    <Nav className="justify-content-end">
                      <Nav>
                        <Link to={"/admin"} className="nav-link">
                          BALAJI KIRANA STORE
                        </Link>
                      </Nav>
                    </Nav>
                  </Container>
                </Navbar>
              </header>
        
              <Container>
                <Row>
                  <Col md={12}>
                    <div className="wrapper">
                      <Switch>
                        <Route path="/admin" component={Admin} />
                      </Switch>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Router>
        )
      }
      else{
        return (
          <Router>
            <div className="App">
              <header className="App-header">
                <Navbar bg="dark" variant="dark">
                  <Container>
                    <Navbar.Brand>
                      <Link to={"/products"} className="nav-link">
                        PACKIRANA
                      </Link>
                    </Navbar.Brand>
        
                    <Nav className="justify-content-end">
                      <Nav>
                        <Link to={"/myKart"} className="nav-link">
                          MY KART
                        </Link>
                      </Nav>
                      <Nav>
                          RISHIKESH KALE
                      </Nav>
                    </Nav>
                  </Container>
                </Navbar>
              </header>
        
              <Container>
                <Row>
                  <Col md={12}>
                    <div className="wrapper">
                      <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path="/products" component={HomePage} />
                        
                        <Route path="/myKart" component={MyKart} />
                      </Switch>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Router>);
      }
    }
    
  }
  
}

export default App;