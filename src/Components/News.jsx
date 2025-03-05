import React from "react";
import Stack from 'react-bootstrap/Stack';

var dir = "horizontal";

function screenSize() {
    if (window.innerWidth < 768) {
        dir = "vertical";
    }
    console.log(window.innerWidth);
}
screenSize();


function News() {
    const image = "https://picsum.photos/300/200";
    return (
        <div className="news">
            <div className="container1">
                <Stack className="stack" direction={dir} gap={3}>
                    <div className="news-shadow">
                        <figure class="effect-julia">
                            <img src={require("./images/private sale.png")} alt="img21" />
                            <figcaption>
                                {/* <h2>We are launching private sale soon!</h2> */}
                                <div>
                                </div>
                                <a href='#'>View more</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="news-shadow">
                        <figure class="effect-julia">
                            <img src={require("./images/news3.jpeg")} alt="img22" />
                            <figcaption>
                                <h2 >Play <span>More</span> Earn<span>More</span></h2>
                                <div>
                                    <p className="white">Click to read more about this concept.</p>
                                </div>
                                <a href="https://medium.com/@saim.raza01/play-more-to-earn-more-77b1aa4d67d">View more</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="news-shadow">
                        <figure class="effect-julia">
                            <img src={require("./images/news2.jpeg")} alt="img23" />
                            <figcaption>
                                <h2 className="black">Proof of <span>Activity</span></h2>
                                <div>
                                    <p>Click to read more about this concept.</p>
                                </div>
                                <a href="https://medium.com/@saim.raza01/proof-of-activity-a-game-changer-f8522ac19386">View more</a>
                            </figcaption>
                        </figure>
                    </div>
                </Stack>
            </div >
        </div >

    );
}

export default News;