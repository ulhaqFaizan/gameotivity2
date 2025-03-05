import React from "react";
import Marquee from "react-fast-marquee";
import polygon from "./images/polygon.svg";
import kucoin from "./images/kucoin.svg";

function Partners() {
    return (
        <div className="partners">
            <Marquee speed={50} gradient='true' gradientWidth={500}>
                <div><img className="partners-img" src={require("./images/chainlink.png")} alt="Chainlink logo" /></div>
                {/* <div><img className="partners-img" src={require("./images/funsol.png")} alt="Funsol logo" /></div> */}
                <div><img className="partners-img" src={require("./images/Lbank.png")} alt="Lbank logo" /></div>
                <div><img className="partners-img" src={polygon} alt="polygon logo" /></div>
                <div><img className="partners-img" src={require("./images/nstp1.png")} alt="NSTP logo" /></div>
                <div><img className="partners-img" src={require("./images/BSC.png")} alt="BSC logo" /></div>
                <div><img className="partners-img" src={require("./images/airuni.png")} alt="Air University logo" /></div>
                <div><img className="partners-img" src={kucoin} alt="kucoin logo" /></div>
                {/* <div><img className="partners-img" src={require("./images/fasset.png")} alt="fasset logo" /></div> */}
            </Marquee>
        </div>

    );
}

export default Partners;