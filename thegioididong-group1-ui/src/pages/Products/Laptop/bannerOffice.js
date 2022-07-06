import styles from './Laptop.module.scss';
import clsx from 'clsx';

export default function BannerOffice() {

    const bannerOfficeLogo = 'https://cdn.tgdd.vn/2021/08/banner/Hoctapvanphong-1200x200.jpg'

    const bannerSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const bannerOfficeImg = 'https://cdn.tgdd.vn/Products/Images/44/269603/lenovo-ideapad-3-14itl6-i5-82h700wavn-thumb-600x600.jpg'

    const brandOfficeImg = 'https://cdn.tgdd.vn/2022/07/content/50x50-50x50-5.png'

    return(
        <div className={styles.banner__macbook}>
            <div className={styles.block__banner}>
                {/* eslint-disable-next-line */}
                <a href='javascript:void(0)' className={styles.banner__link}>
                    <img className={styles.banner__img} src={bannerOfficeLogo} alt='' />
                </a>
            </div>
            <div className={styles.list__item__block}>
                <ul className={styles.list__show}>
                    {bannerSize.map(() => (
                        <li className={styles.show__item}>
                            {/* eslint-disable-next-line */}
                            <a className={styles.show__container} href='javascript:void(0)'>
                                <div className={styles.show__content}>
                                    <img className={styles.show__element} src={bannerOfficeImg} alt=''/>
                                </div>
                                <p className={styles.brand__discount}>
                                    <img className={styles.brand__deal} 
                                            src={brandOfficeImg}
                                            alt=''
                                    />
                                    <span className={styles.brand__title}>Sinh nhật giảm sốc</span>
                                </p>
                                {/* eslint-disable-next-line */}
                                <a href='javascript:void(0)'>
                                    <h3 className={styles.show__name}>Lenovo IdeaPad 3 14ITL6 i5 1135G7 (82H700WAVN)</h3>
                                </a>
                                <div className={styles.show__group}>
                                    <ul className={styles.show__memory}>
                                        <li className={styles.memory__deal}>RAM 8 GB</li>
                                        <li className={styles.memory__deal}>SSD 512 GB</li>
                                    </ul>
                                </div>
                                <p className={styles.deal__status}>Online giá rẻ</p>
                                <div className={styles.deal__old__price}>
                                    <p className={styles.deal__price}>17.990.000₫</p>
                                    <span className={styles.discount__deal}>&nbsp;-16%</span>
                                </div>
                                <strong className={styles.new__deal__price}>14.990.000₫</strong>
                                <p className={styles.deal__bonus}>Quà <b>100.000₫</b></p>
                                <div className={styles.deal__rating}>
                                    <div className={styles.deal__star__rating}>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                    </div>
                                    <div className={styles.total__rating}><span>&nbsp;25</span></div>
                                </div>
                                <div className={styles.utility}>
                                    <p className={styles.utility__item}>
                                        <span>M.Hình</span>
                                        <span>14", Full HD</span>
                                    </p>
                                    <p className={styles.utility__item}>
                                        <span>CPU</span>
                                        <span>i5, 1135G7, 2.4GHz</span>
                                    </p>
                                    <p className={styles.utility__item}>
                                        <span>Card</span>
                                        <span>Intel Iris Xe</span>
                                    </p>
                                    <p className={styles.utility__item}>
                                        <span>Pin</span>
                                        <span>2-cell, 38Wh</span>
                                    </p>
                                    <p className={styles.utility__item}>
                                        <span>Nhẹ</span>
                                        <span>1.41 kg</span>
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