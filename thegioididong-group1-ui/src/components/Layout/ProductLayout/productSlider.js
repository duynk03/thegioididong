import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productSlider.scss";
import sliderImg from "~/assets/slider.png";
import sliderImgTop from "~/assets/top.png";
import sliderImgBot from "~/assets/bot.png";
import React from "react";
import Slider from "react-slick";

export default function Sliders (){

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        
        <div className="product-slider">
            <div  className="left-slider">
                <Slider className="left-content" {...settings}>
                    <div className="container-img">
                        <a href="#">
                            <img src={sliderImg} alt="" />
                        </a>
                        {/* <div> Image 1 </div> */}
                    </div>
                    <div className="container-img">
                        <a href="#">
                            <img src={sliderImg} alt="" />
                        </a>
                        {/* <div> Image 2 </div> */}
                    </div>
                    <div className="container-img">
                        <a href="#">
                            <img src={sliderImg} alt="" />
                        </a>
                        {/* <div> Image 3 </div> */}
                    </div>
                    <div className="container-img">
                        <a href="#">
                            <img src={sliderImg} alt="" />
                        </a>
                        {/* <div> Image 4 </div> */}
                    </div>
                    <div className="container-img">
                        <a href="#">
                            <img src={sliderImg} alt="" />
                        </a>
                        {/* <div> Image 5 </div> */}
                    </div>
                </Slider>
            </div>
            <div className="right-slider">
                <div className="suggest-item-top">
                    <a href="#">
                        <img className="img-top" src={sliderImgTop} alt="" />
                    </a>
                </div>
                <div className="suggest-item-bot">
                    <a href="#">
                        <img className="img-bot" src={sliderImgBot} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}