import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { combineSlices } from "@reduxjs/toolkit";

function Navbar(){

    let count = useSelector((state)=>{return state.cart.length});
    console.log(count);


    return (
        <div className="navbar">
            <div className="navbar-1">
                <NavLink to="/">
                    <img src="../logo.png" className="logo"></img>
                </NavLink>

                <div className="cartItems">
                    <NavLink to="/" className="HomeButton">
                        <p >Home</p>
                    </NavLink>
                    <NavLink to='/cart' className="cartItemButton">
                        <HiMiniShoppingCart  className="cartItemButton"/>
                        {
                            count > 0 && (<span className="count">{count}</span>)  
                        }
                        
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;