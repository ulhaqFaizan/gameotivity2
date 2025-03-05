import React from "react";
import Carousell from "./Carousel2";

function Slider() {
    return (
        <div id="product" className="slider">
            <div className="carousel">
                <Carousell />
            </div>
            <div className="slider-shadow"></div>
        </div>

    );
}

export default Slider;