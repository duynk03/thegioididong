import React, { useState } from 'react';
import styles from './Smartwatch.module.scss';


export default function MenuBar (){
    const [position, setPosition] = useState(false);

    const menuIcon = [
        {
            icon: 'fab fa-hotjar',
            href: '#dealsoc'
        },
        {
            icon: 'fas fa-clock',
            href: '#fashion'
        },
        {
            icon: 'fas fa-heartbeat',
            href: '#tienich'
        },
        {
            icon: 'fas fa-running',
            href: '#sport'
        },
        {
            icon: 'fas fa-child',
            href: '#children'
        },
        {
            icon:  'fas fa-headset',
            href: '#phukien'
        }  
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
        <div className={styles.menu__nav}  style={{...styles, position: position? 'fixed':'none'}}>
            <div className={styles.menu__container}>
                {menuIcon.map((item) => (
                    <>
                        {/* eslint-disable-next-line */}
                        <a href={item.href} className={styles.nav__item}>
                            <div className={styles.nav__icon} onClick={() => setPosition(!position)}>
                                <i className={item.icon}></i>
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