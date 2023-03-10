import React from "react";
import {Shop} from "./shop";

export const Bottoms = () => {
    const sortOptions = [
        {label: "Lowest Price", value: "lowest"},
        {label: "Highest Price", value: "highest"},
    ];

    const categoryOptions = [
        {label: "Bottoms", value: "bottoms"},
    ];

    return (
        <Shop category="bottoms" categoryOptions={categoryOptions} sortOptions={sortOptions} sortDirection="lowest" />
    );
};