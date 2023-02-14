import React from "react";
import {Shop} from "./shop";

export const Accessories = () => {
    const sortOptions = [
        {label: "Lowest Price", value: "lowest"},
        {label: "Highest Price", value: "highest"},
    ];

    const categoryOptions = [
        {label: "Accessories", value: "accesories"},
    ];

    return (
        <Shop category="accesories" categoryOptions={categoryOptions} sortOptions={sortOptions} sortDirection="lowest" />
    );
};