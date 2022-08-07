import { faBoltLightning, faGamepad, faMobileScreen, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

function ServiceConvenience() {
    return (
        <div className={styles.service__conv}>
            <strong className={styles.name__box}>dịch vụ tiện ích</strong>
            <ul>
                <li>
                    <div className={styles.box__icon}>
                        <p className="iconnewglobal-card">
                            <FontAwesomeIcon icon={faMobileScreen} style={{ width: 38, height: 38 }} />
                        </p>
                    </div>
                    <div className={styles.text__conv}>
                        {/* eslint-disable-next-line */}
                        <Link to={'#'}>
                            <small className={styles.text__title}>Mua Mã thẻ cào</small>
                            <small>
                                <strong>Giảm 3%</strong> cho mệnh giá từ 100.000 trở lên
                            </small>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className={styles.box__icon}>
                        <p className="iconnewglobal-service">
                            <FontAwesomeIcon icon={faBoltLightning} style={{ width: 38, height: 38 }} />
                        </p>
                    </div>
                    <div className={styles.text__conv}>
                        {/* eslint-disable-next-line */}
                        <Link to={'#'}>
                            <small className={styles.text__title}>Dịch Vụ Đóng Tiền</small>
                            <small>Điện, Nước, Internet, Cước điện thoại trả sau</small>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className={styles.box__icon}>
                        <p className="iconnewglobal-game">
                            <FontAwesomeIcon icon={faGamepad} style={{ width: 38, height: 38 }} />
                        </p>
                    </div>
                    <div className={styles.text__conv}>
                        {/* eslint-disable-next-line */}
                        <Link to={'#'}>
                            <small className={styles.text__title}>Mua thẻ game</small>
                            <small>
                                <strong>Giảm 3%</strong> cho tất cả nhà mạng, áp dụng cho mệnh giá từ 100.000 trở lên
                            </small>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className={styles.box__icon}>
                        <p className="iconnewglobal-ticket">
                            <FontAwesomeIcon icon={faTicket} style={{ width: 38, height: 38 }} />
                        </p>
                    </div>
                    <div className={styles.text__conv}>
                        {/* eslint-disable-next-line */}
                        <Link to={'#'}>
                            <small className={styles.text__title}>Vé máy bay, tàu</small>
                            <small>Thu hộ tiền vé xe, vé tàu, vé máy bay</small>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ServiceConvenience;
