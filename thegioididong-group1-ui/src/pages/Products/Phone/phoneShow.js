import {React, useState, useEffect} from 'react';
import styles from './Phone.module.scss';
import clsx from 'clsx';
import axios from 'axios';

export default function PhoneShowAll (){

    const [showPhone, setShowPhone] = useState([]);

    useEffect(() => {
        const getPhone = async () =>{ 
            try {
                const res = await axios.get(
                    // 'http://localhost:8084/api/v1/products/type?name=phone'
                    'https://jsonplaceholder.typicode.com/photos?_limit=30'
                )
                setShowPhone(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error.message);
            }
        }
        getPhone()
    }, [])

    const showImg = 'https://cdn.tgdd.vn/Products/Images/42/261888/realme-c35-thumb-new-600x600.jpg'
    const optionRom = ['8GB/128GB', '12GB/256GB', '12GB/512GB']

    return (
        <div className={styles.show__all__products}>
            <ul className={styles.list__product}>
                {showPhone.map((phone) => (
                    <li className={styles.list__item}>
                        {/* eslint-disable-next-line */}
                        <a className={styles.item__container} href='javascript:void(0)'>
                            <div className={styles.item__label}>
                                <span className={styles.label__content}>Trả góp 0%</span>
                            </div>
                            <div className={styles.item__content}>
                                <img className={styles.item__element} src={showImg} alt=''/>
                            </div>
                            <strong style={{color: 'black'}}>Name of phone {phone.id}</strong>
                            <div className={styles.product__group}>
                                <ul className={styles.product__memory}>
                                    {optionRom.map((opt) => (
                                        <li className={styles.memory__item}>{opt}</li>
                                    ))}
                                    
                                    {/* <li className={styles.memory__item}>8GB/128GB</li>
                                    <li className={styles.memory__item}>12GB/256GB</li>
                                    <li className={styles.memory__item}>12GB/512GB</li> */}
                                </ul>
                            </div>
                            <div className={styles.box__old__price}>
                                <p className={styles.old__price}>30.990.000₫</p>
                                <span className={styles.discount__percent}>&nbsp;9%</span>
                            </div>
                            <strong className={styles.new__price}>27.990.000₫</strong>
                            <div className={styles.rating}>
                                <div className={styles.star__rating}>
                                    <i className={clsx('fa fa-star', styles.star)}></i>
                                    <i className={clsx('fa fa-star', styles.star)}></i>
                                    <i className={clsx('fa fa-star', styles.star)}></i>
                                    <i className={clsx('fa fa-star', styles.star__dark)}></i>
                                    <i className={clsx('fa fa-star', styles.star__dark)}></i>
                                </div>
                                <div className={styles.total__rating}><span>&nbsp;(45)</span></div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}