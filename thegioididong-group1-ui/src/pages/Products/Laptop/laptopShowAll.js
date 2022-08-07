import { useState, useEffect,Fragment } from 'react';
import styles from './Laptop.module.scss';
import { Image } from 'cloudinary-react';
import axios from 'axios';
import clsx from 'clsx';


export default function ShowALLLaptop() {

    const cloudName = 'dlefvc2xe';

    const logoLaptop = [
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logo-macbook-149x40.png',
            category: 'Apple',
            title: 'MacBook'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logo-asus-149x40.png',
            category: 'Asus',
            title: 'Asus'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logo-hp-149x40-1.png',
            category: 'Hp',
            title: 'Hp'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logo-lenovo-149x40.png',
            category: 'Lenovo',
            title: 'Lenovo'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logo-acer-149x40.png',
            category: 'Acer',
            title: 'Acer'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logo-dell-149x40.png',
            category: 'Dell',
            title: 'Dell'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logo-msi-149x40.png',
            category: 'Msi',
            title: 'Msi'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logo-surface-149x40-1.png',
            category: 'Surface',
            title: 'Surface'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logo-lg-149x40.png',
            category: 'LG',
            title: 'LG'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logo-gigabyte-149x40.png',
            category: 'GIGABYTE',
            title: 'Gigabyte'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logo-intel-149x40.png',
            category: 'Intel',
            title: 'Intel'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logo-chuwi-149x40.png',
            category: 'Chuwi',
            title: 'Chuwi'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logo-itel-149x40.png',
            category: 'Itel',
            title: 'itel'
        }
    ];

    const ramPhone = [
        '4 GB',
        '8 GB',
        '16 GB',
        '32 GB'
    ];

    const OS = [
        'Linux',
        'Ubuntu',
        'MacOS',
        'Window 7',
        'Window 8',
        'Window 10'
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
    const [titleLaptop, setTitleLaptop] = useState('MacBook');
    const [condition, setCondition] = useState([]);
    const [value, setValue] = useState(true);

    useEffect(() => {  
        try {
            axios
                .get(
                    'http://localhost:8084/api/v1/products/type?name=laptop'
                )
                .then((res) => {
                    setData([...res.data].filter(item => item.manufacturer === `${manu}`));
                    if(condition === 'laptop-ram'){
                        setData([...res.data].filter(item => item.manufacturer === `${manu}`).filter(item => item.laptop.ram === `${value}`));
                    }
                    if(condition === 'laptop-os'){
                        setData([...res.data].filter(item => item.manufacturer === `${manu}`).filter(item => item.os === `${value}`));
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
            <div className={styles.manufacturer__container} style={{marginTop: 20, backgroundColor: '#333'}}>
                <div className={styles.manufacturer__content}>
                    {logoLaptop.map((item) => (
                        <div className={styles.logo__brand} onClick={() => {
                                setManu(`${item.category}`)
                                setTitleLaptop(`${item.title}`)
                            }}>
                            {/* eslint-disable-next-line */}
                            <a href='javascript:void(0)' className={styles.logo__item}>
                                <img 
                                    src={item.logo}
                                    alt=''
                                />                                    
                            </a>
                        </div>
                    ))}
                </div>
            </div>
                
            <div style={{...styles, width: 'max-content', margin: 'auto', paddingTop: 20}}>
                <strong style={{...styles, fontSize: 50, textTransform: 'uppercase'}}>{titleLaptop}</strong>
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
                            {ramPhone.map((item) => (
                                <>
                                    {/* eslint-disable-next-line */}
                                    <a href='javascript:void(0)' 
                                        className={styles.btn__box}
                                        onClick={() => {
                                            setCondition('laptop-ram'); 
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
                        <span>OS<i className={displayIconRom}></i></span>
                    </div>
                    <div className={displayRom}>
                        <div className={styles.filter__list__element}>
                            {OS.map((item) => (
                                <>
                                    {/* eslint-disable-next-line */}
                                    <a href='javascript:void(0)'
                                        className={styles.btn__box}
                                        onClick={() => {
                                            setCondition('laptop-os'); 
                                            setValue(`${item}`);
                                        }}
                                        >{item}</a>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* show */}
            <div className={styles.show__all__products}>
                <ul className={styles.list__product}>
                    {data.map((laptop, i) => (
                        <li key={i} className={styles.list__item}>
                            {/* eslint-disable-next-line */}
                            <a className={styles.item__container} href={`/productdetail/${laptop.category}/${laptop.manufacturer}/${laptop.id}`}>
                                <div className={styles.item__content} style={{...styles, paddingTop: 10}}>
                                    <Image
                                            className={styles.item__element}
                                            cloudName={cloudName}
                                            publicId={laptop.images[0]?.source}
                                    />
                                </div>
                                <strong style={{...styles, width: '95%', paddingTop: 10, color: 'black'}} >{laptop.name}</strong>
                                <div className={styles.product__group} style={{...styles, paddingTop: 10}}>
                                    <ul className={styles.product__memory}>
                                        <li className={styles.memory__item}>{laptop.laptop.ram} - {laptop.laptop.rom}</li>
                                    </ul>
                                </div>
                                <h2>{laptop.os}  Màu:&nbsp;{laptop.color}</h2>
                                {/* <h2>{laptop.laptop.touchScreen}</h2> */}
                                <div className={styles.box__old__price}>
                                    <p className={styles.old__price}>
                                        {laptop.price.toString().split('').reverse().reduce((prev, next, index) => {
                                            return (index % 3 ? next : next + '.') + prev;})}₫
                                        </p>
                                    <span className={styles.discount__percent}>&nbsp;-{laptop.saleOff}%</span>
                                </div>
                                <strong className={styles.new__price}>{(laptop.price - (laptop.saleOff * laptop.price)/100).toString().split('').reverse().reduce((prev, next, index) => {
                                            return (index % 3 ? next : next + '.') + prev;})}₫
                                </strong>
                                <div>
                                    <div style={{...styles, display: 'flex'}}><h2 style={{...styles, minWidth: 60}}>M.HÌNH</h2><p style={{color: 'black'}}>{laptop.laptop.screen}</p></div>
                                    <div style={{...styles, display: 'flex'}}><h2 style={{...styles, minWidth: 60}}>ROM</h2> <p style={{color: 'black'}}>{laptop.laptop.rom}</p></div>
                                    <div style={{...styles, display: 'flex'}}><h2 style={{...styles, minWidth: 60}}>CPU</h2> <p style={{color: 'black'}}>{laptop.laptop.cpu}</p></div>
                                    <div style={{...styles, display: 'flex'}}><h2 style={{...styles, minWidth: 60}}>COLOR</h2> <p style={{color: 'black'}}>{laptop.color}</p></div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
}
