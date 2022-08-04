import { Button, Form, Input, InputNumber, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import axios from 'axios';
import '../ProductForm/ProductForm.scss';
import { formItemLayout, tailFormItemLayout } from '../ProductForm/FormConstant';
import { openSuccessNotification, openErrorNotification } from '../ProductForm/Notification';
import { useParams } from 'react-router-dom';

const API_URL = 'http://localhost:8084/api/v1/products';

const LaptopEdit = () => {
    const [form] = Form.useForm();
    const [images, setImages] = useState([]);
    let defaultValues;
    let product = null;
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
                screen: typeof response.data.laptop.screen === 'undefined' ? '' : response.data.laptop.screen,
                ram: typeof response.data.laptop.ram === 'undefined' ? '' : response.data.laptop.ram,
                rom: typeof response.data.laptop.rom === 'undefined' ? '' : response.data.laptop.rom,
                design: typeof response.data.laptop.design === 'undefined' ? '' : response.data.laptop.design,
                size: typeof response.data.laptop.size === 'undefined' ? '' : response.data.laptop.size,
                released: typeof response.data.laptop.released === 'undefined' ? '' : response.data.laptop.released,
                cpu: typeof response.data.laptop.cpu === 'undefined' ? '' : response.data.laptop.cpu,
                core: typeof response.data.laptop.core === 'undefined' ? '' : response.data.laptop.core,
                thread: typeof response.data.laptop.thread === 'undefined' ? '' : response.data.laptop.thread,
                cpuSpeed: typeof response.data.laptop.cpuSpeed === 'undefined' ? '' : response.data.laptop.cpuSpeed,
                cpuMaxSpeed:
                    typeof response.data.laptop.cpuMaxSpeed === 'undefined' ? '' : response.data.laptop.cpuMaxSpeed,
                ramType: typeof response.data.laptop.ramType === 'undefined' ? '' : response.data.laptop.ramType,
                ramSpeed: typeof response.data.laptop.ramSpeed === 'undefined' ? '' : response.data.laptop.ramSpeed,
                ramUpdate: typeof response.data.laptop.ramUpdate === 'undefined' ? '' : response.data.laptop.ramUpdate,
                graphicCard:
                    typeof response.data.laptop.graphicCard === 'undefined' ? '' : response.data.laptop.graphicCard,
                connector: typeof response.data.laptop.connector === 'undefined' ? '' : response.data.laptop.connector,
                especially:
                    typeof response.data.laptop.especially === 'undefined' ? '' : response.data.laptop.especially,
                createdAt: response.data.created_at,
                laptopId: response.data.laptop.id,
            };
            console.log(defaultValues);
        })
        .then(() => {
            form.setFieldsValue(defaultValues);
        });

    const onFinish = (values) => {
        product = values;

        uploadImage(values.images);
    };

    const addProduct = async (newProduct) => {
        await axios.put(API_URL + '/' + id, newProduct);
    };

    function uploadImage(files) {
        const uploaders = files?.map(async (file) => {
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
                    createdAt: defaultValues.createdAt,
                    modifiedAt: new Date(),
                    description: product.description,
                    images: images.reduce((a, value) => {
                        return [...a, { source: value }];
                    }, []),
                    laptop: {
                        id: defaultValues.laptopId,
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
        if (Array.isArray(e)) {
            return e;
        }

        return e?.fileList;
    };

    return (
        <>
            <h1 className="title__head">Cập nhật thông tin laptop</h1>
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
                        min="4900000"
                        addonAfter={<Form.Item noStyle>VND</Form.Item>}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item name="manufacturer" label="Hãng sản xuất">
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

                <Form.Item name="os" label="Hệ điều hành">
                    <Select>
                        <Select.Option value="Window 10">Windows 10</Select.Option>
                        <Select.Option value="Window 8">Windows 8</Select.Option>
                        <Select.Option value="Window 7">Windows 7</Select.Option>
                        <Select.Option value="MacOS">MacOS</Select.Option>
                        <Select.Option value="Ubuntu">Ubuntu</Select.Option>
                        <Select.Option value="Linux">Linux</Select.Option>
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

                <Form.Item name="ram" label="Ram">
                    <Select>
                        <Select.Option value="Đang cập nhật">Đang cập nhật</Select.Option>
                        <Select.Option value="4 GB">4 GB</Select.Option>
                        <Select.Option value="8 GB">8 GB</Select.Option>
                        <Select.Option value="16 GB">16 GB</Select.Option>
                        <Select.Option value="32 GB">32 GB</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="rom" label="Dung lượng ổ cứng">
                    <Select>
                        <Select.Option value="Đang cập nhật">Đang cập nhật</Select.Option>
                        <Select.Option value="SSD 128 GB">128 GB</Select.Option>
                        <Select.Option value="SSD 256 GB">256 GB</Select.Option>
                        <Select.Option value="SSD 512 GB">512 GB</Select.Option>
                        <Select.Option value="SSD 1 TB">1 TB</Select.Option>
                        <Select.Option value="SSD 2 TB">2 TB</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="cpu" label="CPU">
                    <Select>
                        <Select.Option value="Đang cập nhật">Đang cập nhật</Select.Option>
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

                <Form.Item name="screen" label="Màn hình">
                    <Select>
                        <Select.Option value="Đang cập nhật">Đang cập nhật</Select.Option>
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

                <Form.Item name="especially" label="Đặc biệt">
                    <Select>
                        <Select.Option value="Đang cập nhật">Đang cập nhật</Select.Option>
                        <Select.Option value="Tiêu chuẩn Intel Evo (Mới)">Tiêu chuẩn Intel Evo (Mới)</Select.Option>
                        <Select.Option value="CPU Intel thế hệ 12 (Mới)">CPU Intel thế hệ 12 (Mới)</Select.Option>
                        <Select.Option value="CPU Intel thế hệ 11">CPU Intel thế hệ 11</Select.Option>
                        <Select.Option value="Bộ nhớ Intel Optane">Bộ nhớ Intel Optane</Select.Option>
                        <Select.Option value="Card đồ họa rời">Card đồ họa rời</Select.Option>
                        <Select.Option value="Màn hình chống chói Anti Glare">
                            Màn hình chống chói Anti Glare
                        </Select.Option>
                        <Select.Option value="Wifi 6 nhanh 4 lần Wifi 5">Wifi 6 nhanh 4 lần Wifi 5</Select.Option>
                        <Select.Option value="Màn hình gập 360 độ">1</Select.Option>
                        <Select.Option value="Màn hình cảm ứng">Màn hình cảm ứng</Select.Option>
                        <Select.Option value="Màn hình 100% sRGB">Màn hình 100% sRGB</Select.Option>
                        <Select.Option value="Màn hình OLED">Màn hình OLED</Select.Option>
                        <Select.Option value="Có bảo mật vân tay">Có bảo mật vân tay</Select.Option>
                        <Select.Option value="Có bàn phím số">Có bàn phím số</Select.Option>
                        <Select.Option value="Có đèn bàn phím">Có đèn bàn phím</Select.Option>
                    </Select>
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

                <Form.Item name="core" label="Nhân (Core)">
                    <Input />
                </Form.Item>

                <Form.Item name="thread" label="Luồng (Thread)">
                    <Input />
                </Form.Item>

                <Form.Item name="cpuSpeed" label="Tốc độ CPU">
                    <Input />
                </Form.Item>

                <Form.Item name="cpuMaxSpeed" label="Tốc độ tối đa CPU">
                    <Input />
                </Form.Item>

                <Form.Item name="ramType" label="Thể loại RAM">
                    <Input />
                </Form.Item>

                <Form.Item name="ramSpeed" label="Tốc độ RAM">
                    <Input />
                </Form.Item>

                <Form.Item name="ramUpdate" label="Khả năng update của RAM">
                    <Input />
                </Form.Item>

                <Form.Item name="graphicCard" label="Card đồ họa">
                    <Input />
                </Form.Item>

                <Form.Item name="connector" label="Kết nối">
                    <Input />
                </Form.Item>

                <Form.Item name="design" label="Thiết kế">
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

export default LaptopEdit;
