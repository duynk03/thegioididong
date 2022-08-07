import { Alert, Button, Form, Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:8084/api/v1/users';

function Login() {
    const navigate = useNavigate();
    const [message, setMessage] = useState();
    const onFinish = (values) => {
        setMessage(null);
        axios
            .post(API_URL + '/authenticate', {
                username: values.username,
                password: values.password,
            })
            .then((response) => {
                localStorage.setItem('access_token', response.data.jwtToken);
                localStorage.setItem('username', response.data.username);
                navigate('/admin');
            })
            .catch((err) => {
                if (err.response.status === 403) {
                    setMessage('Sai tài khoản hoặc mật khẩu');
                }
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{ marginTop: 100, width: '100%' }}
                autoComplete="off"
                scrollToFirstError
            >
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 8,
                    }}
                >
                    <h1 style={{ fontSize: 36, lineHeight: 1.4 }}>Đăng nhập hệ thống</h1>
                </Form.Item>
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
                    label="Tài khoản"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tài khoản!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mật khẩu',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 8,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 8,
                    }}
                >
                    <Button type="primary" onClick={() => navigate('/')}>
                        Về trang chủ
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default Login;
