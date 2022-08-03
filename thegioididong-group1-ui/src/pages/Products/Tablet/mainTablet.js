import { useState, useEffect,Fragment } from 'react';
import styles from './Tablet.module.scss';
import { Image } from 'cloudinary-react';
import axios from 'axios';
import clsx from 'clsx';


export default function MainTablet() {

    const logoTablet = [
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/iPad-(Apple)522-b_4.jpg',
            category: 'iPad'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-3.png',
            category: 'Samsung'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/Tablet-xiaomi-220x48-1.png',
            category: 'Xiaomi'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/Lenovo522-b_6.jpg',
            category: 'Lenovo'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/Masstel522-b_7.png',
            category: 'Masstel'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logonokia-220x48-1.jpg',
            category: 'Nokia'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/Huawei522-b_4.jpg',
            category: 'Huawei'
        },
        {
            logo: 'https://cdn.tgdd.vn/Brand/1/logoalcatel-220x48-1.png',
            category: 'Alcatel'
        }
    ];

    const cloudName = 'dlefvc2xe';
 
    const [hidden, setHidden] = useState(false);
    
    const [displaySort, setDisplaySort] = useState(clsx(styles.sort__select__main, styles.sort__hidden));

    const [data, setData] = useState([]);
    const [orderByAsc, setOrderByAsc] = useState([]);
    const [orderByDesc, setOrderByDesc] = useState([]);

    const [showData, setShowData] = useState('Giá từ thấp đến cao');
    const [render, setRender] = useState(false);


    useEffect(() => {
        if (render) {
            if (showData === 'Giá từ thấp đến cao') {
                setData(orderByAsc);
            } else {
                setData(orderByDesc);
            }
        } else {
            try {
                axios
                    .get(
                        'http://localhost:8084/api/v1/products/type?name=tablet'
                    )
                    .then((res) => {
                        const types = {
                            price: 'price',
                        };
                        const orderByProperty = types['price'];
                        setOrderByDesc([...res.data].sort((a, b) => b[orderByProperty] - a[orderByProperty]));
                        setOrderByAsc([...res.data].sort((a, b) => a[orderByProperty] - b[orderByProperty]));
                        setData(res.data);
                        console.log(res.data)
                    });
            } catch (error) {
                console.log(error.message);
            }
            setRender(true);
        }
    }, [render, showData, orderByAsc, orderByDesc]);


    return(
        <Fragment>
            {/* filter */}
            <div className={styles.session__filter}>
                <div className={styles.quick__filter}>
                    {logoTablet.map((item) => (
                        <div className={styles.logo__tablet}>
                            {/* eslint-disable-next-line */}
                            <a href='/tablet-manufacturer' className={styles.logo__tablet__manu}>
                                <img 
                                    src={item.logo}
                                    alt=''
                                />                                    
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* sort */}
            <div className={styles.sort__container}>
                <p className={styles.sort__total}>
                    <b className={styles.sort__total__item}>
                        {data.length? data.length : '0'}&nbsp;Điện thoại
                    </b>
                </p>

                <div className={styles.select__sort} onClick={() =>{
                    setHidden(!hidden)
                    if(displaySort.includes('hidden')){
                        setDisplaySort(clsx(styles.sort__select__main, styles.sort__visible));
                    }else{
                        setDisplaySort(clsx(styles.sort__select__main, styles.sort__hidden));
                    }
                }}>
                    <p className={styles.sort__content}>Xếp theo:&nbsp;
                        <span className={styles.sort__show}>
                        {showData}&nbsp;
                        <i className={clsx(styles.select__sort__icon,'fas fa-sort-down')}></i>
                        </span>
                    </p>
                    <div className={displaySort} >
                        <p onClick={() => setShowData('Giá từ thấp đến cao')} >
                            {/* eslint-disable-next-line */}
                            <a className='' href='javascript:void(0)'>
                                <i></i>
                                Giá từ thấp đến cao
                            </a>
                        </p>
                        <p onClick={() => setShowData('Giá từ cao đến thấp')} >
                            {/* eslint-disable-next-line */}
                            <a className='' href='javascript:void(0)'>
                                <i></i>
                                Giá từ cao đến thấp
                            </a>
                        </p>
                    </div>
                </div>    
            </div>

            {/* show */}
            <div className={styles.show__all__products}>
                <ul className={styles.list__product}>
                    {data.map((tablet, index) => (
                        <li key={index} className={styles.list__item}>
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
