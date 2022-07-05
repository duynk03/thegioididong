import styles from './Laptop.module.scss';
import clsx from 'clsx';

export default function BannerLuxury() {

    const bannerLuxuryLogo = 'https://cdn.tgdd.vn/2021/08/banner/Caocapdesk-1200x200.jpg'

    const bannerSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const bannerLuxuryImg = 'https://cdn.tgdd.vn/Products/Images/44/238132/lg-gram-16-i7-16z90pgah73a5-600x600.jpg'

    const brandLuxuryImg = 'https://cdn.tgdd.vn/2022/07/content/50x50-50x50-5.png'

    return(
        <div className={styles.banner__macbook}>
            <div className={styles.block__banner}>
                <a href='#' className={styles.banner__link}>
                    <img className={styles.banner__img} src={bannerLuxuryLogo} alt='' />
                </a>
            </div>
            <div className={styles.list__item__block}>
                <ul className={styles.list__show}>
                    {bannerSize.map(() => (
                        <li className={styles.show__item}>
                            <a className={styles.show__container} href='#'>
                                <div className={styles.show__content}>
                                    <img className={styles.show__element} src={bannerLuxuryImg} alt=''/>
                                </div>
                                <p className={styles.brand__discount}>
                                    <img className={styles.brand__deal} 
                                            src={brandLuxuryImg}
                                            alt=''
                                    />
                                    <span className={styles.brand__title}>Sinh nhật giảm sốc</span>
                                </p>
                                <a href='#'>
                                    <h3 className={styles.show__name}>LG Gram 16 2021 i7 1165G7 (16Z90P-G.AH73A5)</h3>
                                </a>
                                <div className={styles.show__group}>
                                    <ul className={styles.show__memory}>
                                        <li className={styles.memory__deal}>RAM 16 GB</li>
                                        <li className={styles.memory__deal}>SSD 256 GB</li>
                                    </ul>
                                </div>
                                <p className={styles.deal__status}>Xả kho giá sốc</p>
                                <div className={styles.deal__old__price}>
                                    <p className={styles.deal__price}>48.890.000₫</p>
                                    <span className={styles.discount__deal}>&nbsp;-20%</span>
                                </div>
                                <strong className={styles.new__deal__price}>38.890.000₫</strong>
                                <p className={styles.deal__bonus}>Quà <b>1.500.000₫</b></p>
                                <div className={styles.deal__rating}>
                                    <div className={styles.deal__star__rating}>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                    </div>
                                    <div className={styles.total__rating}><span>&nbsp;15</span></div>
                                </div>
                                <div className={styles.utility}>
                                    <p className={styles.utility__item}>
                                        <span>M.Hình</span>
                                        <span>16", 2K</span>
                                    </p>
                                    <p className={styles.utility__item}>
                                        <span>CPU</span>
                                        <span>i7, 1165G7, 2.8GHz</span>
                                    </p>
                                    <p className={styles.utility__item}>
                                        <span>Card</span>
                                        <span>Intel Iris Xe</span>
                                    </p>
                                    <p className={styles.utility__item}>
                                        <span>Pin</span>
                                        <span>2-cell, 80Wh</span>
                                    </p>
                                    <p className={styles.utility__item}>
                                        <span>Nhẹ</span>
                                        <span>1.19 kg</span>
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