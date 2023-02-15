import React, { useContext } from "react";
import {Link} from "react-router-dom";
import {ShoppingCart} from 'phosphor-react';
import "./navbar.css";
import HamburguerMenu from "./HamburguerMenu";
import {ShopContext} from "../context/shop-context";

export const Navbar = () => {
    const {cartItems} = useContext(ShopContext);

    const itemCount = Object.values(cartItems).reduce((acc, count) => acc + count, 0);

    return (
        <div className="navbar">
            <HamburguerMenu/>
            <div className="logo">
                <Link to="/">Matt's Shop</Link>
            </div>
            <div className="links">
                <Link to="/cart">
                    <ShoppingCart size={32}/>
                    {itemCount > 0 ? <span className="cartCounter">{itemCount}</span> : null}
                </Link>
            </div>
        </div>
    );
};

