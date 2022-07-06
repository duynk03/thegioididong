import styles from './Laptop.module.scss';
import clsx from 'clsx';

export default function BannerThin() {

    const bannerThinLogo = 'https://cdn.tgdd.vn/2021/08/banner/mongnhedes-1200x200.jpg'

    const bannerSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const bannerThinImg = 'https://cdn.tgdd.vn/Products/Images/44/235393/lenovo-thinkbook-14s-g2-itl-i5-20va000nvn-600x600-600x600.jpg'

    const brandThinImg = 'https://cdn.tgdd.vn/2022/07/content/50x50-50x50-5.png'

    return(
        <div className={styles.banner__thin}>
            <div className={styles.block__banner}>
                <a href='#' className={styles.banner__link}>
                    <img className={styles.banner__img} src={bannerThinLogo} alt='' />
                </a>
            </div>
            <div className={styles.list__item__block}>
                <ul className={styles.list__show}>
                    {bannerSize.map(() => (
                        <li className={styles.show__item}>
                            <a className={styles.show__container} href='#'>
                                <div className={styles.show__content}>
                                    <img className={styles.show__element} src={bannerThinImg} alt=''/>
                                </div>
                                <p className={styles.brand__discount}>
                                    <img className={styles.brand__deal} 
                                            src={brandThinImg}
                                            alt=''
                                    />
                                    <span className={styles.brand__title}>Sinh nhật giảm sốc</span>
                                </p>
                                <a href='#'>
                                    <h3 className={styles.show__name}>Laptop Lenovo ThinkBook 14s G2 ITL i5 1135G7/8GB/512GB/Win10 (20VA000NVN)</h3>
                                </a>
                                <div className={styles.show__group}>
                                    <ul className={styles.show__memory}>
                                        <li className={styles.memory__deal}>RAM 8 GB</li>
                                        <li className={styles.memory__deal}>SSD 512 GB</li>
                                    </ul>
                                </div>
                                <p className={styles.deal__status}>Xả kho giá sốc</p>
                                <div className={styles.deal__old__price}>
                                    <p className={styles.deal__price}>23.690.000₫</p>
                                    <span className={styles.discount__deal}>&nbsp;-16%</span>
                                </div>
                                <strong className={styles.new__deal__price}>19.690.000₫</strong>
                                <p className={styles.deal__bonus}>Quà <b>100.000₫</b></p>
                                <div className={styles.deal__rating}>
                                    <div className={styles.deal__star__rating}>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal__dark)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal__dark)}></i>
                                    </div>
                                    <div className={styles.total__rating}><span>&nbsp;16</span></div>
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
                                        <span>4-cell, 56Wh</span>
                                    </p>
                                    <p className={styles.utility__item}>
                                        <span>Nhẹ</span>
                                        <span>1.27 kg</span>
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