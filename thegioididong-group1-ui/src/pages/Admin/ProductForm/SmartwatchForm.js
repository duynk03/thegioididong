import { Button, Form, Input, InputNumber, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.scss';
import { formItemLayout, tailFormItemLayout } from './FormConstant.js';
import { openSuccessNotification, openErrorNotification } from './Notification';

const API_URL = 'http://localhost:8084/tgdd/api/v1/products';

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
            <h1 className="title__head">Th??m Smartwatch M???i</h1>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    category: 'smartwatch',
                    saleOff: 0,
                    price: 300000,
                    state: 'C??n h??ng',
                    os: null,
                    manufacturer: 'Apple Watch',
                    feature: 'Ch???ng n?????c',
                    color: '??en',
                    pinTime: 'D?????i 2 ng??y',
                    wireMaterial: 'Da',
                    sim: 'eSIM',
                    images: null,
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="name"
                    label="T??n smartwatch"
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
                        min="300000"
                        addonAfter={<Form.Item noStyle>VND</Form.Item>}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item name="manufacturer" label="H??ng s???n xu???t">
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

                <Form.Item name="os" label="H??? ??i???u h??nh" hidden>
                    <Input />
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

                <Form.Item name="pinTime" label="Th???i l?????ng pin">
                    <Select>
                        <Select.Option value="D?????i 2 ng??y">D?????i 2 ng??y</Select.Option>
                        <Select.Option value="T??? 2 - 5 ng??y">T??? 2 - 5 ng??y</Select.Option>
                        <Select.Option value="T??? 5 - 7 ng??y">T??? 5 - 7 ng??y</Select.Option>
                        <Select.Option value="T??? 7 - 14 ng??y">T??? 7 - 14 ng??y</Select.Option>
                        <Select.Option value="Tr??n 14 ng??y">Tr??n 14 ng??y</Select.Option>
                        <Select.Option value="S???c b??? sung b???ng ??nh s??ng m???t tr???i">
                            S???c b??? sung b???ng ??nh s??ng m???t tr???i
                        </Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="wireMaterial" label="Ch???t li???u d??y">
                    <Select>
                        <Select.Option value="Da">Da</Select.Option>
                        <Select.Option value="Silicone">Silicone</Select.Option>
                        <Select.Option value="Th??p kh??ng g???">Th??p kh??ng g???</Select.Option>
                        <Select.Option value="V???i">V???i</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="size" label="K??ch th?????c m???t">
                    <InputNumber min="10" addonAfter={<Form.Item noStyle>mm</Form.Item>} />
                </Form.Item>

                <Form.Item name="sim" label="Sim &amp; nghe g???i">
                    <Select>
                        <Select.Option value="eSIM">eSIM</Select.Option>
                        <Select.Option value="SIM 4G/LTE">SIM 4G/LTE</Select.Option>
                        <Select.Option value="Nghe g???i ngay tr??n ?????ng h???">Nghe g???i ngay tr??n ?????ng h???</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="feature" label="Ch???c n??ng ?????c bi???t">
                    <Select>
                        <Select.Option value="Ch???ng n?????c">Ch???ng n?????c</Select.Option>
                        <Select.Option value="Kh??ng n?????c">Kh??ng n?????c</Select.Option>
                        <Select.Option value="M??n h??nh lu??n hi???n th???">M??n h??nh lu??n hi???n th???</Select.Option>
                        <Select.Option value="Nghe g???i tr??n ?????ng h???">Nghe g???i tr??n ?????ng h???</Select.Option>
                        <Select.Option value="Nghe g???i ?????c l???p">Nghe g???i ?????c l???p</Select.Option>
                        <Select.Option value="Nghe nh???c">Nghe nh???c</Select.Option>
                        <Select.Option value="Ph??t hi???n t?? ng??">Ph??t hi???n t?? ng??</Select.Option>
                        <Select.Option value="?????nh v???">?????nh v???</Select.Option>
                        <Select.Option value="4G/LTE">4G/LTE</Select.Option>
                    </Select>
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

                <Form.Item name="screen" label="Th??ng tin m??n h??nh">
                    <Input />
                </Form.Item>

                <Form.Item name="resolution" label="????? ph??n gi???i">
                    <Input />
                </Form.Item>

                <Form.Item name="materialFrame" label="Ch???t li???u khung vi???n">
                    <Input />
                </Form.Item>

                <Form.Item name="charge" label="Th???i gian s???c">
                    <Input />
                </Form.Item>

                <Form.Item name="pin" label="Pin">
                    <Input />
                </Form.Item>

                <Form.Item name="materialSurface" label="B??? m???t s???n ph???m">
                    <Input />
                </Form.Item>

                <Form.Item name="released" label="Released">
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

export default SmartwatchForm;
