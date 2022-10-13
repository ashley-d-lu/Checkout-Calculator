import { menu } from "../mock-data";
import React from 'react';
import { throws } from "assert";

export default function CheckoutCalculator() {
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 5000;
const api = dev ? 'http://localhost:' + port + "/api" : 'https://csc301-a2-pair-36.herokuapp.com';
  
  //import mock date for menu items
  const items = menu
  //provinces will store the province items
  const [provinces, setProvinces] = React.useState([])
  //currentCart will store the state of the cart
  const [cartState, updateCart] = React.useState({})
  //checkoutCart will store the state of the receipt
  const [checkoutState, checkout] = React.useState({
    subtotal:0,
    savings:0,
    taxDollarAmt:0,
    total:0
    })

  React.useEffect(() => {
    async function fetchData() {
    const provRes = await fetch(api+"/province/taxes").then((response) => 
        response.status==200 ? response.json() : Promise.reject(response)
    ).catch((error) => {
        console.log(error)
        throws (new Error("Error fetching provinces"))
    })
    setProvinces(provRes);
    const cartRes = await fetch(api+"/cart").then((response) => 
        response.status==200 ? response.json() : Promise.reject(response)
    ).catch((error) => {
        console.log(error)
        throws (new Error("Error fetching cart"))
    })
    updateCart(cartRes);
    }
    fetchData();
  },[])


  //helper function add a specific item to the cart
  const addItemToCart=(newCart,item)=>{
    let inCart = false
    newCart.items?.forEach(i=>{
        if(i.name==item.name){
            i.quantity+=item.quantity
            inCart=true
        }
    })
    if(!inCart){
        newCart.items.push({name:item.name, price: item.price, quantity: item.quantity})
    }
  }

  //add items from menu to cart, clear menu quantities and update cart
  const onMenuAdd=()=>{
    let newCart = {...cartState}
    items.filter(item=>item.quantity>0)?.forEach(item=>{
        addItemToCart(newCart, item)
        item.quantity=0
    })
    updateCart(newCart)
    Array.from(document.getElementsByClassName("quantity")).forEach(
        quantity => (quantity.value = 0)
      )
  }
  
  //reset cart values
  const onClearCart=()=>{
    Array.from(document.getElementsByClassName("discount")).forEach(
        quantity => (quantity.value = 0)
      )
    updateCart({items:[], discountPercentage:0, provinceName: "Ontario", _id: cartState._id, receipt:{
        subtotal:0,
        savings:0,
        taxDollarAmt:0,
        total:0,
        _id:cartState.receipt._id
        }})
  }

  //checkout cart and obtain receipt
  async function onCheckout(){
    cartState.provinceName = document.getElementById("provinceSelect").value
    cartState.discountPercentage = parseInt(document.getElementById("discount").value)
  }

  async function saveCart(){
    cartState.provinceName = document.getElementById("provinceSelect").value
    await fetch(api+"/cart",{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartState)
    }).catch((error) => {
        throws (new Error("Error saving cart"))
    })
  }
  
  //reset receipt
  async function onClearReceipt(){
    checkout({
        _id:cartState.receipt._id,
        subtotal:0,
        savings:0,
        taxDollarAmt:0,
        total:0
        })
  }

  //obtain province list for dropdown
  const ProvinceList=(
    <div>
        <h4>Province</h4>
            <select
            id="provinceSelect"
            >
                {
                provinces.map((p, index)=>
                p.name == cartState.provinceName ?
                <option key={index} value={p.name} selected>{p.name}, {p.tax}% tax</option>
                : <option key={index} value={p.name}>{p.name}, {p.tax}% tax</option>)
                }
            </select>
    </div>
  )

  //html for menu items
  const MenuItems = (
    items.map((item, index) => 
            <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
                <input 
                className="quantity"
                type="number"
                defaultValue="0"
                style={{width:5+'em'}}
                min="0"
                onChange={(event) => {item.quantity = parseInt(event.target.value)}
                }>
                </input>
            </td>
        </tr>
    )
  )
    //html for menu table
    const Menu = (
        <div>
        <h2>Menu</h2>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                    {MenuItems}
                <tr>
                    <td></td>
                    <td></td>
                    <td>        
                        <button onClick={onMenuAdd}>
                            Add Items
                        </button>
                    </td>
                </tr>
            </tbody>
      </table>
      </div>
    )

    //html for cart item summary
    const CartItems = (
        cartState.items?.map((item, index) => 
                <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                </tr>
        )
    )

    //html for cart portion
    const Cart = (
        <div className="block">
        <h2>Cart</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                    </tr>
                    {CartItems}
                <tr>
                    <td>
                        <button onClick={onClearCart}>
                            Clear Cart
                        </button>
                    </td>
                    <td>                        
                        <button onClick={onCheckout}>
                            Checkout
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div>
                <h4>Discount Percentage</h4>
                <input
                id="discount"
                className="discount"
                type="number"
                defaultValue={cartState.discountPercentage}
                style={{width:5+'em'}}
                max="100"
                min="0"
                onChange={(event) => {cartState.discountPercentage = parseInt(event.target.value)}
                }>
                </input>
            </div>
            {ProvinceList}
            <div>
                <button onClick={saveCart}>
                    Save Cart
                </button>
            </div>
        </div>
    )
    
    //html for receipt
    function Receipt() {
        return checkoutState.total>0 ? (
        <div className="block">
            <h2>Receipt</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Subtotal: {checkoutState.subtotal}</td>
                    </tr>
                    <tr>
                        <td>Savings: {checkoutState.savings}</td>
                    </tr>
                    <tr>
                        <td>Tax: {checkoutState.taxDollarAmt}</td>
                    </tr>
                    <tr>
                        <td>Total: {checkoutState.total}</td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={onClearReceipt}>
                            Clear Receipt
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    ):null
}

 //main 
  return <div className="checkout-calculator" style={{display:"flex"}}> 
        {Menu}
        {Cart}
        {Receipt()}
    </div>
}