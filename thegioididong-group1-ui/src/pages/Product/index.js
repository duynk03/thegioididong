import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './product.scss';
import productImg from "../../assets/image1.jpg"
import iPhoneLogo from "../../assets/iphone.png"
import samsungLogo from "../../assets/samsung.png"
import oppoLogo from "../../assets/oppo.jpg"
import xiaomiLogo from "../../assets/xiaomi.png"
import vivoLogo from "../../assets/vivo.png"
import realmeLogo from "../../assets/realme.png"
import nokiaLogo from "../../assets/nokia.jpg"
import itelLogo from "../../assets//itel.jpg"
import masstelLogo from "../../assets/masstel.png"
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

        {/* 
            product slider include 2 parts:
                + left is slide and right.
                + right is suggestion brands.
        */}

        <div className="product-slider">
            <div  className="left-slider">
                <Slider className="left-content" {...settings}>
                    <div className="container-img">
                        <a href="#">
                            <img src={sliderImg} />
                        </a>
                        {/* <div> Image 1 </div> */}
                    </div>
                    <div className="container-img">
                        <a href="#">
                            <img src={sliderImg} />
                        </a>
                        {/* <div> Image 2 </div> */}
                    </div>
                    <div className="container-img">
                        <a href="#">
                            <img src={sliderImg} />
                        </a>
                        {/* <div> Image 3 </div> */}
                    </div>
                    <div className="container-img">
                        <a href="#">
                            <img src={sliderImg} />
                        </a>
                        {/* <div> Image 4 </div> */}
                    </div>
                    <div className="container-img">
                        <a href="#">
                            <img src={sliderImg} />
                        </a>
                        {/* <div> Image 5 </div> */}
                    </div>
                </Slider>
            </div>
            <div className="right-slider">
                <div className="suggest-item-top">
                    <a href="#">
                        <img className="img-top" src={sliderImgTop} />
                    </a>
                </div>
                <div className="suggest-item-bot">
                    <a href="#">
                        <img className="img-bot" src={sliderImgBot} />
                    </a>
                </div>
            </div>
        </div>

        {/* 
            filter about the products 
                + filter by brand
                + filter by price
                + filter by type of phone
                + filter by performance and battery
                + filter by RAM
                + filter by ROM (Internal memory)
                + filter by Camera
                + filter by special features
                + filter by design
                + filter by screen
        */}

        <div className="session-filter">
            <div className="scroll-container">
                <div className="filter-total">
                    <div className="filter-item">
                        <div className="filter">
                            <i className="fa fa-filter"></i>
                            <span>&nbsp;Bộ lọc</span>
                        </div>
                        <div className="manufacturer">
                            <span>Hãng &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="price">
                            <span>Giá &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="type-of-products">
                            <span>Loại điện thoại &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="performance-battery">
                            <span>Hiệu suất & Pin &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="ram">
                            <span>RAM &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="internal-memory">
                            <span>Bộ nhớ trong &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="camera">
                            <span>Camera &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="special-features">
                            <span>Tính năng đặc biệt &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="design">
                            <span>Thiết kế &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="screen">
                            <span>Màn hình &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                    </div>
                    <div className="quick-access-brand">
                        <div className="logo-iphone">
                        <a href="#" className="iPhone">
                                <img 
                                    // className="iPhone"
                                    src={iPhoneLogo}
                                />                                    
                            </a>
                        </div>
                        <div className="logo-samsung">
                            <a href="#" className="samsung">
                                <img 
                                    // className="samsung"
                                    src={samsungLogo}
                                />                                    
                            </a>
                        </div>
                        <div className="logo-oppo">
                            <a href="#" className="oppo">
                                <img 
                                    // className="oppo"
                                    src={oppoLogo}
                                />                                    
                            </a>
                        </div>
                        <div className="logo-xiaomi">
                            <a href="#" className="xiaomi">
                                <img 
                                    // className="xiaomi"
                                    src={xiaomiLogo}
                                />                                    
                            </a>
                        </div>
                        <div className="logo-vivo">
                            <a href="#" className="vivo">
                                <img 
                                    // className="vivo"
                                    src={vivoLogo}
                                />                                    
                            </a>
                        </div>
                        <div className="logo-realme">
                            <a href="#" className="realme">
                                <img 
                                    // className="realme"
                                    src={realmeLogo}
                                />                                    
                            </a>
                        </div>
                        <div className="logo-nokia">
                            <a href="#" className="nokia">
                                <img 
                                    // className="nokia"
                                    src={nokiaLogo}
                                />                                    
                            </a>
                        </div>
                        <div className="logo-itel">
                            <a href="#" className="itel">
                                <img 
                                    // className="itel"
                                    src={itelLogo}
                                />                                    
                            </a>
                        </div>
                        <div className="logo-masstel">
                            <a href="#" className="masstel">
                                <img 
                                    // className="masstel"
                                    src={masstelLogo}
                                />                                    
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* category of products */}

        <div className="session-category">
            <div className="sort-container">
                <div className="box-sort">
                    <p className="sort-total">
                        <b>
                            90
                            <span>
                                &nbsp;Điện thoại
                            </span>
                        </b>
                    </p>
                </div>
                <div className="checkbox-sort">
                    <div className="box-fast-delivery">
                        <a className="fast-delivery" href="#">
                            <input type="checkbox" /> &nbsp;
                            <i className="fa fa-bolt"></i>
                            <span>&nbsp;GIAO NHANH</span>
                        </a>
                    </div>
                    <div className="box-discount">
                        <a className="discount" href="#">
                            <input type="checkbox" />
                            <span>&nbsp;Giảm giá</span>
                        </a>
                    </div>
                    <div className="box-installment">
                        <a className="installment" href="#">
                            <input type="checkbox" />
                            <span>&nbsp;Góp 0%</span>
                        </a>
                    </div>
                    <div className="box-unique">
                        <a className="unique" href="#">
                            <input type="checkbox" />
                            <span>&nbsp;Độc quyền</span>
                        </a>
                    </div>
                    <div className="box-new">
                        <a className="new" href="#">
                            <input type="checkbox" />
                            <span>&nbsp;Mới</span>
                        </a>
                    </div>
                </div>
                <div className="select-sort">
                    <p className="sort-content">Xếp theo:&nbsp;</p>
                    <div className="sort-select-active">
                        <span>Nổi bật&nbsp;</span>
                        <i className="fa fa-caret-down"></i>
                    </div>
                </div>
            </div>

        {/*
            show all products include:
                + status
                + image
                + product name
                + product memory (RAM/ROM)
                + product price (old)
                + discount percent
                + product price (new)
                + product rating
                + total rating
         */}

            <div className="show-all-products">
                <ul className="list-product">
                    <li className="list-item">
                        <a className="item-container" href="#">
                            <div className="item-label">
                                <span className="label-content">Trả góp 0%</span>
                            </div>
                            <div className="item-content">
                                <img className="item-element" src={productImg} alt=""/>
                            </div>
                            <h3>Product 1</h3>
                            <div className="product-group">
                                <ul className="product-memory">
                                    <li className="memory-item">8GB/128GB</li>
                                    <li className="memory-item">12GB/256GB</li>
                                    <li className="memory-item">12GB/512GB</li>
                                </ul>
                            </div>
                            <div className="box-old-price">
                                <p className="old-price">30.990.000₫</p>
                                <span className="discount-percent">&nbsp;9%</span>
                            </div>
                            <strong className="new-price">27.990.000₫</strong>
                            <div className="rating">
                                <div className="star-rating">
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star-dark"></i>
                                    <i className="fa fa-star star-dark"></i>
                                </div>
                                <div className="total-rating"><span>&nbsp;(45)</span></div>
                            </div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a className="item-container" href="#">
                            <div className="item-label">
                                <span className="label-content">Trả góp 0%</span>
                            </div>
                            <div className="item-content">
                                <img className="item-element" src={productImg} alt=""/>
                            </div>
                            <h3>Product 2</h3>
                            <div className="product-group">
                                <ul className="product-memory">
                                    <li className="memory-item">8GB/128GB</li>
                                    <li className="memory-item">12GB/256GB</li>
                                    <li className="memory-item">12GB/512GB</li>
                                </ul>
                            </div>
                            <div className="box-old-price">
                                <p className="old-price">30.990.000₫</p>
                                <span className="discount-percent">&nbsp;9%</span>
                            </div>
                            <strong className="new-price">27.990.000₫</strong>
                            <div className="rating">
                                <div className="star-rating">
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star-dark"></i>
                                    <i className="fa fa-star star-dark"></i>
                                </div>
                                <div className="total-rating"><span>&nbsp;(45)</span></div>
                            </div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a className="item-container" href="#">
                            <div className="item-label">
                                <span className="label-content">Trả góp 0%</span>
                            </div>
                            <div className="item-content">
                                <img className="item-element" src={productImg} alt=""/>
                            </div>
                            <h3>Product 3</h3>
                            <div className="product-group">
                                <ul className="product-memory">
                                    <li className="memory-item">8GB/128GB</li>
                                    <li className="memory-item">12GB/256GB</li>
                                    <li className="memory-item">12GB/512GB</li>
                                </ul>
                            </div>
                            <div className="box-old-price">
                                <p className="old-price">30.990.000₫</p>
                                <span className="discount-percent">&nbsp;9%</span>
                            </div>
                            <strong className="new-price">27.990.000₫</strong>
                            <div className="rating">
                                <div className="star-rating">
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star-dark"></i>
                                    <i className="fa fa-star star-dark"></i>
                                </div>
                                <div className="total-rating"><span>&nbsp;(45)</span></div>
                            </div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a className="item-container" href="#">
                            <div className="item-label">
                                <span className="label-content">Trả góp 0%</span>
                            </div>
                            <div className="item-content">
                                <img className="item-element" src={productImg} alt=""/>
                            </div>
                            <h3>Product 4</h3>
                            <div className="product-group">
                                <ul className="product-memory">
                                    <li className="memory-item">8GB/128GB</li>
                                    <li className="memory-item">12GB/256GB</li>
                                    <li className="memory-item">12GB/512GB</li>
                                </ul>
                            </div>
                            <div className="box-old-price">
                                <p className="old-price">30.990.000₫</p>
                                <span className="discount-percent">&nbsp;9%</span>
                            </div>
                            <strong className="new-price">27.990.000₫</strong>
                            <div className="rating">
                                <div className="star-rating">
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star-dark"></i>
                                    <i className="fa fa-star star-dark"></i>
                                </div>
                                <div className="total-rating"><span>&nbsp;(45)</span></div>
                            </div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a className="item-container" href="#">
                            <div className="item-label">
                                <span className="label-content">Trả góp 0%</span>
                            </div>
                            <div className="item-content">
                                <img className="item-element" src={productImg} alt=""/>
                            </div>
                            <h3>Product 5</h3>
                            <div className="product-group">
                                <ul className="product-memory">
                                    <li className="memory-item">8GB/128GB</li>
                                    <li className="memory-item">12GB/256GB</li>
                                    <li className="memory-item">12GB/512GB</li>
                                </ul>
                            </div>
                            <div className="box-old-price">
                                <p className="old-price">30.990.000₫</p>
                                <span className="discount-percent">&nbsp;9%</span>
                            </div>
                            <strong className="new-price">27.990.000₫</strong>
                            <div className="rating">
                                <div className="star-rating">
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star-dark"></i>
                                    <i className="fa fa-star star-dark"></i>
                                </div>
                                <div className="total-rating"><span>&nbsp;(45)</span></div>
                            </div>
                        </a>
                    </li>
                    <li className="list-item">item 6</li>
                    <li className="list-item">item 7</li>
                    <li className="list-item">item 8</li>
                    <li className="list-item">item 9</li>
                    <li className="list-item">item 10</li>
                    <li className="list-item">item 11</li>
                    <li className="list-item">item 12</li>
                    <li className="list-item">item 13</li>
                    <li className="list-item">item 14</li>
                    <li className="list-item">item 15</li>
                </ul>
            </div>
        </div>
    </div>
  );
}