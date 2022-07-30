import { useState, useEffect,Fragment } from 'react';
import styles from './Phone.module.scss';
import axios from 'axios';
import clsx from 'clsx';


export default function MainPhone() {

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
        'iPhone(iOS)'
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

    const [displayManu, setDisplayManu] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displayPrice, setDisplayPrice] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displayType, setDisplayType] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displayOrder, setDisplayOrder] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displayRam, setDisplayRam] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displayRom, setDisplayRom] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displayBattery, setDisplayBattery] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    const [displaySpecial, setDisplaySpecial] = useState(clsx(styles.filter__item__show__element, styles.filter__hidden));
    
    const [hidden, setHidden] = useState(false);
    
    const [displayArrowManu, setDisplayArrowManu] = useState(clsx(null));
    const [displayArrowPrice, setDisplayArrowPrice] = useState(clsx(null));
    const [displayArrowType, setDisplayArrowType] = useState(clsx(null));
    const [displayArrowOrder, setDisplayArrowOrder] = useState(clsx(null));
    const [displayArrowRam, setDisplayArrowRam] = useState(clsx(null));
    const [displayArrowRom, setDisplayArrowRom] = useState(clsx(null));
    const [displayArrowBattery, setDisplayArrowBattery] = useState(clsx(null));
    const [displayArrowSpecial, setDisplayArrowSpecial] = useState(clsx(null));

    const [displayIconManu, setDisplayIconManu] = useState(clsx(styles.iconDown, 'fas fa-sort-down'));
    const [displayIconPrice, setDisplayIconPrice] = useState(clsx(styles.iconDown, 'fas fa-sort-down'));
    const [displayIconType, setDisplayIconType] = useState(clsx(styles.iconDown, 'fas fa-sort-down'));
    const [displayIconDemand, setDisplayIconDemand] = useState(clsx(styles.iconDown, 'fas fa-sort-down'));
    const [displayIconRam, setDisplayIconRam] = useState(clsx(styles.iconDown, 'fas fa-sort-down'));
    const [displayIconRom, setDisplayIconRom] = useState(clsx(styles.iconDown, 'fas fa-sort-down'));
    const [displayIconBattery, setDisplayIconBattery] = useState(clsx(styles.iconDown, 'fas fa-sort-down'));
    const [displayIconSpecial, setDisplayIconSpecial] = useState(clsx(styles.iconDown, 'fas fa-sort-down'));

    const [displaySort, setDisplaySort] = useState(clsx(styles.sort__select__main, styles.sort__hidden));

    const [showPhone, setShowPhone] = useState([]);
    const showImg = 'https://cdn.tgdd.vn/Products/Images/42/261888/realme-c35-thumb-new-600x600.jpg'
    const optionRom = ['8GB/128GB', '12GB/256GB', '12GB/512GB']

    const [sortState, setSortState] = useState('none');
    const sortMethods = {
        none: {method: (a, b) => null },
        ascending: {method: undefined },
        descending: {method: (a, b) => (a > b? -1 : 1)}
    };

    useEffect(() => {
        const getPhone = async () =>{ 
            try {
                const res = await axios.get(
                    // 'http://localhost:8084/api/v1/products/type?name=phone'
                    'https://jsonplaceholder.typicode.com/photos?_limit=30'
                )
                setShowPhone(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error.message);
            }
        }
        getPhone()
    }, [])

    return(
        <Fragment>
            {/* filter */}
            <div className={styles.session__filter}>
                <div className={styles.filter__total__container}>

                    <div className={styles.filter__item__show} onClick={ () => {
                        setHidden(!hidden)
                        if(displayManu.includes('hidden')){
                            setDisplayIconManu(clsx(styles.iconUp, 'fas fa-sort-up'));
                            setDisplayArrowManu(clsx(styles.arrow__filter));
                            setDisplayManu(clsx(styles.filter__item__show__element, styles.filter__visible));
                        }else{
                            setDisplayIconManu(clsx(styles.iconDown, 'fas fa-sort-down'));
                            setDisplayArrowManu(clsx(null));
                            setDisplayManu(clsx(styles.filter__item__show__element, styles.filter__hidden));
                        }
                    } } >
                        <div className={styles.filter__item__title}>
                            <div className={displayArrowManu}></div>
                            <span>Hãng<i className={displayIconManu}></i></span>
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
                            setDisplayIconPrice(clsx(styles.iconUp, 'fas fa-sort-up'));
                            setDisplayArrowPrice(clsx(styles.arrow__filter));
                            setDisplayPrice(clsx(styles.filter__item__show__element, styles.filter__visible));
                        }else{
                            setDisplayArrowPrice(clsx(null));
                            setDisplayIconPrice(clsx(styles.iconDown, 'fas fa-sort-down'));
                            setDisplayPrice(clsx(styles.filter__item__show__element, styles.filter__hidden));
                        }
                    }}>
                        <div className={styles.filter__item__title}>
                            <div className={displayArrowPrice}></div>
                            <span>Giá<i className={displayIconPrice}></i></span>
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
                            setDisplayIconType(clsx(styles.iconUp, 'fas fa-sort-up'));
                            setDisplayType(clsx(styles.filter__item__show__element, styles.filter__visible));
                        }else{
                            setDisplayArrowType(clsx(null));
                            setDisplayIconType(clsx(styles.iconDown, 'fas fa-sort-down'));
                            setDisplayType(clsx(styles.filter__item__show__element, styles.filter__hidden));
                        }
                    }}>
                        <div className={styles.filter__item__title}>
                            <div className={displayArrowType}></div>
                            <span>Loại điện thoại<i className={displayIconType}></i></span>
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
                            setDisplayIconDemand(clsx(styles.iconUp, 'fas fa-sort-up'));
                            setDisplayArrowOrder(clsx(styles.arrow__filter));
                            setDisplayOrder(clsx(styles.filter__item__show__element, styles.filter__visible));
                        }else{
                            setDisplayIconDemand(clsx(styles.iconDown, 'fas fa-sort-down'));
                            setDisplayArrowOrder(clsx(null));
                            setDisplayOrder(clsx(styles.filter__item__show__element, styles.filter__hidden));
                        }
                    }}>
                        <div className={styles.filter__item__title}>
                            <div className={displayArrowOrder}></div>
                            <span>Nhu cầu<i className={displayIconDemand}></i></span>
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
                            setDisplayIconRam(clsx(styles.iconUp, 'fas fa-sort-up'));
                            setDisplayArrowRam(clsx(styles.arrow__filter));
                            setDisplayRam(clsx(styles.filter__item__show__element, styles.filter__visible));
                        }else{
                            setDisplayIconRam(clsx(styles.iconDown, 'fas fa-sort-down'));
                            setDisplayArrowRam(clsx(null));
                            setDisplayRam(clsx(styles.filter__item__show__element, styles.filter__hidden));
                        }
                    }}>
                        <div className={styles.filter__item__title}>
                            <div className={displayArrowRam}></div>
                            <span>RAM<i className={displayIconRam}></i></span>
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
                            setDisplayIconRom(clsx(styles.iconUp, 'fas fa-sort-up'));
                            setDisplayArrowRom(clsx(styles.arrow__filter));
                            setDisplayRom(clsx(styles.filter__item__show__element, styles.filter__visible));
                        }else{
                            setDisplayIconRom(clsx(styles.iconDown, 'fas fa-sort-down'));
                            setDisplayArrowRom(clsx(null));
                            setDisplayRom(clsx(styles.filter__item__show__element, styles.filter__hidden));
                        }
                    }}>
                        <div className={styles.filter__item__title}>
                            <div className={displayArrowRom}></div>
                            <span>Bộ nhớ trong<i className={displayIconRom}></i></span>
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
                            setDisplayIconBattery(clsx(styles.iconUp, 'fas fa-sort-up'));
                            setDisplayArrowBattery(clsx(styles.arrow__filter));
                            setDisplayBattery(clsx(styles.filter__item__show__element, styles.filter__visible));
                        }else{
                            setDisplayIconBattery(clsx(styles.iconDown, 'fas fa-sort-down'));
                            setDisplayArrowBattery(clsx(null));
                            setDisplayBattery(clsx(styles.filter__item__show__element, styles.filter__hidden));
                        }
                    }}>
                        <div className={styles.filter__item__title}>
                            <div className={displayArrowBattery}></div>
                            <span>Pin & Sạc<i className={displayIconBattery}></i></span>
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
                            setDisplayIconSpecial(clsx(styles.iconUp, 'fas fa-sort-up'));
                            setDisplayArrowSpecial(clsx(styles.arrow__filter));
                            setDisplaySpecial(clsx(styles.filter__item__show__element, styles.filter__visible));
                        }else{
                            setDisplayIconSpecial(clsx(styles.iconDown, 'fas fa-sort-down'));
                            setDisplayArrowSpecial(clsx(null));
                            setDisplaySpecial(clsx(styles.filter__item__show__element, styles.filter__hidden));
                        }
                    }}>
                        <div className={styles.filter__item__title}>
                            <div className={displayArrowSpecial}></div>
                            <span>Tính năng đặc biệt<i className={displayIconSpecial}></i></span>
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

            {/* sort */}
            <div className={styles.sort__container}>
                <p className={styles.sort__total}>
                    <b className={styles.sort__total__item}>
                        90&nbsp;Điện thoại
                    </b>
                </p>

                <div className={styles.select__sort} onClick={() =>{
                    setHidden(!hidden)
                    if(displaySort.includes('hidden')){
                        setDisplaySort(clsx(styles.sort__select__main, styles.sort__visible));
                    }else{
                        setDisplaySort(clsx(styles.sort__select__main, styles.sort__hidden));
                    }
                }}>
                    <p className={styles.sort__content}>Xếp theo:&nbsp;
                        <span className={styles.sort__show}>
                            Nổi bật&nbsp;<i className={clsx(styles.select__sort__icon,'fas fa-sort-down')}></i>
                        </span>
                    </p>
                    <div className={displaySort} onChange={(e)=> setSortState(e.target.value)}>
                        <p>
                            {/* eslint-disable-next-line */}
                            <a className={styles.check__sort} href='javascript:void(0)' value='DEFAULT'>
                                <i></i>
                                Nổi bật
                            </a>    
                        </p>
                        <p>
                            {/* eslint-disable-next-line */}
                            <a className='' href='javascript:void(0)' value='ascending'>
                                <i></i>
                                Giá từ cao đến thấp
                            </a>
                        </p>
                        <p>
                            {/* eslint-disable-next-line */}
                            <a className='' href='javascript:void(0)' value='descending'>
                                <i></i>
                                Giá từ thấp đến cao
                            </a>
                        </p>
                    </div>
                </div>
                
            </div>

            {/* show */}
            <div className={styles.show__all__products}>
                <ul className={styles.list__product}>
                    {showPhone.sort(sortMethods[sortState].method).map((phone, index) => (
                        <li key={index} className={styles.list__item}>
                            {/* eslint-disable-next-line */}
                            <a className={styles.item__container} href='javascript:void(0)'>
                                <div className={styles.item__label}>
                                    <span className={styles.label__content}>Trả góp 0%</span>
                                </div>
                                <div className={styles.item__content}>
                                    <img className={styles.item__element} src={showImg} alt=''/>
                                </div>
                                <strong style={{color: 'black'}}>Name of phone {phone.id}</strong>
                                <div className={styles.product__group}>
                                    <ul className={styles.product__memory}>
                                        {optionRom.map((opt) => (
                                            <li className={styles.memory__item}>{opt}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.box__old__price}>
                                    <p className={styles.old__price}>30.990.000₫</p>
                                    <span className={styles.discount__percent}>&nbsp;9%</span>
                                </div>
                                <strong className={styles.new__price}>{phone.id}k $</strong>
                                <div className={styles.rating}>
                                    <div className={styles.star__rating}>
                                        <i className={clsx('fa fa-star', styles.star)}></i>
                                        <i className={clsx('fa fa-star', styles.star)}></i>
                                        <i className={clsx('fa fa-star', styles.star)}></i>
                                        <i className={clsx('fa fa-star', styles.star__dark)}></i>
                                        <i className={clsx('fa fa-star', styles.star__dark)}></i>
                                    </div>
                                    <div className={styles.total__rating}><span>&nbsp;(45)</span></div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
}