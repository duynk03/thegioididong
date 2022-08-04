import { faFacebook, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
function Footer() {
    const onDropItem = () => {
        let arrow = document.getElementById('arrowDrop');
        let liHiddenCollection = document.getElementsByClassName(`${styles.hidden}`);
        let listItems = [...liHiddenCollection];

        arrow.style.display = 'none';

        for (let i = 0; i < listItems.length; ++i) {
            listItems[i].classList.remove(`${styles.hidden}`);
            listItems[i].classList.add(`${styles.display__item}`);
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={clsx(styles.footer__top, styles.clearfix)}>
                <div className={styles.footer__col}>
                    <ul className={styles.footer__list}>
                        <li>
                            <a
                                rel="nofollow"
                                href="/tin-tuc/chuong-trinh-tich-diem-danh-cho-khach-hang-than-thiet-1434806"
                            >
                                Tích điểm Quà tặng VIP
                            </a>
                        </li>
                        <li>
                            <a rel="nofollow" href="/lich-su-mua-hang">
                                Lịch sử mua hàng
                            </a>
                        </li>
                        <li>
                            <a rel="nofollow" href="/daily">
                                Cộng tác bán hàng cùng TGDĐ
                            </a>
                        </li>
                        <li>
                            <a rel="nofollow" href="/tra-gop">
                                Tìm hiểu về mua trả góp
                            </a>
                        </li>
                        <li>
                            <a rel="nofollow" href="/bao-hanh">
                                Chính sách bảo hành
                            </a>
                        </li>
                        <li onClick={onDropItem}>
                            <span className={styles.arrow} id="arrowDrop">
                                Xem thêm
                            </span>
                        </li>
                        <li className={styles.hidden}>
                            <a rel="nofollow" href="/chinh-sach-bao-hanh-san-pham">
                                Chính sách đổi trả
                            </a>
                        </li>
                        <li className={styles.hidden}>
                            <a rel="nofollow" href="/giao-hang">
                                Giao hàng &amp; Thanh toán
                            </a>
                        </li>
                        <li className={styles.hidden}>
                            <a rel="nofollow" href="/huong-dan-mua-hang">
                                Hướng dẫn mua online
                            </a>
                        </li>
                        <li className={styles.hidden}>
                            <a rel="nofollow" href="/b2b">
                                Bán hàng doanh nghiệp
                            </a>
                        </li>
                        <li className={styles.hidden}>
                            <a rel="nofollow" href="/phieu-mua-hang">
                                Phiếu mua hàng
                            </a>
                        </li>
                        <li className={styles.hidden}>
                            <a rel="nofollow" href="https://hddt.thegioididong.com">
                                In hóa đơn điện tử
                            </a>
                        </li>
                        <li className={styles.hidden}>
                            <a rel="nofollow" href="/tos">
                                Quy chế hoạt động
                            </a>
                        </li>
                        <li className={styles.hidden}>
                            <a rel="nofollow" href="/noi-quy-cua-hang">
                                Nội quy cửa hàng
                            </a>
                        </li>
                        <li className={styles.hidden}>
                            <a rel="nofollow" href="/chat-luong-phuc-vu">
                                Chất lượng phục vụ
                            </a>
                        </li>
                        <li className={styles.hidden}>
                            <a
                                rel="nofollow"
                                href="/tin-tuc/can-trong-voi-nhung-sieu-thi-thegioididong-khong-chinh-chu--683321"
                            >
                                Cảnh báo giả mạo
                            </a>
                        </li>
                        <li className={styles.hidden}>
                            <a rel="nofollow" href="/chinh-sach-khui-hop-apple">
                                Chính sách khui hộp sản phẩm Apple
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer__col}>
                    <ul className={styles.footer__list}>
                        <li>
                            <a rel="nofollow" href="https://mwg.vn">
                                Giới thiệu công ty (MWG.vn)
                            </a>
                        </li>
                        <li>
                            <a rel="nofollow" href="https://vieclam.thegioididong.com">
                                Tuyển dụng
                            </a>
                        </li>
                        <li>
                            <a rel="nofollow" href="/lien-he">
                                Gửi góp ý, khiếu nại
                            </a>
                        </li>
                        <li>
                            <a rel="nofollow" href="/he-thong-sieu-thi-the-gioi-di-dong">
                                Tìm siêu thị (3.165 shop)
                            </a>
                        </li>
                        <li>
                            <Link rel="nofollow" to="/admin">
                                Quản lí hệ thống
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer__col}>
                    <ul className={styles.footer__list}>
                        <li>
                            <strong>Tổng đài hỗ trợ</strong> (miễn phí gọi)
                        </li>
                        <li>
                            <span>Gọi mua: </span> <b style={{ color: '#288ad6' }}>1800.1060</b>{' '}
                            <span>(7:30 - 22:00) </span>
                        </li>
                        <li>
                            <span>Kỹ thuật: </span> <b style={{ color: '#288ad6' }}>1800.1763</b>{' '}
                            <span>(7:30 - 22:00) </span>
                        </li>
                        <li>
                            <span>Kiếu nại: </span> <b style={{ color: '#288ad6' }}>1800.1060</b>{' '}
                            <span>(8:00 - 21:30) </span>
                        </li>
                        <li>
                            <span>Bảo hành: </span> <b style={{ color: '#288ad6' }}>1800.1064</b>{' '}
                            <span>(8:00 - 21:00) </span>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer__col}>
                    <div className={styles.footer__social}>
                        <a href="https://www.facebook.com/thegioididongcom" className={styles.f__link__social}>
                            <FontAwesomeIcon icon={faFacebook} className={styles.f__social__icon} />
                            3736.9k Fan
                        </a>
                        <a href="https://www.youtube.com/user/TGDDVideoReviews" className={styles.f__link__social}>
                            <FontAwesomeIcon
                                icon={faYoutubeSquare}
                                className={clsx(styles.f__social__icon, styles.youtube__icon)}
                            />
                            845k Đăng ký
                        </a>
                    </div>
                    <div className={styles.f__certify}>
                        <a href="http://online.gov.vn/Home/WebDetails/20090" className={styles.f__certify__link}>
                            <img
                                className={styles.icon__congthuong}
                                src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png"
                                alt="Da thong bao - bo cong thuong"
                            />
                        </a>
                        <a href="/tos#giai-quyet-khieu-nai" target="_blank" className={styles.f__certify__link}>
                            <img
                                className={styles.icon__khieunai}
                                src="/images/khieunai.png"
                                alt="Da thong bao - bo cong thuong"
                            />
                        </a>
                        <a
                            href="https://www.dmca.com/Protection/Status.aspx?ID=5b62e759-2a0c-4d86-b972-af903bfbc89d&amp;refurl=https://www.thegioididong.com/"
                            className={styles.f__certify__link}
                        >
                            <img className={styles.icon__dmcaprotected} src="/images/dmca.png" alt="DMCA - Protected" />
                        </a>
                        <a
                            href="https://tinnhiemmang.vn/danh-ba-tin-nhiem/thegioididongcom-1632835473"
                            title="Chung nhan Tin Nhiem Mang"
                            className={styles.f__certify__link}
                        >
                            <img
                                className={styles.icon__tinnhiem}
                                width="150"
                                alt="Chung nhan Tin Nhiem Mang"
                                src="https://tinnhiemmang.vn/handle_cert?id=thegioididong.com"
                            />
                        </a>
                    </div>
                    <div className={styles.f__website}>
                        <div className={styles.website__logo}>
                            <p className={styles.website__text}>Website cùng tập đoàn</p>
                            <ul className={styles.website__list}>
                                <li className={styles.weblist__item}>
                                    <a
                                        className={styles.webitem__link}
                                        rel="nofollow"
                                        href="https://www.topzone.vn/"
                                        title="Chuỗi cửa hàng cao cấp Apple"
                                    >
                                        <img
                                            className={styles.webitem__img}
                                            src="/images/topzone.png"
                                            alt="Topzone.vn"
                                        />
                                    </a>
                                </li>
                                <li className={styles.weblist__item}>
                                    <a
                                        className={styles.webitem__link}
                                        rel="nofollow"
                                        href="https://www.dienmayxanh.com/"
                                    >
                                        <img
                                            className={styles.webitem__img}
                                            src="/images/dienmayxanh.png"
                                            alt="dienmayxanh"
                                        />
                                    </a>
                                </li>
                                <li className={styles.weblist__item}>
                                    <a
                                        className={styles.webitem__link}
                                        rel="nofollow"
                                        href="https://www.bachhoaxanh.com/"
                                    >
                                        <img
                                            className={styles.webitem__img}
                                            src="/images/bachhoaxanh.png"
                                            alt="bachhoaxanh"
                                        />
                                    </a>
                                </li>
                                <li className={styles.weblist__item}>
                                    <a
                                        className={styles.webitem__link}
                                        rel="nofollow"
                                        href="https://www.nhathuocankhang.com/"
                                        title="Chuỗi nhà thuốc chuẩn GPP"
                                    >
                                        <img
                                            className={styles.webitem__img}
                                            src="/images/nhathuocankhang.png"
                                            alt="nhathuocankhang"
                                        />
                                    </a>
                                </li>
                                <li className={styles.weblist__item}>
                                    <a
                                        className={styles.webitem__link}
                                        rel="nofollow"
                                        href="https://www.avakids.com/"
                                        title="Chuỗi cửa hàng mẹ và bé"
                                    >
                                        <img className={styles.webitem__img} src="/images/avakids.png" alt="avakids" />
                                    </a>
                                </li>
                                <li className={styles.weblist__item}>
                                    <a
                                        className={styles.webitem__link}
                                        rel="nofollow"
                                        href="https://www.avasport.com/"
                                        title="Chuỗi cửa hàng thể thao"
                                    >
                                        <img
                                            className={styles.webitem__img}
                                            src="/images/avasports.png"
                                            alt="avasports"
                                        />
                                    </a>
                                </li>
                                <li className={styles.weblist__item}>
                                    <a
                                        className={styles.webitem__link}
                                        rel="nofollow"
                                        href="https://www.dichvutantam.com/"
                                        title="Dịch vụ vệ sinh máy lạnh, sửa chữa điện nước, lắp đặt máy lạnh, máy giặt, tivi"
                                    >
                                        <img
                                            className={styles.webitem__img}
                                            src="/images/tantam.png"
                                            alt="dichvutantam"
                                        />
                                    </a>
                                </li>
                                <li className={styles.weblist__item}>
                                    <a
                                        className={styles.webitem__link}
                                        rel="nofollow"
                                        href="https://www.4kfarm.com/"
                                        title="Nông trại rau sạch"
                                    >
                                        <img className={styles.webitem__img} src="/images/4kfarm.png" alt="4kfarm" />
                                    </a>
                                </li>
                                <li className={styles.weblist__item}>
                                    <a
                                        className={styles.webitem__link}
                                        rel="nofollow"
                                        href="https://vieclam.thegioididong.com/"
                                        title="Trang tuyển dụng của tập đoàn Thế Giới Di Động"
                                    >
                                        <img className={styles.webitem__img} src="/images/vieclam.png" alt="vieclam" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <section className={styles.section_cpr}>
                    <p className={styles.copyright_text}>
                        © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH &amp; ĐT TP.HCM cấp ngày
                        02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 04/06/2020.
                        <br />
                        Địa chỉ: 128 Trần Quang Khải, P. Tân Định, Q.1, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email:
                        cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt.{' '}
                        <a rel="nofollow" href="/thoa-thuan-su-dung-trang-mxh">
                            Xem chính sách sử dụng
                        </a>
                    </p>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
