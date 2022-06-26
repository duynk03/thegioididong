import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './product.scss';
import sliderImg from "../../assets/slider.png"
import sliderImgTop from "../../assets/top.png"
import sliderImgBot from "../../assets/bot.png"
import React from "react";
import Slider from "react-slick";

export default function Product() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
        <div className="product-slider">
            <div  className="left-slider">
                <Slider className="left-content" {...settings}>
                    <div className="container-img">
                        <img src={sliderImg} />
                        {/* <div> Image 1 </div> */}
                    </div>
                    <div className="container-img">
                        <img src={sliderImg} />
                        {/* <div> Image 2 </div> */}
                    </div>
                    <div className="container-img">
                        <img src={sliderImg} />
                        {/* <div> Image 3 </div> */}
                    </div>
                    <div className="container-img">
                        <img src={sliderImg} />
                        {/* <div> Image 4 </div> */}
                    </div>
                    <div className="container-img">
                        <img src={sliderImg} />
                        {/* <div> Image 5 </div> */}
                    </div>
                </Slider>
            </div>
            <div className="right-slider">
                <div className="suggest-item-top">
                    <img className="img-top" src={sliderImgTop} />
                </div>
                <div className="suggest-item-bot">
                <img className="img-bot" src={sliderImgBot} />
                </div>
            </div>
        </div>
        <div className="session-filter">
            <h1>
                This is session filter products
            </h1>
        </div>
        <div className="session-category">
            <h1>
                This is session category products
            </h1>
        </div>
    </div>
  );
}