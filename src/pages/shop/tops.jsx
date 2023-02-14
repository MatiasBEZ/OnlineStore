import React, {useState} from "react";
import {PRODUCTS} from "../../products.js";
import {Product} from "./product";
import "./shop.css";

export const Tops = () => {
    const [selectedSort, setSelectedSort] = useState("lowest");
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSortChange = (e) => {
        setSelectedSort(e.target.value);
    }

    const filteredProducts = PRODUCTS
        .filter((product) => {
            return product.productName.toLowerCase().includes(searchTerm.toLowerCase())
        })
        .filter((product) => {
            return product.category === "tops";
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
                <div>
                    <label htmlFor="search">Search: </label>
                    <input type="text" id="search" placeholder="Enter a product" value={searchTerm} onChange={handleInputChange} />
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