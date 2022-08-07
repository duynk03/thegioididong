import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Button, Input, Select, Space, Table, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import { openErrorNotification, openSuccessNotification } from '../ProductForm/Notification';
import '../Admin.scss';
import Highlighter from 'react-highlight-words';

const ORDERS_REST_API_URL = 'http://localhost:8084/api/v1/orders';

function Orders() {
    const [list, setList] = useState([]);
    const [updateData, setUpdateData] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

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
            ...getColumnSearchProps('phone'),
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
            ...getColumnSearchProps('state'),
            render: (_, record) => {
                const state = record.state;
                return (
                    <>
                        <Select
                            defaultValue={state}
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
                            (date.getHours() + 7) +
                            ' giờ - ' +
                            date.getDate() +
                            '/' +
                            (date.getMonth() + 1) +
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
            <h1 style={{ fontSize: '3em', paddingTop: 30, paddingLeft: '35%', fontWeight: 'bold' }}>
                Danh sách đơn hàng
            </h1>
            <Table columns={columns} dataSource={list} style={{ width: '80%', paddingTop: '1%', paddingLeft: '10%' }} />
        </>
    );
}

export default Orders;
