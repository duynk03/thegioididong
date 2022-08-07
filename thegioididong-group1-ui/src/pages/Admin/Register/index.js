import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { formItemLayout, tailFormItemLayout } from '../ProductForm/FormConstant';
import { openErrorNotification, openSuccessNotification } from '../ProductForm/Notification';
import '../Admin.scss';

const USERS_API = 'http://localhost:8084/api/v1/users';
function Register() {
    const [form] = Form.useForm();
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
                    if (err.response.status === 406) {
                        openErrorNotification('error', 'Tên tài khoản đã tồn tại, vui lòng nhập tên tài khoản khác!');
                    } else openErrorNotification('error', 'Đăng ký không thành công!');
                }
            });
    };
    return (
        <>
            <Form {...formItemLayout} form={form} name="register" onFinish={onFinish} scrollToFirstError>
                <Form.Item {...tailFormItemLayout}>
                    <h1 style={{ fontSize: '3em', marginTop: 30, fontWeight: 'bold' }}>Đăng ký tài khoản</h1>
                </Form.Item>

                <Form.Item
                    name="username"
                    label="Tên đăng nhập"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tên đăng nhập',
                        },
                    ]}
                >
                    <Input minLength={6} maxLength={50} />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Mật khẩu"
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
                    label="Xác nhận mật khẩu"
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

                <Form.Item
                    name="name"
                    label="Họ và tên"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tên của bạn',
                        },
                    ]}
                >
                    <Input minLength={2} maxLength={50} />
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Đăng ký
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default Register;
