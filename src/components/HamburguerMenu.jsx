import React, {useState} from "react";
import {List} from 'phosphor-react';
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
                <li>Home</li>
                <li>About Us</li>
                <li className="sub-menu">Products
                    <ul>
                        <li>All</li>
                        <li>Tops</li>
                        <li>Bottoms</li>
                        <li>Accesories</li>
                    </ul>
                </li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default HamburguerMenu;