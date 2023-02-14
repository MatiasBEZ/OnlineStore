import React, {useState} from "react";
import {PRODUCTS} from "../../products.js";
import {Product} from "./product";
import "./shop.css";

export const Shop = ({category, categoryOptions, sortOptions, sortDirection}) => {
    const [selectedCategory, setSelectedCategory] = useState(category);
    const [selectedSort, setSelectedSort] = useState(sortDirection);
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handlefilterChange = (e) => {
        setSelectedCategory(e.target.value);
    }

    const handleSortChange = (e) => {
        setSelectedSort(e.target.value);
    }

    const filteredProducts = PRODUCTS
    .filter((product) => {
        return product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    })
    .filter((product) => {
        if (selectedCategory === "all") return true;
        return product.category === selectedCategory;
    })
    .sort((a, b) => {
        if (selectedSort === "lowest") {
        return a.price - b.price;
        } else if (selectedSort === "highest") {
        return b.price - a.price;
        } else {
        return 0;
        }
    });

    return (
        <div className="shop">
            <div className="filters">
                <div>
                    <label htmlFor="search">Search: </label>
                    <input type="text" id="search" placeholder="Enter a product" value={searchTerm} onChange={handleInputChange} />
                </div>
                <div className="shopFilter">
                    <label htmlFor="categories">Category: </label>
                    <select id="categories" onChange={handlefilterChange}>
                        {categoryOptions.map((option) => (
                            <option value={option.value} key={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="sortBy">
                    <label htmlFor="sortOptions">SortBy: </label>
                    <select id="sortOptions" onChange={handleSortChange}>
                        {sortOptions.map((option) => (
                            <option value={option.value} key={option.value}>
                                {option.label}
                            </option>
                        ))}
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