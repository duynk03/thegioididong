import { Button, Form, Input, InputNumber, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.scss';
import { formItemLayout, tailFormItemLayout } from './FormConstant.js';
import { openSuccessNotification, openErrorNotification } from './Notification';

const API_URL = 'http://localhost:8084/api/v1/products';

const SmartwatchForm = () => {
    const [form] = Form.useForm();
    const [images, setImages] = useState([]);

    let product = null;
    const onFinish = (values) => {
        uploadImage(values.images);
        product = values;
    };

    const addProduct = async (newProduct) => {
        const response = await axios.post(API_URL, newProduct);
        console.log('Response data: ', response.data);
    };

    function uploadImage(files) {
        const uploaders = files.map(async (file) => {
            const formData = new FormData();
            const newFile = file.originFileObj;
            formData.append('file', newFile);
            formData.append('tags', `codeinfuse, medium, gist`);
            formData.append('upload_preset', 'p7t6hcdg');
            formData.append('api_key', '237947677149461');
            formData.append('timestamp', (Date.now() / 1000) | 0);

            return await axios
                .post('https://api.cloudinary.com/v1_1/p7t6hcdg/image/upload', formData, {
                    headers: { 'X-Requested-With': 'XMLHttpRequest' },
                })
                .then((response) => {
                    const publicId = response.data.public_id;
                    setImages(images.push(publicId));
                });
        });

        axios.all(uploaders).then((res) => {
            addProduct({
                name: product.name,
                category: product.category,
                price: product.price,
                manufacturer: product.manufacturer,
                os: product.os,
                color: product.color,
                laptop: null,
                phone: null,
                tablet: null,
                stillInBusiness: product.stillInBusiness === 'true' ? true : false,
                saleOff: product.saleOff,
                created_at: new Date(),
                modified_at: null,
                description: product.description,
                quantity: product.quantity,
                images: images.reduce((a, value) => {
                    return [...a, { source: value }];
                }, []),
                smartwatch: {
                    screen: product.screen,
                    resolution: product.resolution,
                    materialFrame: product.materialFrame,
                    wireMaterial: product.wireMaterial,
                    sim: product.sim,
                    size: product.size,
                    pinTime: product.pinTime,
                    charge: product.charge,
                    pin: product.pin,
                    materialSurface: product.materialSurface,
                    feature: product.feature,
                    released: product.released,
                    createdAt: new Date(),
                    modifiedAt: null,
                },
            })
                .then(() => {
                    openSuccessNotification('success', 'Smartwatch added successfully');
                })
                .then(() => {
                    setImages([]);
                })
                .then(() => {
                    form.resetFields();
                })
                .catch((err) => {
                    if (axios.isAxiosError(err)) {
                        openErrorNotification('error', 'Smartwatch added failed');
                        form.setFieldsValue({ images: null });
                        setImages([]);
                    }
                });
        });
    }

    const normFile = (e) => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e?.fileList;
    };

    return (
        <>
            <h1 className="title__head">Thêm Smartwatch Mới</h1>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    category: 'smartwatch',
                    saleOff: 0,
                    price: 300000,
                    state: 'Còn hàng',
                    os: null,
                    manufacturer: 'Apple Watch',
                    feature: 'Chống nước',
                    color: 'Đen',
                    pinTime: 'Dưới 2 ngày',
                    wireMaterial: 'Da',
                    sim: 'eSIM',
                    images: null,
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="name"
                    label="Tên smartwatch"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tên sản phẩm',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="category" label="Loại sản phẩm" hidden>
                    <Input />
                </Form.Item>

                <Form.Item
                    name="price"
                    label="Giá tiền"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập giá sản phẩm',
                        },
                    ]}
                >
                    <InputNumber
                        min="300000"
                        addonAfter={<Form.Item noStyle>VND</Form.Item>}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item name="manufacturer" label="Hãng sản xuất">
                    <Select>
                        <Select.Option value="Apple Watch">Apple Watch</Select.Option>
                        <Select.Option value="Samsung">Samsung</Select.Option>
                        <Select.Option value="Xiaomi">Xiaomi</Select.Option>
                        <Select.Option value="Garmin">Garmin</Select.Option>
                        <Select.Option value="BeFit">BeFit</Select.Option>
                        <Select.Option value="Amazfit">Amazfit</Select.Option>
                        <Select.Option value="Kidcare">Kidcare</Select.Option>
                        <Select.Option value="Masstel">Masstel</Select.Option>
                        <Select.Option value="Oppo">Oppo</Select.Option>
                        <Select.Option value="Realme">Realme</Select.Option>
                        <Select.Option value="Abardeen">Abardeen</Select.Option>
                        <Select.Option value="Suunto">Suunto</Select.Option>
                        <Select.Option value="Asus">Asus</Select.Option>
                        <Select.Option value="Itel">Itel</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="os" label="Hệ điều hành" hidden>
                    <Input />
                </Form.Item>

                <Form.Item name="color" label="Màu sắc">
                    <Select>
                        <Select.Option value="Đen">Đen</Select.Option>
                        <Select.Option value="Tím">Tím</Select.Option>
                        <Select.Option value="Vàng">Vàng</Select.Option>
                        <Select.Option value="Vàng đồng">Vàng đồng</Select.Option>
                        <Select.Option value="Trắng">Trắng</Select.Option>
                        <Select.Option value="Đỏ">Đỏ</Select.Option>
                        <Select.Option value="Bạc">Bạc</Select.Option>
                        <Select.Option value="Xám">Xám</Select.Option>
                        <Select.Option value="Hồng">Hồng</Select.Option>
                        <Select.Option value="Xanh lá">Xanh lá</Select.Option>
                        <Select.Option value="Xanh Dương">Xanh Dương</Select.Option>
                        <Select.Option value="Xanh Dương Nhạt">Xanh Dương Nhạt</Select.Option>
                        <Select.Option value="Xanh Dương Đậm">Xanh Dương Đậm</Select.Option>
                        <Select.Option value="Xanh Hồng">Xanh Hồng</Select.Option>
                        <Select.Option value="Xanh Tím">Xanh Tím</Select.Option>
                        <Select.Option value="Xanh Đen">Xanh Đen</Select.Option>
                        <Select.Option value="Xanh Trắng">Xanh Trắng</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Mô tả"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mô tả',
                        },
                    ]}
                >
                    <Input.TextArea showCount />
                </Form.Item>

                <Form.Item name="pinTime" label="Thời lượng pin">
                    <Select>
                        <Select.Option value="Dưới 2 ngày">Dưới 2 ngày</Select.Option>
                        <Select.Option value="Từ 2 - 5 ngày">Từ 2 - 5 ngày</Select.Option>
                        <Select.Option value="Từ 5 - 7 ngày">Từ 5 - 7 ngày</Select.Option>
                        <Select.Option value="Từ 7 - 14 ngày">Từ 7 - 14 ngày</Select.Option>
                        <Select.Option value="Trên 14 ngày">Trên 14 ngày</Select.Option>
                        <Select.Option value="Sạc bổ sung bằng ánh sáng mặt trời">
                            Sạc bổ sung bằng ánh sáng mặt trời
                        </Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="wireMaterial" label="Chất liệu dây">
                    <Select>
                        <Select.Option value="Da">Da</Select.Option>
                        <Select.Option value="Silicone">Silicone</Select.Option>
                        <Select.Option value="Thép không gỉ">Thép không gỉ</Select.Option>
                        <Select.Option value="Vải">Vải</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="size" label="Kích thước mặt">
                    <InputNumber min="10" addonAfter={<Form.Item noStyle>mm</Form.Item>} />
                </Form.Item>

                <Form.Item name="sim" label="Sim &amp; nghe gọi">
                    <Select>
                        <Select.Option value="eSIM">eSIM</Select.Option>
                        <Select.Option value="SIM 4G/LTE">SIM 4G/LTE</Select.Option>
                        <Select.Option value="Nghe gọi ngay trên đồng hồ">Nghe gọi ngay trên đồng hồ</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="feature" label="Chức năng đặc biệt">
                    <Select>
                        <Select.Option value="Chống nước">Chống nước</Select.Option>
                        <Select.Option value="Kháng nước">Kháng nước</Select.Option>
                        <Select.Option value="Màn hình luôn hiển thị">Màn hình luôn hiển thị</Select.Option>
                        <Select.Option value="Nghe gọi trên đồng hồ">Nghe gọi trên đồng hồ</Select.Option>
                        <Select.Option value="Nghe gọi độc lập">Nghe gọi độc lập</Select.Option>
                        <Select.Option value="Nghe nhạc">Nghe nhạc</Select.Option>
                        <Select.Option value="Phát hiện té ngã">Phát hiện té ngã</Select.Option>
                        <Select.Option value="Định vị">Định vị</Select.Option>
                        <Select.Option value="4G/LTE">4G/LTE</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="state" label="Trạng thái sản phẩm">
                    <Select disabled>
                        <Select.Option value="Còn hàng">Còn hàng</Select.Option>
                        <Select.Option value="Hết hàng">Hết hàng</Select.Option>
                        <Select.Option value="Ngừng kinh doanh">Ngừng kinh doanh</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="saleOff" label="Giảm giá">
                    <InputNumber min={0} max={100} />
                </Form.Item>

                <Form.Item
                    name="images"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra="Chọn hình ảnh từ máy tính để tải lên"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng chọn ít nhất 1 ảnh',
                        },
                    ]}
                >
                    <Upload name="logo" beforeUpload={() => false} listType="picture">
                        <Button
                            icon={<UploadOutlined style={{ width: 30 }} />}
                            style={{ height: 40, paddingBottom: 5 }}
                        >
                            Bấm vào để tải ảnh
                        </Button>
                    </Upload>
                </Form.Item>

                <Form.Item name="screen" label="Thông tin màn hình">
                    <Input />
                </Form.Item>

                <Form.Item name="resolution" label="Độ phân giải">
                    <Input />
                </Form.Item>

                <Form.Item name="materialFrame" label="Chất liệu khung viền">
                    <Input />
                </Form.Item>

                <Form.Item name="charge" label="Thời gian sạc">
                    <Input />
                </Form.Item>

                <Form.Item name="pin" label="Pin">
                    <Input />
                </Form.Item>

                <Form.Item name="materialSurface" label="Bề mặt sản phẩm">
                    <Input />
                </Form.Item>

                <Form.Item name="released" label="Released">
                    <Input />
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Thêm sản phẩm
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default SmartwatchForm;
