import React, { Component } from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyKart from "./components/MyKart/MyKart";
import HomePage from "./components/HomePage/HomePage";
import Admin from "./components/Admin/Admin";
import Shopkeeper from "./components/HomePage/Shopkeeper";
import MyOrders from "./components/Shop/MyOrders";


class App extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      shopkeeper : false,
      customer : false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    
  }

  handleClick() {
    this.setState(state => ({
      shopkeeper: true
    }));
  }

  handleClick1() {
    this.setState(state => ({
      customer: true
    }));
  }

  render(){
    if(!this.state.shopkeeper && !this.state.customer){
      return(
        <div className="not-found">
            <form>
                <h1 style={{marginLeft:"20%",marginTop:"3%"}}>Sign In</h1>

                <div className="form-group" style={{width:"50%",marginLeft:"20%",marginTop:"3%"}}>
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group sizepagepass" style={{width:"50%",marginLeft:"20%"}}>
                    <label className="nameinp">Password</label>
                    <input type="password" className="form-control inp" placeholder="Enter password" />
                </div>
                <Button onClick={this.handleClick}  size="sm"  style={{marginLeft:"35%"}}>Login as Shopkeeper</Button>
                <Button onClick={this.handleClick1}  size="sm"  style={{marginLeft:"3%"}}>Login as Customer</Button>
                
            </form>
            </div>
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
                        <Route exact path='/' component={Shopkeeper} />  
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
                          WISHLIST
                        </Link>
                      </Nav>
                      <Nav>
                        <Link to={"/myorders"} className="nav-link">
                          MY ORDERS
                        </Link>
                      </Nav>
                      <Nav style={{ fontFamily: "monospace",color:"white",paddingTop:"2.8%"}}>
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
                        <Route path="/myorders" component={MyOrders} />
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