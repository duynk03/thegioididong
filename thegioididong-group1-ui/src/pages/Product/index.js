import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './product.scss';

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
    <div className="product-slider">
        <div  className="left-slider">
            <Slider className="Abc" {...settings}>
                <div className="container">
                    <a href="#" className="slide-product-1">
                    </a>
                </div>
                <div className="container">
                    <a href="#" className="slide-product-2">
                    </a>
                </div>
                <div className="container">
                    <a href="#" className="slide-product-3">
                    </a>
                </div>
            </Slider>
        </div>
        <div className="right-slider">
            <div className="suggest-item-top">
            </div>
            <div className="suggest-item-bot">
            </div>
        </div>
    </div>
  );
}