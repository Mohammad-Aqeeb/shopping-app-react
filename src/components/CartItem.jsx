import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import "./CartItem.css"
function CartItem(){

    const cart = useSelector((state)=>{return state.cart});

    const [totalAmount , setTotalAmount] = useState(0);

    useEffect(()=>{
        let amount = cart.reduce((acc,curr)=>{ return acc+=curr.price },0);
        setTotalAmount(amount);
    }, [cart])

    return (
        <div className="cartItemMainContainer">
            <div className="cartItemContainer">
                <div className="checkItems">
                {
                    cart.map((ite)=>{
                        return <Item ite={ite} key={ite.id}></Item>
                    })
                }
                </div>

                <div className="totalItemContainer">
                    <div className="totalItemTexts">
                        <div className="yourCartText">Your Cart</div>
                        <div className="summaryText">summary</div>
                        <div className="totalItemText">Total Items:{cart.length}</div>
                    </div>
                    
                    <div className="amountContainer">
                        <div className="totalAmountText">Total Amount:<span className="amountText">${totalAmount}</span></div>
                        <button className="checkOutButton">Checkout Now</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CartItem;