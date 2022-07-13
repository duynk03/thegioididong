import { Button, Form, Input, InputNumber, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.scss';
import { formItemLayout, tailFormItemLayout } from './FormConstant.js';
import { openSuccessNotification, openErrorNotification } from './Notification';

const API_URL = 'http://localhost:8084/tgdd/api/v1/products';

const TabletForm = () => {
    const [form] = Form.useForm();
    const [images, setImages] = useState([]);
    let product = null;
    const onFinish = (values) => {
        uploadImage(values.images);
        product = values;
    };

    const postProduct = async (newProduct) => {
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
            postProduct({
                name: product.name,
                category: product.category,
                price: product.price,
                manufacturer: product.manufacturer,
                os: product.os,
                color: product.color,
                laptop: null,
                phone: null,
                smartwatch: null,
                state: product.state,
                saleOff: product.saleOff,
                created_at: new Date(),
                modified_at: null,
                description: product.description,
                quantity: product.quantity,
                images: images.reduce((a, value) => {
                    return [...a, { source: value }];
                }, []),
                tablet: {
                    screenTechnology: product.screenTechnology,
                    resolution: product.resolution,
                    wideScreen: product.wideScreen,
                    frontCamera: product.frontCamera,
                    rearCamera: product.rearCamera,
                    chip: product.chip,
                    chipSpeed: product.chipSpeed,
                    chipGraphics: product.chipGraphics,
                    ram: product.ram,
                    rom: product.rom,
                    sim: product.sim,
                    pin: product.pin,
                    material: product.material,
                    size: product.size,
                    released: product.released,
                    createdAt: new Date(),
                    modifiedAt: null,
                },
            })
                .then(() => {
                    openSuccessNotification('success', 'Tablet added successfully');
                })
                .then(() => {
                    setImages([]);
                })
                .then(() => {
                    form.resetFields();
                })
                .catch((err) => {
                    if (axios.isAxiosError(err)) {
                        openErrorNotification('error', 'Tablet added failed');
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
            <h1 className="title__head">Thêm tablet mới</h1>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    category: 'tablet',
                    saleOff: 0,
                    price: 2400000,
                    state: 'Còn hàng',
                    os: 'Android',
                    manufacturer: 'Apple',
                    ram: '2 GB',
                    rom: '32 GB',
                    cpu: 'Đang cập nhật',
                    screen: 'Đang cập nhật',
                    especially: 'Đang cập nhật',
                    color: 'Đen',
                    images: null,
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="name"
                    label="Tên laptop"
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
                        min="2400000"
                        addonAfter={<Form.Item noStyle>VND</Form.Item>}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item name="manufacturer" label="Hãng sản xuất">
                    <Select>
                        <Select.Option value="Apple">Apple iPad</Select.Option>
                        <Select.Option value="Samsung">Samsung</Select.Option>
                        <Select.Option value="Xiaomi">Xiaomi</Select.Option>
                        <Select.Option value="Lenovo">Lenovo</Select.Option>
                        <Select.Option value="Masstel">Masstel</Select.Option>
                        <Select.Option value="Nokia">Nokia</Select.Option>
                        <Select.Option value="Huawei">Huawei</Select.Option>
                        <Select.Option value="Alcatel">Alcatel</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="os" label="Hệ điều hành">
                    <Select>
                        <Select.Option value="Android">Android</Select.Option>
                        <Select.Option value="iPadOS">iPadOS</Select.Option>
                    </Select>
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

                <Form.Item name="ram" label="RAM">
                    <Select>
                        <Select.Option value="2 GB">2 GB</Select.Option>
                        <Select.Option value="3 GB">3 GB</Select.Option>
                        <Select.Option value="4 GB">4 GB</Select.Option>
                        <Select.Option value="6 GB">6 GB</Select.Option>
                        <Select.Option value="8 GB">8 GB</Select.Option>
                        <Select.Option value="12 GB">12 GB</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="rom" label="Bộ nhớ trong">
                    <Select>
                        <Select.Option value="32 GB">32 GB</Select.Option>
                        <Select.Option value="64 GB">64 GB</Select.Option>
                        <Select.Option value="128 GB">128 GB</Select.Option>
                        <Select.Option value="256 GB">256 GB</Select.Option>
                        <Select.Option value="512 GB">512 GB</Select.Option>
                        <Select.Option value="1 TB">1 TB</Select.Option>
                        <Select.Option value="2 TB">2 TB</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="pin" label="Dung lượng pin">
                    <InputNumber min="0" addonAfter={<Form.Item noStyle>mAh</Form.Item>} />
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

                <Form.Item name="screenTechnology" label="Công nghệ màn hình">
                    <Input />
                </Form.Item>

                <Form.Item name="resolution" label="Độ phân giải">
                    <Input />
                </Form.Item>

                <Form.Item name="wideScreen" label="Màn hình rộng">
                    <Input />
                </Form.Item>

                <Form.Item name="frontCamera" label="Camera trước">
                    <Input />
                </Form.Item>

                <Form.Item name="rearCamera" label="Camera sau">
                    <Input />
                </Form.Item>

                <Form.Item name="chip" label="Chip xử lý (CPU)">
                    <Input />
                </Form.Item>

                <Form.Item name="chipSpeed" label="Tốc độ CPU">
                    <Input />
                </Form.Item>

                <Form.Item name="chipGraphics" label="Chip đồ hoạ (GPU)">
                    <Input />
                </Form.Item>

                <Form.Item name="sim" label="SIM">
                    <Input />
                </Form.Item>

                <Form.Item name="material" label="Chất liệu">
                    <Input />
                </Form.Item>

                <Form.Item name="size" label="Kích thước">
                    <Input />
                </Form.Item>

                <Form.Item name="released" label="Ngày ra mắt">
                    <Input />
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Add new
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default TabletForm;
