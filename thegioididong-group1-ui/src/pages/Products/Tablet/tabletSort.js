import React from 'react';
import styles from './Tablet.module.scss';
import clsx from 'clsx';

export default function TabletSort (){

    const selectSort = [
        'Giảm giá',
        'Góp 0%',
        'Mới'
    ];

    return(
        <div className={styles.sort__container}>
            <p className={styles.sort__total}>
                <b className={styles.sort__total__item}>
                    39&nbsp;Máy tính bảng
                </b>
            </p>
            <div className={styles.checkbox__sort}>
                <div className={styles.box__fast__delivery}>
                    <a className={styles.fast__delivery} href='#'>
                        <input className={styles.input__box} type='checkbox' /> &nbsp;
                        <i className={clsx('fas fa-bolt', styles.icon__thunder)}></i>
                        <b className={styles.title__form}>&nbsp;Giao nhanh</b>
                    </a>
                </div>
            {selectSort.map((item) => (
                <div className={styles.box__sort}>
                    <a className={styles.sort__element} href='#'>
                        <input className={styles.input__element} type='checkbox' />
                        <span>&nbsp;{item}</span>
                    </a>
                </div>
            ))}
            </div>
            <div className={styles.select__sort}>
                <p className={styles.sort__content}>Xếp theo:&nbsp;</p>
                <div className={styles.sort__select__active}>
                    <span>Nổi bật&nbsp;</span>
                    <i className='fa fa-caret-down'></i>
                </div>
            </div>
        </div>
    );
}