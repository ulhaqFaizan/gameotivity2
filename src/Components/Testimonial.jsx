import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "./Form";

function Testimonial() {
    return (
        <div className="testimonial center">
            <Container>
                <Row>
                    <Col md={{ span: 8 }} sm={{ span: 12 }}>
                        <Row className="top-row">
                            <Col md={{ span: 4, offset: 1 }}>
                                <div className="review-box">
                                    <h3>Jessie</h3>
                                    <p>"I love the idea of this app and I hope it becomes a huge success in the future."</p>
                                </div>
                            </Col>
                            <Col md={{ span: 4, offset: 1 }}>
                                <div className="review-box">
                                    <h3>Hashir</h3>
                                    <p>"As a gamer, I often get a problem that i need to play more and earn more gc but it is quite difficult because of time problems. Gameotivity is the solution."</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="bottom-row">
                            <Col md={{ span: 4, offset: 1 }}>
                                <div className="review-box">
                                    <h3>Oliver</h3>
                                    <p>"I read Gameotivity's whitepaper this project is revolutionary. Please take me on the white list"</p>
                                </div>
                            </Col>
                            <Col md={{ span: 4, offset: 1 }}>
                                <div className="review-box">
                                    <h3>Rabeeh</h3>
                                    <p>"Insane potential, looking forward to it."</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={{ span: 4 }} sm={{ span: 12 }} className="input-col">
                        <Form />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Testimonial;