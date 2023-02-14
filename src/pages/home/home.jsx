import React, {useState} from "react";
import Slider from "../../components/Slider.jsx";
import {Shop} from "../shop/shop"
import "./home.css";

export const Home = () => {
    return (
        <div className="shopHome">
            <Slider/>
            <Shop className="ShopView"/>
        </div>
    );
};