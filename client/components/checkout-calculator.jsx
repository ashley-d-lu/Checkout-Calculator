import { menu } from "../menu";
import React from 'react';
import { throws } from "assert";

export default function CheckoutCalculator() {

  // Obtain API URL
  const dev = process.env.NODE_ENV !== 'production';
  const port = process.env.PORT || 5000;
  const api = dev ? 'http://localhost:' + port + "/api" : 'https://csc301-a2-pair-36.herokuapp.com/api';
  
  // Import Menu Items
  const items = menu
  // Provinces will store the Province objects
  const [provinces, setProvinces] = React.useState([])
  // cartState will store the state of the cart
  const [cartState, updateCart] = React.useState({})
  // checkoutState will store the state of the receipt, empty on initialization
  const [checkoutState, checkout] = React.useState({
    subtotal:0,
    savings:0,
    taxDollarAmt:0,
    total:0
    })

  React.useEffect(() => {

    /**
     * Retrieves backend data from the api upon app start
     */
    async function fetchData() {

        // Fetch the provinces from the backend
        const provRes = await fetch(api+"/province/taxes")
        .then((response) => 
            response.status==200 ? response.json() : Promise.reject(response)
        )
        .catch((error) => {
            console.log(error)
            throws (new Error("Error fetching provinces"))
        })
        // Set the provinces state
        setProvinces(provRes);

        // Fetch the cart from the backend
        const cartRes = await fetch(api+"/cart")
        .then((response) => 
            response.status==200 ? response.json() : Promise.reject(response)
        )
        .catch((error) => {
            console.log(error)
            throws (new Error("Error fetching cart"))
        })
        // Set the cart state
        updateCart(cartRes);
        }

    fetchData();
    },[])


/***************************** Actions ******************************/

  /**
   * Given a cart and item object, returns the new cart with the item quantity added
   */
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

  /**
   * update cart to reflect menu item quantity change and reset menu item quantities
   */
  const onMenuAdd=()=>{
    let newCart = {...cartState}
    items.filter(item=>item.quantity>0)?.forEach(item=>{
        addItemToCart(newCart, item)
        item.quantity=0
    })
    updateCart(newCart)

    Array.from(document.getElementsByClassName("quantity form-control-sm")).forEach(
        quantity => (quantity.value = 0)
      )
  }
  
  /**
   * clear cart, discount, and province
   */
  const onClearCart=()=>{
    Array.from(document.getElementsByClassName("discount form-control-sm")).forEach(
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

  /**
   * fetch receipt from backend and update checkoutState
   */
  async function onCheckout(){
    cartState.provinceName = document.getElementById("provinceSelect").value
    cartState.discountPercentage = parseInt(document.getElementById("discount").value)

    const resCart = await fetch(api+"/cart/receipt", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartState)
    })
    .then((response) =>
        response.status==200 ? response.json() : Promise.reject(response)
    )
    .catch((error) => {
        console.log(error)
        throws (new Error("Error fetching receipt"))
    })

    checkout(resCart)
  }

  /**
   * save cartState to backend
   */
  async function saveCart(){
    cartState.provinceName = document.getElementById("provinceSelect").value

    await fetch(api+"/cart",{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartState)
    })
    .catch((error) => {
        console.log(error)
        throws (new Error("Error saving cart"))
    })
  }
  
  /**
   * clear checkoutState 
   */
  async function onClearReceipt(){
    checkout({
        _id:cartState.receipt._id,
        subtotal:0,
        savings:0,
        taxDollarAmt:0,
        total:0
    })
  }

/***************************** HTML ******************************/

  // Obtain province list for dropdown
  const ProvinceList=(
    <div>
    <h4>Province</h4>
        <select
            className="form-select form-select-sm"
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

  //Display Menu items
  const MenuItems = (
    items.map((item, index) => 
            <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
                <input 
                className="quantity form-control-sm"
                type="number"
                defaultValue="0"
                style={{width:5+'em'}}
                min="0"
                onKeyDown={(event)=>{if(event.key==='.'){
                    event.preventDefault()
                }}}
                onChange={(event) => {item.quantity = parseInt(event.target.value)}}
                >
                </input>
            </td>
        </tr>
    )
  )
    // Display Menu
    const Menu = (
        <div className="menu">
            <h2>Menu</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </tbody>
                <tbody>
                        {MenuItems}
                </tbody>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>        
                            <button 
                            className="btn btn-primary btn-sm"
                            onClick={onMenuAdd}>
                                Add Items
                            </button>
                        </td>
                    </tr>
                </tbody>
        </table>
      </div>
    )

    // Display Cart items
    const CartItems = (
        cartState.items?.map((item, index) => 
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                </tr>
        )
    )

    // Display cart, discountPercentage, and province
    const Cart = (
        <div className="block">
        <h2>Cart</h2>
            <table className="center">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                    </tr>
                    {CartItems}
                <tr>
                    <td>
                        <button 
                        className="btn btn-danger btn-sm"
                        onClick={onClearCart}>
                            Clear Cart
                        </button>
                    </td>
                    <td>                        
                        <button 
                        className="btn btn-success btn-sm"
                        onClick={onCheckout}>
                            Checkout
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
                <h4>Discount Percentage</h4>
                <div>
                    <input
                    id="discount"
                    className="discount form-control-sm"
                    type="number"
                    defaultValue={cartState.discountPercentage}
                    style={{width:5+'em'}}
                    max="100"
                    min="0"
                    onKeyDown={(event)=>{if(event.key==='.'){
                        event.preventDefault()
                    }}}
                    onChange={(event) => {cartState.discountPercentage = parseInt(event.target.value)}
                    }>
                    </input>
                </div>
                {ProvinceList}
                <div>
                        <button 
                        className="btn btn-dark btn-sm"
                        onClick={saveCart}>
                            Save Cart
                        </button>
                </div>
    </div>
    )
    
    // Display receipt
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
                            <button 
                            className="btn btn-danger btn-sm"
                            onClick={onClearReceipt}>
                            Clear Receipt
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    ):null
}

  // Display App
  return <div className="checkout-calculator" style={{display:"flex"}}> 
        {Menu}
        {Cart}
        {Receipt()}
    </div>
}