import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import styles from '~/components/Layout/ProductLayout/Product.module.scss';
import '~/components/Layout/ProductLayout/productSlider.scss';
export default function LaptopSlider (){

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    
    const sliderImg = [
        'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-19.png',
        'https://cdn.tgdd.vn/2022/06/banner/mac-m2-800-200-800x200.png',
        'https://cdn.tgdd.vn/2022/07/banner/18-intel-800-200-800x200.png',
        'https://cdn.tgdd.vn/2022/06/banner/18-imac-800-200-800x200.png',
        'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-176.png',
        'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-22.png',
        'https://cdn.tgdd.vn/2022/06/banner/18-asus-800-200-800x200.png',
        'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-177.png',
        'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-178.png',
        'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-18.png',
        'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-103.png'
    ];
    const topImg = 'https://cdn.tgdd.vn/2022/05/banner/sticky-intel-390-97-390x97.png';
    const botImg = 'https://cdn.tgdd.vn/2022/06/banner/Xa-hang-Laptop-2-390x97-1.png';

    return (
        
        <div className={styles.product__slider}>
            <div  className={styles.left__slider} >
                <Slider {...settings}>
                    {sliderImg.map((item) => (
                        <div className={styles.container__img}>
                            <a href='#'>
                                <img src={item} alt='' />
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className={styles.right__slider}>
                <div className={styles.suggest__item__top}>
                    <a href='#'>
                        <img className={styles.img__top} src={topImg} alt='' />
                    </a>
                </div>
                <div className={styles.suggest__item__bot}>
                    <a href='#'>
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