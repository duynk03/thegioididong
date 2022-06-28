import React from "react";
import productImg from "../../../assets/image1.jpg";
import "./productShowAll.scss";
export default function ShowAll (){

    return (

        // show all products include:
        //     + status
        //     + image
        //     + product name
        //     + product memory (RAM/ROM)
        //     + product price (old)
        //     + discount percent
        //     + product price (new)
        //     + product rating
        //     + total rating

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
    );
}