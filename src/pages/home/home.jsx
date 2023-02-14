import React from "react";
import Slider from "../../components/Slider.jsx";
import {All} from "../shop/all"
import "./home.css";

export const Home = () => {
    return (
        <div className="shopHome">
            <Slider/>
            <All/>
        </div>
    );
};