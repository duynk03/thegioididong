import clsx from 'clsx';
import styles from './Phone.module.scss';


export default function FilterPhone() {

    const logoPhone = [
        'https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png',
        'https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png',
        'https://cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg',
        'https://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png',
        'https://cdn.tgdd.vn/Brand/1/vivo-logo-220-220x48-3.png',
        'https://cdn.tgdd.vn/Brand/1/Realme42-b_37.png',
        'https://cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg',
        'https://cdn.tgdd.vn/Brand/1/Mobell42-b_19.jpg',
        'https://cdn.tgdd.vn/Brand/1/Itel42-b_54.jpg',
        'https://cdn.tgdd.vn/Brand/1/Masstel42-b_0.png'
    ];

    const pricePhone = [
        'Dưới 2 triệu',
        'Từ 2 - 4 triệu',
        'Từ 4 - 7 triệu',
        'Từ 7 - 13 triệu',
        'Từ 13 - 20 triệu',
        'Trên 20 triệu'
    ];

    const typeOfPhone = [
        'Android',
        'iPhone(iOS)',
        'Điện thoại phổ thông'
    ];

    const demandPhone = [
        'Chơi game / Cấu hình cao',
        'Chụp ảnh, quay phim',
        'Mỏng nhẹ',
        'Nhỏ gọn dễ cầm'
    ];

    const ramPhone = [
        '2 GB',
        '3 GB',
        '4 GB',
        '6 GB', 
        '8 GB',
        '12 GB'
    ];

    const romPhone = [
        '8 GB',
        '16 GB',
        '32 GB',
        '64 GB', 
        '128 GB',
        '256 GB',
        '512 GB'
    ];

    const batteryPhone = [
        'Pin khủng trên 5000 mAh',
        'Sạc pin nhanh',
        'Sạc siêu nhanh (từ 33W)',
        'Sạc không dây'
    ];

    const specialFeature = [
        'Kháng nước, bụi',
        'Hỗ trợ 5G',
        'Bảo mật khuôn mặt'
    ];

    return(
        <div className={styles.session__filter}>
            <div className={styles.filter__total__container}>
                <div className={styles.filter__total}>
                    <div className={styles.filter__total__title}>
                        <div className={styles.arrow__filter}></div>
                        <i className='fas fa-filter'></i>
                        <span>Bộ lọc</span>
                        <strong className={styles.number__total}>0</strong>
                    </div>
                    <div className={styles.show__total__isActive} id='wapper'>
                        <div className={styles.list__filter__active}>
                            <span>Đã chọn: </span>
                            <div className={styles.manu}></div>
                            <div className={styles.price}></div>
                            <div className={styles.props}></div>
                            <div className={styles.props__slider}></div>
                            {/* eslint-disable-next-line */}
                            <a href='javascript:void(0)' 
                                className={styles.clear__filter} 
                                onClick='removeAllFilterActive()'>
                                Xoá tất cả
                            </a> 
                        </div>
                        <div className={styles.show__total__main}>
                            {/* eslint-disable-next-line */}
                            <a href='javascript:void(0)' className={styles.close__popup}>
                                <i className='fas fa-times'></i>
                                Đóng
                            </a>
                            <div className={styles.wrapper__manu__inside}>
                                <p className={styles.show__total__txt}>Hãng</p>
                                <div className={styles.filter__list__filter__manu}>
                                {logoPhone.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)' className={styles.btn__box}>
                                            <img src={item} alt='' />
                                        </a>
                                    </>
                                ))}
                                </div>
                            </div>
                            <div className={styles.filter__border}></div>
                            <div className={styles.count__item}>
                                <p className={styles.show__total__txt}>Giá</p>
                                <div className={clsx(styles.filter__list__filter__price, styles.filter__list)}>
                                {pricePhone.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                    </>
                                ))}
                                </div>
                            </div>
                            <div className={styles.count__item}>
                                <p className={styles.show__total__txt}>Loại điện thoại</p>
                                <div className={clsx(styles.filter__list__filter__type, styles.filter__list)}>
                                {typeOfPhone.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                    </>
                                ))}
                                </div>
                            </div>
                            <div className={styles.count__item}>
                                <p className={styles.show__total__txt}>Nhu cầu</p>
                                <div className={clsx(styles.filter__list__filter__demand, styles.filter__list)}>
                                {demandPhone.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                    </>
                                ))}
                                </div>
                            </div>
                            <div className={styles.filter__border}></div>
                            <div className={styles.count__item}>
                                <p className={styles.show__total__txt}>RAM</p>
                                <div className={clsx(styles.filter__list__filter__ram, styles.filter__list)}>
                                {ramPhone.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                    </>
                                ))}
                                </div>
                            </div>
                            <div className={styles.count__item}>
                                <p className={styles.show__total__txt}>Bộ nhớ trong</p>
                                <div className={clsx(styles.filter__list__filter__rom, styles.filter__list)}>
                                {romPhone.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                    </>
                                ))}
                                </div>
                            </div>
                            <div className={styles.count__item}>
                                <p className={styles.show__total__txt}>Pin & Sạc</p>
                                <div className={clsx(styles.filter__list__filter__battery, styles.filter__list)}>
                                {batteryPhone.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                    </>
                                ))}
                                </div>
                            </div>
                            <div className={styles.filter__border}></div>
                            <div className={styles.count__item}>
                                <p className={styles.show__total__txt}>Tính năng đặc biệt</p>
                                <div className={clsx(styles.filter__list__filter__special, styles.filter__list)}>
                                {specialFeature.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                    </>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* {titleFilter.map((item) => (
                <div className={styles.title__item}>
                    <span>
                        {item} &nbsp;
                        <i className={downIcon}>
                        </i>
                    </span>
                </div>                      
                ))} */}

                <div className={styles.filter__manu__show}>
                    <div className={styles.filter__manu__title}>
                        <div className={styles.arrow__filter}></div>
                        <span>Hãng</span>
                    </div>
                    <div className={styles.filter__item__show__manu}>
                        <div className={styles.filter__list__manu}>
                            {logoPhone.map((item) => (
                                <>
                                    {/* eslint-disable-next-line */}
                                    <a href='javascript:void(0)' className={styles.btn__box}>
                                        <img src={item} alt='' />
                                    </a>
                                </>
                            ))}
                        </div>
                        <div className={styles.filter__btn}>
                            {/* eslint-disable-next-line */}
                            <a href='javascript:void(0)' className={styles.filter__btn__close}>Bỏ chọn</a>
                        </div>
                    </div>
                </div>

                <div className={styles.filter__price__show}>
                    <div className={styles.filter__price__title}>
                        <div className={styles.arrow__filter}></div>
                        <span>Giá</span>
                    </div>
                    <div className={styles.filter__item__show__price}>
                        <div className={styles.show__price__list}>
                            {pricePhone.map((item) => (
                                <>
                                    {/* eslint-disable-next-line */}
                                    <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                </>
                            ))}
                        </div>
                        <div className={styles.filter__btn}>
                            {/* eslint-disable-next-line */}
                            <a href='javascript:void(0)' className={styles.filter__btn__close}>Bỏ chọn</a>
                        </div>
                    </div>
                </div>

                <div className={styles.filter__type__show}>
                    <div className={styles.filter__type__title}>
                        <div className={styles.arrow__filter}></div>
                        <span>Loại điện thoại</span>
                    </div>
                    <div className={styles.filter__item__show__type}>
                        <div className={styles.show__type__list}>
                            {typeOfPhone.map((item) => (
                                <>
                                    {/* eslint-disable-next-line */}
                                    <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                </>
                            ))}
                        </div>
                        <div className={styles.filter__btn}>
                            {/* eslint-disable-next-line */}
                            <a href='javascript:void(0)' className={styles.filter__btn__close}>Bỏ chọn</a>
                        </div>
                    </div>
                </div>

                <div className={styles.filter__demand__show}>
                    <div className={styles.filter__demand__title}>
                        <div className={styles.arrow__filter}></div>
                        <span>Nhu cầu</span>
                    </div>
                    <div className={styles.filter__item__show__demand}>
                        <div className={styles.show__demand__list}>
                            {demandPhone.map((item) => (
                                <>
                                    {/* eslint-disable-next-line */}
                                    <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                </>
                            ))}
                        </div>
                        <div className={styles.filter__btn}>
                            {/* eslint-disable-next-line */}
                            <a href='javascript:void(0)' className={styles.filter__btn__close}>Bỏ chọn</a>
                        </div>
                    </div>
                </div>

                <div className={styles.filter__ram__show}>
                    <div className={styles.filter__ram__title}>
                        <div className={styles.arrow__filter}></div>
                        <span>RAM</span>
                    </div>
                    <div className={styles.filter__item__show__ram}>
                        <div className={styles.show__ram__list}>
                            {ramPhone.map((item) => (
                                <>
                                    {/* eslint-disable-next-line */}
                                    <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                </>
                            ))}
                        </div>
                        <div className={styles.filter__btn}>
                            {/* eslint-disable-next-line */}
                            <a href='javascript:void(0)' className={styles.filter__btn__close}>Bỏ chọn</a>
                        </div>
                    </div>
                </div>

                <div className={styles.filter__rom__show}>
                    <div className={styles.filter__rom__title}>
                        <div className={styles.arrow__filter}></div>
                        <span>Bộ nhớ trong</span>
                    </div>
                    <div className={styles.filter__item__show__rom}>
                        <div className={styles.show__rom__list}>
                            {romPhone.map((item) => (
                                <>
                                    {/* eslint-disable-next-line */}
                                    <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                </>
                            ))}
                        </div>
                        <div className={styles.filter__btn}>
                            {/* eslint-disable-next-line */}
                            <a href='javascript:void(0)' className={styles.filter__btn__close}>Bỏ chọn</a>
                        </div>
                    </div>
                </div>

                <div className={styles.filter__battery__show}>
                    <div className={styles.filter__battery__title}>
                        <div className={styles.arrow__filter}></div>
                        <span>Pin & Sạc</span>
                    </div>
                    <div className={styles.filter__item__show__battery}>
                        <div className={styles.show__battery__list}>
                            {batteryPhone.map((item) => (
                                <>
                                    {/* eslint-disable-next-line */}
                                    <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                </>
                            ))}
                        </div>
                        <div className={styles.filter__btn}>
                            {/* eslint-disable-next-line */}
                            <a href='javascript:void(0)' className={styles.filter__btn__close}>Bỏ chọn</a>
                        </div>
                    </div>
                </div>

                <div className={styles.filter__special__show}>
                    <div className={styles.filter__special__title}>
                        <div className={styles.arrow__filter}></div>
                        <span>Tính năng đặc biệt</span>
                    </div>
                    <div className={styles.filter__item__show__special}>
                        <div className={styles.show__special__list}>
                            {specialFeature.map((item) => (
                                <>
                                    {/* eslint-disable-next-line */}
                                    <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                </>
                            ))}
                        </div>
                        <div className={styles.filter__btn}>
                            {/* eslint-disable-next-line */}
                            <a href='javascript:void(0)' className={styles.filter__btn__close}>Bỏ chọn</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.quick__filter}>
                {logoPhone.map((item) => (
                    <div className={styles.logo__phone}>
                        {/* eslint-disable-next-line */}
                        <a href='javascript:void(0)' className={styles.logo__phone__manu}>
                            <img 
                                src={item}
                                alt=''
                            />                                    
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}