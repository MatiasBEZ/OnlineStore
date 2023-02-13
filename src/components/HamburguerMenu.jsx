import React, {useState} from "react";
import {List} from 'phosphor-react';
import {Link} from "react-router-dom";
import "./HamburguerMenu.css"

function HamburguerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburguer-menu">
            <button onClick={toggleMenu}>
                <span className="hamburguer-menu-icon">
                    <List size={32} />
                </span>
            </button>
            <ul className={isOpen ? "menu-open" : "menu-closed"}>
                <li><Link className="links" to="/">Home</Link></li>
                <li><Link className="links" to="/about">About Us</Link></li>
                <li className="sub-menu"><Link className="links" to="/">Products</Link>
                    <ul>
                        <li><Link className="links" to="/">All</Link></li>
                        <li>Tops</li>
                        <li>Bottoms</li>
                        <li>Accesories</li>
                    </ul>
                </li>
                <li><Link className="links" to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}

export default HamburguerMenu;