import styles from './Smartwatch.module.scss';
import clsx from 'clsx';

export default function BannerChildren() {

    const bannerChildrenLogo = 'https://cdn.tgdd.vn/2021/08/banner/Tre%CC%89em-1200x200.png'

    const bannerSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const bannerChildrenImg = 'https://cdn.tgdd.vn/Products/Images/7077/236906/kidcare-s8-den-thumb-1-1-600x600.jpg'

    return(
        <div className={styles.banner__children} id='children'>
            <div className={styles.block__banner}>
                {/* eslint-disable-next-line */}
                <a href='javascript:void(0)' className={styles.banner__link}>
                    <img className={styles.banner__img} src={bannerChildrenLogo} alt='' />
                </a>
            </div>

            <div className={styles.list__item__block}>
                <ul className={styles.list__show}>
                    {bannerSize.map(() => (
                        <li className={styles.show__item}>
                            {/* eslint-disable-next-line */}
                            <a className={styles.show__container} href='javascript:void(0)'>
                                <div className={styles.show__content}>
                                    <img className={styles.show__element} src={bannerChildrenImg} alt=''/>
                                </div>
                                {/* eslint-disable-next-line */}
                                <a href='javascript:void(0)'>
                                    <h3 className={styles.show__name}>Đồng hồ định vị trẻ em 4G Kidcare S8 Đen</h3>
                                </a>
                                <div className={styles.show__group}>
                                    <ul className={styles.show__memory}>
                                        <li className={styles.memory__deal}>Có nghe gọi</li>
                                    </ul>
                                </div>
                                <div className={styles.deal__old__price}>
                                    <p className={styles.deal__price}>2.490.000₫</p>
                                    <span className={styles.discount__deal}>&nbsp;-12%</span>
                                </div>
                                <strong className={styles.new__deal__price}>2.191.000₫</strong>
                                <div className={styles.deal__rating}>
                                    <div className={styles.deal__star__rating}>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal__dark)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal__dark)}></i>
                                    </div>
                                    <div className={styles.total__rating}><span>&nbsp;11</span></div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}