import { useState, useEffect,Fragment } from 'react';
import styles from './Phone.module.scss';
import { Image } from 'cloudinary-react';
import axios from 'axios';
import clsx from 'clsx';


export default function ShowALLPhone() {

    const cloudName = 'dlefvc2xe';

    const logoPhone = [
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png',
            category: 'iPhone'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png',
            category: 'Samsung'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg',
            category: 'Oppo'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png',
            category: 'Xiaomi'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/vivo-logo-220-220x48-3.png',
            category: 'Vivo'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/Realme42-b_37.png',
            category: 'Realme'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg',
            category: 'Nokia'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/Mobell42-b_19.jpg',
            category: 'Mobell'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/Itel42-b_54.jpg',
            category: 'Itel'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/Masstel42-b_0.png',
            category: 'Masstel'
        }
    ];

    const pricePhone = [
        'Dưới 2 triệu',
        'Từ 2 - 4 triệu',
        'Từ 4 - 7 triệu',
        'Từ 7 - 13 triệu',
        'Từ 13 - 20 triệu',
        'Trên 20 triệu'
    ];

    // const typeOfPhone = [
    //     'Android',
    //     'iPhone(iOS)'
    // ];


    const ramPhone = [
        '2 GB',
        '3 GB',
        '4 GB',
        '6 GB', 
        '8 GB',
        '12 GB'
    ];

    const romPhone = [
        '8 GB',
        '16 GB',
        '32 GB',
        '64 GB', 
        '128 GB',
        '256 GB',
        '512 GB'
    ];

    const batteryPhone = [
        'Pin khủng trên 5000 mAh',
        'Sạc pin nhanh',
        'Sạc siêu nhanh (từ 33W)',
        'Sạc không dây'
    ];


    const [displayPrice, setDisplayPrice] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    // const [displayType, setDisplayType] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displayRam, setDisplayRam] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displayRom, setDisplayRom] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displayBattery, setDisplayBattery] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    
    const [hidden, setHidden] = useState(false);
    
    const [displayArrowPrice, setDisplayArrowPrice] = useState(clsx(null));
    // const [displayArrowType, setDisplayArrowType] = useState(clsx(null));
    const [displayArrowRam, setDisplayArrowRam] = useState(clsx(null));
    const [displayArrowRom, setDisplayArrowRom] = useState(clsx(null));
    const [displayArrowBattery, setDisplayArrowBattery] = useState(clsx(null));

    const [displayIconPrice, setDisplayIconPrice] = useState(clsx(styles.iconDown, 'fas fa-sort-down'));
    // const [displayIconType, setDisplayIconType] = useState(clsx(styles.iconDown, 'fas fa-sort-down'));
    const [displayIconRam, setDisplayIconRam] = useState(clsx(styles.iconDown, 'fas fa-sort-down'));
    const [displayIconRom, setDisplayIconRom] = useState(clsx(styles.iconDown, 'fas fa-sort-down'));
    const [displayIconBattery, setDisplayIconBattery] = useState(clsx(styles.iconDown, 'fas fa-sort-down'));

    const [data, setData] = useState([]);
    const [manu, setManu] = useState('iPhone');

    useEffect(() => {
            try {
                axios
                    .get(
                        'http://localhost:8084/api/v1/products/type?name=phone'
                    )
                    .then((res) => {
                        setData(res.data);
                        console.log(res.data)
                    });
            } catch (error) {
                console.log(error.message);
            }
    }, []);


    return(
        <Fragment>
            {/* filter */}
            <div className={styles.session__filter}>
                <div className={styles.quick__filter}>
                    {logoPhone.map((item) => (
                        <div className={styles.logo__phone} onClick={() => {setManu(`${item.category}`)}}>
                            {/* eslint-disable-next-line */}
                            <a href='javascript:void(0)' className={styles.logo__phone__manu}>
                                <img 
                                    src={item.logo}
                                    alt=''
                                />                                    
                            </a>
                        </div>
                    ))}
                </div>
                
                <div style={{...styles, width: 'max-content', margin: 'auto', paddingTop: 20}}>
                    <strong style={{...styles, fontSize: 50}}>{manu}</strong>
                </div>

                <div className={styles.filter__total__container} 
                        style={{...styles, width: 'max-content', margin: 'auto'}}>
                    <div className={styles.filter__item__show} onClick={ () => {
                        setHidden(!hidden)
                        if(displayPrice.includes('hidden')){
                            setDisplayIconPrice(clsx(styles.iconUp, 'fas fa-sort-up'));
                            setDisplayArrowPrice(clsx(styles.arrow__filter));
                            setDisplayPrice(clsx(styles.filter__item__show__element, styles.filter__visible));
                        }else{
                            setDisplayArrowPrice(clsx(null));
                            setDisplayIconPrice(clsx(styles.iconDown, 'fas fa-sort-down'));
                            setDisplayPrice(clsx(styles.filter__item__show__element, styles.filter__hidden));
                        }
                    }}>
                        <div className={styles.filter__item__title}>
                            <div className={displayArrowPrice}></div>
                            <span>Giá<i className={displayIconPrice}></i></span>
                        </div>
                        <div className={displayPrice}>
                            <div className={styles.filter__list__element}>
                                {pricePhone.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.filter__item__show} onClick={ () => {
                        setHidden(!hidden)
                        if(displayRam.includes('hidden')){
                            setDisplayIconRam(clsx(styles.iconUp, 'fas fa-sort-up'));
                            setDisplayArrowRam(clsx(styles.arrow__filter));
                            setDisplayRam(clsx(styles.filter__item__show__element, styles.filter__visible));
                        }else{
                            setDisplayIconRam(clsx(styles.iconDown, 'fas fa-sort-down'));
                            setDisplayArrowRam(clsx(null));
                            setDisplayRam(clsx(styles.filter__item__show__element, styles.filter__hidden));
                        }
                    }}>
                        <div className={styles.filter__item__title}>
                            <div className={displayArrowRam}></div>
                            <span>RAM<i className={displayIconRam}></i></span>
                        </div>
                        <div className={displayRam}>
                            <div className={styles.filter__list__element}>
                                {ramPhone.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.filter__item__show} onClick={ () => {
                        setHidden(!hidden)
                        if(displayRom.includes('hidden')){
                            setDisplayIconRom(clsx(styles.iconUp, 'fas fa-sort-up'));
                            setDisplayArrowRom(clsx(styles.arrow__filter));
                            setDisplayRom(clsx(styles.filter__item__show__element, styles.filter__visible));
                        }else{
                            setDisplayIconRom(clsx(styles.iconDown, 'fas fa-sort-down'));
                            setDisplayArrowRom(clsx(null));
                            setDisplayRom(clsx(styles.filter__item__show__element, styles.filter__hidden));
                        }
                    }}>
                        <div className={styles.filter__item__title}>
                            <div className={displayArrowRom}></div>
                            <span>Bộ nhớ trong<i className={displayIconRom}></i></span>
                        </div>
                        <div className={displayRom}>
                            <div className={styles.filter__list__element}>
                                {romPhone.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.filter__item__show} onClick={ () => {
                        setHidden(!hidden)
                        if(displayBattery.includes('hidden')){
                            setDisplayIconBattery(clsx(styles.iconUp, 'fas fa-sort-up'));
                            setDisplayArrowBattery(clsx(styles.arrow__filter));
                            setDisplayBattery(clsx(styles.filter__item__show__element, styles.filter__visible));
                        }else{
                            setDisplayIconBattery(clsx(styles.iconDown, 'fas fa-sort-down'));
                            setDisplayArrowBattery(clsx(null));
                            setDisplayBattery(clsx(styles.filter__item__show__element, styles.filter__hidden));
                        }
                    }}>
                        <div className={styles.filter__item__title}>
                            <div className={displayArrowBattery}></div>
                            <span>Pin & Sạc<i className={displayIconBattery}></i></span>
                        </div>
                        <div className={displayBattery}>
                            <div className={styles.filter__list__element}>
                                {batteryPhone.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* show */}
            <div className={styles.show__all__products}>
                <ul className={styles.list__product}>
                    {data.filter(item => item.manufacturer === `${manu}`).filter(item => item.price > 2000000).map((phone, i) => (
                        <li key={i} className={styles.list__item}>
                            {/* eslint-disable-next-line */}
                            <a className={styles.item__container} href='javascript:void(0)'>
                                <div className={styles.item__label}>
                                    <span className={styles.label__content}>Trả góp 0%</span>
                                </div>
                                <div className={styles.item__content}>
                                    <Image
                                            className={styles.item__element}
                                            cloudName={cloudName}
                                            publicId={phone.images[0]?.source}
                                    />
                                </div>
                                <strong style={{color: 'black'}}>{phone.name}</strong>
                                <div className={styles.product__group}>
                                    <ul className={styles.product__memory}>
                                        <li className={styles.memory__item}> - </li>
                                    </ul>
                                </div>
                                <div className={styles.box__old__price}>
                                    <p className={styles.old__price}>{phone.price}₫</p>
                                    <span className={styles.discount__percent}>&nbsp;-{phone.saleOff}%</span>
                                </div>
                                <strong className={styles.new__price}>{`${phone.price - (phone.saleOff * phone.price)/100}`}₫</strong>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
}
