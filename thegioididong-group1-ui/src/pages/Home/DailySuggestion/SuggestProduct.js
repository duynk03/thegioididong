import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from '../Home.module.scss';

function SuggestProduct() {
    return (
        <li className={styles.suggest__product}>
            <Link to="/dtdd/iphone-13-pro-max-256gb" className={styles.main__contain}>
                <div className={styles.item__label}></div>
                <div className={styles.item__img}>
                    <img
                        alt="iPhone 13 Pro Max 256GB"
                        width="207"
                        height="207"
                        src="https://cdn.tgdd.vn/Products/Images/42/250261/TimerThumb/230529.jpg"
                    />
                </div>
                <h3>iPhone 13 Pro Max 256GB</h3>
                <p className={styles.item__txtonline}>Online giá rẻ</p>
                <strong className={styles.item__price}>
                    30.890.000₫
                    <small>-16%</small>
                </strong>
                <p className={styles.item__votetxt}>
                    <b>4.5</b>
                    <FontAwesomeIcon
                        icon={faStar}
                        style={{ width: '12px', height: '12px', margin: '0 10px 2px 5px', color: '#fb6e2e' }}
                    />
                    (100)
                </p>
            </Link>
        </li>
    );
}

export default SuggestProduct;
