import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import styles from './Phone.module.scss';
import '~/components/Layout/ProductLayout/productSlider.scss';
export default function PhoneSlider (){

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    
    const sliderImg = [
        'https://cdn.tgdd.vn/2022/06/banner/18-aseri-800-200-800x200.png',
        'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-175.png',
        'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-185.png',
        'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-172.png',
        'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-29.png',
        'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-4.png',
        'https://cdn.tgdd.vn/2022/06/banner/18-realme-800-200-800x200.png',
        'https://cdn.tgdd.vn/2022/07/banner/18-s22-800-200-800x200.png'
    ];
    const topImg = 'https://cdn.tgdd.vn/2022/06/banner/Sticky-390x97-1.png';
    const botImg = 'https://cdn.tgdd.vn/2022/05/banner/sticky-a95-390-97-390x97.png';

    return (
        
        <div className={styles.product__slider}>
            <div  className={styles.left__slider} >
                <Slider {...settings}>
                    {sliderImg.map((item) => (
                        <div className={styles.container__img}>
                            {/* eslint-disable-next-line */}
                            <a href='javascript:void(0)'>
                                <img src={item} alt='' />
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className={styles.right__slider}>
                <div className={styles.suggest__item__top}>
                    {/* eslint-disable-next-line */}
                    <a href='javascript:void(0)'>
                        <img className={styles.img__top} src={topImg} alt='' />
                    </a>
                </div>
                <div className={styles.suggest__item__bot}>
                    {/* eslint-disable-next-line */}
                    <a href='javascript:void(0)'>
                        <img className={styles.img__bot} src={botImg} alt='' />
                    </a>
                </div>
            </div>
        </div>
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className}
                style={{ ...style, 
                            display: 'block', 
                            zIndex: 2, 
                            right: 5,
                            background: '#e2e2e2',
                            borderRadius: 3, 
                            height: 'fit-content',
                            width: 'fit-content',
                            paddingTop: 20,
                            paddingBottom: 15,
                            opacity: .8
                            }}
                onClick={onClick} />;
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} 
                style={{ ...style, 
                            display: 'block', 
                            zIndex: 2, 
                            left: 5,
                            background: '#e2e2e2',
                            borderRadius: 3, 
                            height: 'fit-content',
                            width: 'fit-content',
                            paddingTop: 20,
                            paddingBottom: 15,
                            opacity: .8
                        }} 
                onClick={onClick} />;
}