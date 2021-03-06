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
            <h1 className="title__head">Th??m tablet m???i</h1>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    category: 'tablet',
                    saleOff: 0,
                    price: 2400000,
                    state: 'C??n h??ng',
                    os: 'Android',
                    manufacturer: 'Apple',
                    ram: '2 GB',
                    rom: '32 GB',
                    cpu: '??ang c???p nh???t',
                    screen: '??ang c???p nh???t',
                    especially: '??ang c???p nh???t',
                    color: '??en',
                    images: null,
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="name"
                    label="T??n laptop"
                    rules={[
                        {
                            required: true,
                            message: 'Vui l??ng nh???p t??n s???n ph???m',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="category" label="Lo???i s???n ph???m" hidden>
                    <Input />
                </Form.Item>

                <Form.Item
                    name="price"
                    label="Gi?? ti???n"
                    rules={[
                        {
                            required: true,
                            message: 'Vui l??ng nh???p gi?? s???n ph???m',
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

                <Form.Item name="manufacturer" label="H??ng s???n xu???t">
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

                <Form.Item name="os" label="H??? ??i???u h??nh">
                    <Select>
                        <Select.Option value="Android">Android</Select.Option>
                        <Select.Option value="iPadOS">iPadOS</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="color" label="M??u s???c">
                    <Select>
                        <Select.Option value="??en">??en</Select.Option>
                        <Select.Option value="T??m">T??m</Select.Option>
                        <Select.Option value="V??ng">V??ng</Select.Option>
                        <Select.Option value="V??ng ?????ng">V??ng ?????ng</Select.Option>
                        <Select.Option value="Tr???ng">Tr???ng</Select.Option>
                        <Select.Option value="?????">?????</Select.Option>
                        <Select.Option value="B???c">B???c</Select.Option>
                        <Select.Option value="X??m">X??m</Select.Option>
                        <Select.Option value="H???ng">H???ng</Select.Option>
                        <Select.Option value="Xanh l??">Xanh l??</Select.Option>
                        <Select.Option value="Xanh D????ng">Xanh D????ng</Select.Option>
                        <Select.Option value="Xanh D????ng Nh???t">Xanh D????ng Nh???t</Select.Option>
                        <Select.Option value="Xanh D????ng ?????m">Xanh D????ng ?????m</Select.Option>
                        <Select.Option value="Xanh H???ng">Xanh H???ng</Select.Option>
                        <Select.Option value="Xanh T??m">Xanh T??m</Select.Option>
                        <Select.Option value="Xanh ??en">Xanh ??en</Select.Option>
                        <Select.Option value="Xanh Tr???ng">Xanh Tr???ng</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="description"
                    label="M?? t???"
                    rules={[
                        {
                            required: true,
                            message: 'Vui l??ng nh???p m?? t???',
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

                <Form.Item name="rom" label="B??? nh??? trong">
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

                <Form.Item name="pin" label="Dung l?????ng pin">
                    <InputNumber min="0" addonAfter={<Form.Item noStyle>mAh</Form.Item>} />
                </Form.Item>

                <Form.Item name="state" label="Tr???ng th??i s???n ph???m">
                    <Select disabled>
                        <Select.Option value="C??n h??ng">C??n h??ng</Select.Option>
                        <Select.Option value="H???t h??ng">H???t h??ng</Select.Option>
                        <Select.Option value="Ng???ng kinh doanh">Ng???ng kinh doanh</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="saleOff" label="Gi???m gi??">
                    <InputNumber min={0} max={100} />
                </Form.Item>

                <Form.Item
                    name="images"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra="Ch???n h??nh ???nh t??? m??y t??nh ????? t???i l??n"
                    rules={[
                        {
                            required: true,
                            message: 'Vui l??ng ch???n ??t nh???t 1 ???nh',
                        },
                    ]}
                >
                    <Upload name="logo" beforeUpload={() => false} listType="picture">
                        <Button
                            icon={<UploadOutlined style={{ width: 30 }} />}
                            style={{ height: 40, paddingBottom: 5 }}
                        >
                            B???m v??o ????? t???i ???nh
                        </Button>
                    </Upload>
                </Form.Item>

                <Form.Item name="screenTechnology" label="C??ng ngh??? m??n h??nh">
                    <Input />
                </Form.Item>

                <Form.Item name="resolution" label="????? ph??n gi???i">
                    <Input />
                </Form.Item>

                <Form.Item name="wideScreen" label="M??n h??nh r???ng">
                    <Input />
                </Form.Item>

                <Form.Item name="frontCamera" label="Camera tr?????c">
                    <Input />
                </Form.Item>

                <Form.Item name="rearCamera" label="Camera sau">
                    <Input />
                </Form.Item>

                <Form.Item name="chip" label="Chip x??? l?? (CPU)">
                    <Input />
                </Form.Item>

                <Form.Item name="chipSpeed" label="T???c ????? CPU">
                    <Input />
                </Form.Item>

                <Form.Item name="chipGraphics" label="Chip ????? ho??? (GPU)">
                    <Input />
                </Form.Item>

                <Form.Item name="sim" label="SIM">
                    <Input />
                </Form.Item>

                <Form.Item name="material" label="Ch???t li???u">
                    <Input />
                </Form.Item>

                <Form.Item name="size" label="K??ch th?????c">
                    <Input />
                </Form.Item>

                <Form.Item name="released" label="Ng??y ra m???t">
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
