import { Card } from 'antd';
import clsx from 'clsx';
import Slider from 'react-slick';
import styles from './Home.module.scss';

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

    const itemsize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
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
                        {itemsize.map(() => (
                            <div className={styles.promo__item}>
                                {/* eslint-disable-next-line */}
                                <a href="javascript:void(0)">
                                    <Card
                                        hoverable
                                        style={{ width: '100%', margin: '0 5' }}
                                        cover={
                                            <img
                                                alt="example"
                                                src="https://cdn.tgdd.vn/Products/Images/42/283114/samsung-galaxy-s22-ultra-5g-256gb-dac-biet-170622-061920-600x600.jpg"
                                                style={{ width: 206 }}
                                            />
                                        }
                                    >
                                        <h3>Samsung Galaxy S22 Ultra 5G 256GB phi??n b???n gi???i h???n</h3>
                                        <p className={styles.item__txt}>H??ng s???p v???</p>
                                        <strong className={styles.price}>33.990.000???</strong>
                                        <p className={styles.item__gift}>
                                            T???ng ?????ng h??? Galaxy Watch4, S???c ????i kh??ng d??y, Gi???m ngay 3 tri???u
                                        </p>
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
