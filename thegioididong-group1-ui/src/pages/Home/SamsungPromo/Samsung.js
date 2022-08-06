import styles from '../Home.module.scss';
import BottomSlider from './BottomSlider';

function Samsung() {
    return (
        <div className={styles.samsung__promo}>
            <div>
                <p className={styles.promo__title}>ĐẠI TIỆC SAMSUNG</p>
            </div>
            {/* <div className={styles.samsung__slider}>
                <TopSlider />
            </div> */}
            <div className={styles.list__item}>
                <BottomSlider />
            </div>

            {/* eslint-disable-next-line */}
            {/* <a className={styles.seeall} href="javascript:void(0)">
                <span>Xem tất cả sản phẩm</span>
            </a> */}
        </div>
    );
}

export default Samsung;
