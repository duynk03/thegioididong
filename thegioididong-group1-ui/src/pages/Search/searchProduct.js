import React, { Fragment, useState, useEffect } from 'react';
import { Image } from 'cloudinary-react';
import axios from 'axios';
import styles from './Search.module.scss';
import clsx from 'clsx';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

export default function SearchProduct() {
    const cloudName = 'dlefvc2xe';

    const navigate = useNavigate();

    const [hidden, setHidden] = useState(false);

    const [displaySort, setDisplaySort] = useState(clsx(styles.sort__select__main, styles.sort__hidden));

    const [data, setData] = useState([]);
    const [orderByAsc, setOrderByAsc] = useState([]);
    const [orderByDesc, setOrderByDesc] = useState([]);

    const [showData, setShowData] = useState('Mới nhất');
    const [render, setRender] = useState(false);

    // eslint-disable-next-line
    const [searchParams, setSearchParams] = useSearchParams();
    const [prevKey, setPrevKey] = useState('');
    const key = searchParams.get('key');

    const [numberPerPage, setNumberPerPage] = useState(10);
    const [pages, setPages] = useState([]);
    let maxLength = 0;
    useEffect(() => {
        if (typeof key === 'undefined' || key.length <= 1) {
            navigate('/');
        }
        if (render) {
            if (showData === 'Giá từ thấp đến cao') {
                const num = orderByAsc.length < numberPerPage ? orderByAsc.length : numberPerPage;
                setData(orderByAsc);
                setPages(orderByAsc.slice(0, num));
            } else if (showData === 'Giá từ cao đến thấp') {
                const num = orderByDesc.length < numberPerPage ? orderByDesc.length : numberPerPage;
                setData(orderByDesc);
                setPages(orderByDesc.slice(0, num));
            } else {
                setPages(data.slice(0, data.length < numberPerPage ? data.length : numberPerPage));
            }
        }
        if (key !== prevKey) {
            try {
                setPrevKey(key);
                axios.get('http://localhost:8084/api/v1/products/search?key=' + key).then((res) => {
                    const types = {
                        price: 'price',
                        saleOff: 'saleOff',
                    };
                    const orderByProperty = types['price'];
                    setOrderByDesc(
                        [...res.data].sort(
                            (a, b) =>
                                b[orderByProperty] -
                                (b[types['saleOff']] / 100) * b[orderByProperty] -
                                (a[orderByProperty] - (a[types['saleOff']] / 100) * a[orderByProperty]),
                        ),
                    );
                    setOrderByAsc(
                        [...res.data].sort(
                            (a, b) =>
                                a[orderByProperty] -
                                (a[types['saleOff']] / 100) * a[orderByProperty] -
                                (b[orderByProperty] - (b[types['saleOff']] / 100) * b[orderByProperty]),
                        ),
                    );
                    setData(res.data);
                    setPages(res.data.slice(0, res.data.length < numberPerPage ? res.data.length : numberPerPage));
                    maxLength = res.data.length;
                });
            } catch (error) {
                console.log(error.message);
            }
            setRender(true);
        }

        // eslint-disable-next-line
    }, [showData, key, numberPerPage]);

    const handleViewMore = (e) => {
        e.preventDefault();
        setNumberPerPage(numberPerPage + 5);
    };

    return (
        <Fragment>
            {/* sort */}
            <div className={styles.sort__container} style={{ paddingTop: 30 }}>
                <p className={styles.sort__total}>
                    <b className={styles.sort__total__item}>
                        Có <span style={{ color: '#288ad6' }}>{data.length ? data.length : '0'}</span>&nbsp;kết quả được
                        tìm thấy
                    </b>
                </p>

                <div
                    className={styles.select__sort}
                    onClick={() => {
                        setHidden(!hidden);
                        if (displaySort.includes('hidden')) {
                            setDisplaySort(clsx(styles.sort__select__main, styles.sort__visible));
                        } else {
                            setDisplaySort(clsx(styles.sort__select__main, styles.sort__hidden));
                        }
                    }}
                >
                    <p className={styles.sort__content}>
                        Xếp theo:&nbsp;
                        <span className={styles.sort__show}>
                            {showData}&nbsp;
                            <i className={clsx(styles.select__sort__icon, 'fas fa-sort-down')}></i>
                        </span>
                    </p>
                    <div className={displaySort}>
                        <p onClick={() => setShowData('Giá từ thấp đến cao')}>
                            {/* eslint-disable-next-line */}
                            <a className="" href="#" onClick={(e) => e.preventDefault()}>
                                <i></i>
                                Giá từ thấp đến cao
                            </a>
                        </p>
                        <p onClick={() => setShowData('Giá từ cao đến thấp')}>
                            {/* eslint-disable-next-line */}
                            <a className="" href="#" onClick={(e) => e.preventDefault()}>
                                <i></i>
                                Giá từ cao đến thấp
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* show */}
            <div className={styles.show__all__products}>
                <ul className={styles.list__product}>
                    {pages.map((product, index) => (
                        <li key={index} className={styles.list__item}>
                            {/* eslint-disable-next-line */}
                            <Link
                                to={'/productdetail/' + product.category + '/' + product.id}
                                className={styles.item__container}
                            >
                                <div className={styles.item__content} style={{ ...styles, paddingTop: 10 }}>
                                    <Image
                                        className={styles.item__element}
                                        cloudName={cloudName}
                                        publicId={product.images[0]?.source}
                                    />
                                </div>
                                <strong style={{ color: 'black' }}>{product.name}</strong>
                                <div className={styles.product__group}>
                                    <ul className={styles.product__memory}>
                                        {product.phone !== null ? (
                                            <li className={styles.memory__item}>
                                                {product.phone.ram} - {product.phone.rom}
                                            </li>
                                        ) : (
                                            <></>
                                        )}
                                        {product.laptop !== null ? (
                                            <li className={styles.memory__item}>
                                                {product.laptop.ram + ' RAM'} - {product.laptop.rom}
                                            </li>
                                        ) : (
                                            <></>
                                        )}
                                    </ul>
                                </div>
                                {product.phone !== null ? (
                                    <>
                                        <h2>{product.phone.screen}</h2>
                                        <h2>{product.phone.touchScreen}</h2>
                                    </>
                                ) : (
                                    <></>
                                )}
                                {product.saleOff > 0 ? (
                                    <div className={styles.box__old__price}>
                                        <p className={styles.old__price}>
                                            {product.price
                                                .toString()
                                                .split('')
                                                .reverse()
                                                .reduce((prev, next, index) => {
                                                    return (index % 3 ? next : next + '.') + prev;
                                                })}
                                            ₫
                                        </p>
                                        <span className={styles.discount__percent}>&nbsp;-{product.saleOff}%</span>
                                    </div>
                                ) : (
                                    <></>
                                )}

                                <strong className={styles.new__price}>
                                    {(product.price - (product.saleOff * product.price) / 100)
                                        .toString()
                                        .split('')
                                        .reverse()
                                        .reduce((prev, next, index) => {
                                            return (index % 3 ? next : next + '.') + prev;
                                        })}
                                    ₫
                                </strong>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {numberPerPage < data.length ? (
                <div className={styles.view__more}>
                    {/* eslint-disable-next-line */}
                    <a href="#" onClick={handleViewMore}>
                        Còn <span>{data.length - numberPerPage}</span> sản phẩm
                    </a>
                </div>
            ) : (
                <></>
            )}
        </Fragment>
    );
}
