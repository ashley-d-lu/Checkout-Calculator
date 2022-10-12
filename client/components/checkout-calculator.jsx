import { menu, provinces } from "../mock-data";
import React from 'react';

export default function CheckoutCalculator() {
//import mock date for menu items
  const items = menu

  //currentCart will store the state of the cart
  const [cartState, updateCart] = React.useState(
    {items:[],
    discountPercentage:0,
    provinceName: "Ontario",
    totalPrice: 0}
    )

  //checkoutCart will store the state of the receipt
  const [checkoutState, checkout] = React.useState({
    subtotal:0,
    savings:0,
    tax:0,
    total:0
    })

  //helper function add a specific item to the cart
  const addItemToCart=(newCart,item)=>{
    let inCart = false
    newCart.items?.forEach(i=>{
        if(i.name==item.name){
            i.quantity+=item.quantity
            inCart=true
            newCart.totalPrice+=item.price*item.quantity
        }
    })
    if(!inCart){
        newCart.items.push({name:item.name, price: item.price, quantity: item.quantity})
        newCart.totalPrice+=item.price*item.quantity
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
    document.getElementById("provinceSelect").value="Ontario (13% tax)"
    Array.from(document.getElementsByClassName("discount")).forEach(
        quantity => (quantity.value = 0)
      )
    updateCart({items:[], discountPercentage:0, provinceName: "Ontario", totalPrice: 0})
  }

  //helper function to find tax percentage given province
  const getTaxPercentage=()=>{
    const matchingProvince = provinces.find(p => p.name == document.getElementById("provinceSelect").value.split(" ")[0])
    return matchingProvince ? matchingProvince.tax / 100 : 0
  }

  //checkout cart and obtain receipt
  const onCheckout=()=>{
    checkout({
        subtotal:cartState.totalPrice,
        savings:(cartState.discountPercentage/100)*cartState.totalPrice,
        tax:getTaxPercentage()*cartState.totalPrice,
        total: cartState.totalPrice-((cartState.discountPercentage/100)*cartState.totalPrice)+(getTaxPercentage()*cartState.totalPrice)
        })
  }
  
  //reset receipt
  const onClearReceipt=()=>{
    checkout({
        subtotal:0,
        savings:0,
        tax:0,
        total:0
        })
  }

  //obtain province list for dropdown
  const ProvinceList=(
    provinces.map((p, index)=>{
        return <option key={index}>{p.name} ({p.tax}% tax)</option>
    })
  )

  //html for menu items
  const MenuItems = (
    items.map((item, index) => {
        return <tr key={index}>
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
    })
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
        cartState.items?.map((item, index) => {
            return <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                </tr>
            }
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
                className="discount"
                type="number"
                defaultValue="0"
                style={{width:5+'em'}}
                max="100"
                min="0"
                onChange={(event) => {cartState.discountPercentage = parseInt(event.target.value)}
                }>
                </input>
            </div>
            <div>
                <h4>Province</h4>
                <select
                id="provinceSelect"
                >
                    {ProvinceList}
                </select>
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
                        <td>Tax: {checkoutState.tax}</td>
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