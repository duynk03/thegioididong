import styles from './Smartwatch.module.scss';
import clsx from 'clsx';

export default function BannerFashion() {

    const bannerFashionLogo = 'https://cdn.tgdd.vn/2021/08/banner/Tho%CC%9B%CC%80itrang-1200x200.png'

    const bannerSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const bannerFashionImg = 'https://cdn.tgdd.vn/Products/Images/7077/248752/samsung-galaxy-watch-4-40mm-vang-hong-thumb-1-2-3-4-600x600.jpg'

    const brandFashionImg = 'https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png'

    const sortBy = [
        'Nổi bật',
        'Dưới 1 triệu',
        'Từ 1 - 4 triệu',
        'Apple',
        'Samsung',
        'Xiaomi',
        'Amazfit'
    ];

    return(
        <div className={styles.banner__fashion} id='fashion'>
            <div className={styles.block__banner}>
                {/* eslint-disable-next-line */}
                <a href='javascript:void(0)' className={styles.banner__link}>
                    <img className={styles.banner__img} src={bannerFashionLogo} alt='' />
                </a>
            </div>

            <div className={styles.sort__by}>
                {sortBy.map((itemSort) => (
                    <>
                        {/* eslint-disable-next-line */}
                        <a href='javascript:void(0)' className={styles.sort__by__item}>
                            <p>{itemSort}</p>
                        </a>
                    </>
                ))}
            </div>

            <div className={styles.list__item__block}>
                <ul className={styles.list__show}>
                    {bannerSize.map(() => (
                        <li className={styles.show__item}>
                            {/* eslint-disable-next-line */}
                            <a className={styles.show__container} href='javascript:void(0)'>
                                <div className={styles.show__content}>
                                    <img className={styles.show__element} src={bannerFashionImg} alt=''/>
                                </div>
                                <p className={styles.brand__discount}>
                                    <img className={styles.brand__deal} 
                                            src={brandFashionImg}
                                            alt=''
                                    />
                                    <span className={styles.brand__title}>Đồng giảm 1 triệu</span>
                                </p>
                                {/* eslint-disable-next-line */}
                                <a href='javascript:void(0)'>
                                    <h3 className={styles.show__name}>Samsung Galaxy Watch 4 40mm Vàng Hồng</h3>
                                </a>
                                <div className={styles.show__group}>
                                    <ul className={styles.show__memory}>
                                        <li className={styles.memory__deal}>Có chống nước</li>
                                        <li className={styles.memory__deal}>Đo nồng độ oxy (SpO2)</li>
                                    </ul>
                                </div>
                                <div className={styles.deal__old__price}>
                                    <p className={styles.deal__price}>6.490.000₫</p>
                                    <span className={styles.discount__deal}>&nbsp;-20%</span>
                                </div>
                                <strong className={styles.new__deal__price}>5.490.000₫</strong>
                                <div className={styles.deal__rating}>
                                    <div className={styles.deal__star__rating}>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal__dark)}></i>
                                    </div>
                                    <div className={styles.total__rating}><span>&nbsp;20</span></div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}