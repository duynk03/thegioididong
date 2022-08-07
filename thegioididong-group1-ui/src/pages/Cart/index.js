import './cart.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Paypal from './Paypal';
import { Image } from 'cloudinary-react';

const api = 'http://localhost:8084/api/v1/orders';

function Cart() {
    const [cart, setCart] = useState([]);
    const [calculate, setCalculate] = useState(false);
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        if (firstRender) {
            setCart(JSON.parse(localStorage.getItem('cart')));
            calculateTotal(JSON.parse(localStorage.getItem('cart')));

            setFirstRender(false);
        } else {
            calculateTotal(cart);
        }
        // eslint-disable-next-line
    }, [calculate]);

    const [total, setTotal] = useState(0);
    const [name, setName] = useState('');
    const [gender, setGender] = useState('Anh');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [payments, setPayments] = useState('cod');

    const [errName, setErrName] = useState('');
    const [errPhone, setErrPhone] = useState('');
    const [errRegexPhone, setErrRegexPhone] = useState('');
    const [errAddress, setErrAddress] = useState('');

    const [message, setMessage] = useState('');

    const handleSubmitOrder = () => {
        let err;
        if (name === '') {
            setErrName('error');
            err = true;
        }
        if (phone === '') {
            setErrPhone('error');
            err = true;
        }
        if (address === '') {
            setErrAddress('error');
            err = true;
        }

        if (!err && message !== 'error') {
            axios
                .post(api, {
                    phone: phone,
                    name: name,
                    gender: gender,
                    address: address,
                    total: total,
                    state: 'Chờ xác nhận',
                    payments: payments,
                    createdAt: new Date(),
                    modifiedAt: null,
                    orderDetails: cart.reduce((a, value) => {
                        return [
                            ...a,
                            {
                                quantity: value.quantity,
                                product: {
                                    id: value.product.id,
                                },
                            },
                        ];
                    }, []),
                })
                .then((response) => {
                    localStorage.setItem('cart', JSON.stringify([]));
                    setCart(JSON.parse(localStorage.getItem('cart')));
                    setMessage('done');
                })
                .catch((err) => {
                    if (axios.isAxiosError(err)) {
                        console.log(err);
                    }
                });
        }
    };

    const setMessageCallBack = (message) => {
        setMessage(message);
    };

    const calculateTotal = (cart) => {
        let sum = 0;
        for (let i = 0; i < cart.length; i++) {
            sum += cart[i].product.price * ((100 - cart[i].product.saleOff) / 100) * cart[i].quantity;
        }
        setTotal(sum);
    };

    if (cart.length === 0) {
        return (
            <div className="cartempty">
                {message !== 'error' && message !== 'success' && message !== '' ? (
                    <span style={{ fontSize: 18, color: 'red', backgroundColor: '#f3f5e8' }}>
                        Đơn hàng của bạn đã được đặt
                    </span>
                ) : (
                    <></>
                )}
                <i className="cartnew-empty"></i>
                <span>Không có sản phẩm nào trong giỏ hàng</span>
                <Link to={'/'} className="backhome">
                    Về trang chủ
                </Link>
                <p>
                    Khi cần trợ giúp vui lòng gọi {/* eslint-disable-next-line  */}
                    <Link style={{ color: '#288ad6' }} to={'#'}>
                        1800.1060
                    </Link>{' '}
                    hoặc {/* eslint-disable-next-line  */}
                    <Link style={{ color: '#288ad6' }} to={'#'}>
                        028.3622.1060
                    </Link>{' '}
                    (7h30 - 22h)
                </p>
            </div>
        );
    } else
        return (
            <section>
                <div className="yourCart top-content">
                    <Link to={'/'} className="buymore">
                        Mua thêm sản phẩm khác
                    </Link>
                    <span>Giỏ hàng của {gender} </span>
                </div>
                <div className="middleCart">
                    <ul className="listing-cart">
                        {cart.map((item, index) => (
                            <li className="product-item" key={index}>
                                <div className="imgsp">
                                    {/* eslint-disable-next-line  */}
                                    <Link to={'#'} target="_blank">
                                        <Image cloudName="dlefvc2xe" publicId={item.product.images[0]?.source} />
                                    </Link>
                                    <div
                                        onClick={() => {
                                            cart.splice(index, 1);
                                            localStorage.setItem('cart', JSON.stringify(cart));
                                            setCart(JSON.parse(localStorage.getItem('cart')));
                                            setCalculate(!calculate);
                                        }}
                                    >
                                        <button>
                                            <span></span>
                                            Xóa
                                        </button>
                                    </div>
                                </div>
                                <div className="infosp">
                                    <div className="name-price">
                                        <div className="name-container">
                                            {/* eslint-disable-next-line  */}

                                            <Link to={'#'} className="product-item__name">
                                                {item.product.name}
                                            </Link>
                                        </div>
                                        <span>
                                            {item.product.price !== 0 ? (
                                                <>
                                                    {(item.product.price * ((100 - item.product.saleOff) / 100))
                                                        .toString()
                                                        .split('')
                                                        .reverse()
                                                        .reduce((prev, next, index) => {
                                                            return (index % 3 ? next : next + '.') + prev;
                                                        })}
                                                    ₫
                                                    <strike>
                                                        {item.product.price
                                                            .toString()
                                                            .split('')
                                                            .reverse()
                                                            .reduce((prev, next, index) => {
                                                                return (index % 3 ? next : next + '.') + prev;
                                                            })}
                                                        ₫
                                                    </strike>
                                                </>
                                            ) : (
                                                <>
                                                    {item.product.price
                                                        .toString()
                                                        .split('')
                                                        .reverse()
                                                        .reduce((prev, next, index) => {
                                                            return (index % 3 ? next : next + '.') + prev;
                                                        })}
                                                    ₫
                                                </>
                                            )}
                                        </span>
                                    </div>
                                    <hr style={{ width: '65%', visibility: 'hidden' }} />
                                    <div className="promo"></div>
                                    <div fragment="83857017b6" className="choose-color">
                                        <div className="product-size-and-color-selection"></div>
                                        <div className="choosenumber" fragment="422a272ec0">
                                            <div
                                                className="minus"
                                                onClick={() => {
                                                    console.log('minus');
                                                    if (cart[index].quantity > 1) {
                                                        cart[index].quantity = item.quantity - 1;
                                                        localStorage.setItem('cart', JSON.stringify(cart));
                                                        setCalculate(!calculate);
                                                    }
                                                }}
                                            >
                                                {cart[index].quantity > 1 ? (
                                                    <i style={{ backgroundColor: 'rgb(40, 138, 214)' }}></i>
                                                ) : (
                                                    <i style={{ backgroundColor: 'rgb(204, 204, 204)' }}></i>
                                                )}
                                            </div>
                                            <span className="number" style={{ border: 'none', pointerEvents: 'none' }}>
                                                {item.quantity}
                                            </span>
                                            <div
                                                className="plus"
                                                onClick={() => {
                                                    cart[index].quantity = item.quantity + 1;
                                                    localStorage.setItem('cart', JSON.stringify(cart));
                                                    setCalculate(!calculate);
                                                }}
                                            >
                                                {cart[index].quantity < 10 ? (
                                                    <>
                                                        <i style={{ backgroundColor: 'rgb(40, 138, 214)' }}></i>
                                                        <i style={{ backgroundColor: 'rgb(40, 138, 214)' }}></i>
                                                    </>
                                                ) : (
                                                    <>
                                                        <i style={{ backgroundColor: 'rgb(204, 204, 204)' }}></i>
                                                        <i style={{ backgroundColor: 'rgb(204, 204, 204)' }}></i>
                                                    </>
                                                )}
                                            </div>
                                            <input type="hidden" />
                                        </div>
                                    </div>
                                </div>
                                <input fragment="1615d39a298" type="hidden" value="true" />
                            </li>
                        ))}
                    </ul>
                    <div className="total-provisional">
                        <span className="total-product-quantity">
                            <span className="total-label">Tạm tính </span>({cart.length} sản phẩm):
                        </span>
                        <span className="temp-total-money">
                            {total
                                .toString()
                                .split('')
                                .reverse()
                                .reduce((prev, next, index) => {
                                    return (index % 3 ? next : next + '.') + prev;
                                })}
                            ₫
                        </span>
                    </div>
                    <div className="infor-customer">
                        <h4>Thông tin khách hàng</h4>
                        <form className="form-customer">
                            <div className="sex-customer">
                                <input fragment="9e7b071194" type="hidden" value="-1" />
                                <span
                                    fragment="9e7b071194"
                                    className={gender === 'Anh' ? 'active' : ''}
                                    onClick={() => setGender('Anh')}
                                >
                                    <i className="cartnew-choose"></i> Anh{' '}
                                </span>
                                <span
                                    fragment="9e7b071194"
                                    className={gender === 'Chị' ? 'active' : ''}
                                    onClick={() => setGender('Chị')}
                                >
                                    <i className="cartnew-choose"></i> Chị{' '}
                                </span>
                            </div>
                            <div className="fillinform">
                                <div className="fillname">
                                    <input
                                        placeholder=""
                                        maxLength="50"
                                        id="cusName"
                                        name="cusName"
                                        required="required"
                                        className="capitalize untouched pristine required"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            if (name !== '') {
                                                setErrName('');
                                            }
                                        }}
                                    />
                                    <label htmlFor="cusName" className="form-label">
                                        Họ và Tên
                                    </label>
                                    {errName === 'error' ? <span>Vui lòng nhập họ và tên</span> : <></>}
                                </div>
                                <div className="fillname phoneNumber">
                                    <input
                                        placeholder=""
                                        type="tel"
                                        maxLength="10"
                                        id="cusPhone"
                                        name="cusPhone"
                                        required="required"
                                        value={phone}
                                        className="untouched pristine required phoneNumber__input"
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                            if (phone !== '') {
                                                setErrPhone('');
                                            }
                                            if (/((09|03|07|08|05)+([0-9]{8})\b)/g.test(e.target.value) === false) {
                                                setErrRegexPhone('error');
                                            } else {
                                                setErrRegexPhone('');
                                            }
                                        }}
                                    />
                                    <label htmlFor="cusPhone" className="form-label">
                                        Số điện thoại
                                    </label>
                                    {errPhone === 'error' ? <span>Vui lòng nhập số điện thoại</span> : <></>}
                                    {errRegexPhone === 'error' ? <span>Số điện thoại không hợp lệ</span> : <></>}
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="choosegetgoods">
                        <h4>Cách thức nhận hàng</h4>
                        <input type="hidden" value="2" />
                        <div className="click-choose">
                            <div data-tab="tab-1" className="choose-link current">
                                <i className="cartnew-choose"></i>
                                <span>Giao tận nơi</span>
                            </div>
                        </div>
                        <div id="tab-1" className="choose-content current">
                            <div className="deli-address">
                                <form className="active">
                                    <p> Nhập địa chỉ nhận hàng </p>
                                    <div className="cntry-district">
                                        <div className="filladdress">
                                            <input
                                                placeholder=""
                                                maxLength="255"
                                                id="cusAddr"
                                                name="cusAddr"
                                                required="required"
                                                className="untouched pristine required"
                                                value={address}
                                                onChange={(e) => {
                                                    setAddress(e.target.value);
                                                    if (address !== '') {
                                                        setErrAddress('');
                                                    }
                                                }}
                                            />
                                            <label htmlFor="cusAddr" className="form-label">
                                                Số nhà, xã (phường), quận/huyện, tỉnh
                                            </label>
                                            {errAddress === 'error' ? (
                                                <small class="filladdress__error error">Vui lòng nhập địa chỉ</small>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="cate-printing-ink-note" style={{ display: 'none' }}>
                        <div className="cate-printing-ink-note__message"></div>
                    </div>
                    <div className="choosegetgoods">
                        <h4>Chọn phương thức thanh toán</h4>
                        <input type="hidden" value="2" />
                        <div className="click-choose">
                            <div
                                data-tab="tab-1"
                                className={payments === 'cod' ? 'choose-link current' : 'choose-link'}
                                onClick={() => {
                                    if (message !== 'success') {
                                        setPayments('cod');
                                    }
                                }}
                            >
                                <i className="cartnew-choose"></i>
                                <span>Thanh toán khi nhận hàng</span>
                            </div>
                        </div>
                        <div className="click-choose">
                            <div
                                data-tab="tab-1"
                                className={payments === 'cad' ? 'choose-link current' : 'choose-link'}
                                onClick={() => setPayments('cad')}
                            >
                                <i className="cartnew-choose"></i>
                                <span>Thanh toán qua thẻ tín dụng (Paypal)</span>
                            </div>
                        </div>
                        {payments === 'cad' && (message === '' || message === 'error') ? (
                            <Paypal setMessage={setMessageCallBack} total={total} />
                        ) : (
                            <></>
                        )}
                        <span style={{ color: 'red', backgroundColor: '#f3f5e8' }}>
                            {message === 'error' ? 'Thanh toán chưa thành công vui lòng thanh toán lại' : ''}
                            {message === 'success'
                                ? 'Đã thanh toán thành công, vui lòng nhấn đặt hàng để hoàn thành giao dịch'
                                : ''}
                        </span>
                    </div>
                    <div className="finaltotal">
                        <div className="area-total">
                            <div></div>
                            <div data-tmp-total-money-in-all="30890000" className="total-price">
                                <strong>Tổng tiền:</strong>
                                <strong>
                                    {total
                                        .toString()
                                        .split('')
                                        .reverse()
                                        .reduce((prev, next, index) => {
                                            return (index % 3 ? next : next + '.') + prev;
                                        })}
                                    ₫
                                </strong>
                            </div>
                        </div>
                        <button type="button" className="submitorder" onClick={handleSubmitOrder}>
                            <b style={{ textTransform: 'uppercase' }}>Đặt hàng</b>
                        </button>
                    </div>
                </div>
            </section>
        );
}

export default Cart;
