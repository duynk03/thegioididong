import React from 'react';
import styles from './Smartwatch.module.scss';

export default function MenuBar (){

    const menuIcon = [
        'fab fa-hotjar',
        'fas fa-clock',
        'fas fa-heartbeat',
        'fas fa-running',
        'fas fa-child',
        'fas fa-headset'
    ];
    const menuContent = [
        'Deal sốc',
        'Thời trang',
        'Tiện ích',
        'Thể thao',
        'Trẻ em',
        'Phụ kiện'
    ];

    return(
        <div className={styles.menu__nav}>
            <div className={styles.menu__container}>
                {menuIcon.map((icon) => (
                    <>
                        {/* eslint-disable-next-line */}
                        <a href='javascript:void(0)' className={styles.nav__item}>
                            <div className={styles.nav__icon}>
                                <i className={icon}></i>
                            </div>
                        </a>
                    </>
                ))}

                {menuContent.map((content) => (
                    <span className={styles.menu__element__title}>{content}</span>
                ))}
            </div>
        </div>
    );
}