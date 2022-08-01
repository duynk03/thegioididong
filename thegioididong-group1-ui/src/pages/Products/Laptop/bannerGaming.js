import styles from './Laptop.module.scss';
import clsx from 'clsx';

export default function BannerGaming() {

    const bannerGamingLogo = 'https://cdn.tgdd.vn/2021/08/banner/gamingdes-1200x200.jpg'

    const bannerSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const bannerGamingImg = 'https://cdn.tgdd.vn/Products/Images/44/274921/asus-tuf-gaming-fx517zc-i5-hn077w-190322-114627-600x600.jpg'

    const brandGamingImg = 'https://cdn.tgdd.vn/2020/10/content/icon2-50x50.png'

    return(
        <div className={styles.banner__gaming} id='ltgaming'>
            <div className={styles.block__banner}>
                {/* eslint-disable-next-line */}
                <a href='javascript:void(0)' className={styles.banner__link}>
                    <img className={styles.banner__img} src={bannerGamingLogo} alt='' />
                </a>
            </div>
            <div className={styles.list__item__block}>
                <ul className={styles.list__show}>
                    {bannerSize.map(() => (
                        <li className={styles.show__item}>
                            {/* eslint-disable-next-line */}
                            <a className={styles.show__container} href='javascript:void(0)'>
                                <div className={styles.show__content}>
                                    <img className={styles.show__element} src={bannerGamingImg} alt=''/>
                                </div>
                                <p className={styles.brand__discount}>
                                    <img className={styles.brand__deal} 
                                            src={brandGamingImg}
                                            alt=''
                                    />
                                    <span className={styles.brand__title}>Intel Gen 12</span>
                                </p>
                                {/* eslint-disable-next-line */}
                                <a href='javascript:void(0)'>
                                    <h3 className={styles.show__name}>Asus TUF Gaming FX517ZC i5 12450H (HN077W)</h3>
                                </a>
                                <div className={styles.show__group}>
                                    <ul className={styles.show__memory}>
                                        <li className={styles.memory__deal}>RAM 8 GB</li>
                                        <li className={styles.memory__deal}>SSD 512 GB</li>
                                    </ul>
                                </div>
                                <p className={styles.deal__status}>Online giá rẻ</p>
                                <div className={styles.deal__old__price}>
                                    <p className={styles.deal__price}>27.990.000₫</p>
                                    <span className={styles.discount__deal}>&nbsp;-12%</span>
                                </div>
                                <strong className={styles.new__deal__price}>24.490.000₫</strong>
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
                                        <span>i5, 12450H, 3.3GHz</span>
                                    </p>
                                    <p className={styles.utility__item}>
                                        <span>Card</span>
                                        <span>RTX 3050 4GB</span>
                                    </p>
                                    <p className={styles.utility__item}>
                                        <span>Pin</span>
                                        <span>4-cell, 76Wh</span>
                                    </p>
                                    <p className={styles.utility__item}>
                                        <span>Nhẹ</span>
                                        <span>2 kg</span>
                                    </p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}