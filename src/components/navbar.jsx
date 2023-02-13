import React from "react";
import {Link} from "react-router-dom";
import {ShoppingCart} from 'phosphor-react';
import "./navbar.css";
import HamburguerMenu from "./HamburguerMenu";

export const Navbar = () => {
    return (
        <div className="navbar">
            <HamburguerMenu/>
            <div className="logo">
                <Link to="/">Matt's Shop</Link>
            </div>
            <div className="links">
                <Link to="/cart">
                    <ShoppingCart size={32}/>
                </Link>
            </div>
        </div>
    );
};

