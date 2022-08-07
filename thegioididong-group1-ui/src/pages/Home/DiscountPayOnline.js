import Slider from 'react-slick';
import styles from './Home.module.scss';

function DiscountPayOnline() {
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

    let items = [
        'https://cdn.tgdd.vn/2022/04/banner/VNPayiPhoneiPad-380x200.png',
        'https://cdn.tgdd.vn/2022/06/banner/EXB-500k-380x200.png',
        'https://cdn.tgdd.vn/2022/04/banner/380-200-380x200.png',
        'https://cdn.tgdd.vn/2022/04/banner/TPBank-380x200.png',
        'https://cdn.tgdd.vn/2022/05/banner/380x200-380x200-3.jpg',
        'https://cdn.tgdd.vn/2022/04/banner/VNPayToanbosanpham-380x200.png',
        'https://cdn.tgdd.vn/2022/04/banner/VNPaySamsungGarmin-380x200.png',
        'https://cdn.tgdd.vn/2022/04/banner/JCB-380x200.png',
        'https://cdn.tgdd.vn/2022/04/banner/VnPaylaptop-380x200.png',
    ];

    return (
        <div className={styles.discount__payonl}>
            <strong className={styles.name__box}>GIẢM THÊM KHI THANH TOÁN ONLINE</strong>

            <Slider {...settings}>
                {items.map((item, index) => (
                    <div className={styles.slide__item} key={index}>
                        <img width="380" height="200" src={item} alt="banner giam gia, khuyen mai"></img>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', zIndex: 2, right: 20 }} onClick={onClick} />;
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', zIndex: 2, left: -14 }} onClick={onClick} />;
}
export default DiscountPayOnline;
