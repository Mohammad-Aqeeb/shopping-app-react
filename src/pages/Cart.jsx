import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart";
import CartItem from "../components/CartItem";

function Cart(){

    const cart = useSelector((state)=>{return state.cart});


    return (
        <div className="ItemContainer">
            {
                cart.length <= 0 ? 
                
                (<EmptyCart/>) : 
                
                (<CartItem/>)
            }
        </div>
    )
}

export default Cart;