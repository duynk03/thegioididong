import styles from './Laptop.module.scss';
import clsx from 'clsx';

export default function BannerEnginneer() {

    const bannerEngineerLogo = 'https://cdn.tgdd.vn/2021/08/banner/dohoa-1200x200.jpg'

    const bannerSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const bannerEngineerImg = 'https://cdn.tgdd.vn/Products/Images/44/231253/macbook-pro-m1-2020-gray-600x600.jpg'

    const brandEngineerImg = 'https://cdn.tgdd.vn/2022/07/content/50x50-50x50-5.png'

    return(
        <div className={styles.banner__engineer}>
            <div className={styles.block__banner}>
                <a href='#' className={styles.banner__link}>
                    <img className={styles.banner__img} src={bannerEngineerLogo} alt='' />
                </a>
            </div>
            <div className={styles.list__item__block}>
                <ul className={styles.list__show}>
                    {bannerSize.map(() => (
                        <li className={styles.show__item}>
                            <a className={styles.show__container} href='#'>
                                <div className={styles.show__content}>
                                    <img className={styles.show__element} src={bannerEngineerImg} alt=''/>
                                </div>
                                <p className={styles.brand__discount}>
                                    <img className={styles.brand__deal} 
                                            src={brandEngineerImg}
                                            alt=''
                                    />
                                    <span className={styles.brand__title}>Sinh nhật giảm sốc</span>
                                </p>
                                <a href='#'>
                                    <h3 className={styles.show__name}>MacBook Pro M1 2020</h3>
                                </a>
                                <div className={styles.show__group}>
                                    <ul className={styles.show__memory}>
                                        <li className={styles.memory__deal}>RAM 16 GB</li>
                                        <li className={styles.memory__deal}>SSD 512 GB</li>
                                    </ul>
                                </div>
                                <p className={styles.deal__status}>Xả kho giá sốc</p>
                                <div className={styles.deal__old__price}>
                                    <p className={styles.deal__price}>44.990.000₫</p>
                                    <span className={styles.discount__deal}>&nbsp;-10%</span>
                                </div>
                                <strong className={styles.new__deal__price}>40.490.000₫</strong>
                                <p className={styles.deal__bonus}>Quà <b>100.000₫</b></p>
                                <div className={styles.deal__rating}>
                                    <div className={styles.deal__star__rating}>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                    </div>
                                    <div className={styles.total__rating}><span>&nbsp;26</span></div>
                                </div>
                                <div className={styles.utility}>
                                    <p className={styles.utility__item}>
                                        <span>M.Hình</span>
                                        <span>13.3", Retina</span>
                                    </p>
                                    <p className={styles.utility__item}>
                                        <span>CPU</span>
                                        <span>Apple M1</span>
                                    </p>
                                    <p className={styles.utility__item}>
                                        <span>Card</span>
                                        <span>8 nhân GPU</span>
                                    </p>
                                    <p className={styles.utility__item}>
                                        <span>Pin</span>
                                        <span>Khoảng 10 tiếng</span>
                                    </p>
                                    <p className={styles.utility__item}>
                                        <span>Nhẹ</span>
                                        <span>1.4 kg</span>
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