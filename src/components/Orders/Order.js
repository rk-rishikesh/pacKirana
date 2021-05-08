import React, { Component } from 'react'
import './Order.css'

class Order extends Component {
    render() {
        
        const orders = [
            {
                id: 1,
                items: [
                    {
                        id: 1,
                        name:"Chana Dal",
                        rate: "Rs 50/kg"
                    },
                    {
                        id: 2,
                        name:"Wheat",
                        rate: "Rs 34/kg"
                    },
                    {
                        id:3,
                        name:"Sugar",
                        rate: "Rs 25/kg"
                    }
                ]
            },
            {
                id: 2,
                items: [
                    {
                        id: 1,
                        name:"Udad Dal",
                        rate: "Rs 40/kg"
                    },
                    {
                        id: 2,
                        name:"Rice",
                        rate: "Rs 30/kg"
                    },
                    {
                        id:3,
                        name:"Jaggery",
                        rate: "Rs 15/kg"
                    }
                ]
            },
            {
                id: 3,
                items: [
                    {
                        id: 1,
                        name:"Chana Dal",
                        rate: "Rs 35/kg"
                    },
                    {
                        id: 2,
                        name:"Wheat",
                        rate: "Rs 35/kg"
                    },
                    {
                        id:3,
                        name:"Sabudana",
                        rate: "Rs 15/kg"
                    }
                ]
            },
            {
                id: 4,
                items: [
                    {
                        id: 1,
                        name:"Sunflower Oil",
                        rate: "Rs 50/liter"
                    },
                    {
                        id: 2,
                        name:"Groundnut Oil",
                        rate: "Rs 49/liter"
                    },
                    {
                        id:3,
                        name:"Rice",
                        rate: "Rs 35/kg"
                    }
                ]
            }
        ]

        const index = this.props.match.params.id
        const orderList = orders[index].items
        console.log(index)

        return (
            <div>
                <p style={{textAlign:"center", marginTop:"5%"}}>ORDER DESCRIPTION</p>

                <div className="TableBox">
                <table>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Rate</th>
                    </tr>
                    <tr>
                        <td>{orderList[1].name}</td>
                        <td>{orderList[1].rate}</td>
                    </tr>
                    <tr>
                        <td>{orderList[2].name}</td>
                        <td>{orderList[2].rate}</td>
                    </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Order
