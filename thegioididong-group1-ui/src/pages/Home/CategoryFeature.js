import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
function CategoryFeature() {
    return (
        <div className={styles.cate__feature}>
            <strong className={styles.name__box}>Danh mục nổi bật</strong>
            <div className={styles.box__cate}>
                <aside>
                    <h3>
                        <Link to={'dtdd'}>
                            <div className={styles.img__boxcate}>
                                <img alt="Điện thoại" src="https://cdn.tgdd.vn//content/Dienthoai-128x129.png" />
                            </div>
                            <span>Điện thoại</span>
                        </Link>
                    </h3>
                    <h3>
                        <Link to={'laptop'}>
                            <div className={styles.img__boxcate}>
                                <img alt="Laptop" src="https://cdn.tgdd.vn//content/Laptop-129x129.png" />
                            </div>
                            <span>Laptop</span>
                        </Link>
                    </h3>
                    <h3>
                        {/* eslint-disable-next-line */}
                        <a href="javascript:void(0)">
                            <div className={styles.img__boxcate}>
                                <img alt="Tablet" src="https://cdn.tgdd.vn//content/Tablet-128x129.png" />
                            </div>
                            <span>Tablet</span>
                        </a>
                    </h3>
                    <h3>
                        <Link to={'dong-ho-thong-minh'}>
                            <div className={styles.img__boxcate}>
                                <img
                                    alt="Đồng hồ thông minh"
                                    src="https://cdn.tgdd.vn//content/Donghothongminh-128x129.png"
                                />
                            </div>
                            <span>Đồng hồ thông minh</span>
                        </Link>
                    </h3>
                    <h3>
                        <Link to={'dong-ho'}>
                            <div className={styles.img__boxcate}>
                                <img
                                    alt="Đồng hồ thời trang"
                                    src="https://cdn.tgdd.vn//content/Donghothoitrang-128x129.png"
                                />
                            </div>
                            <span>Đồng hồ thời trang</span>
                        </Link>
                    </h3>
                    <h3>
                        {/* eslint-disable-next-line */}
                        <a href="javascript:void(0)">
                            <div className={styles.img__boxcate}>
                                <img alt="Thiết bị mạng" src="https://cdn.tgdd.vn//content/Thietbimang-128x129.png" />
                            </div>
                            <span>Thiết bị mạng</span>
                        </a>
                    </h3>
                    <h3>
                        {/* eslint-disable-next-line */}
                        <a href="javascript:void(0)">
                            <div className={styles.img__boxcate}>
                                <img alt="Ốp lưng" src="https://cdn.tgdd.vn//content/Oplung-128x128.png" />
                            </div>
                            <span>Ốp lưng</span>
                        </a>
                    </h3>
                    <h3>
                        {/* eslint-disable-next-line */}
                        <a href="javascript:void(0)">
                            <div className={styles.img__boxcate}>
                                <img alt="Chuột máy tính" src="https://cdn.tgdd.vn//content/chuot-128x129.png" />
                            </div>
                            <span>Chuột máy tính</span>
                        </a>
                    </h3>
                    <h3>
                        {/* eslint-disable-next-line */}
                        <a href="javascript:void(0)">
                            <div className={styles.img__boxcate}>
                                <img alt="Bàn phím" src="https://cdn.tgdd.vn//content/ban-phim-128x129.png" />
                            </div>
                            <span>Bàn phím</span>
                        </a>
                    </h3>
                    <h3>
                        {/* eslint-disable-next-line */}
                        <a href="javascript:void(0)">
                            <div className={styles.img__boxcate}>
                                <img alt="Sim, thẻ cào" src="https://cdn.tgdd.vn//content/Simthecao-129x129.png" />
                            </div>
                            <span>Sim, thẻ cào</span>
                        </a>
                    </h3>
                </aside>
                <aside>
                    <h3>
                        {/* eslint-disable-next-line */}
                        <a href="javascript:void(0)">
                            <div className={styles.img__boxcate}>
                                <img alt="Loa" src="https://cdn.tgdd.vn//content/Loa-128x128.png" />
                            </div>
                            <span>Loa</span>
                        </a>
                    </h3>
                    <h3>
                        {/* eslint-disable-next-line */}
                        <a href="javascript:void(0)">
                            <div className={styles.img__boxcate}>
                                <img alt="Tai nghe" src="https://cdn.tgdd.vn//content/Tainghe-128x129.png" />
                            </div>
                            <span>Tai nghe</span>
                        </a>
                    </h3>
                    <h3>
                        {/* eslint-disable-next-line */}
                        <a href="javascript:void(0)">
                            <div className={styles.img__boxcate}>
                                <img alt="Sạc dự phòng" src="https://cdn.tgdd.vn//content/Sacduphong-128x129.png" />
                            </div>
                            <span>Sạc dự phòng</span>
                        </a>
                    </h3>
                    <h3>
                        {/* eslint-disable-next-line */}
                        <a href="javascript:void(0)">
                            <div className={styles.img__boxcate}>
                                <img alt="Cáp sạc" src="https://cdn.tgdd.vn//content/Capsac-129x129.png" />
                            </div>
                            <span>Cáp sạc</span>
                        </a>
                    </h3>
                    <h3>
                        {/* eslint-disable-next-line */}
                        <a href="javascript:void(0)">
                            <div className={styles.img__boxcate}>
                                <img alt="Máy tính bộ" src="https://cdn.tgdd.vn//content/Maytinhbo-128x129.png" />
                            </div>
                            <span>Máy tính bộ</span>
                        </a>
                    </h3>
                    <h3>
                        {/* eslint-disable-next-line */}
                        <a href="javascript:void(0)">
                            <div className={styles.img__boxcate}>
                                <img alt="Máy in" src="https://cdn.tgdd.vn//content/Mayin-128x129.png" />
                            </div>
                            <span>Máy in</span>
                        </a>
                    </h3>
                    <h3>
                        {/* eslint-disable-next-line */}
                        <a href="javascript:void(0)">
                            <div className={styles.img__boxcate}>
                                <img
                                    alt="Màn hình máy tính"
                                    src="https://cdn.tgdd.vn//content/Manhinhmaytinh-128x129.png"
                                />
                            </div>
                            <span>Màn hình máy tính</span>
                        </a>
                    </h3>
                    <h3>
                        {/* eslint-disable-next-line */}
                        <a href="javascript:void(0)">
                            <div className={styles.img__boxcate}>
                                <img
                                    alt="Phụ kiện gaming"
                                    src="https://cdn.tgdd.vn//content/Phukiengaming-128x129.png"
                                />
                            </div>
                            <span>Phụ kiện gaming</span>
                        </a>
                    </h3>
                    <h3>
                        {/* eslint-disable-next-line */}
                        <a href="javascript:void(0)">
                            <div className={styles.img__boxcate}>
                                <img
                                    alt="Camera, webcam"
                                    src="https://cdn.tgdd.vn//content/Camerawebcam-128x129-1.png"
                                />
                            </div>
                            <span>Camera, webcam</span>
                        </a>
                    </h3>
                    <h3>
                        {/* eslint-disable-next-line */}
                        <a href="javascript:void(0)">
                            <div className={styles.img__boxcate}>
                                <img
                                    alt="Thiết bị nhà thông minh"
                                    src="https://cdn.tgdd.vn//content/MaychieuTVbox-128x129.png"
                                />
                            </div>
                            <span>Thiết bị nhà thông minh</span>
                        </a>
                    </h3>
                </aside>
            </div>
        </div>
    );
}

export default CategoryFeature;
