import styles from './Tablet.module.scss';
import clsx from 'clsx';


export default function FilterTablet() {

    const logoTablet = [
        'https://cdn.tgdd.vn/Brand/1/iPad-(Apple)522-b_4.jpg',
        'https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-3.png',
        'https://cdn.tgdd.vn/Brand/1/Tablet-xiaomi-220x48-1.png',
        'https://cdn.tgdd.vn/Brand/1/Lenovo522-b_6.jpg',
        'https://cdn.tgdd.vn/Brand/1/Masstel522-b_7.png',
        'https://cdn.tgdd.vn/Brand/1/logonokia-220x48-1.jpg',
        'https://cdn.tgdd.vn/Brand/1/Huawei522-b_4.jpg',
        'https://cdn.tgdd.vn/Brand/1/logoalcatel-220x48-1.png'
    ];

    const pricePhone = [
        'Dưới 3 triệu',
        'Từ 3 - 8 triệu',
        'Từ 8 - 15 triệu',
        'Trên 25 triệu'
    ];

    const monitorSize = [
        'Khoảng 7 - 8 inch',
        'Khoảng 10 - 11 inch',
        'Khoảng 12 inch trở lên'
    ];

    const ramPhone = [
        '2 GB',
        '3 GB',
        '4 GB',
        '6 GB', 
        '8 GB'
    ];

    const romPhone = [
        '32 GB',
        '64 GB', 
        '128 GB',
        '256 GB',

    ];

    const batteryPhone = [
        'Chơi game / Cấu hình cao',
        'Pin khủng trên 7000 mAh',
        'Sạc nhanh'
    ];

    const specialFeature = [
        'Hỗ trợ 5G',
        'Hỗ trợ nghe gọi',
        'Bảo mật khuôn mặt', 
        'Bảo mật vân tay'
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
                                {logoTablet.map((item) => (
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
                                <p className={styles.show__total__txt}>Kích thước màn hình</p>
                                <div className={clsx(styles.filter__list__filter__type, styles.filter__list)}>
                                {monitorSize.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                    </>
                                ))}
                                </div>
                            </div>
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
                            <div className={styles.filter__border}></div>
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
                                <p className={styles.show__total__txt}>Hiệu năng & Pin</p>
                                <div className={clsx(styles.filter__list__filter__battery, styles.filter__list)}>
                                {batteryPhone.map((item) => (
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <a href='javascript:void(0)' className={styles.btn__box}>{item}</a>
                                    </>
                                ))}
                                </div>
                            </div>
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
                            {logoTablet.map((item) => (
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

                <div className={styles.filter__size__show}>
                    <div className={styles.filter__size__title}>
                        <div className={styles.arrow__filter}></div>
                        <span>Kích thước màn hình</span>
                    </div>
                    <div className={styles.filter__item__show__size}>
                        <div className={styles.show__size__list}>
                            {monitorSize.map((item) => (
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
                        <span>Hiệu năng & Pin</span>
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
                {logoTablet.map((item) => (
                    <div className={styles.logo__tablet}>
                        {/* eslint-disable-next-line */}
                        <a href='javascript:void(0)' className={styles.logo__tablet__manu}>
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