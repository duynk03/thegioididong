import { Button, Form, Input, InputNumber, Select, Upload, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import axios from 'axios';
import { formItemLayout, tailFormItemLayout } from './FormConstant.js';

const API_URL = 'http://localhost:8084/tgdd/api/v1/products';

const PhoneForm = () => {
    const [form] = Form.useForm();
    const [images, setImages] = useState([]);
    let phone = null;
    const onFinish = (values) => {
        uploadImage(values.images);

        phone = values;
    };

    const openSuccessNotification = () => {
        notification['success']({
            message: 'Phone was added successfully',
        });
    };

    const addPhone = async (newPhone) => {
        const response = await axios.post(API_URL, newPhone);
        console.log(response.data);
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

            return axios
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
                addPhone({
                    name: phone.name,
                    category: phone.category,
                    price: phone.price,
                    manufacturer: phone.manufacturer,
                    os: phone.os,
                    color: phone.color,
                    tablet: null,
                    laptop: null,
                    smartwatch: null,
                    stillInBusiness: phone.stillInBusiness === 'true' ? true : false,
                    saleOff: phone.saleOff,
                    created_at: new Date(),
                    modified_at: null,
                    description: phone.description,
                    quantity: phone.quantity,
                    images: images.reduce((a, value) => {
                        return [...a, { source: value }];
                    }, []),
                    phone: {
                        screen: phone.screen,
                        screenTechnology: phone.screenTechnology,
                        resolution: phone.resolution,
                        wideScreen: phone.wideScreen,
                        brightness: phone.brightness,
                        touchScreen: phone.touchScreen,
                        frontCamera: phone.frontCamera,
                        rearCamera: phone.rearCamera,
                        chip: phone.chip,
                        chipSpeed: phone.chipSpeed,
                        chipGraphics: phone.chipGraphics,
                        ram: phone.ram,
                        rom: phone.rom,
                        sim: phone.sim,
                        pin: phone.pin,
                        design: phone.design,
                        material: phone.material,
                        size: phone.size,
                        released: phone.released,
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
            <h1 className="title__head">ADD NEW PHONE</h1>
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
                    label="Phone Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product name',
                        },
                    ]}
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
                    name="screenTechnology"
                    label="Screen Technology"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product screen technology!',
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
                    name="wideScreen"
                    label="Wide screen"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product wide screen!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="brightness"
                    label="Brightness"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product brightness!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="touchScreen"
                    label="Touch screen"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product touch screen!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="frontCamera"
                    label="Front Camera"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product front camera!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="rearCamera"
                    label="Rear camera"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product rear camera!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="chip"
                    label="Chip"
                    rules={[
                        {
                            required: true,
                            message: 'Please input chip!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="chipSpeed"
                    label="Chip speed"
                    rules={[
                        {
                            required: true,
                            message: 'Please input chip speed!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="chipGraphics"
                    label="Chip graphics"
                    rules={[
                        {
                            required: true,
                            message: 'Please input chip graphics!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="ram"
                    label="Ram"
                    rules={[
                        {
                            required: true,
                            message: 'Please input ram!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="rom"
                    label="Rom"
                    rules={[
                        {
                            required: true,
                            message: 'Please input rom!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="sim"
                    label="Sim"
                    rules={[
                        {
                            required: true,
                            message: 'Please input sim!',
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
                    name="design"
                    label="Design"
                    rules={[
                        {
                            required: true,
                            message: 'Please input design!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="material"
                    label="Material"
                    rules={[
                        {
                            required: true,
                            message: 'Please input material!',
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

export default PhoneForm;
