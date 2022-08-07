import styles from './Smartwatch.module.scss';
import { Image } from 'cloudinary-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BannerAccessory() {

    const bannerAccessoryLogo = 'https://cdn.tgdd.vn/2021/08/banner/Da%CC%82ydo%CC%82%CC%80ngho%CC%82%CC%80-1200x200.png'

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
        <div className={styles.banner__accessory} id='phukien'>
            <div className={styles.block__banner}>
                {/* eslint-disable-next-line */}
                <a href='javascript:void(0)' className={styles.banner__link}>
                    <img className={styles.banner__img} src={bannerAccessoryLogo} alt='' />
                </a>
            </div>

            <div className={styles.list__item__block}>
                <ul className={styles.list__product}>
                    {data.filter(item => item.smartwatch.materialSurface === 'accessory').map((swatch, i) => (
                        <li key={i} className={styles.list__item}>
                            {/* eslint-disable-next-line */}
                            <a className={styles.item__container} href={`/productdetail/${swatch.category}/${swatch.manufacturer}/${swatch.id}`}>
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