import './Product.scss';
import axios from 'axios';
import { Image } from 'cloudinary-react';
import { Table, Button, Popconfirm } from 'antd';
import React, { useEffect, useState } from 'react';
import { openSuccessNotification, openErrorNotification } from '~/pages/Admin/ProductForm/Notification';

const PRODUCTS_REST_API_URL = 'http://localhost:8084/api/v1/products';
const cloudName = 'dlefvc2xe';

function Products() {
    const [list, setList] = useState([]);

    const [updateData, setUpdateData] = useState(false);

    const columns = [
        {
            title: 'Tên sản phẩm',
            width: 150,
            dataIndex: 'name',
            key: '100',
            fixed: 'left',
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: '99',
            width: 100,
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'images',
            key: 'images',
            width: 100,
            render: (_, record) => {
                console.log(record);
                return (
                    <Image
                        cloudName={cloudName}
                        publicId={record.images[0]?.source}
                        style={{ width: 50, height: 50 }}
                    />
                );
            },
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: '1',
            width: 150,
        },
        {
            title: 'Loại sản phẩm',
            dataIndex: 'category',
            key: '2',
            width: 100,
        },
        {
            title: 'Nhà sản xuất',
            dataIndex: 'manufacturer',
            key: '3',
            width: 100,
        },
        {
            title: 'Hệ điều hành',
            dataIndex: 'os',
            key: '4',
            width: 150,
        },
        {
            title: 'Màu sắc',
            dataIndex: 'color',
            key: '5',
            width: 150,
        },
        {
            title: 'Trạng thái',
            dataIndex: 'state',
            width: 100,
            key: '7',
        },
        {
            title: 'Sale off',
            dataIndex: 'saleOff',
            width: 100,
            key: '8',
        },
        {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            width: 100,
            render: (_, record) => {
                const confirm = async () => {
                    return axios
                        .delete(PRODUCTS_REST_API_URL + '/' + record.id)
                        .then(() => {
                            setUpdateData(!updateData);
                            openSuccessNotification('success', 'Xóa sản phẩm thành công!');
                        })
                        .catch((err) => {
                            if (axios.isAxiosError(err)) {
                                openErrorNotification('error', 'Xóa sản phẩm không thành công!');
                            }
                        });
                };
                return (
                    <>
                        {/* eslint-disable-next-line */}
                        <Button type="primary">Sửa</Button>
                        <Popconfirm
                            title={'Bạn muốn xóa sản phẩm ' + record.name + ' chứ?'}
                            onConfirm={confirm}
                            onVisibleChange={() => console.log('visible change')}
                        >
                            <Button type="danger">Xóa</Button>
                        </Popconfirm>
                    </>
                );
            },
        },
    ];

    useEffect(() => {
        let dataList = [];
        axios
            .get(PRODUCTS_REST_API_URL)
            .then((res) => res.data)
            .then((data) => {
                dataList = data;
                let displayData = [];
                dataList.forEach((item, index) => {
                    displayData.push({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        images: item.images,
                        description: item.description,
                        category: item.category,
                        manufacturer: item.manufacturer,
                        color: item.color,
                        os: item.os,
                        state: item.state,
                        saleOff: item.saleOff,
                    });
                    setList(displayData);
                });
            })
            .catch((error) => console.error(error));
    }, [updateData]);

    return (
        <div className="product-list">
            <h1 className="title__head">Danh sách tất cả sản phẩm</h1>
            <div className="product__data">
                <Table
                    columns={columns}
                    dataSource={list}
                    bordered
                    rowKey="id"
                    scroll={{
                        x: 1600,
                        y: 700,
                        scrollToFirstRowOnChange: true,
                    }}
                />
            </div>
        </div>
    );
}

export default Products;
