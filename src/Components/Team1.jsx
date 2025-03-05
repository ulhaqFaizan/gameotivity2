import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var sts = 3;

function screenSize() {
    if (window.innerWidth < 700) {
        sts = 1;
    }
    else if (window.innerWidth < 992 && window.innerWidth >= 700) {
        sts = 2;
    }
    console.log(window.innerWidth);
}
screenSize();

const photos = [
    {
        name: 'photo1',
        img: <div className="center">
            <img className="team-pic" src={require("./images/img1.png")}></img>
            <h3>Name</h3>
            <h5>Founder/CEO</h5>
        </div>
    },
    {
        name: 'photo2',
        img: <div className="center">
            <img className="team-pic" src={require("./images/img1.png")}></img>
            <h3>Name</h3>
            <h5>Co-Founder/CTO</h5>
        </div>
    },
    {
        name: 'photo3',
        img: <div className="center">
            <img className="team-pic" src={require("./images/img1.png")}></img>
            <h3>Name</h3>
            <h5>NFT Artist</h5>
        </div>
    },
    {
        name: 'photo4',
        img: <div className="center">
            <img className="team-pic" src={require("./images/img1.png")}></img>
            <h3>Name</h3>
            <h5>Director Operations</h5>
        </div>
    },
    {
        name: 'photo5',
        img: <div className="center">
            <img className="team-pic" src={require("./images/img1.png")}></img>
            <h3>Name</h3>
            <h5>MERN Stack Developer</h5>
        </div>
    },
]


function Team() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: sts,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        accessibility: false,
        // centerMode: true,
        arrows: false
        // className: "center"
    };

    return (
        <div id="team" className="team">
            <h1>Team</h1>
            {/* <h2>Pause On Hover slider</h2>  */}
            <div className="team-slider">
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return (
                            <div>
                                {photo.img}
                            </div>
                        )
                    })}

                </Slider>
            </div>
            <div className="team-shadow"></div>
        </div>
    );
}

export default Team;