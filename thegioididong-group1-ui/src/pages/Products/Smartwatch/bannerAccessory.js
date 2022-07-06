import styles from './Smartwatch.module.scss';
import clsx from 'clsx';

export default function BannerAccessory() {

    const bannerAccessoryLogo = 'https://cdn.tgdd.vn/2021/08/banner/Da%CC%82ydo%CC%82%CC%80ngho%CC%82%CC%80-1200x200.png'

    const bannerSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const bannerAccessoryImg = 'https://cdn.tgdd.vn/Products/Images/7978/220032/day-da-dong-ho-samsung-huawei-khac-size-22mm-nau-m06-04-22-thum-600x600.jpg'

    const sortBy = [
        'Nổi bật',
        'Apple',
        'Samsung',
        'Mi Band',
        'Dây sillicone',
        'Dây da'
    ];

    return(
        <div className={styles.banner__accessory}>
            <div className={styles.block__banner}>
                {/* eslint-disable-next-line */}
                <a href='javascript:void(0)' className={styles.banner__link}>
                    <img className={styles.banner__img} src={bannerAccessoryLogo} alt='' />
                </a>
            </div>

            <div className={styles.sort__by}>
                {sortBy.map((itemSort) => (
                    <div className={styles.sort__by__item}>
                        {/* eslint-disable-next-line */}
                        <a href='javascript:void(0)' >
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
                                    <img className={styles.show__element} src={bannerAccessoryImg} alt=''/>
                                </div>
                                {/* eslint-disable-next-line */}
                                <a href='javascript:void(0)'>
                                    <h3 className={styles.show__name}>Dây da tổng hợp M06-04-22</h3>
                                </a>
                                <div className={styles.deal__old__price}>
                                    <p className={styles.deal__price}>400.000₫</p>
                                    <span className={styles.discount__deal}>&nbsp;-48%</span>
                                </div>
                                <strong className={styles.new__deal__price}>208.000₫</strong>
                                <div className={styles.deal__rating}>
                                    <div className={styles.deal__star__rating}>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                    </div>
                                    <div className={styles.total__rating}><span>&nbsp;3</span></div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}