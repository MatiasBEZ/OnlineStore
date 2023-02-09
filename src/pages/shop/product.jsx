import React, { useContext } from "react";
import {ShopContext} from "../../context/shop-context";
import {ShoppingCart} from 'phosphor-react';
import {Trash} from 'phosphor-react';

export const Product = (props) => {
    const {id, productName, price, productImage } = props.data;
    const {addToCart,removeFromCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id]

    return <div className="product">
        <img src={productImage}></img>
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p> ${price} </p>
        </div>
        <div className="addOrRemoveBttns">
            <button className="addTo CartBttn" onClick={() => addToCart(id)}>
                <ShoppingCart size={20}/> 
                Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
            </button>
            {cartItemAmount > 0 
            ?
            <button className="RemoveFrom CartBttn" onClick={() => removeFromCart(id)}>
                <Trash size={20} /> Remove </button>
            :
            null
            }
        </div>
    </div>;
};