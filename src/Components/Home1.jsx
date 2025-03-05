import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "./Navbar";

function Home() {
    //
    return (

        <div className="home">
            <div className="navbar">
                <Navbar />
            </div>

            <Container>
                <Row>
                    <Col md={3}>
                        <div className="home-heading">
                            <h1>Play More<br />Earn More</h1>
                        </div>
                        <div className="home-text">
                            <p>Play your favourite game and be the part <br /> of the ultimate experience</p>
                        </div>
                        <div className="home-button center">
                            {/* <Button variant="flat" size="lg">White Paper</Button> */}
                            <a href="https://gameotivity-1.gitbook.io/white-paper/" target="_blank">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                White Paper
                            </a>
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="right">
                            <img className="background" src={require("./images/Artboard 10.png")} alt="bg" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="shadows"></div>
        </div>

    );
}

export default Home;