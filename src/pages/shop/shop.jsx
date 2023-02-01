import React, {useState} from "react";
import {PRODUCTS} from "../../products.js";
import {Product} from "./product";
import "./shop.css";

export const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    function filterValueChange(e) {
        setSelectedCategory(e.target.value);
    }

    return (
        <div className="shop">
            <div className="shopFilter">
                <label for="categories">Choose a category: </label>
                <select id="categories" onChange={filterValueChange}>
                    <option value="all">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                </select>
            </div>
            <div className="products"> 
                {selectedCategory === "all" 
                    ? 
                    PRODUCTS.map((product) => (<Product data={product}/>)) 
                    : 
                    PRODUCTS.filter(product => product.category === selectedCategory).map((product) => (
                        <Product data={product}/>))
                }
            </div>
        </div>
    );
};