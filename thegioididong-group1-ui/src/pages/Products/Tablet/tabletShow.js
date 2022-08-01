import React from 'react';
import styles from './Tablet.module.scss';
import clsx from 'clsx';

export default function TabletShowAll (){
    
    const tabletImg = 'https://cdn.tgdd.vn/Products/Images/522/238649/ipad-pro-2021-129-inch-gray-600x600.jpg'

    const brandImg = 'https://cdn.tgdd.vn/2022/07/content/50x50-50x50-5.png'
    
    const tabletSize = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
    ];

    return(
        <div className={styles.show__all__tablet}>
            <div className={styles.list__item__block}>
                <ul className={styles.list__show}>
                    {tabletSize.map(() => (
                        <li className={styles.show__item}>
                            {/* eslint-disable-next-line */}
                            <a className={styles.show__container} href='javascript:void(0)'>
                                <div className={styles.show__content}>
                                    <img className={styles.show__element} src={tabletImg} alt=''/>
                                </div>
                                <p className={styles.brand__discount}>
                                    <img className={styles.brand__deal} 
                                            src={brandImg}
                                            alt=''
                                    />
                                    <span className={styles.brand__title}>Sinh nhật giảm sốc</span>
                                </p>
                                {/* eslint-disable-next-line */}
                                <a href='javascript:void(0)'>
                                    <strong className={styles.show__name} style={{color: 'black'}}>iPad Pro M1 12.9 inch 5G</strong>
                                </a>
                                <div className={styles.show__group}>
                                    <ul className={styles.show__memory}>
                                        <li className={styles.memory__deal}>128GB</li>
                                        <li className={styles.memory__deal}>256GB</li>
                                        <li className={styles.memory__deal}>512GB</li>
                                        <li className={styles.memory__deal}>1TB</li>
                                        <li className={styles.memory__deal}>2TB</li>
                                    </ul>
                                </div>
                                <div className={styles.deal__old__price}>
                                    <p className={styles.deal__price}>34.990.000₫</p>
                                    <span className={styles.discount__deal}>&nbsp;-16%</span>
                                </div>
                                <strong className={styles.new__deal__price}>29.290.000₫</strong>
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