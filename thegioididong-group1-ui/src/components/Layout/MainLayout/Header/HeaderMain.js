import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import clsx from 'clsx';

function HeaderMain() {
    return (
        <div className={styles.header__main}>
            <div>
                <ul className={styles.main__menu}>
                    <li>
                        <Link to={'/dtdd'}>
                            <i>
                                <img src="https://cdn.tgdd.vn//content/icon-phone-96x96-2.png" alt="Điện thoại" />
                            </i>
                            <span>Điện thoại</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/laptop'}>
                            <i>
                                <img src="https://cdn.tgdd.vn//content/icon-laptop-96x96-1.png" alt="Laptop" />
                            </i>
                            <span>Laptop</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/tablet'}>
                            <i>
                                <img src="https://cdn.tgdd.vn//content/icon-tablet-96x96-1.png" alt="Máy tính bảng" />
                            </i>
                            <span>Tablet</span>
                        </Link>
                    </li>
                    <li className={styles.has__list}>
                        <Link to={'/phu-kien'}>
                            <i>
                                <img src="https://cdn.tgdd.vn//content/icon-phu-kien-96x96-1.png" alt="phụ kiện" />
                            </i>
                            <span className={styles.has__child}>Phụ kiện</span>
                        </Link>
                        <div className={styles.navmwg}>
                            <div className={styles.item__child}>
                                <strong>Phụ kiện di động</strong>
                                <a href="/sac-dtdd">
                                    <h3>Sạc dự phòng</h3>
                                </a>
                                <a href="/sac-cap">
                                    <h3>Sạc, cáp</h3>
                                </a>
                                <a href="/op-lung-flipcover">
                                    <h3>Ốp lưng điện thoại</h3>
                                </a>
                                <a href="/op-lung-may-tinh-bang">
                                    <h3>Ốp lưng máy tính bảng</h3>
                                </a>
                                <a href="/mieng-dan-man-hinh">
                                    <h3>Miếng dán màn hình</h3>
                                </a>
                                <a href="/gay-tu-suong">
                                    <h3>Gậy chụp ảnh, Gimbal</h3>
                                </a>
                                <a href="/gia-do-dien-thoai">
                                    <h3>Giá đỡ điện thoại</h3>
                                </a>
                                <a href="/de-moc-dien-thoai">
                                    <h3>Đế, móc điện thoại</h3>
                                </a>
                                <a href="/tui-chong-nuoc">
                                    <h3>Túi chống nước</h3>
                                </a>
                                <a href="/tui-dung-airpods">
                                    <h3>Túi đựng AirPods</h3>
                                </a>
                                <a href="/airtag">
                                    <h3>AirTag</h3>
                                </a>
                                <a href="/phu-kien-thong-minh">
                                    <h3>Phụ kiện Tablet</h3>
                                </a>
                            </div>
                            <div className={styles.item__child}>
                                <strong>Phụ kiện laptop</strong>
                                <a href="/chuot-ban-phim">
                                    <h3>Chuột, bàn phím</h3>
                                </a>
                                <a href="/thiet-bi-mang">
                                    <h3>Thiết bị mạng</h3>
                                </a>
                                <a href="/camera-giam-sat">
                                    <h3>Camera, webcam</h3>
                                </a>
                                <a href="/tui-chong-soc">
                                    <h3>Balo, túi chống sốc</h3>
                                </a>
                                <a href="/gia-do-dien-thoai?g=de-laptop-macbook">
                                    <h3>Giá đỡ laptop</h3>
                                </a>
                                <a href="/phan-mem">
                                    <h3>Phần mềm</h3>
                                </a>
                            </div>
                            <div className={styles.item__child}>
                                <strong>Thiết bị nhà thông minh</strong>
                                <a href="/khoa-dien-tu">
                                    <h3>Khóa điện tử</h3>
                                </a>
                                <a href="/android-tv-box">
                                    <h3>TV Box</h3>
                                </a>
                                <a href="/o-cam-thong-minh">
                                    <h3>Ổ cắm, bóng đèn thông minh</h3>
                                </a>
                                <a href="/may-chieu">
                                    <h3>Máy chiếu</h3>
                                </a>
                                <a href="/but-trinh-chieu">
                                    <h3>Bút trình chiếu</h3>
                                </a>
                            </div>
                            <div className={styles.item__child}>
                                <strong>Thương hiệu hàng đầu</strong>
                                <a href="/phu-kien/apple">
                                    <h3>Apple</h3>
                                </a>
                                <a href="/phu-kien/samsung">
                                    <h3>Samsung</h3>
                                </a>
                                <a href="/phu-kien/sony">
                                    <h3>Sony</h3>
                                </a>
                                <a href="/phu-kien/jbl">
                                    <h3>JBL</h3>
                                </a>
                                <a href="/phu-kien/xiaomi">
                                    <h3>Xiaomi</h3>
                                </a>
                            </div>
                            <div className={styles.item__child}>
                                <strong>Thiết bị âm thanh</strong>
                                <a href="/tai-nghe">
                                    <h3>Tai nghe</h3>
                                </a>
                                <a href="/loa-laptop">
                                    <h3>Loa</h3>
                                </a>
                            </div>
                            <div className={styles.item__child}>
                                <strong>Thiết bị lưu trữ</strong>
                                <a href="/o-cung-di-dong">
                                    <h3>Ổ cứng di động</h3>
                                </a>
                                <a href="/the-nho-dien-thoai">
                                    <h3>Thẻ nhớ</h3>
                                </a>
                                <a href="/usb">
                                    <h3>USB</h3>
                                </a>
                            </div>
                            <div className={styles.item__child}>
                                <strong>Phụ kiện khác</strong>
                                <a href="/phu-kien-oto">
                                    <h3>Phụ kiện ô tô</h3>
                                </a>
                                <a href="/may-tinh-cam-tay">
                                    <h3>Máy tính cầm tay</h3>
                                </a>
                                <a href="/quat-mini">
                                    <h3>Quạt mini</h3>
                                </a>
                                <a href="/pin">
                                    <h3>Pin tiểu</h3>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to={'/smartwatch'}>
                            <i>
                                <img
                                    src="https://cdn.tgdd.vn//content/icon-smartwatch-96x96-1.png"
                                    alt="Đồng hồ thông minh"
                                />
                            </i>
                            <span>Smartwatch</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dong-ho'}>
                            <i>
                                <img src="https://cdn.tgdd.vn//content/watch-icon-96x96.png" alt="Đồng hồ" />
                            </i>
                            <span>Đồng hồ</span>
                        </Link>
                    </li>
                    <li className={styles.has__list}>
                        <Link to={'/pc-may-in'}>
                            <i>
                                <img src="https://cdn.tgdd.vn//content/icon-pc-96x96.png" alt="Máy in" />
                            </i>
                            <span className={styles.has__child}>Máy in</span>
                        </Link>
                        <div className={clsx(styles.navmwg, styles.limit__width)}>
                            <div className={clsx(styles.item__child, styles.no__child__final)}>
                                <a href="/may-in">
                                    <h3>Máy in</h3>
                                </a>
                            </div>
                            <div className={clsx(styles.item__child, styles.no__child__final)}>
                                <a href="/muc-in">
                                    <h3>Mực in</h3>
                                </a>
                            </div>
                            <div className={clsx(styles.item__child, styles.no__child__final)}>
                                <a href="/man-hinh-may-tinh">
                                    <h3>Màn hình máy tính</h3>
                                </a>
                            </div>
                            <div className={clsx(styles.item__child, styles.no__child__final)}>
                                <a href="/may-tinh-de-ban">
                                    <h3>Máy tính để bàn</h3>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to={'/may-doi-tra'}>
                            <i></i>
                            <span>Máy cũ giá rẻ</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/sim-so-dep'}>
                            <i></i>
                            <span>Sim, Thẻ cào</span>
                        </Link>
                    </li>
                    <li className={styles.has__list}>
                        <Link to={'/sim-so-dep'}>
                            <i></i>
                            <span className={styles.has__child}>Sim, Thẻ cào</span>
                        </Link>
                        <div className={clsx(styles.navmwg, styles.limit__width)}>
                            <div className={clsx(styles.item__child, styles.no__child__final)}>
                                <a href="/tien-ich/thanh-toan-tra-gop">
                                    <h3>Đóng tiền trả góp</h3>
                                </a>
                            </div>
                            <div className={clsx(styles.item__child, styles.no__child__final)}>
                                <a href="/tien-ich/thanh-toan-tien-dien">
                                    <h3>Đóng tiền điện</h3>
                                </a>
                            </div>
                            <div className={clsx(styles.item__child, styles.no__child__final)}>
                                <a href="/tien-ich/thanh-toan-tien-nuoc">
                                    <h3>Đóng tiền nước</h3>
                                </a>
                            </div>
                            <div className={clsx(styles.item__child, styles.no__child__final)}>
                                <a href="/tien-ich/thanh-toan-internet-fpt">
                                    <h3>Đóng tiền net FPT</h3>
                                </a>
                            </div>
                            <div className={clsx(styles.item__child, styles.no__child__final)}>
                                <a href="/tien-ich/thanh-toan-internet-vnpt">
                                    <h3>Đóng tiền net, cáp VNPT</h3>
                                </a>
                            </div>
                            <div className={clsx(styles.item__child, styles.no__child__final)}>
                                <a href="/tien-ich/thanh-toan-bao-hiem">
                                    <h3>Đóng tiền bảo hiểm</h3>
                                </a>
                            </div>
                            <div className={clsx(styles.item__child, styles.no__child__final)}>
                                <a href="/tien-ich/thanh-toan-ve-tau-xe">
                                    <h3>Đóng tiền vé tàu, xe, máy bay</h3>
                                </a>
                            </div>
                            <div className={clsx(styles.item__child, styles.no__child__final)}>
                                <a href="/tien-ich/thanh-toan-vien-phi">
                                    <h3>Đóng viện phí ĐH Y Dược TP. HCM</h3>
                                </a>
                            </div>
                            <div className={clsx(styles.item__child, styles.no__child__final)}>
                                <a href="/tien-ich/nap-tien-dien-thoai-tra-sau">
                                    <h3>Đóng cước điện thoại trả sau</h3>
                                </a>
                            </div>
                            <div className={clsx(styles.item__child, styles.no__child__final)}>
                                <a href="/tien-ich/bao-hiem-o-to-xe-may">
                                    <h3>Mua bảo hiểm xe máy, ô tô</h3>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderMain;
