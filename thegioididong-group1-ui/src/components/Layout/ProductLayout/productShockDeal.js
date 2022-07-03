import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import productImg from "~/assets/image1.jpg"
import "./productShockDeal.scss";

export default function ShockDeal() {

    let setSliderDeal = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    return(
        <div className="deal-container">
            <div className="deal-shock">
                <a href="#" className="deal-link">
                    <span className="first-deal-content">DEAL SỐC</span>
                    <span className="second-deal-content">GIẢM TỚI 10.000.000₫</span>
                </a>
            </div>
            <div className="deal-show">
                <Slider className="show-dealing" {...setSliderDeal}>
                    <div className="deal-img">
                        <a className="deal-img-container" href="#">
                            <div className="deal-content">
                                <img className="deal-element" src={productImg} alt=""/>
                            </div>
                            <h3>Product 1</h3>
                            <div className="deal-product-group">
                                <ul className="deal-product-memory">
                                    <li className="deal-memory-item">8GB/128GB</li>
                                    <li className="deal-memory-item">12GB/256GB</li>
                                    <li className="deal-memory-item">12GB/512GB</li>
                                </ul>
                            </div>
                            <div className="box-old-price">
                                <p className="old-price">30.990.000₫</p>
                                <span className="discount-percent">&nbsp;9%</span>
                            </div>
                            <strong className="new-price">27.990.000₫</strong>
                        </a>
                    </div>
                    <div className="deal-img">
                        <a className="deal-img-container" href="#">
                            <div className="deal-content">
                                <img className="deal-element" src={productImg} alt=""/>
                            </div>
                            <h3>Product 1</h3>
                            <div className="deal-product-group">
                                <ul className="deal-product-memory">
                                    <li className="deal-memory-item">8GB/128GB</li>
                                    <li className="deal-memory-item">12GB/256GB</li>
                                    <li className="deal-memory-item">12GB/512GB</li>
                                </ul>
                            </div>
                            <div className="box-old-price">
                                <p className="old-price">30.990.000₫</p>
                                <span className="discount-percent">&nbsp;9%</span>
                            </div>
                            <strong className="new-price">27.990.000₫</strong>
                        </a>
                    </div>
                    <div className="deal-img">
                        <a className="deal-img-container" href="#">
                            <div className="deal-content">
                                <img className="deal-element" src={productImg} alt=""/>
                            </div>
                            <h3>Product 1</h3>
                            <div className="deal-product-group">
                                <ul className="deal-product-memory">
                                    <li className="deal-memory-item">8GB/128GB</li>
                                    <li className="deal-memory-item">12GB/256GB</li>
                                    <li className="deal-memory-item">12GB/512GB</li>
                                </ul>
                            </div>
                            <div className="box-old-price">
                                <p className="old-price">30.990.000₫</p>
                                <span className="discount-percent">&nbsp;9%</span>
                            </div>
                            <strong className="new-price">27.990.000₫</strong>
                        </a>
                    </div>
                    <div className="deal-img">
                        <a className="deal-img-container" href="#">
                            <div className="deal-content">
                                <img className="deal-element" src={productImg} alt=""/>
                            </div>
                            <h3>Product 1</h3>
                            <div className="deal-product-group">
                                <ul className="deal-product-memory">
                                    <li className="deal-memory-item">8GB/128GB</li>
                                    <li className="deal-memory-item">12GB/256GB</li>
                                    <li className="deal-memory-item">12GB/512GB</li>
                                </ul>
                            </div>
                            <div className="box-old-price">
                                <p className="old-price">30.990.000₫</p>
                                <span className="discount-percent">&nbsp;9%</span>
                            </div>
                            <strong className="new-price">27.990.000₫</strong>
                        </a>
                    </div>
                    <div className="deal-img">
                        <a className="deal-img-container" href="#">
                            <div className="deal-content">
                                <img className="deal-element" src={productImg} alt=""/>
                            </div>
                            <h3>Product 1</h3>
                            <div className="deal-product-group">
                                <ul className="deal-product-memory">
                                    <li className="deal-memory-item">8GB/128GB</li>
                                    <li className="deal-memory-item">12GB/256GB</li>
                                    <li className="deal-memory-item">12GB/512GB</li>
                                </ul>
                            </div>
                            <div className="box-old-price">
                                <p className="old-price">30.990.000₫</p>
                                <span className="discount-percent">&nbsp;9%</span>
                            </div>
                            <strong className="new-price">27.990.000₫</strong>
                        </a>
                    </div>
                    <div className="deal-img">
                        <a className="deal-img-container" href="#">
                            <div className="deal-content">
                                <img className="deal-element" src={productImg} alt=""/>
                            </div>
                            <h3>Product 1</h3>
                            <div className="deal-product-group">
                                <ul className="deal-product-memory">
                                    <li className="deal-memory-item">8GB/128GB</li>
                                    <li className="deal-memory-item">12GB/256GB</li>
                                    <li className="deal-memory-item">12GB/512GB</li>
                                </ul>
                            </div>
                            <div className="box-old-price">
                                <p className="old-price">30.990.000₫</p>
                                <span className="discount-percent">&nbsp;9%</span>
                            </div>
                            <strong className="new-price">27.990.000₫</strong>
                        </a>
                    </div>
                    <div className="deal-img">
                        <a className="deal-img-container" href="#">
                            <div className="deal-content">
                                <img className="deal-element" src={productImg} alt=""/>
                            </div>
                            <h3>Product 1</h3>
                            <div className="deal-product-group">
                                <ul className="deal-product-memory">
                                    <li className="deal-memory-item">8GB/128GB</li>
                                    <li className="deal-memory-item">12GB/256GB</li>
                                    <li className="deal-memory-item">12GB/512GB</li>
                                </ul>
                            </div>
                            <div className="box-old-price">
                                <p className="old-price">30.990.000₫</p>
                                <span className="discount-percent">&nbsp;9%</span>
                            </div>
                            <strong className="new-price">27.990.000₫</strong>
                        </a>
                    </div>
                    <div className="deal-img">
                        <a className="deal-img-container" href="#">
                            <div className="deal-content">
                                <img className="deal-element" src={productImg} alt=""/>
                            </div>
                            <h3>Product 1</h3>
                            <div className="deal-product-group">
                                <ul className="deal-product-memory">
                                    <li className="deal-memory-item">8GB/128GB</li>
                                    <li className="deal-memory-item">12GB/256GB</li>
                                    <li className="deal-memory-item">12GB/512GB</li>
                                </ul>
                            </div>
                            <div className="box-old-price">
                                <p className="old-price">30.990.000₫</p>
                                <span className="discount-percent">&nbsp;9%</span>
                            </div>
                            <strong className="new-price">27.990.000₫</strong>
                        </a>
                    </div>
                    <div className="deal-img">
                        <a className="deal-img-container" href="#">
                            <div className="deal-content">
                                <img className="deal-element" src={productImg} alt=""/>
                            </div>
                            <h3>Product 1</h3>
                            <div className="deal-product-group">
                                <ul className="deal-product-memory">
                                    <li className="deal-memory-item">8GB/128GB</li>
                                    <li className="deal-memory-item">12GB/256GB</li>
                                    <li className="deal-memory-item">12GB/512GB</li>
                                </ul>
                            </div>
                            <div className="deal-old-price">
                                <p className="deal-old-price-content">30.990.000₫</p>
                                <span className="deal-discount-percent">&nbsp;9%</span>
                            </div>
                            <strong className="deal-new-price">27.990.000₫</strong>
                        </a>
                    </div>
                </Slider>
            </div>
        </div>
    );

}