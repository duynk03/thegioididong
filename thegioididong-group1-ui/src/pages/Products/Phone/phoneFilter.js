import clsx from 'clsx';
import { useState } from 'react';
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

    const [displayTotalFilter, setDisplayTotalFilter] = useState(clsx(styles.show__total__main, styles.filter__hidden));
    const [displayManu, setDisplayManu] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displayPrice, setDisplayPrice] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displayType, setDisplayType] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displayOrder, setDisplayOrder] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displayRam, setDisplayRam] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displayRom, setDisplayRom] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displayBattery, setDisplayBattery] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displaySpecial, setDisplaySpecial] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    
    const [hidden, setHidden] = useState(false);
    
    const [displayArrowTotal, setDisplayArrowTotal] = useState(clsx(null));
    const [displayArrowManu, setDisplayArrowManu] = useState(clsx(null));
    const [displayArrowPrice, setDisplayArrowPrice] = useState(clsx(null));
    const [displayArrowType, setDisplayArrowType] = useState(clsx(null));
    const [displayArrowOrder, setDisplayArrowOrder] = useState(clsx(null));
    const [displayArrowRam, setDisplayArrowRam] = useState(clsx(null));
    const [displayArrowRom, setDisplayArrowRom] = useState(clsx(null));
    const [displayArrowBattery, setDisplayArrowBattery] = useState(clsx(null));
    const [displayArrowSpecial, setDisplayArrowSpecial] = useState(clsx(null));

    return(
        <div className={styles.session__filter}>
            <div className={styles.filter__total__container}>
                <div className={styles.filter__total} onClick={ () => {
                    setHidden(!hidden)
                    if(displayTotalFilter.includes('hidden')){
                        setDisplayArrowTotal(clsx(styles.arrow__filter));
                        setDisplayTotalFilter(clsx(styles.show__total__isActive, styles.filter__visible));
                    }else{
                        setDisplayArrowTotal(clsx(null));
                        setDisplayTotalFilter(clsx(styles.show__total__isActive, styles.filter__hidden));
                    }
                } }>
                    <div className={styles.filter__total__title}>
                        <div className={displayArrowTotal}></div>
                        <i className='fas fa-filter'></i>
                        <span>Bộ lọc</span>
                        <strong className={styles.number__total}>0</strong>
                    </div>
                    <div className={displayTotalFilter} id='wapper'>
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

                <div className={styles.filter__item__show} onClick={ () => {
                    setHidden(!hidden)
                    if(displayManu.includes('hidden')){
                        setDisplayArrowManu(clsx(styles.arrow__filter));
                        setDisplayManu(clsx(styles.filter__item__show__element, styles.filter__visible));
                    }else{
                        setDisplayArrowManu(clsx(null));
                        setDisplayManu(clsx(styles.filter__item__show__element, styles.filter__hidden));
                    }
                } } >
                    <div className={styles.filter__item__title}>
                        <div className={displayArrowManu}></div>
                        <span>Hãng</span>
                    </div>
                    <div className={displayManu}>
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

                <div className={styles.filter__item__show} onClick={ () => {
                    setHidden(!hidden)
                    if(displayPrice.includes('hidden')){
                        setDisplayArrowPrice(clsx(styles.arrow__filter));
                        setDisplayPrice(clsx(styles.filter__item__show__element, styles.filter__visible));
                    }else{
                        setDisplayArrowPrice(clsx(null));
                        setDisplayPrice(clsx(styles.filter__item__show__element, styles.filter__hidden));
                    }
                }}>
                    <div className={styles.filter__item__title}>
                        <div className={displayArrowPrice}></div>
                        <span>Giá</span>
                    </div>
                    <div className={displayPrice}>
                        <div className={styles.filter__list__element}>
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

                <div className={styles.filter__item__show} onClick={ () => {
                    setHidden(!hidden)
                    if(displayType.includes('hidden')){
                        setDisplayArrowType(clsx(styles.arrow__filter));
                        setDisplayType(clsx(styles.filter__item__show__element, styles.filter__visible));
                    }else{
                        setDisplayArrowType(clsx(null));
                        setDisplayType(clsx(styles.filter__item__show__element, styles.filter__hidden));
                    }
                }}>
                    <div className={styles.filter__item__title}>
                        <div className={displayArrowType}></div>
                        <span>Loại điện thoại</span>
                    </div>
                    <div className={displayType}>
                        <div className={styles.filter__list__element}>
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

                <div className={styles.filter__item__show} onClick={ () => {
                    setHidden(!hidden)
                    if(displayOrder.includes('hidden')){
                        setDisplayArrowOrder(clsx(styles.arrow__filter));
                        setDisplayOrder(clsx(styles.filter__item__show__element, styles.filter__visible));
                    }else{
                        setDisplayArrowOrder(clsx(null));
                        setDisplayOrder(clsx(styles.filter__item__show__element, styles.filter__hidden));
                    }
                }}>
                    <div className={styles.filter__item__title}>
                        <div className={displayArrowOrder}></div>
                        <span>Nhu cầu</span>
                    </div>
                    <div className={displayOrder}>
                        <div className={styles.filter__list__element}>
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

                <div className={styles.filter__item__show} onClick={ () => {
                    setHidden(!hidden)
                    if(displayRam.includes('hidden')){
                        setDisplayArrowRam(clsx(styles.arrow__filter));
                        setDisplayRam(clsx(styles.filter__item__show__element, styles.filter__visible));
                    }else{
                        setDisplayArrowRam(clsx(null));
                        setDisplayRam(clsx(styles.filter__item__show__element, styles.filter__hidden));
                    }
                }}>
                    <div className={styles.filter__item__title}>
                        <div className={displayArrowRam}></div>
                        <span>RAM</span>
                    </div>
                    <div className={displayRam}>
                        <div className={styles.filter__list__element}>
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

                <div className={styles.filter__item__show} onClick={ () => {
                    setHidden(!hidden)
                    if(displayRom.includes('hidden')){
                        setDisplayArrowRom(clsx(styles.arrow__filter));
                        setDisplayRom(clsx(styles.filter__item__show__element, styles.filter__visible));
                    }else{
                        setDisplayArrowRom(clsx(null));
                        setDisplayRom(clsx(styles.filter__item__show__element, styles.filter__hidden));
                    }
                }}>
                    <div className={styles.filter__item__title}>
                        <div className={displayArrowRom}></div>
                        <span>Bộ nhớ trong</span>
                    </div>
                    <div className={displayRom}>
                        <div className={styles.filter__list__element}>
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

                <div className={styles.filter__item__show} onClick={ () => {
                    setHidden(!hidden)
                    if(displayBattery.includes('hidden')){
                        setDisplayArrowBattery(clsx(styles.arrow__filter));
                        setDisplayBattery(clsx(styles.filter__item__show__element, styles.filter__visible));
                    }else{
                        setDisplayArrowBattery(clsx(null));
                        setDisplayBattery(clsx(styles.filter__item__show__element, styles.filter__hidden));
                    }
                }}>
                    <div className={styles.filter__item__title}>
                        <div className={displayArrowBattery}></div>
                        <span>Pin & Sạc</span>
                    </div>
                    <div className={displayBattery}>
                        <div className={styles.filter__list__element}>
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

                <div className={styles.filter__item__show} onClick={ () => {
                    setHidden(!hidden)
                    if(displaySpecial.includes('hidden')){
                        setDisplayArrowSpecial(clsx(styles.arrow__filter));
                        setDisplaySpecial(clsx(styles.filter__item__show__element, styles.filter__visible));
                    }else{
                        setDisplayArrowSpecial(clsx(null));
                        setDisplaySpecial(clsx(styles.filter__item__show__element, styles.filter__hidden));
                    }
                }}>
                    <div className={styles.filter__item__title}>
                        <div className={displayArrowSpecial}></div>
                        <span>Tính năng đặc biệt</span>
                    </div>
                    <div className={displaySpecial}>
                        <div className={styles.filter__list__element}>
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