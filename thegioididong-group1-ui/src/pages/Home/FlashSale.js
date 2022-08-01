import styles from './Home.module.scss';

function FlashSale() {
    return (
        <div className={styles.flashsale__block}>
            <div class={styles.gvdshock}>
                <i class={styles.lightning__ic}>
                    <img
                        width="32"
                        height="70"
                        src="https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/homev2/lightning-ic.png"
                        alt="lightningicon"
                    />
                </i>
                <h3 className={styles.title}>GIỜ VÀNG DEAL SỐC</h3>
                <div className={styles.endtime}>
                    <span className="title__end">Kết thúc trong</span>
                    <span className={styles.countdown__timer}>
                        <label id="hour" className={styles.timer}>
                            00
                        </label>
                        <label id="minute" className={styles.timer}>
                            00
                        </label>
                        <label id="second" className={styles.timer}>
                            00
                        </label>
                    </span>
                </div>
            </div>

            <div class="listing-timeline">
                {/* eslint-disable-next-line */}
                <a href="javascript:void(0)" className="active">
                    <span>Đang diễn ra</span>
                    <span class="timeline">14:00 - 16:00</span>
                </a>
                {/* eslint-disable-next-line */}
                <a href="javascript:void(0)" className="">
                    <span>Sắp diễn ra</span>
                    <span class="timeline">19:00 - 21:00</span>
                </a>
                {/* eslint-disable-next-line */}
                <a href="javascript:void(0)" className="">
                    <span>Ngày mai</span>
                    <span class="timeline">09:00 - 11:00</span>
                </a>
            </div>
        </div>
    );
}

export default FlashSale;
