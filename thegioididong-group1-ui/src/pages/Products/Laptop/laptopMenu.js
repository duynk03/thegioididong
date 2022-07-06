import React from 'react';
import styles from './Laptop.module.scss';

export default function MenuLaptop (){

    const menuIcon = [
        'fab fa-hotjar',
        'fas fa-gamepad',
        'fab fa-apple',
        'fas fa-book-reader',
        'fas fa-bezier-curve',
        'fas fa-feather-alt',
        'fas fa-gem',
        'fab fa-windows'
    ];
    const menuContent = [
        'Deal sốc',
        'Gaming',
        'Macbook',
        'Học tập, Văn phòng',
        'Đồ họa, Kỹ thuật',
        'Mỏng nhẹ',
        'Cao cấp, sang trọng',
        'Phần mềm'
    ];

    return(
        <div className={styles.menu__laptop}>
            <div className={styles.menu__container}>
                {menuIcon.map((icon) => (
                    <a href='#' className={styles.nav__item}>
                        <div className={styles.nav__icon}>
                            <i className={icon}></i>
                        </div>
                    </a>
                ))}

                {menuContent.map((content) => (
                    <span className={styles.menu__element__title}>{content}</span>
                ))}
            </div>
        </div>
    );
}