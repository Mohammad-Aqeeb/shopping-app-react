import React from "react";
import { NavLink } from "react-router-dom";
import './EmptyCart.css'


function EmptyCart(){

    return (
        <div className="emptyCartContainer">
            <div className="emptCartText">
                Your Cart is empty!
            </div>

            <NavLink to="/">
                <button className="shopNowButton">SHOP NOW</button>
            </NavLink>
        </div>
    )

}

export default EmptyCart;