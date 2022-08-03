import { Image } from 'cloudinary-react';
import styles from './Smartwatch.module.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ShockDeal() {
    const cloudName = 'dlefvc2xe';
    const [data, setData] = useState([]);

    useEffect(() => {
        try{
            axios
                .get(
                    'http://localhost:8084/api/v1/products/type?name=smartwatch'
                ).then((res) => {
                    setData(res.data);
                    console.log(res.data)
                })
        }catch (error) {
            console.log(error.message);
        }
    }, [])

    return(
        <div className={styles.deal__container} id='dealsoc'>
            <div className={styles.deal__title}>
                {/* eslint-disable-next-line */}
                <a href='javascript:void(0)' className={styles.deal__link}>
                    <span className={styles.first__content}>DEAL SỐC</span>
                    <span className={styles.second__content}>GIẢM TỚI 30%</span>
                </a>
            </div>
            <div className={styles.show__deal}>
                <ul className={styles.list__product}>
                    {data.filter(item => item.saleOff > 3).map((swatch, i) => (
                        <li key={i} className={styles.list__item}>
                            {/* eslint-disable-next-line */}
                            <a className={styles.item__container} href='javascript:void(0)'>
                                <div className={styles.item__content} style={{...styles, paddingTop: 10}}>
                                    <Image
                                            className={styles.item__element}
                                            cloudName={cloudName}
                                            publicId={swatch.images[0]?.source}
                                    />
                                </div>
                                <strong style={{color: 'black'}}>{swatch.name}</strong>
                                <div className={styles.box__old__price}>
                                    <p className={styles.old__price}>
                                        {swatch.price.toString().split('').reverse().reduce((prev, next, index) => {
                                            return (index % 3 ? next : next + '.') + prev;})}₫
                                        </p>
                                    <span className={styles.discount__percent}>&nbsp;-{swatch.saleOff}%</span>
                                </div>
                                <strong className={styles.new__price}>{(swatch.price - (swatch.saleOff * swatch.price)/100).toString().split('').reverse().reduce((prev, next, index) => {
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
