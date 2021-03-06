import { Button, Form, Input, InputNumber, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.scss';
import { formItemLayout, tailFormItemLayout } from './FormConstant.js';
import { openSuccessNotification, openErrorNotification } from './Notification';

const API_URL = 'http://localhost:8084/tgdd/api/v1/products';

const LaptopForm = () => {
    const [form] = Form.useForm();
    const [images, setImages] = useState([]);
    let product = null;
    const onFinish = (values) => {
        product = values;

        uploadImage(values.images);
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
                tablet: null,
                phone: null,
                smartwatch: null,
                state: product.state,
                saleOff: product.saleOff,
                created_at: new Date(),
                modified_at: null,
                description: product.description,
                images: images.reduce((a, value) => {
                    return [...a, { source: value }];
                }, []),
                laptop: {
                    cpu: product.cpu,
                    core: product.core,
                    thread: product.thread,
                    cpuSpeed: product.cpuSpeed,
                    cpuMaxSpeed: product.cpuMaxSpeed,
                    ram: product.ram,
                    ramType: product.ramType,
                    ramSpeed: product.ramSpeed,
                    ramUpdate: product.ramUpdate,
                    rom: product.rom,
                    screen: product.screen,
                    graphicCard: product.graphicCard,
                    connector: product.connector,
                    especially: product.especially,
                    design: product.design,
                    size: product.size,
                    released: product.released,
                    createdAt: new Date(),
                    modifiedAt: null,
                },
            })
                .then(() => {
                    openSuccessNotification('success', 'Laptop added successfully');
                })
                .then(() => {
                    setImages([]);
                })
                .then(() => {
                    form.resetFields();
                })
                .catch((err) => {
                    if (axios.isAxiosError(err)) {
                        openErrorNotification('error', 'Laptop added failed');
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
            <h1 className="title__head">Th??m laptop m???i</h1>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    category: 'laptop',
                    saleOff: 0,
                    price: 4900000,
                    state: 'C??n h??ng',
                    os: 'Window 10',
                    manufacturer: 'Apple',
                    ram: '??ang c???p nh???t',
                    rom: '??ang c???p nh???t',
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
                        min="4900000"
                        addonAfter={<Form.Item noStyle>VND</Form.Item>}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item name="manufacturer" label="H??ng s???n xu???t">
                    <Select>
                        <Select.Option value="Apple">MacBook</Select.Option>
                        <Select.Option value="Asus">Asus</Select.Option>
                        <Select.Option value="Hp">Hp</Select.Option>
                        <Select.Option value="Lenovo">Lenovo</Select.Option>
                        <Select.Option value="Acer">Acer</Select.Option>
                        <Select.Option value="Dell">Dell</Select.Option>
                        <Select.Option value="Msi">Msi</Select.Option>
                        <Select.Option value="Surface">Surface</Select.Option>
                        <Select.Option value="LG">LG</Select.Option>
                        <Select.Option value="GIGABYTE">GIGABYTE</Select.Option>
                        <Select.Option value="Intel">Intel</Select.Option>
                        <Select.Option value="Chuwi">Chuwi</Select.Option>
                        <Select.Option value="Itel">itel</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="os" label="H??? ??i???u h??nh">
                    <Select>
                        <Select.Option value="Window 10">Windows 10</Select.Option>
                        <Select.Option value="Window 8">Windows 8</Select.Option>
                        <Select.Option value="Window 7">Windows 7</Select.Option>
                        <Select.Option value="MacOS">MacOS</Select.Option>
                        <Select.Option value="Ubuntu">Ubuntu</Select.Option>
                        <Select.Option value="Linux">Linux</Select.Option>
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

                <Form.Item name="ram" label="Ram">
                    <Select>
                        <Select.Option value="??ang c???p nh???t">??ang c???p nh???t</Select.Option>
                        <Select.Option value="4 GB">4 GB</Select.Option>
                        <Select.Option value="8 GB">8 GB</Select.Option>
                        <Select.Option value="16 GB">16 GB</Select.Option>
                        <Select.Option value="32 GB">32 GB</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="rom" label="Dung l?????ng ??? c???ng">
                    <Select>
                        <Select.Option value="??ang c???p nh???t">??ang c???p nh???t</Select.Option>
                        <Select.Option value="SSD 128 GB">128 GB</Select.Option>
                        <Select.Option value="SSD 256 GB">256 GB</Select.Option>
                        <Select.Option value="SSD 512 GB">512 GB</Select.Option>
                        <Select.Option value="SSD 1 TB">1 TB</Select.Option>
                        <Select.Option value="SSD 2 TB">2 TB</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="cpu" label="CPU">
                    <Select>
                        <Select.Option value="??ang c???p nh???t">??ang c???p nh???t</Select.Option>
                        <Select.Option value="Intel Core i7">Intel Core i7</Select.Option>
                        <Select.Option value="Intel Core i5">Intel Core i5</Select.Option>
                        <Select.Option value="Intel Core i3">Intel Core i3</Select.Option>
                        <Select.Option value="Intel Celeron/Petium">Intel Celeron/Petium</Select.Option>
                        <Select.Option value="AMD Ryzen 7">AMD Ryzen 7</Select.Option>
                        <Select.Option value="AMD Ryzen 5">AMD Ryzen 5</Select.Option>
                        <Select.Option value="AMD Ryzen 3">AMD Ryzen 3</Select.Option>
                        <Select.Option value="Apple M1">Apple M1</Select.Option>
                        <Select.Option value="Apple M2">Apple M2</Select.Option>
                        <Select.Option value="Apple M1 Pro">Apple M1 Pro</Select.Option>
                        <Select.Option value="Apple M1 Max">Apple M1 Max</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="screen" label="M??n h??nh">
                    <Select>
                        <Select.Option value="??ang c???p nh???t">??ang c???p nh???t</Select.Option>
                        <Select.Option value="11.6 inch">11.6 inch</Select.Option>
                        <Select.Option value="12.3 inch">12.3 inch</Select.Option>
                        <Select.Option value="12.4 inch">12.4 inch</Select.Option>
                        <Select.Option value="13 inch">13 inch</Select.Option>
                        <Select.Option value="13.3 inch">13.3 inch</Select.Option>
                        <Select.Option value="13.4 inch">13.4 inch</Select.Option>
                        <Select.Option value="13.6 inch">13.6 inch</Select.Option>
                        <Select.Option value="14 inch">14 inch</Select.Option>
                        <Select.Option value="15.6 inch">15.6 inch</Select.Option>
                        <Select.Option value="16 inch">16 inch</Select.Option>
                        <Select.Option value="16.1 inch">15.6 inch</Select.Option>
                        <Select.Option value="16.2 inch">15.6 inch</Select.Option>
                        <Select.Option value="17 inch">17 inch</Select.Option>
                        <Select.Option value="7.3 inch">7.3 inch</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="especially" label="?????c bi???t">
                    <Select>
                        <Select.Option value="??ang c???p nh???t">??ang c???p nh???t</Select.Option>
                        <Select.Option value="Ti??u chu???n Intel Evo (M???i)">Ti??u chu???n Intel Evo (M???i)</Select.Option>
                        <Select.Option value="CPU Intel th??? h??? 12 (M???i)">CPU Intel th??? h??? 12 (M???i)</Select.Option>
                        <Select.Option value="CPU Intel th??? h??? 11">CPU Intel th??? h??? 11</Select.Option>
                        <Select.Option value="B??? nh??? Intel Optane">B??? nh??? Intel Optane</Select.Option>
                        <Select.Option value="Card ????? h???a r???i">Card ????? h???a r???i</Select.Option>
                        <Select.Option value="M??n h??nh ch???ng ch??i Anti Glare">
                            M??n h??nh ch???ng ch??i Anti Glare
                        </Select.Option>
                        <Select.Option value="Wifi 6 nhanh 4 l???n Wifi 5">Wifi 6 nhanh 4 l???n Wifi 5</Select.Option>
                        <Select.Option value="M??n h??nh g???p 360 ?????">1</Select.Option>
                        <Select.Option value="M??n h??nh c???m ???ng">M??n h??nh c???m ???ng</Select.Option>
                        <Select.Option value="M??n h??nh 100% sRGB">M??n h??nh 100% sRGB</Select.Option>
                        <Select.Option value="M??n h??nh OLED">M??n h??nh OLED</Select.Option>
                        <Select.Option value="C?? b???o m???t v??n tay">C?? b???o m???t v??n tay</Select.Option>
                        <Select.Option value="C?? b??n ph??m s???">C?? b??n ph??m s???</Select.Option>
                        <Select.Option value="C?? ????n b??n ph??m">C?? ????n b??n ph??m</Select.Option>
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

                <Form.Item name="core" label="Nh??n (Core)">
                    <Input />
                </Form.Item>

                <Form.Item name="thread" label="Lu???ng (Thread)">
                    <Input />
                </Form.Item>

                <Form.Item name="cpuSpeed" label="T???c ????? CPU">
                    <Input />
                </Form.Item>

                <Form.Item name="cpuMaxSpeed" label="T???c ????? t???i ??a CPU">
                    <Input />
                </Form.Item>

                <Form.Item name="frontCamera" label="Camera tr?????c">
                    <Input />
                </Form.Item>

                <Form.Item name="rearCamera" label="Camera sau">
                    <Input />
                </Form.Item>

                <Form.Item name="chip" label="Chip">
                    <Input />
                </Form.Item>

                <Form.Item name="chipSpeed" label="T???c ????? chip">
                    <Input />
                </Form.Item>

                <Form.Item name="chipGraphics" label="????? h???a chip">
                    <Input />
                </Form.Item>

                <Form.Item name="ramType" label="Th??? lo???i RAM">
                    <Input />
                </Form.Item>

                <Form.Item name="ramSpeed" label="T???c ????? RAM">
                    <Input />
                </Form.Item>

                <Form.Item name="ramUpdate" label="Kh??? n??ng update c???a RAM">
                    <Input />
                </Form.Item>

                <Form.Item name="graphicCard" label="Card ????? h???a">
                    <Input />
                </Form.Item>

                <Form.Item name="connector" label="K???t n???i">
                    <Input />
                </Form.Item>

                <Form.Item name="design" label="Thi???t k???">
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
                        Th??m s???n ph???m
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default LaptopForm;
