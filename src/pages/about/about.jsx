import React from "react";
import "./about.css";

export const About = () => {

    return (
        <div className="about-container">
            <img src={process.env.PUBLIC_URL + `/Imgs/store.png`} />
            <div className="about-content">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus sollicitudin nisl 
                    sodales feugiat. Donec euismod justo nec risus dapibus aliquam. Quisque eu quam a felis
                    finibus dictum sed ac tellus. Duis sodales auctor eros, ut porta quam eleifend quis.
                    Integer lobortis purus vel urna pharetra, in pulvinar orci ultrices.
                    Donec accumsan sit amet diam in feugiat. Donec auctor diam eu nulla
                    fringilla mollis non sit amet ipsum. Curabitur et porttitor lacus,
                    at posuere nisi. Donec scelerisque nisi sapien, et pellentesque 
                    urna vulputate sed. Vestibulum a faucibus erat.
                </p>
            </div>
        </div>
    );
};