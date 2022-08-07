import { Image } from 'cloudinary-react';
import styles from './Laptop.module.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function BannerThin() {

    const cloudName = 'dlefvc2xe';
    const [data, setData] = useState([]);

    const bannerThinLogo = 'https://cdn.tgdd.vn/2021/08/banner/mongnhedes-1200x200.jpg'

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
        <div className={styles.banner__thin} id='ltthin'>
            <div className={styles.block__banner}>
                {/* eslint-disable-next-line */}
                <a href='javascript:void(0)' className={styles.banner__link}>
                    <img className={styles.banner__img} src={bannerThinLogo} alt='' />
                </a>
            </div>
            <div className={styles.list__item__block}>
                <ul className={styles.list__product}>
                    {data.filter(item => item.laptop.design === 'thin').map((laptop, i) => (
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
                                <strong style={{color: 'black'}}>{laptop.name}</strong>
                                <div className={styles.product__group}>
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
        </div>
    );
}