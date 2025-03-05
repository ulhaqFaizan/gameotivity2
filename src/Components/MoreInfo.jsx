import React from "react";
import Button from 'react-bootstrap/Button';
import "./style.css"

function MoreInfo() {
    return (
        <div className="more-info">
            <div className="info-shadow1"></div>
            <div className="more-info-inner">
                <h2>Want to know more about project</h2>
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
            </div>
            <div className="info-shadow2"></div>
        </div>
    );
}

export default MoreInfo;