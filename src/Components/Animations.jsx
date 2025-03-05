import React from "react";
import { useSpring, animated } from 'react-spring';


// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const dura = 4000;
const dela = 2000;
const lable_dura = 1500;
const lable_dela = ((dela + dura) * 4) - (dura * 2) - dela;
var xa = -160;
var xb = 0;
var xc = 166;
var xd = 0;

function screenSize() {
    if (window.innerWidth < 1200 && window.innerWidth >= 992) {
        xa = -135;
        xb = 0;
        xc = 141;
        xd = 0;
    }
    else if (window.innerWidth < 992 && window.innerWidth >= 768) {
        xa = -100;
        xb = 0;
        xc = 106;
        xd = 0;
    }
    else if (window.innerWidth < 768 && window.innerWidth >= 576) {
        xa = -113;
        xb = 0;
        xc = 121;
        xd = 0;
    }
    else if (window.innerWidth < 576) {
        xa = -98;
        xb = 0;
        xc = 106;
        xd = 0;
    }
    console.log(window.innerWidth);
}
window.addEventListener("resize", screenSize);

screenSize();

const Animations = (props) => {
    const [anime1] = useSpring(() => ({
        loop: true,

        to: [
            { scale: '1.3', x: xb, zIndex: 6, opacity: 1 },
            { scale: '0.5', x: xa, zIndex: 5, opacity: 0.7, delay: dela },
            { scale: '0', x: xd, zIndex: 4, opacity: 0, delay: dela },
            { scale: '0.5', x: xc, zIndex: 5, opacity: 0.7, delay: dela },
            { scale: '1.3', x: xb, zIndex: 6, opacity: 1, delay: dela }
        ],
        from: { scale: '1.3', x: xb, zIndex: 6, opacity: 1 },
        config: { duration: dura }
    }));

    const [anime2] = useSpring(() => ({
        loop: true,

        to: [
            { scale: '0.5', x: xa, zIndex: 5, opacity: 0.7 },
            { scale: '0', x: xd, zIndex: 4, opacity: 0, delay: dela },
            { scale: '0.5', x: xc, zIndex: 5, opacity: 0.7, delay: dela },
            { scale: '1.3', x: xb, zIndex: 6, opacity: 1, delay: dela },
            { scale: '0.5', x: xa, zIndex: 5, opacity: 0.7, delay: dela }
        ],
        from: { scale: '0.5', x: xa, zIndex: 5, opacity: 0.7 },
        config: { duration: dura }
    }));

    const [anime3] = useSpring(() => ({
        loop: true,

        to: [
            { scale: '0.5', x: xc, zIndex: 5, opacity: 0.7 },
            { scale: '1.3', x: xb, zIndex: 6, opacity: 1, delay: dela },
            { scale: '0.5', x: xa, zIndex: 5, opacity: 0.7, delay: dela },
            { scale: '0', x: xd, zIndex: 4, opacity: 0, delay: dela },
            { scale: '0.5', x: xc, zIndex: 5, opacity: 0.7, delay: dela }
        ],
        from: { scale: '0.5', x: xc, zIndex: 5, opacity: 0.7 },
        config: { duration: dura }
    }));

    const [anime4] = useSpring(() => ({
        loop: true,

        to: [
            { scale: '0', x: xd, zIndex: 4, opacity: 0 },
            { scale: '0.5', x: xc, zIndex: 5, opacity: 0.7, delay: dela },
            { scale: '1.3', x: xb, zIndex: 6, opacity: 1, delay: dela },
            { scale: '0.5', x: xa, zIndex: 5, opacity: 0.7, delay: dela },
            { scale: '0', x: xd, zIndex: 4, opacity: 0, delay: dela }
        ],
        from: { scale: '0', x: xd, zIndex: 4, opacity: 0 },
        config: { duration: dura }
    }));

    const [anime5] = useSpring(() => ({
        loop: true,

        to: [
            { opacity: 1 },
            { opacity: 0, delay: dela },
            { opacity: 0, delay: dela },
            { opacity: 0, delay: dela },
            { opacity: 1, delay: dela }
        ],
        from: { opacity: 1 },
        config: { duration: dura }
    }));

    const [anime6] = useSpring(() => ({
        loop: true,

        to: [
            { opacity: 0 },
            { opacity: 0, delay: dela },
            { opacity: 1, delay: dela },
            { opacity: 0, delay: dela },
            { opacity: 0, delay: dela }
        ],
        from: { opacity: 0 },
        config: { duration: dura }
    }));

    const [anime7] = useSpring(() => ({
        loop: true,

        to: [
            { opacity: 0 },
            { opacity: 0, delay: dela },
            { opacity: 0, delay: dela },
            { opacity: 1, delay: dela },
            { opacity: 0, delay: dela }
        ],
        from: { opacity: 0 },
        config: { duration: dura }
    }));

    const [anime8] = useSpring(() => ({
        loop: true,

        to: [
            { opacity: 0 },
            { opacity: 1, delay: dela },
            { opacity: 0, delay: dela },
            { opacity: 0, delay: dela },
            { opacity: 0, delay: dela }
        ],
        from: { opacity: 0 },
        config: { duration: dura }
    }));

    return (
        <>
            <animated.img className="img10" alt="" src={require("./images/mockup 10.png")} style={anime1} {...props} />
            <animated.img className="img2" alt="" src={require("./images/mockup 2.png")} style={anime2} {...props} />
            <animated.img className="img3" alt="" src={require("./images/mockup 3.png")} style={anime3} {...props} />
            <animated.img className="img5" alt="" src={require("./images/Artboard 5.png")} style={anime4} {...props} />
            {/* <animated.div className="img10-div" style={anime5} {...props} ><img className="label" alt="" src={require("./images/lable 2.png")} /> <br /> <h3>image 1</h3></animated.div>
            <animated.div className="img5-div" style={anime6} {...props} ><img className="label" alt="" src={require("./images/lable 2.png")} /> <br /> <h3>image 2</h3></animated.div>
            <animated.div className="img5-div" style={anime7} {...props} ><img className="label" alt="" src={require("./images/lable 2.png")} /> <br /> <h3>image 3</h3></animated.div>
            <animated.div className="img5-div" style={anime8} {...props} ><img className="label" alt="" src={require("./images/lable 2.png")} /> <br /> <h3>image 4</h3></animated.div> */}
        </>
    );
}

export default Animations;