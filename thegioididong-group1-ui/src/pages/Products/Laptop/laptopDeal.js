import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clsx from 'clsx';
import Slider from 'react-slick';
import styles from './Laptop.module.scss'

export default function LaptopDeal() {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const dealImg = 'https://cdn.tgdd.vn/Products/Images/44/263980/acer-nitro-5-gaming-an515-45-r6ev-r5-5600h-8gb-600x600.jpg'

    const brandImg = 'https://cdn.tgdd.vn/2022/07/content/50x50-50x50-5.png'

    let dealItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    return(
        <div className={styles.deal__container}>
            <div className={styles.deal__title}>
                {/* eslint-disable-next-line */}
                <a href='javascript:void(0)' className={styles.deal__link}>
                    <span className={styles.first__content}>DEAL SỐC</span>
                    <span className={styles.second__content}>GIẢM TỚI 10.000.000₫</span>
                </a>
            </div>
            <div className={styles.shock__deal__show}>
                <ul className={styles.list__show}>
                    <Slider {...settings}>
                            {dealItem.map(() => (
                                <li className={styles.show__item}>
                                    {/* eslint-disable-next-line */}
                                    <a className={styles.show__container} href='javascript:void(0)'>
                                        <div className={styles.show__content}>
                                            <img className={styles.show__element} src={dealImg} alt=''/>
                                        </div>
                                        <p className={styles.brand__discount}>
                                            <img className={styles.brand__deal} 
                                                 src={brandImg}
                                                 alt=''
                                            />
                                            <span className={styles.brand__title}>Sinh nhật giảm sốc</span>
                                        </p>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)'>
                                            <h3 className={styles.show__name}>Laptop Acer Nitro 5 Gaming AN515 45 R6EV R5 5600H...</h3>
                                        </a>
                                        <div className={styles.show__group}>
                                            <ul className={styles.show__memory}>
                                                <li className={styles.memory__deal}>RAM 8 GB</li>
                                                <li className={styles.memory__deal}>SSD 512 GB</li>
                                            </ul>
                                        </div>
                                        <p className={styles.deal__status}>Online giá rẻ</p>
                                        <div className={styles.deal__old__price}>
                                            <p className={styles.deal__price}>30.990.000₫</p>
                                            <span className={styles.discount__deal}>&nbsp;-9%</span>
                                        </div>
                                        <strong className={styles.new__deal__price}>27.990.000₫</strong>
                                        <p className={styles.deal__bonus}>Quà <b>100.000₫</b></p>
                                        <div className={styles.deal__rating}>
                                            <div className={styles.deal__star__rating}>
                                                <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                                <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                                <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                                <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                                <i className={clsx('fa fa-star', styles.star__deal__dark)}></i>
                                            </div>
                                            <div className={styles.total__rating}><span>&nbsp;45</span></div>
                                        </div>
                                        <div className={styles.utility}>
                                            <p className={styles.utility__item}>
                                                <span>M.Hình</span>
                                                <span>15.6", Full HD, 144Hz</span>
                                            </p>
                                            <p className={styles.utility__item}>
                                                <span>CPU</span>
                                                <span>Ryzen 5, 5600H, 3.3GHz</span>
                                            </p>
                                            <p className={styles.utility__item}>
                                                <span>Card</span>
                                                <span>GTX 1650 4GB</span>
                                            </p>
                                            <p className={styles.utility__item}>
                                                <span>Pin</span>
                                                <span>4-cell, 57Wh</span>
                                            </p>
                                            <p className={styles.utility__item}>
                                                <span>Nhẹ</span>
                                                <span>2.2 kg</span>
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            ))}
                    </Slider>
                </ul>
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
                            right: -10,
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
                            left: -10,
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