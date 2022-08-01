import styles from './Smartwatch.module.scss';
import clsx from 'clsx';

export default function BannerSport() {

    const bannerSportLogo = 'https://cdn.tgdd.vn/2021/08/banner/The%CC%82%CC%89thao-1200x200.png'

    const bannerSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const bannerSportImg = 'https://cdn.tgdd.vn/Products/Images/7077/239369/venu-sq-music-xanh-duong-thumb-1-1-600x600.jpg'

    const brandSportImg = 'https://cdn.tgdd.vn/2020/10/content/icon6-50x50.png'

    const sortBy = [
        'Nổi bật',
        'Chạy bộ',
        'Bơi lội',
        'Đạp xe',
        'Thể thao đa môn',
        'Garmin',
        'Suunto'
    ];

    return(
        <div className={styles.banner__sport} id='sport'>
            <div className={styles.block__banner}>
                {/* eslint-disable-next-line */}
                <a href='javascript:void(0)' className={styles.banner__link}>
                    <img className={styles.banner__img} src={bannerSportLogo} alt='' />
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
                                    <img className={styles.show__element} src={bannerSportImg} alt=''/>
                                </div>
                                <p className={styles.brand__discount}>
                                    <img className={styles.brand__deal} 
                                            src={brandSportImg}
                                            alt=''
                                    />
                                    <span className={styles.brand__title}>vnpay giảm 300k</span>
                                </p>
                                {/* eslint-disable-next-line */}
                                <a href='javascript:void(0)'>
                                    <h3 className={styles.show__name}>Garmin Venu SQ Music dây silicone</h3>
                                </a>
                                <div className={styles.show__group}>
                                    <ul className={styles.show__memory}>
                                        <li className={styles.memory__deal}>Đo nồng độ oxy (SpO2)</li>
                                    </ul>
                                </div>
                                <strong className={styles.new__deal__price}>6.190.000₫</strong>
                                <div className={styles.deal__rating}>
                                    <div className={styles.deal__star__rating}>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal__dark)}></i>
                                    </div>
                                    <div className={styles.total__rating}><span>&nbsp;10</span></div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}