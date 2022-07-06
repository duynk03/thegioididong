import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import styles from '~/components/Layout/ProductLayout/Product.module.scss';
import '~/components/Layout/ProductLayout/productSlider.scss';

export default function TabletSlider (){

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
        'https://cdn.tgdd.vn/2022/07/banner/18-tab-800-200-800x200-1.png',
        'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-135.png',
        'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-173.png',
        'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-5.png',
        'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-174.png',
        'https://cdn.tgdd.vn/2022/07/banner/18-mastel-800-200-800x200.png',
        'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-3.png'
    ];
    const topImg = 'https://cdn.tgdd.vn/2022/07/banner/sticky-huaweit10-390-97-390x97.png';
    const botImg = 'https://cdn.tgdd.vn/2022/06/banner/sticky-tab-8-390-97-copy-5-390x97.png';

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