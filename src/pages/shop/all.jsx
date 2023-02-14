import React from "react";
import {Shop} from "./shop";

export const All = () => {
    const sortOptions = [
        {label: "Lowest Price", value: "lowest"},
        {label: "Highest Price", value: "highest"},
    ];

    const categoryOptions = [
        {label: "All", value: "all"},
        {label: "Tops", value: "tops"},
        {label: "Bottoms", value: "bottoms"},
        {label: "Accessories", value: "accesories"},
    ];

    return (
        <Shop category="all" categoryOptions={categoryOptions} sortOptions={sortOptions} sortDirection="lowest" />
    );
};