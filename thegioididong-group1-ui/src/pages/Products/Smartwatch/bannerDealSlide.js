import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './Smartwatch.module.scss'

export default function DealSilde() {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const dealSlideImg = [
        'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-31.png',
        'https://cdn.tgdd.vn/2022/06/banner/w4-800-200-800x200-2.png',
        'https://cdn.tgdd.vn/2022/06/banner/w4-800-200-800x200-2.png',
        'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-114.png',
        'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-114.png',
        'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-36.png',
        'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-36.png',
        'https://cdn.tgdd.vn/2022/06/banner/beu-800-200-800x200-1.png',
        'https://cdn.tgdd.vn/2022/06/banner/beu-800-200-800x200-1.png',
        'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-40.png',
        'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-40.png',
        'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-39.png'
    ];

    return(
        <div className={styles.deal__slide__container}>
            <ul className={styles.list__slide__show}>
                <Slider {...settings}>
                        {dealSlideImg.map((itemImg) => (
                            <li className={styles.show__slide__item}>
                                {/* eslint-disable-next-line */}
                                <a className={styles.show__slide__container} href='javascript:void(0)'>
                                    <div className={styles.show__slide__content}>
                                        <img className={styles.show__slide__element} src={itemImg} alt=''/>
                                    </div>
                                </a>
                            </li>
                        ))}
                </Slider>
            </ul>
        </div>
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className}
                style={{ ...style, 
                            display: 'block', 
                            zIndex: 2, 
                            right: 27
                            }}
                onClick={onClick} />;
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} 
                style={{ ...style, 
                            display: 'block', 
                            zIndex: 2, 
                            left: 3
                        }} 
                onClick={onClick} />;
}