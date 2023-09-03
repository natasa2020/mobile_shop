import React, {useState} from "react";
import {images} from "../components/CarouselData"

function Carousel() {
    const [currImg, setCurrImg] = useState(1)


    return(
        <div className="carousel">
            <div className="innerCarousel"
            style={{backgroundImage: `url(${images[currImg].img})` }}>
                <div className="left" onClick={()=> {currImg > 0 && setCurrImg(currImg - 1)}}>
                <i className="fa-sharp fa-solid fa-chevron-left"></i>
                </div>
                <div className="center">
                  {/* <h1>{images[currImg].title}</h1> */}
                </div>
                <div className="right" onClick={()=> {currImg < images.length - 1 && setCurrImg(currImg + 1)}}>
                <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    );
}

export default Carousel