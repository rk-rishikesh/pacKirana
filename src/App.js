import React from "react";
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

function App() {
  return (<Router>
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
                <Link to={"/admin"} className="nav-link">
                  ADMIN
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
                <Route exact path='/' component={HomePage} />
                <Route path="/products" component={HomePage} />
                
                <Route path="/myKart" component={MyKart} />
                <Route path="/admin" component={Admin} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;