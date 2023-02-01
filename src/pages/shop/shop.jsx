import React, {useState} from "react";
import {PRODUCTS} from "../../products.js";
import {Product} from "./product";
import "./shop.css";

export const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedSort, setSelectedSort] = useState("lowest");

    const handlefilterChange = (e) => {
        setSelectedCategory(e.target.value);
    }

    const handleSortChange = (e) => {
        setSelectedSort(e.target.value);
    }

    const filteredProducts = PRODUCTS
        .filter((product) => {
            if (selectedCategory === "all") return true;
            return product.category === selectedCategory;
        })
        .sort((a, b) => {
            if (selectedSort === "lowest") {
                if (a.price < b.price) return -1;
                if (a.price > b.price) return 1;
                return 0;
            } else if (selectedSort === "highest") {
                if (a.price > b.price) return -1;
                if (a.price < b.price) return 1;
                return 0;
            }
        })

    return (
        <div className="shop">
            <div className="filters">
                <div className="shopFilter">
                    <label htmlFor="categories">Choose a category: </label>
                    <select id="categories" onChange={handlefilterChange}>
                        <option value="all">All</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                    </select>
                </div>
                <div className="sortBy">
                    <label htmlFor="sortOptions">SortBy: </label>
                    <select id="sortOptions" onChange={handleSortChange}>
                        <option value="lowest">Lowest Price</option>
                        <option value="highest">Highest Price</option>
                    </select>
                </div>
            </div>
            <div className="products">
                {
                    filteredProducts.map((product) =>
                    (<Product data={product} key={product.id}/>)
                    )
                }
            </div>
        </div>
    );
};