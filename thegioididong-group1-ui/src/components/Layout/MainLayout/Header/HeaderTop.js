import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function HeaderTop() {
    const [key, setKey] = useState('');
    const navigate = useNavigate();
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
                <div className={styles.header__search}>
                    <input
                        type="text"
                        placeholder="Bạn tìm gì..."
                        maxLength={100}
                        autoComplete="off"
                        value={key}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' && event.target.value.length >= 2) {
                                navigate('/tim-kiem?key=' + key);
                            }
                        }}
                        onChange={(e) => setKey(e.target.value)}
                    />
                    <button
                        type="submit"
                        onClick={() => {
                            if (key.length >= 2) {
                                navigate('/tim-kiem?key=' + key);
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon__search} />
                    </button>
                </div>
                <Link to="/lich-su-mua-hang" className={styles.name__order}>
                    Lịch sử đơn hàng
                </Link>
                <Link to="/cart" className={styles.header__cart}>
                    <div className={styles.box__cart}>
                        <img src="/images/iconcart.png" alt="cart icon" className={styles.iconnewglobal__cart} />
                        <span className={styles.cart__number}></span>
                    </div>
                    <span>Giỏ hàng</span>
                </Link>
                <div className={styles.header__listtop}>
                    <div className={styles.div__item}>
                        <span>
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
