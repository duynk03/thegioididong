import './Home.scss';
import Slider from 'react-slick';
import clsx from 'clsx';
import styles from './Home.module.scss';

function SliderBanner() {
    let settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        centerPadding: '10px',
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        className: 'slider',
    };
    return (
        <div className={styles.bg__tophome}>
            <div className={clsx(styles.home__slider, styles.big__campain)}>
                <div className={styles.slider__banner}>
                    <Slider {...settings}>
                        <div className={styles.slide__item}>
                            <img
                                width="600"
                                height="180"
                                src="/images/SliderBanner/s22-720-220-720x220-1.png"
                                alt="banner giam gia, khuyen mai"
                            ></img>
                        </div>
                        <div className={styles.slide__item}>
                            <img
                                width="600"
                                height="180"
                                src="/images/SliderBanner/poco40-720-220-720x220-3.png"
                                alt="banner giam gia, khuyen mai"
                            ></img>
                        </div>
                        <div className={styles.slide__item}>
                            <img
                                width="600"
                                height="180"
                                src="/images/SliderBanner/xk-13proxanh-720-220-720x220-2.png"
                                alt="banner giam gia, khuyen mai"
                            ></img>
                        </div>
                        <div className={styles.slide__item}>
                            <img
                                width="600"
                                height="180"
                                src="/images/SliderBanner/720-220-720x220-255.png"
                                alt="banner giam gia, khuyen mai"
                            ></img>
                        </div>
                        <div className={styles.slide__item}>
                            <img
                                width="600"
                                height="180"
                                className="slide-product-1"
                                src="/images/SliderBanner/720-220-720x220-106.png"
                                alt="banner giam gia, khuyen mai"
                            ></img>
                        </div>
                        <div className={styles.slide__item}>
                            <img
                                width="600"
                                height="180"
                                className="slide-product-1"
                                src="/images/SliderBanner/720-220-720x220-123.png"
                                alt="banner giam gia, khuyen mai"
                            ></img>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}
function NextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', zIndex: 2, right: -6 }} onClick={onClick} />;
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', zIndex: 2 }} onClick={onClick} />;
}

export default SliderBanner;
