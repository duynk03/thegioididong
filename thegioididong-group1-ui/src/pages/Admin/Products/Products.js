import './Product.scss';
import '../Admin.scss';
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import axios from 'axios';
import { Image } from 'cloudinary-react';
import { Table, Button, Popconfirm, Input, Space } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { openSuccessNotification, openErrorNotification } from '~/pages/Admin/ProductForm/Notification';
import { useNavigate } from 'react-router-dom';

const PRODUCTS_REST_API_URL = 'http://localhost:8084/api/v1/products';
const cloudName = 'dlefvc2xe';

function Products() {
    const [list, setList] = useState([]);
    const [updateData, setUpdateData] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const navigate = useNavigate();

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
            title: 'Tên sản phẩm',
            width: 150,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
            ...getColumnSearchProps('name'),
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
        // {
        //     title: 'Nhà sản xuất',
        //     dataIndex: 'manufacturer',
        //     key: '3',
        //     width: 100,
        // },
        // {
        //     title: 'Hệ điều hành',
        //     dataIndex: 'os',
        //     key: '4',
        //     width: 150,
        // },
        // {
        //     title: 'Màu sắc',
        //     dataIndex: 'color',
        //     key: '5',
        //     width: 150,
        // },
        // {
        //     title: 'Trạng thái',
        //     dataIndex: 'state',
        //     width: 100,
        //     key: '7',
        // },
        // {
        //     title: 'Sale off',
        //     dataIndex: 'saleOff',
        //     width: 100,
        //     key: '8',
        // },
        {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            width: 110,
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
                        <Button
                            type="primary"
                            onClick={() => {
                                const product = record.product;
                                if (product.laptop !== null) {
                                    navigate('/admin/products/laptop/edit/' + product.id);
                                } else if (product.tablet !== null) {
                                    navigate('/admin/products/tablet/edit/' + product.id);
                                } else if (product.phone !== null) {
                                    navigate('/admin/products/phone/edit/' + product.id);
                                } else {
                                    navigate('/admin/products/smartwatch/edit/' + product.id);
                                }
                            }}
                        >
                            <EditOutlined />
                        </Button>
                        <Popconfirm
                            title={'Bạn muốn xóa sản phẩm ' + record.name + ' chứ?'}
                            onConfirm={confirm}
                            onVisibleChange={() => console.log('visible change')}
                        >
                            <Button type="danger">
                                <DeleteOutlined />
                            </Button>
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
                        price: item.price
                            .toString()
                            .split('')
                            .reverse()
                            .reduce((prev, next, index) => {
                                return (index % 3 ? next : next + '.') + prev;
                            }),
                        images: item.images,
                        description: item.description,
                        category: item.category,
                        manufacturer: item.manufacturer,
                        color: item.color,
                        os: item.os,
                        state: item.state,
                        saleOff: item.saleOff,
                        product: item,
                    });
                    setList(displayData);
                });
            })
            .catch((error) => console.error(error));
    }, [updateData]);

    return (
        <div className="product-list">
            <h1 className="title__head">Danh sách sản phẩm</h1>
            <div className="product__data">
                <Table
                    columns={columns}
                    dataSource={list}
                    bordered
                    rowKey="id"
                    // scroll={{
                    //     x: 1600,
                    //     y: 700,
                    //     scrollToFirstRowOnChange: true,
                    // }}
                />
            </div>
        </div>
    );
}

export default Products;
