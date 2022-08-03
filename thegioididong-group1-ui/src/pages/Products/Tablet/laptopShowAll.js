import { useState, useEffect,Fragment } from 'react';
import styles from './Tablet.module.scss';
import { Image } from 'cloudinary-react';
import axios from 'axios';
import clsx from 'clsx';


export default function ShowALLTablet() {

    const cloudName = 'dlefvc2xe';

    const logoTablet = [
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/iPad-(Apple)522-b_4.jpg',
            category: 'Apple',
            title: 'iPad'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-3.png',
            category: 'Samsung',
            title: 'Samsung'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/Tablet-xiaomi-220x48-1.png',
            category: 'Xiaomi',
            title: 'Xiaomi'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/Lenovo522-b_6.jpg',
            category: 'Lenovo',
            title: 'Lenovo'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/Masstel522-b_7.png',
            category: 'Masstel',
            title: 'Masstel'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logonokia-220x48-1.jpg',
            category: 'Nokia',
            title: 'Nokia'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/Huawei522-b_4.jpg',
            category: 'Huawei',
            title: 'Huawei'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logoalcatel-220x48-1.png',
            category: 'Alcatel',
            title: 'Alcatel'
        }
    ];

    const ramTablet = [
        '2 GB',
        '3 GB',
        '4 GB',
        '6 GB', 
        '8 GB',
        '12 GB'
    ];

    const romTablet = [
        '32 GB',
        '64 GB', 
        '128 GB',
        '256 GB',
        '512 GB',
        '1 TB',
        '2 TB'
    ];


    const [displayRam, setDisplayRam] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displayRom, setDisplayRom] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    
    const [hidden, setHidden] = useState(false);
    
    const [displayArrowRam, setDisplayArrowRam] = useState(clsx(null));
    const [displayArrowRom, setDisplayArrowRom] = useState(clsx(null));

    const [displayIconRam, setDisplayIconRam] = useState(clsx(styles.iconDown, 'fas fa-sort-down'));
    const [displayIconRom, setDisplayIconRom] = useState(clsx(styles.iconDown, 'fas fa-sort-down'));

    const [data, setData] = useState([]);
    const [manu, setManu] = useState('Apple');
    const [title, setTitle] = useState('iPad');
    const [condition, setCondition] = useState([]);
    const [value, setValue] = useState(true);

    useEffect(() => {  
            try {
                axios
                    .get(
                        'http://localhost:8084/api/v1/products/type?name=tablet'
                    )
                    .then((res) => {
                        setData([...res.data].filter(item => item.manufacturer === `${manu}`));
                        if(condition === 'tablet-ram'){
                            setData([...res.data].filter(item => item.manufacturer === `${manu}`).filter(item => item.tablet.ram === `${value}`));
                        }
                        if(condition === 'tablet-rom'){
                            setData([...res.data].filter(item => item.manufacturer === `${manu}`).filter(item => item.tablet.rom === `${value}`));
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
                    {logoTablet.map((item) => (
                        <div className={styles.logo__tablet} 
                                onClick={() => {
                                    setManu(`${item.category}`);
                                    setTitle(`${item.title}`);
                                }}>
                            {/* eslint-disable-next-line */}
                            <a href='javascript:void(0)' className={styles.logo__tablet__manu}>
                                <img 
                                    src={item.logo}
                                    alt=''
                                />                                    
                            </a>
                        </div>
                    ))}
                </div>
                
                <div style={{...styles, width: 'max-content', margin: 'auto', paddingTop: 30}}>
                    <strong style={{...styles, fontSize: 50}}>{title}</strong>
                </div>

                <div className={styles.filter__total__container} 
                        style={{...styles, width: 'max-content', margin: 'auto'}}>

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
                                {ramTablet.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)' 
                                            className={styles.btn__box}
                                            onClick={() => {
                                                setCondition('tablet-ram'); 
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
                                {romTablet.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)'
                                            className={styles.btn__box}
                                            onClick={() => {
                                                setCondition('tablet-rom'); 
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
                    {data.map((tablet, i) => (
                        <li key={i} className={styles.list__item}>
                            {/* eslint-disable-next-line */}
                            <a className={styles.item__container} href='javascript:void(0)'>
                                <div className={styles.item__content} style={{...styles, paddingTop: 10}}>
                                    <Image
                                            className={styles.item__element}
                                            cloudName={cloudName}
                                            publicId={tablet.images[0]?.source}
                                    />
                                </div>
                                <strong style={{color: 'black'}}>{tablet.name}</strong>
                                <div className={styles.product__group}>
                                    <ul className={styles.product__memory}>
                                        <li className={styles.memory__item}>{tablet.tablet.ram} - {tablet.tablet.rom}</li>
                                    </ul>
                                </div>
                                <h2>{tablet.tablet.screenTechnology} - {tablet.tablet.wideScreen}</h2>
                                <h2>{tablet.tablet.chip}</h2>
                                <div className={styles.box__old__price}>
                                    <p className={styles.old__price}>
                                        {tablet.price.toString().split('').reverse().reduce((prev, next, index) => {
                                            return (index % 3 ? next : next + '.') + prev;})}₫
                                        </p>
                                    <span className={styles.discount__percent}>&nbsp;-{tablet.saleOff}%</span>
                                </div>
                                <strong className={styles.new__price}>{(tablet.price - (tablet.saleOff * tablet.price)/100).toString().split('').reverse().reduce((prev, next, index) => {
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
