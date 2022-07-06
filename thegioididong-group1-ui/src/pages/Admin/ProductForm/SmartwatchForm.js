import { Button, Form, Input, InputNumber, Select, Upload, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.scss';
import { formItemLayout, tailFormItemLayout } from './FormConstant.js';

const API_URL = 'http://localhost:8084/tgdd/api/v1/products';

const SmartwatchForm = () => {
    const [form] = Form.useForm();
    const [images, setImages] = useState([]);
    let product = null;
    const onFinish = (values) => {
        uploadImage(values.images);
        product = values;
    };

    const openSuccessNotification = () => {
        notification['success']({
            message: 'Smartwatch was added successfully',
        });
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

        axios
            .all(uploaders)
            .then((res) => {
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
                        materialTrap: product.materialTrap,
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
                });
            })
            .then(() => {
                setImages([]);
            })
            .then(() => {
                openSuccessNotification();
            })
            .then(() => {
                form.resetFields();
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
            <h1 className="title__head">ADD NEW SMARTWATCH</h1>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    saleOff: 0,
                    stillInBusiness: 'true',
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="name"
                    label="Smartwatch Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product name',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="category"
                    label="Category"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product category!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input placeholder="Example: điện thoại,..." />
                </Form.Item>

                <Form.Item
                    name="price"
                    label="Price"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product price',
                        },
                    ]}
                >
                    <InputNumber
                        min="0"
                        addonAfter={<Form.Item noStyle>VND</Form.Item>}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="manufacturer"
                    label="Manufacturer"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product manufacturer!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="os"
                    label="Os"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product os!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="color"
                    label="Color"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product color!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Description"
                    rules={[
                        {
                            required: true,
                            message: 'Please input description',
                        },
                    ]}
                >
                    <Input.TextArea showCount />
                </Form.Item>

                <Form.Item
                    name="quantity"
                    label="Quantity"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product quantity',
                        },
                    ]}
                >
                    <InputNumber min="0" />
                </Form.Item>

                <Form.Item
                    name="screen"
                    label="Screen"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product screen!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="resolution"
                    label="Resolution"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product resolution!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="materialFrame"
                    label="Material frame"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Material frame!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="materialTrap"
                    label="Material trap"
                    rules={[
                        {
                            required: true,
                            message: 'Please input material trap!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="size"
                    label="Size"
                    rules={[
                        {
                            required: true,
                            message: 'Please input size!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="pinTime"
                    label="Pin time"
                    rules={[
                        {
                            required: true,
                            message: 'Please input pin time!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="charge"
                    label="Charge"
                    rules={[
                        {
                            required: true,
                            message: 'Please input charge!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="pin"
                    label="Pin"
                    rules={[
                        {
                            required: true,
                            message: 'Please input pin!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="materialSurface"
                    label="Material surface"
                    rules={[
                        {
                            required: true,
                            message: 'Please input material surface!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="feature"
                    label="Feature"
                    rules={[
                        {
                            required: true,
                            message: 'Please input feature!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="released"
                    label="Released"
                    rules={[
                        {
                            required: true,
                            message: 'Please input released!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="stillInBusiness"
                    label="Still In Business"
                    rules={[
                        {
                            required: true,
                            message: 'Business state is required!',
                        },
                    ]}
                    hasFeedback
                >
                    <Select>
                        <Select.Option value="true">Yes</Select.Option>
                        <Select.Option value="false">No</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="saleOff"
                    label="Sale Off"
                    rules={[
                        {
                            required: true,
                            message: 'Please input sale off!',
                        },
                    ]}
                >
                    <InputNumber min={0} max={100} />
                </Form.Item>

                <Form.Item
                    name="images"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra="Select image on your PC to upload"
                    rules={[
                        {
                            required: true,
                            message: 'Please select at least one image',
                        },
                    ]}
                >
                    <Upload name="logo" beforeUpload={() => false} listType="picture">
                        <Button
                            icon={<UploadOutlined style={{ width: 30 }} />}
                            style={{ height: 40, paddingBottom: 5 }}
                        >
                            Click to upload
                        </Button>
                    </Upload>
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

export default SmartwatchForm;
