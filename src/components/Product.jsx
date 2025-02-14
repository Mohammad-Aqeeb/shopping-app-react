import React from "react";
import './Product.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, removeCart } from "../Redux/slice/CartSlice";
import toast from "react-hot-toast";

function Product({post}){

    const cart = useSelector((state)=>{ 
        return state.cart
    });

    const dispatch = useDispatch();

    function addToCart(){
        dispatch(addCart(post));
        toast.success("Item added to cart");
    }

    function removeFromCart(){
        dispatch(removeCart(post));
        toast.error("Item remove from cart");
    }

    return (
        <div className="product">
            <div className="productTitle">{post.title}</div>
            <div className="productDescription">{(post.description).split(" ").slice(0,10).join(" ")}...</div>
            <img src={post.image} className="productImage"></img>
            <div className="priceContainer">
                <div className="productPrice">${post.price}</div>
                <div>
                    {
                        cart.some((p) => { return post.id === p.id}) ? 
                        (<button onClick={removeFromCart} className="btn">REMOVE ITEM</button>) :
                        (<button onClick={addToCart} className="btn">ADD TO CARD</button>)
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Product;