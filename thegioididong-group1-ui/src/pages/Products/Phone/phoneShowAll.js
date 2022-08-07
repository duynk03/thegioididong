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
            category: 'itel'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/Masstel42-b_0.png',
            category: 'Masstel'
        }
    ];

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

    
    const frequencyPhone = ['60Hz', '90Hz', '120Hz'];

    const [displayFrequency, setDisplayFrequency] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displayRam, setDisplayRam] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displayRom, setDisplayRom] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    
    const [hidden, setHidden] = useState(false);
    
    const [displayArrowFrequency, setDisplayArrowFrequency] = useState(clsx(null));
    const [displayArrowRam, setDisplayArrowRam] = useState(clsx(null));
    const [displayArrowRom, setDisplayArrowRom] = useState(clsx(null));

    const [displayIconFrequency, setDisplayIconFrequency] = useState(clsx(styles.iconDown, 'fas fa-sort-down'));
    const [displayIconRam, setDisplayIconRam] = useState(clsx(styles.iconDown, 'fas fa-sort-down'));
    const [displayIconRom, setDisplayIconRom] = useState(clsx(styles.iconDown, 'fas fa-sort-down'));

    const [data, setData] = useState([]);
    const [manu, setManu] = useState('iPhone');
    const [condition, setCondition] = useState([]);
    const [value, setValue] = useState(true);

    useEffect(() => {  
        try {
            axios
                .get(
                    'http://localhost:8084/api/v1/products/type?name=phone'
                )
                .then((res) => {
                    setData([...res.data].filter(item => item.manufacturer === `${manu}`));
                    if(condition === 'phone-ram'){
                        setData([...res.data].filter(item => item.manufacturer === `${manu}`).filter(item => item.phone.ram === `${value}`));
                    }
                    if(condition === 'phone-rom'){
                        setData([...res.data].filter(item => item.manufacturer === `${manu}`).filter(item => item.phone.rom === `${value}`));
                    }
                    if(condition === 'touch-Screen'){
                        setData([...res.data].filter(item => item.manufacturer === `${manu}`).filter(item => item.phone.touchScreen === `${value}`));
                    }
                    console.log(res.data)
                });
        } catch (error) {
            console.log(error.message);
        }
    }, [manu, value, condition]);


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
                        if(displayFrequency.includes('hidden')){
                            setDisplayIconFrequency(clsx(styles.iconUp, 'fas fa-sort-up'));
                            setDisplayArrowFrequency(clsx(styles.arrow__filter));
                            setDisplayFrequency(clsx(styles.filter__item__show__element, styles.filter__visible));
                        }else{
                            setDisplayArrowFrequency(clsx(null));
                            setDisplayIconFrequency(clsx(styles.iconDown, 'fas fa-sort-down'));
                            setDisplayFrequency(clsx(styles.filter__item__show__element, styles.filter__hidden));
                        }
                    }}>
                        <div className={styles.filter__item__title}>
                            <div className={displayArrowFrequency}></div>
                            <span>Tần số quét màn hình<i className={displayIconFrequency}></i></span>
                        </div>
                        <div className={displayFrequency}>
                            <div className={styles.filter__list__element}>
                                {frequencyPhone.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)' 
                                            className={styles.btn__box}
                                            onClick={() => {
                                                setCondition('touch-Screen'); 
                                                setValue(`${item}`);
                                            }}
                                        >{item}</a>
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
                            <span>Ram<i className={displayIconRam}></i></span>
                        </div>
                        <div className={displayRam}>
                            <div className={styles.filter__list__element}>
                                {ramPhone.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)' 
                                            className={styles.btn__box}
                                            onClick={() => {
                                                setCondition('phone-ram'); 
                                                setValue(`${item}`);
                                            }}
                                            >{item}</a>
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
                            <span>Rom<i className={displayIconRom}></i></span>
                        </div>
                        <div className={displayRom}>
                            <div className={styles.filter__list__element}>
                                {romPhone.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)'
                                            className={styles.btn__box}
                                            onClick={() => {
                                                setCondition('phone-rom'); 
                                                setValue(`${item}`);
                                            }}
                                            >{item}</a>
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
                    {data.map((phone, i) => (
                        <li key={i} className={styles.list__item}>
                            {/* eslint-disable-next-line */}
                            <a className={styles.item__container} href={`/productdetail/${phone.category}/${phone.manufacturer}/${phone.id}`}>
                                <div className={styles.item__content} style={{...styles, paddingTop: 10}}>
                                    <Image
                                            className={styles.item__element}
                                            cloudName={cloudName}
                                            publicId={phone.images[0]?.source}
                                    />
                                </div>
                                <strong style={{color: 'black'}}>{phone.name}</strong>
                                <div className={styles.product__group}>
                                    <ul className={styles.product__memory}>
                                        <li className={styles.memory__item}>{phone.phone.ram} - {phone.phone.rom}</li>
                                    </ul>
                                </div>
                                <h2>{phone.phone.screen}</h2>
                                <h2>{phone.phone.touchScreen}</h2>
                                <div className={styles.box__old__price}>
                                    <p className={styles.old__price}>
                                        {phone.price.toString().split('').reverse().reduce((prev, next, index) => {
                                            return (index % 3 ? next : next + '.') + prev;})}₫
                                        </p>
                                    <span className={styles.discount__percent}>&nbsp;-{phone.saleOff}%</span>
                                </div>
                                <strong className={styles.new__price}>{(phone.price - (phone.saleOff * phone.price)/100).toString().split('').reverse().reduce((prev, next, index) => {
                                            return (index % 3 ? next : next + '.') + prev;})}₫
                                </strong>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
}
