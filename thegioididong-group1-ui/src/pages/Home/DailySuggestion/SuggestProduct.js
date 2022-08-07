import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Image } from 'cloudinary-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Home.module.scss';
const API_REVIEWS = 'http://localhost:8084/api/v1/reviews/product?id=';
const cloudName = 'dlefvc2xe';
function SuggestProduct({ product, index }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(API_REVIEWS + product.id).then((res) => {
            setReviews(res.data);
        });
    }, [product.id]);

    return (
        <li className={styles.suggest__product} key={index}>
            <Link to="#" className={styles.main__contain}>
                <div className={styles.item__label}></div>
                <div className={styles.item__img}>
                    <Image
                        alt={product.name}
                        cloudName={cloudName}
                        publicId={product.images[0]?.source}
                        style={{ width: 207, height: 207 }}
                    />
                </div>
                <h3>{product.name}</h3>
                <p className={styles.item__txtonline}>Online giá rẻ</p>
                <strong className={styles.item__price}>
                    {(product.price - (product.price * product.saleOff) / 100)
                        .toString()
                        .split('')
                        .reverse()
                        .reduce((prev, next, index) => {
                            return (index % 3 ? next : next + '.') + prev;
                        })}
                    ₫<small>-{product.saleOff}%</small>
                </strong>
                <p className={styles.item__votetxt}>
                    <b>
                        {reviews.length > 0
                            ? Number(
                                  reviews.reduce((partialSum, a) => partialSum + a.rate, 0) / reviews.length,
                              ).toFixed(1)
                            : 0}
                    </b>
                    <FontAwesomeIcon
                        icon={faStar}
                        style={{ width: '12px', height: '12px', margin: '0 10px 2px 5px', color: '#fb6e2e' }}
                    />
                    ({reviews.length})
                </p>
            </Link>
        </li>
    );
}

export default SuggestProduct;
