import React from "react";
import "./Item.css"
import { useDispatch } from "react-redux";
import { removeCart } from "../Redux/slice/CartSlice";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

function Item({ite}){

    const dispatch = useDispatch();

    
    function removeFromCart(){
        dispatch(removeCart(ite));
        toast.error("Item remove from cart");
    }

    return (
        <div className="itemContainer">
            <div>
                <img src={ite.image} className="itemImage"></img>
            </div>
            
            <div className="itemDescriptionContainer">
                <div className="itemTitle">{ite.title}</div>
                <div className="itemDescription">{ite.description}</div>
                <div className="priceButtonContainer">
                    <div className="itemPrice">${ite.price}</div>
                    <button onClick={removeFromCart} className="itemDeleteButton"><MdDelete /></button>
                </div>
            </div>

        </div>
    )
}

export default Item;