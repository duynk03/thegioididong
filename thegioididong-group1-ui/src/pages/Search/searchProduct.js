import React, { Fragment, useState, useEffect } from "react";
import { Image } from 'cloudinary-react';
import axios from 'axios';
import styles from './Search.module.scss';
import clsx from "clsx";

export default function SearchProduct(){
    
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
                        'http://localhost:8084/api/v1/products/type?name=phone'
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

            {/* sort */}
            <div className={styles.sort__container} style={{paddingTop: 30}}>
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
                    {data.map((phone, index) => (
                        <li key={index} className={styles.list__item}>
                            {/* eslint-disable-next-line */}
                            <a className={styles.item__container} href='javascript:void(0)'>
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