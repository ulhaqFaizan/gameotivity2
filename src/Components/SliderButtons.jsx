import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Animations from "./Animations";

var phone = require("./images/Artboard 8.png");

function screenSize() {
    if (window.innerWidth < 576) {
        phone = require("./images/Artboard 80.png");
    }
}

screenSize();
window.addEventListener("resize", screenSize);
window.onresize = function () { window.location.reload(); }

function SliderButtons() {
    return (
        <div id="features" className="slider-buttons">
            <Container>
                <Row>
                    <Col md={8}>
                        {/* <div className="crossfade">
                            <Crossfade />
                        </div> */}
                        <div className="app-animation">
                            {/* <img className="img1" src={require("./images/Artboard 1.png")} alt="Animation" /> */}
                            <img className="img8" src={phone} alt="Animation" />
                            <img className="img7" src={require("./images/Artboard 7.png")} alt="Animation" />
                            <img className="img9" src={require("./images/Artboard 9.png")} alt="Animation" />
                            {/* <img className="img10" src={require("./images/mockup 10.png")} alt="Animation" /> */}
                            {/* <img className="img2" src={require("./images/mockup 2.png")} alt="Animation" /> */}
                            {/* <img className="img3" src={require("./images/mockup 3.png")} alt="Animation" /> */}
                            {/* <img className="img5" src={require("./images/Artboard 5.png")} alt="Animation" /> */}
                            <Animations />/
                            <div className="phone-shadow"></div>
                        </div>


                    </Col>
                    <Col md={4}>
                        <div className="slider-text">
                            <p><span>You all spend your time and energy on games,</span> and now we will present you with
                                benefits and allow you to make money while doing so on our platform. As the saying
                                goes, "time is money". It will undoubtedly be through our channel.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >

    );
}

export default SliderButtons;