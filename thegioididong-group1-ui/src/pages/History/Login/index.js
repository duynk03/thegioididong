import "../history.scss";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImg from '../../../assets/i1.png';
import axios from "axios";
import { Alert, Button, Form, Input } from 'antd';
const API_URL = 'http://localhost:8084/api/v1/orders';

function LoginHistory() {
    const [message, setMessage] = useState();
    const navigate = useNavigate();
    const onFinish = (values) => {
        setMessage(null);
        axios
            .post(API_URL, {
                phone: values.phone,
            })
            .then((response) => {
                localStorage.setItem('access_token', response.data.jwtToken);
                localStorage.setItem('phone', response.data.phone);
                navigate('/lich-su-mua-hang');
            })
            .catch((err) => {
                if (err.response.status === 403) {
                    setMessage('Sai số điện thoại');
                }
            });
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <section className="login-container">
            <div className="login">
                <img alt="" src={loginImg} />
                <span>Tra cứu thông tin đơn hàng</span>
                <>
                    <Form name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        scrollToFirstError
                    >
                        {message != null ? (
                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 8,
                                }}
                            >
                                <Alert message={message} type="error" />
                            </Form.Item>
                        ) : (
                            <></>
                        )}
                        <Form.Item
                            label="Số điện thoại"
                            name="phone"
                            placeholder="Nhập số điện thoại mua hàng" maxlength="10"
                            rules={[{
                                required: true,
                                message: "vui lòng nhập số điện thoại",
                                maxlength: 10,
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Tiếp tục</Button>
                        </Form.Item>
                    </Form>
                </>
            </div>
        </section>
    )
}
export default LoginHistory;