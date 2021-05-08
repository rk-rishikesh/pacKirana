import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export class Shopkeeper extends Component {
    render() {
        return (
            <div>
                <form>
                <h3 className="nam">ADD PRODUCTS TO SHOP</h3>

                <div className="form-group">
                    <label>Name of Product</label>
                    <input type="text" className="form-control" placeholder="Name" />
                </div>

                <div className="form-group">
                    <label>Rate of product</label>
                    <input type="number" className="form-control" placeholder="in Rs." />
                </div>


                <Button className="btn btn-dark btn-lg btn-block">ADD</Button>
            </form>
            </div>
        )
    }
}

export default Shopkeeper
