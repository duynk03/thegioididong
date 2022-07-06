import styles from './Laptop.module.scss';
import clsx from 'clsx';

export default function BannerSoftware() {

    const bannerSoftwareLogo = 'https://cdn.tgdd.vn/2022/05/banner/banner-phan-mem-1200x200-1200x200.png'

    const bannerSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const bannerSoftwareImg = 'https://cdn.tgdd.vn/Products/Images/85/155041/windows-10-pro-32-bit-64-bit-all-languages-fqc-09-cava-600x600.jpg'

    return(
        <div className={styles.banner__software}>
            <div className={styles.block__banner}>
                {/* eslint-disable-next-line */}
                <a href='javascript:void(0)' className={styles.banner__link}>
                    <img className={styles.banner__img} src={bannerSoftwareLogo} alt='' />
                </a>
            </div>
            <div className={styles.list__item__block}>
                <ul className={styles.list__show}>
                    {bannerSize.map(() => (
                        <li className={styles.show__item}>
                            {/* eslint-disable-next-line */}
                            <a className={styles.show__container} href='javascript:void(0)'>
                                <div className={styles.show__content}>
                                    <img className={styles.show__element} src={bannerSoftwareImg} alt=''/>
                                </div>
                                {/* eslint-disable-next-line */}
                                <a href='javascript:void(0)'>
                                    <h3 className={styles.show__name}>Microsoft 365 Personal 32/64bit 1 năm 1 user Win/Mac</h3>
                                </a>
                                <strong className={styles.new__deal__price}>4.990.000₫</strong>
                                <div className={styles.deal__rating}>
                                    <div className={styles.deal__star__rating}>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                        <i className={clsx('fa fa-star', styles.star__deal)}></i>
                                    </div>
                                    <div className={styles.total__rating}><span>&nbsp;5</span></div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}