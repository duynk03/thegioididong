import '../Home.scss';
import Slider from 'react-slick';
import styles from '../Home.module.scss';

function TopSlider() {
    let settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        centerPadding: '10px',
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        className: 'slider',
    };

    let item = [1, 2, 3, 4, 5, 6];
    return (
        <Slider {...settings}>
            {item.map((index) => (
                <div className={styles.slide__item} key={index}>
                    <img
                        width="380"
                        height="200"
                        src="/images/Samsung/Samsung-A-series-380x200.png"
                        alt="banner giam gia, khuyen mai"
                    ></img>
                </div>
            ))}
        </Slider>
    );
}
function NextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', zIndex: 2, right: 4 }} onClick={onClick} />;
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', zIndex: 2 }} onClick={onClick} />;
}

export default TopSlider;
