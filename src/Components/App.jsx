import React from "react";
import Home from "./Home1";
import Partners from "./Partners";
import Slider from "./Slider1";
import News from "./News";
import SliderButtons from "./SliderButtons";
import Team from "./Team1";
import MoreInfo from "./MoreInfo";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
    return (
        <div>

            <Home />
            <Partners />
            <SliderButtons />
            <News />
            <Slider />
            <Team />
            <MoreInfo />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default App;