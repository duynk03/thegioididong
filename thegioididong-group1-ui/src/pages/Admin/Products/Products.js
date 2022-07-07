import './Product.scss';
import axios from 'axios';
import { Image } from 'cloudinary-react';
import { Table, Button, Popconfirm, notification } from 'antd';
import React, { useEffect, useState } from 'react';

const PRODUCTS_REST_API_URL = 'http://localhost:8084/tgdd/api/v1/products';
const cloudName = 'dlefvc2xe';

function Products() {
    const [list, setList] = useState([]);

    const [updateData, setUpdateData] = useState(false);

    const columns = [
        {
            title: 'Product Name',
            width: 150,
            dataIndex: 'name',
            key: '100',
            fixed: 'left',
        },
        {
            title: 'Quantity',
            width: 100,
            dataIndex: 'quantity',
            key: '10',
            fixed: 'left',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: '99',
            width: 100,
        },
        {
            title: 'Images',
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
            title: 'Description',
            dataIndex: 'description',
            key: '1',
            width: 150,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: '2',
            width: 150,
        },
        {
            title: 'Manufacturer',
            dataIndex: 'manufacturer',
            key: '3',
            width: 150,
        },
        {
            title: 'Os',
            dataIndex: 'os',
            key: '4',
            width: 150,
        },
        {
            title: 'Color',
            dataIndex: 'color',
            key: '5',
            width: 150,
        },
        {
            title: 'Business State',
            dataIndex: 'stillInBusiness',
            key: '7',
        },
        {
            title: 'Sale off',
            dataIndex: 'saleOff',
            key: '8',
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (_, record) => {
                const confirm = () => {
                    return axios.delete(PRODUCTS_REST_API_URL + '/' + record.id).then(() => {
                        setUpdateData(!updateData);
                        openSuccessNotification();
                    });
                };
                return (
                    <>
                        {/* eslint-disable-next-line */}
                        <Button type="primary">Edit</Button>
                        <Popconfirm
                            title={'Are you sure you want to delete this product ' + record.name + '?'}
                            onConfirm={confirm}
                            onVisibleChange={() => console.log('visible change')}
                        >
                            <Button type="danger">Delete</Button>
                        </Popconfirm>
                    </>
                );
            },
        },
    ];

    const openSuccessNotification = () => {
        notification['success']({
            message: 'Delete product successfully',
        });
    };

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
                        quantity: item.quantity,
                        price: item.price,
                        images: item.images,
                        description: item.description,
                        category: item.category,
                        manufacturer: item.manufacturer,
                        color: item.color,
                        os: item.os,
                        stillInBusiness: item.stillInBusiness === true ? 'Yes' : 'No',
                        saleOff: item.saleOff,
                    });
                    setList(displayData);
                });
            })
            .catch((error) => console.error(error));
    }, [updateData]);

    return (
        <div className="product__list">
            <h1 className="title__head">All of products</h1>
            <Table
                columns={columns}
                dataSource={list}
                bordered
                rowKey="id"
                scroll={{
                    x: 1500,
                    y: 700,
                }}
            />
        </div>
    );
}

export default Products;
