import React from 'react';
import styles from './Phone.module.scss';
import clsx from 'clsx';

export default function PhoneShowAll (){
    
    const showImg = ['https://cdn.tgdd.vn/Products/Images/42/248293/Xiaomi-11T-White-1-2-3-600x600.jpg'];
    
    const showItems = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
    ];

    return (
        <div className={styles.show__all__products}>
            <ul className={styles.list__product}>
                {showItems.map(() => (
                    <li className={styles.list__item}>
                        {/* eslint-disable-next-line */}
                        <a className={styles.item__container} href='javascript:void(0)'>
                            <div className={styles.item__label}>
                                <span className={styles.label__content}>Trả góp 0%</span>
                            </div>
                            <div className={styles.item__content}>
                                <img className={styles.item__element} src={showImg} alt=''/>
                            </div>
                            <h3>Product 1</h3>
                            <div className={styles.product__group}>
                                <ul className={styles.product__memory}>
                                    <li className={styles.memory__item}>8GB/128GB</li>
                                    <li className={styles.memory__item}>12GB/256GB</li>
                                    <li className={styles.memory__item}>12GB/512GB</li>
                                </ul>
                            </div>
                            <div className={styles.box__old__price}>
                                <p className={styles.old__price}>30.990.000₫</p>
                                <span className={styles.discount__percent}>&nbsp;9%</span>
                            </div>
                            <strong className={styles.new__price}>27.990.000₫</strong>
                            <div className={styles.rating}>
                                <div className={styles.star__rating}>
                                    <i className={clsx('fa fa-star', styles.star)}></i>
                                    <i className={clsx('fa fa-star', styles.star)}></i>
                                    <i className={clsx('fa fa-star', styles.star)}></i>
                                    <i className={clsx('fa fa-star', styles.star__dark)}></i>
                                    <i className={clsx('fa fa-star', styles.star__dark)}></i>
                                </div>
                                <div className={styles.total__rating}><span>&nbsp;(45)</span></div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}