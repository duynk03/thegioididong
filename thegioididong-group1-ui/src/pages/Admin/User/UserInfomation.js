import { Button, Form, Input, Modal } from 'antd';
import axios from 'axios';
import { formItemLayout, tailFormItemLayout } from '../ProductForm/FormConstant';
import { openErrorNotification, openSuccessNotification } from '../ProductForm/Notification';
import '../Admin.scss';
import { useEffect, useState } from 'react';

const USERS_API = 'http://localhost:8084/api/v1/users';
function UserInformation() {
    const [form] = Form.useForm();
    const [formChangePassword] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const username = localStorage.getItem('username');
    const [uname, setUname] = useState('');
    const [pwd, setPwd] = useState('');

    let userInformation;
    useEffect(() => {
        axios
            .get(USERS_API + '?username=' + username)
            .then((response) => {
                userInformation = response.data;
                userInformation.createdAt =
                    response.data.createdAt !== null
                        ? new Date(response.data.createdAt).getDate() +
                          '/' +
                          (new Date(response.data.createdAt).getMonth() + 1) +
                          '/' +
                          new Date(response.data.createdAt).getFullYear()
                        : '';
            })
            .then(() => {
                form.setFieldsValue(userInformation);
            });
    }, []);

    const onFinish = (values) => {
        axios
            .post(USERS_API, {
                username: values.username,
                password: values.password,
                name: values.name,
                createdAt: new Date(),
                modifiedAt: null,
            })
            .then(() => {
                form.resetFields();
                openSuccessNotification('success', 'Đăng ký tài khoản thành công!');
            })
            .catch((err) => {
                if (axios.isAxiosError(err)) {
                    openErrorNotification('error', 'Đăng ký không thành công!');
                }
            });
    };
    return (
        <>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={userInformation}
                scrollToFirstError
            >
                <Form.Item {...tailFormItemLayout}>
                    <h1 style={{ fontSize: '3em', marginTop: 30, fontWeight: 'bold' }}>Thông tin tài khoản</h1>
                </Form.Item>

                <Form.Item name="username" label="Tên đăng nhập">
                    <Input disabled />
                </Form.Item>

                <Form.Item name="password" label="Mật khẩu">
                    <Input.Password disabled />
                </Form.Item>

                <Form.Item name="name" label="Họ và tên">
                    <Input disabled />
                </Form.Item>

                <Form.Item name="createdAt" label="Thời gian tạo ">
                    <Input disabled />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="text" danger style={{ fontSize: 18 }} onClick={() => setVisible(true)}>
                        Đổi mật khẩu
                    </Button>
                </Form.Item>
            </Form>
            <Modal
                title="Đổi mật khẩu"
                centered
                visible={visible}
                onOk={() => {
                    axios
                        .put(USERS_API + '/' + username, {
                            password: formChangePassword.getFieldValue('password'),
                        })
                        .then((res) => {
                            console.log(res);
                            if (res.status === 200) {
                                setVisible(false);
                                openSuccessNotification('success', 'Đổi mật khẩu thành công!');
                                formChangePassword.resetFields();
                            }
                        })
                        .catch((err) => {
                            if (axios.isAxiosError(err)) {
                                console.log(err);
                            }
                        });
                }}
                onCancel={() => setVisible(false)}
                width={1000}
            >
                <Form {...formItemLayout} form={formChangePassword} name="changePassword" onFinish={onFinish}>
                    <Form.Item
                        name="password"
                        label="Mật khẩu mới"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password minLength={6} maxLength={50} />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Xác nhận mật khẩu mới"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập xác nhận mật khẩu!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('Mật khẩu không khớp'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password minLength={6} maxLength={50} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default UserInformation;
