import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../Home.module.scss';
import SuggestProduct from './SuggestProduct';
const PRODUCTS_TOP20_NEW_URL = 'http://localhost:8084/api/v1/products/new';

function DailySuggestion() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(PRODUCTS_TOP20_NEW_URL).then((res) => {
            setProducts(res.data);
        });
    }, []);

    return (
        <div className={styles.daily__suggestion}>
            <strong className={styles.name__box}>Gợi ý hôm nay</strong>
            <div className={styles.block__product}>
                <ul className={styles.list__product}>
                    {products.map((product, index) => (
                        <SuggestProduct product={product} index={index} key={index} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DailySuggestion;
