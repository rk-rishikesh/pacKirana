import React, { Component } from 'react'
import Items from './Items';
import './Shop.css';


class Shop extends Component {

    render() {
        const shopDetails = [
            {
                id: 1,
                name: "Balaji Kirana Bhandar",
                address: "Nandanvan, Nagpur",
                items: [
                    {
                        id: 1,
                        name:"Rice",
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
                name: "Raju Kirana",
                address: "Nandanvan, Nagpur",
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
                name: "Rashan Bhandar",
                address: "Dharampeth, Nagpur",
                items: [
                    {
                        id: 1,
                        name:"Bread",
                        rate: "Rs 35"
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
                name: "Daily Needs",
                address: "Laxmi Nagar, Nagpur",
                items: [
                    {
                        id: 1,
                        name:"Hair Oil",
                        rate: "Rs 85/liter"
                    },
                    {
                        id: 2,
                        name:"Maggie",
                        rate: "Rs 25"
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
        const itemsList = shopDetails[index].items


        const shopwiseItemList = itemsList.map((item, i) => {
            return <Items shopName= {shopDetails[index].name} itemName= {itemsList[i].name} itemRate={itemsList[i].rate} listt={itemsList}></Items>
        })

        return (
                <div>
                    <div className="ShopBar">
                        <h2><b>{shopDetails[index].name}</b></h2>
                        <p>{shopDetails[index].address}</p>
                    </div>
                    <div>
                        {shopwiseItemList}
                    </div>
                    
                </div>
        )
    }
}

export default Shop
