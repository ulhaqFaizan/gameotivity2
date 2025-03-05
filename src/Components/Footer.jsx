import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="footer-shadow"></div>
            <p>GAMEOTIVITY © {year}</p>
            <div className="icons">
                <a className="icon-img" href="https://www.facebook.com/profile.php?id=100085446992515" target="_blank"><img src={require("./images/facebook.png")} alt="facebook logo" /></a>
                <a className="icon-img" href="https://twitter.com/gameotivity_" target="_blank"><img src={require("./images/twitter.png")} alt="twitter logo" /></a>
                <a className="icon-img" href="https://www.instagram.com/Gameotivity/" target="_blank"><img src={require("./images/instagram.png")} alt="instagram logo" /></a>
                <a className="icon-img" href="https://pk.linkedin.com/company/gameotivity" target="_blank"><img src={require("./images/linkedin.png")} alt="linkedin logo" /></a>
                <a className="icon-img" href="https://www.reddit.com/user/GameotivityProtocol/" target="_blank"><img src={require("./images/reddit.png")} alt="reddit logo" /></a>
            </div>
        </footer>

    );
}

export default Footer;