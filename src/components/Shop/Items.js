import React, { Component } from 'react'
import './Shop.css';
import ProductIcon from './bag.jpg';
import axios from 'axios';

class items extends Component {
    
    constructor(props) {
        super(props);
        // Setting up state
        this.state = {
            shopName: '',
            productName: '',
            cost: ''
        }        
        this.addProduct = this.addProduct.bind(this);
    }

    addProduct = (shopName, productName, cost) => {
        
        const productObject = {
            shopName: shopName,
            productName: productName,
            cost: cost
        };
        
        axios.post('http://localhost:4000/product/addProduct', productObject)
          .then(res => console.log(res.data));
        
        console.log(productObject)
        this.setState({
            shopName: '',
            productName: '',
            cost: ''
        });
        console.log(productObject)
    }

    render() {

        return (
            <div className="card">
                    <img src={ProductIcon} alt="Product Icon" style={{width:"200px", }}/>
                    <h4>{this.props.itemName}</h4>
                    <p className="price">{this.props.itemRate}</p>
                    <p><button onClick={()=> this.addProduct(this.props.shopName,this.props.itemName, this.props.itemRate)}>Add to Cart</button></p>
            </div>
        )
    }
}

export default items
