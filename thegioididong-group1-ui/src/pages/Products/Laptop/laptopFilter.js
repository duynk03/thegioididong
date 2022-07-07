import styles from './Laptop.module.scss';

export default function FilterLaptop (){

    const itemLogo =[
        'https://cdn.tgdd.vn/Brand/1/logo-macbook-149x40.png',
        'https://cdn.tgdd.vn/Brand/1/logo-asus-149x40.png',
        'https://cdn.tgdd.vn/Brand/1/logo-hp-149x40-1.png',
        'https://cdn.tgdd.vn/Brand/1/logo-lenovo-149x40.png',
        'https://cdn.tgdd.vn/Brand/1/logo-acer-149x40.png',
        'https://cdn.tgdd.vn/Brand/1/logo-dell-149x40.png',
        'https://cdn.tgdd.vn/Brand/1/logo-msi-149x40.png',
        'https://cdn.tgdd.vn/Brand/1/logo-surface-149x40-1.png',
        'https://cdn.tgdd.vn/Brand/1/logo-lg-149x40.png',
        'https://cdn.tgdd.vn/Brand/1/logo-gigabyte-149x40.png',
        'https://cdn.tgdd.vn/Brand/1/logo-intel-149x40.png',
        'https://cdn.tgdd.vn/Brand/1/logo-chuwi-149x40.png',
        'https://cdn.tgdd.vn/Brand/1/logo-itel-149x40.png'
    ];

    return(
        <div className={styles.manufacturer__container}>
            <div className={styles.manufacturer__content}>
                {itemLogo.map((logo) => (
                    <div className={styles.logo__brand}>
                        {/* eslint-disable-next-line */}
                        <a href='javascript:void(0)' className={styles.logo__item}>
                            <img 
                                src={logo}
                                alt=''
                            />                                    
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}