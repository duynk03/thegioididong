import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clsx from 'clsx';
import Slider from 'react-slick';
import styles from './Smartwatch.module.scss'

export default function ShockDeal() {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const dealImg = 'https://cdn.tgdd.vn/Products/Images/7077/229044/apple-watch-s6-40mm-vien-nhom-day-cao-su-do-thumb-600x600.jpg'

    const brandImg = 'https://cdn.tgdd.vn/2020/10/content/icon5-50x50.png'

    let dealItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    return(
        <div className={styles.deal__container}>
            <div className={styles.deal__title}>
                {/* eslint-disable-next-line */}
                <a href='javascript:void(0)' className={styles.deal__link}>
                    <span className={styles.first__content}>DEAL SỐC</span>
                    <span className={styles.second__content}>GIẢM TỚI 35%</span>
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
                                            <span className={styles.brand__title}>Hotsale giảm sốc</span>
                                        </p>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)'>
                                            <h3 className={styles.show__name}>Apple Watch S6 40mm viền nhôm dây silicone</h3>
                                        </a>
                                        <div className={styles.show__group}>
                                            <ul className={styles.show__memory}>
                                                <li className={styles.memory__deal}>Có chống nước</li>
                                                <li className={styles.memory__deal}>Đo nồng độ oxy (SpO2)</li>
                                            </ul>
                                        </div>
                                        <div className={styles.deal__old__price}>
                                            <p className={styles.deal__price}>9.990.000₫</p>
                                            <span className={styles.discount__deal}>&nbsp;-18%</span>
                                        </div>
                                        <strong className={styles.new__deal__price}>8.191.000₫</strong>
                                        <div className={styles.deal__rating}>
                                            <div className={styles.deal__star__rating}>
                                                <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                                <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                                <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                                <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                                <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                            </div>
                                            <div className={styles.total__rating}><span>&nbsp;31</span></div>
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