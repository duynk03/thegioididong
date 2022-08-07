import './productDetail.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from 'cloudinary-react';
function ProductDetail() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const cloudName = 'dlefvc2xe';
    const urlSplit = window.location.href.split('/');
    const id = urlSplit[urlSplit.length - 1];
    let [data, setData] = useState([]);
    const navigate = useNavigate();
    if (isNaN(id)) {
        navigate('/');
    }
    useEffect(() => {
        axios.get('http://localhost:8084/api/v1/products/' + id).then((response) => {
            setData([response.data]);
        });
        // eslint-disable-next-line
    }, []);
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {data.map((phone, index) => (
                <div key={index} style={{ width: '55%' }}>
                    <ul className="breadcrumb">
                        <li>
                            <a
                                href={
                                    phone.category
                                        ? '/dtdd'
                                        : phone.category
                                        ? '/laptop'
                                        : phone.category
                                        ? '/tablet'
                                        : '/smartwatch'
                                }
                            >
                                {phone.category}
                            </a>
                        </li>
                        <li>
                            <span>›</span>
                            {/* eslint-disable-next-line */}
                            <a href="#">
                                {phone.category} {phone.os} ({phone.manufacturer})
                            </a>
                        </li>
                    </ul>
                    <h1 className="product-title">{phone.name}</h1>
                    <div className="main">
                        <Fragment>
                            <div className="Left">
                                <div>
                                    <div className="product-Slider">
                                        <div className="left-Slider">
                                            <Slider className="left-Content" {...settings}>
                                                {/* <img alt="" className='container-image' scr={phone.images[0]?.source} /> */}
                                                <Image
                                                    className="container-image"
                                                    cloudName={cloudName}
                                                    publicId={phone.images[0]?.source}
                                                />
                                            </Slider>
                                        </div>
                                    </div>
                                    <div className="article content-t-wrap">
                                        <div className="article__content short">
                                            <h3 className="article__content__title">Thông tin sản phẩm</h3>
                                            <div className="content-article">
                                                <h3 style={{ textAlign: 'justify' }}>{phone.description}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                        <div className="box_right">
                            <div className="box_saving">
                                <div className="bs_title">
                                    <img
                                        src="//cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/TGDD/Mobile/title_onlinesaving.png"
                                        alt=""
                                    />
                                    <div>
                                        {phone.saleOff === 0 ? (
                                            <strong>
                                                {(phone.price - (phone.saleOff * phone.price) / 100)
                                                    .toString()
                                                    .split('')
                                                    .reverse()
                                                    .reduce((prev, next, index) => {
                                                        return (index % 3 ? next : next + '.') + prev;
                                                    })}
                                                ₫
                                            </strong>
                                        ) : (
                                            <div>
                                                <strong>
                                                    {(phone.price - (phone.saleOff * phone.price) / 100)
                                                        .toString()
                                                        .split('')
                                                        .reverse()
                                                        .reduce((prev, next, index) => {
                                                            return (index % 3 ? next : next + '.') + prev;
                                                        })}
                                                    ₫
                                                </strong>
                                                <em>
                                                    {phone.price
                                                        .toString()
                                                        .split('')
                                                        .reverse()
                                                        .reduce((prev, next, index) => {
                                                            return (index % 3 ? next : next + '.') + prev;
                                                        })}
                                                    ₫
                                                </em>
                                                <i>(-{phone.saleOff}%)</i>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="bs_content">
                                    <div className="bs_rule">
                                        <ul>
                                            <li>Chỉ áp dụng giao tận nơi.</li>
                                            <li>Thời gian nhận hàng: 1 ngày sau khi đặt</li>
                                            <li>Không áp dụng chung với khuyến mãi khác.</li>
                                            <li>Mỗi khách hàng (1 SĐT) chỉ được mua 1 sản phẩm</li>
                                            <li>Áp dụng góp Online qua thẻ tín dụng</li>
                                            <li>Bắt buộc khui hộp và kích hoạt khi nhận máy</li>
                                            <li>Không áp dụng góp nhà tài chính</li>
                                            <li>Số lượng có hạn, áp dụng tùy tỉnh thành</li>
                                            <li>Hư gì đổi nấy trong 15 ngày nếu lỗi do nhà sản xuất</li>
                                        </ul>
                                    </div>

                                    <div className="block-button saving">
                                        {/* eslint-disable-next-line */}
                                        <a
                                            href="#"
                                            className="btn-buynow one red jsBuy"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                let item = localStorage.getItem('cart');
                                                let cart = JSON.parse(item);
                                                if (cart === null) {
                                                    localStorage.setItem('cart', JSON.stringify([]));
                                                    cart = JSON.parse(localStorage.getItem('cart'));
                                                }
                                                let isIncludes = false;
                                                for (let i = 0; i < cart.length; i++) {
                                                    if (cart[i].product.id === phone.id) {
                                                        cart[i].quantity += 1;
                                                        isIncludes = true;
                                                        break;
                                                    }
                                                }
                                                if (!isIncludes) {
                                                    cart.push({
                                                        product: phone,
                                                        quantity: 1,
                                                    });
                                                }
                                                localStorage.setItem('cart', JSON.stringify(cart));
                                                navigate('/cart');
                                            }}
                                        >
                                            MUA NGAY GIÁ{' '}
                                            {(phone.price - (phone.saleOff * phone.price) / 100)
                                                .toString()
                                                .split('')
                                                .reverse()
                                                .reduce((prev, next, index) => {
                                                    return (index % 3 ? next : next + '.') + prev;
                                                })}
                                            ₫
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="border7"></div>
                            <p className="parameter__title">
                                Cấu hình {phone.category} {phone.name}
                            </p>
                            <div className="parameter">
                                {phone.category === 'điện thoại' ? (
                                    <ul className="parameter__list active">
                                        <li>
                                            <p className="lileft">Màn hình:</p>
                                            <div className="liright">
                                                <span className="comma">{phone.phone.screen}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Hệ điều hành:</p>
                                            <div className="liright">
                                                <span className="">{phone.os}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Camera sau:</p>
                                            <div className="liright">
                                                <span className="">{phone.phone.rearCamera}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Camera trước:</p>
                                            <div className="liright">
                                                <span className="">{phone.phone.frontCamera}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Chip:</p>
                                            <div className="liright">
                                                <span className="">{phone.phone.chip}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">RAM:</p>
                                            <div className="liright">
                                                <span className="">{phone.phone.ram}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Bộ nhớ trong:</p>
                                            <div className="liright">
                                                <span className="">{phone.phone.rom}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">SIM:</p>
                                            <div className="liright">
                                                <span className="">{phone.phone.sim}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Pin, Sạc:</p>
                                            <div className="liright">
                                                <span className="">{phone.phone.pin}</span>
                                            </div>
                                        </li>
                                    </ul>
                                ) : phone.category === 'laptop' ? (
                                    <ul className="parameter__list active">
                                        <li>
                                            <p className="lileft">CPU:</p>
                                            <div className="liright">
                                                <span className="comma">{phone.laptop.cpu}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Rom:</p>
                                            <div className="liright">
                                                <span className="">{phone.laptop.rom}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">RAM:</p>
                                            <div className="liright">
                                                <span className="">{phone.laptop.ram}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Màn hình:</p>
                                            <div className="liright">
                                                <span className="">{phone.laptop.screen}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Chip:</p>
                                            <div className="liright">
                                                <span className="">{phone.laptop.chip}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Cổng kết nối:</p>
                                            <div className="liright">
                                                <span className="">{phone.laptop.connector}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Hệ điều hành:</p>
                                            <div className="liright">
                                                <span className="">{phone.os}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Thiết kế:</p>
                                            <div className="liright">
                                                <span className="">{phone.laptop.design}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Thời điểm ra mắt:</p>
                                            <div className="liright">
                                                <span className="">{phone.laptop.released}</span>
                                            </div>
                                        </li>
                                    </ul>
                                ) : phone.category === 'tablet' ? (
                                    <ul className="parameter__list active">
                                        <li>
                                            <p className="lileft">Màn hình:</p>
                                            <div className="liright">
                                                <span className="comma">{phone.tablet.screen}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Hệ điều hành:</p>
                                            <div className="liright">
                                                <span className="">{phone.os}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Camera sau:</p>
                                            <div className="liright">
                                                <span className="">{phone.tablet.rearCamera}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Camera trước:</p>
                                            <div className="liright">
                                                <span className="">{phone.tablet.frontCamera}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Chip:</p>
                                            <div className="liright">
                                                <span className="">{phone.tablet.chip}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">RAM:</p>
                                            <div className="liright">
                                                <span className="">{phone.tablet.ram}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Bộ nhớ trong:</p>
                                            <div className="liright">
                                                <span className="">{phone.tablet.rom}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">SIM:</p>
                                            <div className="liright">
                                                <span className="">{phone.tablet.sim}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Pin, Sạc:</p>
                                            <div className="liright">
                                                <span className="">{phone.tablet.pin}</span>
                                            </div>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul className="parameter__list active">
                                        <li>
                                            <p className="lileft">Màn hình:</p>
                                            <div className="liright">
                                                <span className="comma">{phone.smartwatch.screen}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Kết nối với hệ điều hành:</p>
                                            <div className="liright">
                                                <span className="">{phone.os}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Thời lượng pin:</p>
                                            <div className="liright">
                                                <span className="">{phone.smartwatch.pinTime}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Tính năng:</p>
                                            <div className="liright">
                                                <span className="">{phone.smartwatch.feature}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="lileft">Hãng:</p>
                                            <div className="liright">
                                                <span className="">{phone.manufacturer}</span>
                                            </div>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ProductDetail;
