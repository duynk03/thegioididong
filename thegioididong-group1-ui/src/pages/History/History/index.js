import '../history.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import { Table } from 'antd';
import iphone13ProMaxGold from "../../../assets/iphone-13-pro-max-gold-1-200x200.jpg"
var today = new Date();
var date = ("0" + today.getDate()).slice(-2) + '/' + ("0" + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear();
var last_year = ("0" + today.getDate()).slice(-2) + '/' + ("0" + (today.getMonth() + 1)).slice(-2) + '/' + (today.getFullYear() - 1);
const ORDERS_REST_API_URL = 'http://localhost:8084/api/v1/orders';
function History() {
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
            dataIndex: 'state'
        },{
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
    const [list, setList] = useState([]);
    const [updateData, setUpdateData] = useState(false);
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
                        gender: item.gender,
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
        <div className='parent'>
            <div className="left">
                <a href="/lich-su-mua-hang" className="active">Danh sách đơn hàng đã mua</a>
                <a href="/lich-su-mua-hang/thong-tin-ca-nhan" className="">Thông tin cá nhân và sổ địa chỉ</a>
            </div>
            <div className="right">
                {list.map((item)=>
                <div className="user">
                    Chào {item.gender=="male"?"anh ":"chị "} - <b>{item.phone}</b>
                    <a href="/lich-su-mua-hang/dang-xuat" className="logout-h">Thoát tài khoản</a>
                </div>)
                
                }
                <div className="list" id="list_order">
                    <b>Đơn hàng đã mua gần đây</b>
                    <aside className="h-date">
                        <i>i</i>
                        <span>Đây là danh sách đơn hàng bạn đã mua từ ngày <b>{last_year}</b> đến <b>{date}</b></span>
                    </aside>
                    <Table columns={columns} dataSource={list}/>
                </div>
            </div>
        </div>
    )
}
export default History;