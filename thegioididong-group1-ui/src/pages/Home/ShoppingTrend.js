import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

function ShoppingTrend() {
    return (
        <div className={styles.shopping__trend}>
            <strong className={styles.name__box}>Xu hướng mua sắm</strong>
            <ul className={styles.trend__list}>
                <li className={styles.trend__item}>
                    {/* eslint-disable-next-line */}
                    <Link aria-label="slide" to={'#'}>
                        <img
                            width="280"
                            height="236"
                            alt="Điện thoại"
                            src="//cdn.tgdd.vn/2022/06/banner/Deskx1-280x235.png"
                        />
                        <span>Điện thoại</span>
                        <strong>Galaxy M Series</strong>
                    </Link>
                </li>
                <li className={styles.trend__item}>
                    {/* eslint-disable-next-line */}
                    <Link aria-label="slide" to={'#'}>
                        <img
                            width="280"
                            height="236"
                            alt="Laptop Gaming"
                            src="//cdn.tgdd.vn/2022/06/banner/sis-gaming-desk-280x235.png"
                        />
                        <span>Laptop Gaming</span>
                        <strong>Giảm đến 20%</strong>
                    </Link>
                </li>
                <li className={styles.trend__item}>
                    {/* eslint-disable-next-line */}
                    <Link aria-label="slide" to={'#'}>
                        <img
                            width="280"
                            height="236"
                            alt="Tai nghe không dây"
                            src="//cdn.tgdd.vn/2022/04/banner/phukien-280x235.png"
                        />
                        <span>Tai nghe không dây</span>
                        <strong>Giảm đến 50%</strong>
                    </Link>
                </li>
                <li className={styles.trend__item}>
                    {/* eslint-disable-next-line */}
                    <Link aria-label="slide" to={'#'}>
                        <img
                            width="280"
                            height="236"
                            alt="Smartwatch"
                            src="//cdn.tgdd.vn/2022/04/banner/dongho-280x235-1.png"
                        />
                        <span>Smartwatch</span>
                        <strong>Giảm đến 50%++</strong>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default ShoppingTrend;
