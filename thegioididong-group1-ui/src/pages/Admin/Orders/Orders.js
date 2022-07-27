import axios from 'axios';
import { useEffect, useState } from 'react';
import { Select, Table, Tag } from 'antd';
import React from 'react';
import { openErrorNotification, openSuccessNotification } from '../ProductForm/Notification';

const ORDERS_REST_API_URL = 'http://localhost:8084/api/v1/orders';

function Orders() {
    const [list, setList] = useState([]);

    const [updateData, setUpdateData] = useState(false);

    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Điện thoại',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Trạng thái',
            key: 'state',
            dataIndex: 'state',
            render: (_, record) => {
                const state = record.state;
                return (
                    <>
                        <Select
                            defaultValue={state}
                            style={{
                                width: 120,
                                border: 'none',
                            }}
                            onChange={(value) => {
                                console.log(' ', value, ' - ', record.state, ' ', value === record.state);
                                if (value !== record.state) {
                                    axios
                                        .put(ORDERS_REST_API_URL + '/' + record.id, {
                                            state: value,
                                            modifiedAt: new Date(),
                                        })
                                        .then(() => {
                                            setUpdateData(!updateData);
                                            openSuccessNotification('success', 'Đổi trạng thái giao hàng thành công!');
                                        })
                                        .catch((err) => {
                                            if (axios.isAxiosError(err)) {
                                                openErrorNotification(
                                                    'error',
                                                    'Đổi trạng thái giao hàng không thành công!',
                                                );
                                            }
                                        });
                                }
                            }}
                        >
                            <Select.Option value="Chờ xác nhận">
                                <Tag color="volcano">Chờ xác nhận</Tag>
                            </Select.Option>
                            <Select.Option value="Đã xác nhận">
                                <Tag color="geekblue">Đã xác nhận</Tag>
                            </Select.Option>
                            <Select.Option value="Đang giao hàng">
                                <Tag color="blue">Đang giao hàng</Tag>
                            </Select.Option>
                            <Select.Option value="Đã nhận hàng">
                                <Tag color="green">Đã nhận hàng</Tag>
                            </Select.Option>
                        </Select>
                    </>
                );
            },
        },
        {
            title: 'Phương thức',
            key: 'payments',
            dataIndex: 'payments',
        },
        {
            title: 'Tổng tiền',
            key: 'total',
            dataIndex: 'total',
        },
        {
            title: 'Thời gian',
            key: 'time',
            dataIndex: 'time',
        },
    ];

    useEffect(() => {
        let dataList = [];
        axios
            .get(ORDERS_REST_API_URL)
            .then((res) => res.data)
            .then((data) => {
                dataList = data;
                let displayData = [];
                dataList.forEach((item, index) => {
                    let date = new Date(item.createdAt);
                    displayData.push({
                        key: item.id,
                        id: item.id,
                        name: item.name,
                        phone: item.phone,
                        address: item.address,
                        state: item.state,
                        payments: item.payments,
                        total: item.total,
                        time:
                            'Khoảng ' +
                            date.getHours() +
                            ' giờ - ' +
                            date.getDate() +
                            '/' +
                            date.getMonth() +
                            '/' +
                            date.getFullYear(),
                    });
                    setList(displayData);
                });
            })
            .catch((error) => console.error(error));
    }, [updateData]);

    return (
        <>
            <h1 style={{ fontSize: 34, paddingTop: 30, paddingLeft: '35%' }}>Danh sách đơn hàng</h1>
            <Table columns={columns} dataSource={list} style={{ width: '80%', paddingTop: '1%', paddingLeft: '10%' }} />
        </>
    );
}

export default Orders;
