import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

function OptionPromo() {
    return (
        <ul className={styles.option__promo}>
            <li className={styles.promo__item}>
                {/* eslint-disable-next-line */}
                <Link to={'#'} className={styles.item__link}>
                    <img
                        className={styles.item__img}
                        src="/images/optionpromo/promo1-80x92.png"
                        alt="Chi giam online"
                    />
                    <span className={styles.item__text}>Chỉ giảm online</span>
                </Link>
            </li>
            <li className={styles.promo__item}>
                {/* eslint-disable-next-line */}
                <Link to={'#'} className={styles.item__link}>
                    <img
                        className={styles.item__img}
                        src="/images/optionpromo/promo2-61x60.png"
                        alt="Đồng giá từ 99k"
                    />
                    <span className={styles.item__text}>Đồng giá từ 99k</span>
                </Link>
            </li>
            <li className={styles.promo__item}>
                {/* eslint-disable-next-line */}
                <Link to={'#'} className={styles.item__link}>
                    <img
                        className={styles.item__img}
                        src="/images/optionpromo/promo3-81x85-1.png"
                        alt="Xả hàng giảm sốc"
                    />
                    <span className={styles.item__text}>Xả hàng giảm sốc</span>
                </Link>
            </li>
            <li className={styles.promo__item}>
                {/* eslint-disable-next-line */}
                <Link to={'#'} className={styles.item__link}>
                    <img
                        className={styles.item__img}
                        src="/images/optionpromo/promo4-120x120-2.png"
                        alt="Điện thoại độc quyền"
                    />
                    <span className={styles.item__text}>Điện thoại độc quyền</span>
                </Link>
            </li>
        </ul>
    );
}

export default OptionPromo;
