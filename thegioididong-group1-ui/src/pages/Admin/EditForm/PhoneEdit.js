import { Button, Form, Input, InputNumber, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import axios from 'axios';
import '../ProductForm/ProductForm.scss';
import { formItemLayout, tailFormItemLayout } from '../ProductForm/FormConstant';
import { openSuccessNotification, openErrorNotification } from '../ProductForm/Notification';
import { useParams } from 'react-router-dom';

const API_URL = 'http://localhost:8084/api/v1/products';

const PhoneEdit = () => {
    const [form] = Form.useForm();
    const [images, setImages] = useState([]);
    let defaultValues;
    let phone = null;
    const { id } = useParams();
    axios
        .get(API_URL + '/' + id)
        .then((response) => {
            defaultValues = {
                name:
                    typeof response.data.name === 'undefined' || response.data.name === null ? '' : response.data.name,
                category: typeof response.data.category === 'undefined' ? '' : response.data.category,
                price: typeof response.data.price === 'undefined' ? '' : response.data.price,
                manufacturer: typeof response.data.manufacturer === 'undefined' ? '' : response.data.manufacturer,
                os: typeof response.data.os === 'undefined' ? '' : response.data.os,
                color: typeof response.data.color === 'undefined' ? '' : response.data.color,
                state: typeof response.data.state === 'undefined' ? '' : response.data.state,
                saleOff: typeof response.data.saleOff === 'undefined' ? '' : response.data.saleOff,
                description: typeof response.data.description === 'undefined' ? '' : response.data.description,
                images: null,
                screen: typeof response.data.phone.screen === 'undefined' ? '' : response.data.phone.screen,
                screenTechnology:
                    typeof response.data.phone.screenTechnology === 'undefined'
                        ? ''
                        : response.data.phone.screenTechnology,
                resolution: typeof response.data.phone.resolution === 'undefined' ? '' : response.data.phone.resolution,
                wideScreen: typeof response.data.phone.wideScreen === 'undefined' ? '' : response.data.phone.wideScreen,
                brightness: typeof response.data.phone.brightness === 'undefined' ? '' : response.data.phone.brightness,
                touchScreen:
                    typeof response.data.phone.touchScreen === 'undefined' ? '' : response.data.phone.touchScreen,
                frontCamera:
                    typeof response.data.phone.frontCamera === 'undefined' ? '' : response.data.phone.frontCamera,
                rearCamera: typeof response.data.phone.rearCamera === 'undefined' ? '' : response.data.phone.rearCamera,
                chip: typeof response.data.phone.chip === 'undefined' ? '' : response.data.phone.chip,
                chipSpeed: typeof response.data.phone.chipSpeed === 'undefined' ? '' : response.data.phone.chipSpeed,
                chipGraphics:
                    typeof response.data.phone.chipGraphics === 'undefined' ? '' : response.data.phone.chipGraphics,
                ram: typeof response.data.phone.ram === 'undefined' ? '' : response.data.phone.ram,
                rom: typeof response.data.phone.rom === 'undefined' ? '' : response.data.phone.rom,
                sim: typeof response.data.phone.sim === 'undefined' ? '' : response.data.phone.sim,
                pin: typeof response.data.phone.pin === 'undefined' ? '' : response.data.phone.pin,
                design: typeof response.data.phone.design === 'undefined' ? '' : response.data.phone.design,
                material: typeof response.data.phone.material === 'undefined' ? '' : response.data.phone.material,
                size: typeof response.data.phone.size === 'undefined' ? '' : response.data.phone.size,
                released: typeof response.data.phone.released === 'undefined' ? '' : response.data.phone.released,
                createdAt: response.data.created_at,
                phoneId: response.data.phone.id,
            };
        })
        .then(() => {
            form.setFieldsValue(defaultValues);
        });

    const onFinish = (values) => {
        uploadProduct(values.images);
        phone = values;
    };

    const addPhone = async (updateData) => {
        await axios.put(API_URL + '/' + id, updateData);
    };

    function uploadProduct(files) {
        const uploaders = files?.map(async (file) => {
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
            .all(
                typeof uploaders === 'undefined'
                    ? [1].map(async () => {
                          return new Promise((resolve) => {
                              resolve();
                          });
                      })
                    : uploaders,
            )
            .then(() => {
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
                    state: phone.state,
                    saleOff: phone.saleOff,
                    createdAt: defaultValues.createdAt,
                    modifiedAt: new Date(),
                    description: phone.description,
                    images: images.reduce((a, value) => {
                        return [...a, { source: value }];
                    }, []),
                    phone: {
                        id: defaultValues.phoneId,
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
                        createdAt: defaultValues.createdAt,
                        modifiedAt: new Date(),
                    },
                })
                    .then(() => {
                        openSuccessNotification('success', 'Cập nhật thông tin sản phẩm thành công');
                    })
                    .then(() => {
                        setImages([]);
                    })
                    .then(() => {
                        form.resetFields();
                    })
                    .catch((err) => {
                        if (axios.isAxiosError(err)) {
                            openErrorNotification('error', 'Cập nhật thông tin sản phẩm thất bại');
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
            <h1 className="title__head">Cập nhật thông tin điện thoại</h1>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={defaultValues}
                scrollToFirstError
            >
                <Form.Item
                    name="name"
                    label="Tên điện thoại"
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
                        min="500000"
                        addonAfter={<Form.Item noStyle>VND</Form.Item>}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item name="manufacturer" label="Hãng sản xuất">
                    <Select>
                        <Select.Option value="iPhone">iPhone</Select.Option>
                        <Select.Option value="Samsung">Samsung</Select.Option>
                        <Select.Option value="Oppo">Oppo</Select.Option>
                        <Select.Option value="Xiaomi">Xiaomi</Select.Option>
                        <Select.Option value="Vivo">Vivo</Select.Option>
                        <Select.Option value="Realme">Realme</Select.Option>
                        <Select.Option value="Nokia">Nokia</Select.Option>
                        <Select.Option value="Mobell">Mobell</Select.Option>
                        <Select.Option value="itel">itel</Select.Option>
                        <Select.Option value="Masstel">Masstel</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="os" label="Hệ điều hành">
                    <Select>
                        <Select.Option value="Android">Android</Select.Option>
                        <Select.Option value="iPhone">iPhone(iOS)</Select.Option>
                        <Select.Option value="Điện thoại phổ thông">Điện thoại phổ thông</Select.Option>
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
                        <Select.Option value="Đang cập nhật">Đang cập nhật</Select.Option>
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
                        <Select.Option value="Đang cập nhật">Đang cập nhật</Select.Option>
                        <Select.Option value="8 GB">8 GB</Select.Option>
                        <Select.Option value="16 GB">16 GB</Select.Option>
                        <Select.Option value="32 GB">32 GB</Select.Option>
                        <Select.Option value="64 GB">64 GB</Select.Option>
                        <Select.Option value="128 GB">128 GB</Select.Option>
                        <Select.Option value="256 GB">256 GB</Select.Option>
                        <Select.Option value="512 GB">512 GB</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="pin"
                    label="Dung lượng pin"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập dung lượng pin',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item name="state" label="Trạng thái sản phẩm">
                    <Select>
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

                <Form.Item name="screen" label="Màn hình" hasFeedback>
                    <Input />
                </Form.Item>

                <Form.Item name="screenTechnology" label="Công nghệ màn hình">
                    <Input />
                </Form.Item>

                <Form.Item name="resolution" label="Độ phân giải">
                    <Input />
                </Form.Item>

                <Form.Item name="wideScreen" label="Độ rộng màn hình">
                    <Input />
                </Form.Item>

                <Form.Item name="brightness" label="Độ sáng">
                    <Input />
                </Form.Item>

                <Form.Item name="touchScreen" label="Màn hình cảm ứng">
                    <Input />
                </Form.Item>

                <Form.Item name="frontCamera" label="Camera trước">
                    <Input />
                </Form.Item>

                <Form.Item name="rearCamera" label="Camera sau">
                    <Input />
                </Form.Item>

                <Form.Item name="chip" label="Chip">
                    <Input />
                </Form.Item>

                <Form.Item name="chipSpeed" label="Tốc độ chip">
                    <Input />
                </Form.Item>

                <Form.Item name="chipGraphics" label="Đồ họa chip">
                    <Input />
                </Form.Item>

                <Form.Item name="sim" label="SIM">
                    <Input />
                </Form.Item>

                <Form.Item name="design" label="Thiết kế">
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
                        Cập nhật
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default PhoneEdit;
