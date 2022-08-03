import styles from './Laptop.module.scss';
import { Image } from 'cloudinary-react';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function BannerSoftware() {
    const cloudName = 'dlefvc2xe';
    const [data, setData] = useState([]);

    const bannerSoftwareLogo = 'https://cdn.tgdd.vn/2022/05/banner/banner-phan-mem-1200x200-1200x200.png'

    useEffect(() => {
        try{
            axios
                .get(
                    'http://localhost:8084/api/v1/products/type?name=laptop'
                ).then((res) => {
                    setData(res.data);
                    console.log(res.data)
                })
        }catch (error) {
            console.log(error.message);
        }
    }, [])
    

    return(
        <div className={styles.banner__software} id='software'>
            <div className={styles.block__banner}>
                {/* eslint-disable-next-line */}
                <a href='javascript:void(0)' className={styles.banner__link}>
                    <img className={styles.banner__img} src={bannerSoftwareLogo} alt='' />
                </a>
            </div>
            <div className={styles.list__item__block}>
                <ul className={styles.list__product}>
                    {data.filter(item => item.laptop.design === 'software').map((laptop, i) => (
                        <li key={i} className={styles.list__item}>
                            {/* eslint-disable-next-line */}
                            <a className={styles.item__container} href='javascript:void(0)'>
                                <div className={styles.item__content} style={{...styles, paddingTop: 10}}>
                                    <Image
                                            className={styles.item__element}
                                            cloudName={cloudName}
                                            publicId={laptop.images[0]?.source}
                                    />
                                </div>
                                <strong style={{color: 'black'}}>{laptop.name}</strong>
                                <div className={styles.box__old__price}>
                                    <p className={styles.old__price} style={{...styles, paddingTop: 5}}>
                                        {laptop.price.toString().split('').reverse().reduce((prev, next, index) => {
                                            return (index % 3 ? next : next + '.') + prev;})}₫
                                        </p>
                                    <span className={styles.discount__percent}>&nbsp;-{laptop.saleOff}%</span>
                                </div>
                                <strong className={styles.new__price}>{(laptop.price - (laptop.saleOff * laptop.price)/100).toString().split('').reverse().reduce((prev, next, index) => {
                                            return (index % 3 ? next : next + '.') + prev;})}₫
                                </strong>
                            </a>
                        </li>
                    ))} 
                </ul>
            </div>
        </div>
    );
}