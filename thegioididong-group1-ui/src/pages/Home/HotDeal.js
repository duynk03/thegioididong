import { Card } from 'antd';
import axios from 'axios';
import { Image } from 'cloudinary-react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styles from './Home.module.scss';
const cloudName = 'dlefvc2xe';
const PRODUCTS_TOP20_HOTDEAL_URL = 'http://localhost:8084/api/v1/products/hotDeal';
function HotDeal() {
    let settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        centerPadding: '20px',
        slidesToShow: 5,
        slidesToScroll: 5,
        speed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        className: 'slider',
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(PRODUCTS_TOP20_HOTDEAL_URL).then((res) => {
            setProducts(res.data);
        });
    }, []);

    return (
        <div className={styles.hotdeal}>
            <div className={styles.promo__banner}>
                <div className={clsx(styles.promo__top, styles.clearfix)}>
                    {/* eslint-disable-next-line */}
                    <a href="javascript:void(0)">
                        <img
                            style={{ cursor: 'pointer' }}
                            src="https://cdn.tgdd.vn/2022/05/banner/TGDD-Sansale-desk-1200x120-3.png"
                            alt="Hotsale TGDD Desk"
                            width="1200"
                            height="120"
                        />
                    </a>
                </div>
                <div className={styles.promo__slider}>
                    <Slider {...settings}>
                        {products.map((product, index) => (
                            <div className={styles.promo__item} key={index}>
                                {/* eslint-disable-next-line */}
                                <a href="javascript:void(0)">
                                    <Card
                                        hoverable
                                        style={{ width: '100%', margin: '0 5' }}
                                        cover={
                                            <Image
                                                alt={product.name}
                                                cloudName={cloudName}
                                                publicId={product.images[0]?.source}
                                                style={{ width: 206 }}
                                            />
                                        }
                                    >
                                        <h3>{product.name}</h3>
                                        <p className={styles.item__txt}>{product.state}</p>
                                        <strong className={styles.price}>
                                            {product.price
                                                .toString()
                                                .split('')
                                                .reverse()
                                                .reduce((prev, next, index) => {
                                                    return (index % 3 ? next : next + '.') + prev;
                                                })}
                                            ₫
                                        </strong>
                                        <p className={styles.item__gift}></p>
                                    </Card>
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', zIndex: 2, right: 10 }} onClick={onClick} />;
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', zIndex: 2, left: -12 }} onClick={onClick} />;
}

export default HotDeal;
