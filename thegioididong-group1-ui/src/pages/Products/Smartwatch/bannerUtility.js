import styles from './Smartwatch.module.scss';
import clsx from 'clsx';

export default function BannerUtility() {

    const bannerUtilityLogo = 'https://cdn.tgdd.vn/2021/08/banner/Datie%CC%A3%CC%82ni%CC%81ch-1200x200.png'

    const bannerSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const bannerUtilityImg = 'https://cdn.tgdd.vn/Products/Images/7077/229044/apple-watch-s6-40mm-vien-nhom-day-cao-su-do-thumb-600x600.jpg'

    const brandUtilityImg = 'https://cdn.tgdd.vn/2020/10/content/icon5-50x50.png'

    const sortBy = [
        'Nổi bật',
        'Chống nước',
        'Có nghe gọi',
        'Đo nồng độ Oxy',
        'Bộ nhớ lưu trữ nhạc'
    ];

    return(
        <div className={styles.banner__utility} id='tienich'>
            <div className={styles.block__banner}>
                {/* eslint-disable-next-line */}
                <a href='javascript:void(0)' className={styles.banner__link}>
                    <img className={styles.banner__img} src={bannerUtilityLogo} alt='' />
                </a>
            </div>

            <div className={styles.sort__by}>
                {sortBy.map((itemSort) => (
                    <div className={styles.sort__by__item}>
                        {/* eslint-disable-next-line */}
                        <a href='javascript:void(0)'>
                            <p>{itemSort}</p>
                        </a>
                    </div>
                ))}
            </div>

            <div className={styles.list__item__block}>
                <ul className={styles.list__show}>
                    {bannerSize.map(() => (
                        <li className={styles.show__item}>
                            {/* eslint-disable-next-line */}
                            <a className={styles.show__container} href='javascript:void(0)'>
                                <div className={styles.show__content}>
                                    <img className={styles.show__element} src={bannerUtilityImg} alt=''/>
                                </div>
                                <p className={styles.brand__discount}>
                                    <img className={styles.brand__deal} 
                                            src={brandUtilityImg}
                                            alt=''
                                    />
                                    <span className={styles.brand__title}>hotsale giảm sốc</span>
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
                </ul>
            </div>
        </div>
    );
}