import React from 'react';
import styles from './Laptop.module.scss';

export default function MenuLaptop (){

    const menuIcon = [
        {
            icon: 'fab fa-hotjar',
            href: '#dealsoc'
        },
        {
            icon: 'fas fa-gamepad',
            href: '#ltgaming'
        },
        {
            icon: 'fab fa-apple',
            href: '#ltmacbook'
        },
        {
            icon: 'fas fa-book-reader',
            href: '#ltoffice'
        },
        {
            icon: 'fas fa-bezier-curve',
            href: '#ltengineer'
        },
        {
            icon: 'fas fa-feather-alt',
            href: '#ltthin'
        },
        {
            icon: 'fas fa-gem',
            href: '#ltluxury'
        },
        {
            icon: 'fab fa-windows',
            href: '#software'
        }
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
                {menuIcon.map((item) => (
                    <>
                        {/* eslint-disable-next-line */}
                        <a href={item.href} className={styles.nav__item}>
                            <div className={styles.nav__icon}>
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