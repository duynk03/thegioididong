import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function HeaderTop() {
    return (
        <div className={styles.header__top}>
            <div>
                <Link to={'/'} className={styles.header__logo}>
                    <img className={styles.iconnewglobal__logo} alt="logo header" src="/icon-tgdd-header.png"></img>
                </Link>
                <span className={styles.header__address}>
                    Xem giá, tồn kho tại:
                    <span>P.An Bình, Ninh Kiều, Cần Thơ</span>
                </span>
                <form action="/tim-kiem" className={styles.header__search}>
                    <input type="text" placeholder="Bạn tìm gì..." maxLength={100} autoComplete="off" />
                    <button type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon__search} />
                    </button>
                </form>
                <Link to="/lich-su-mua-hang" className={styles.name__order}>
                    Lịch sử đơn hàng
                </Link>
                <Link to="/cart" className={styles.header__cart}>
                    <div className={styles.box__cart}>
                        <img src="/images/iconcart.png" alt="cart icon" className={styles.iconnewglobal__cart} />
                        <span className={styles.cart__number}>1</span>
                    </div>
                    <span>Giỏ hàng</span>
                </Link>
                <div className={styles.header__listtop}>
                    <div className={styles.div__item}>
                        <span to="/to">
                            24h
                            <br />
                            Công nghệ
                        </span>
                    </div>
                    <div className={styles.bordercol}></div>
                    <div className={styles.div__item}>
                        <span>Hỏi đáp</span>
                    </div>
                    <div className={styles.bordercol}></div>
                    <div className={styles.div__item}>
                        <span>Game App</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;
