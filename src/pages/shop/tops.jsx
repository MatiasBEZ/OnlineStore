import React from "react";
import {Shop} from "./shop";

export const Tops = () => {
    const sortOptions = [
        {label: "Lowest Price", value: "lowest"},
        {label: "Highest Price", value: "highest"},
    ];

    const categoryOptions = [
        {label: "Tops", value: "tops"},
    ];

    return (
        <Shop category="tops" categoryOptions={categoryOptions} sortOptions={sortOptions} sortDirection="lowest" />
    );
};