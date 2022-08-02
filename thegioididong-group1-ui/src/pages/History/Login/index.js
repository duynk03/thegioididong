import "../history.scss";
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import loginImg from '../../../assets/i1.png';
// import axios from "axios";
const API_URL = 'http://localhost:8084/api/v1/users';

function LoginHistory() {
    const [phone, setPhone] = useState("");
    const navigate  = useNavigate();
    const handleLogin=async()=>{
        let result=await fetch(API_URL, {
            method:'post',
            body: JSON.stringify({phone}),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        result=await result.json();
        if(result.name){
            localStorage.setItem('phone', JSON.stringify(result));
            navigate("/lich-su-mua-hang")
        }
        else{
            alert("Số điện thoại không tồn tại trong hệ thống")
        }
    }
    return (
        <section className="login-container">
            <div className="login">
                <img alt="" src={loginImg} />
                <span>Tra cứu thông tin đơn hàng</span>
                <form>
                    <input type="tel" name="phone" onChange={(e)=> setPhone(e.target.value)}placeholder="Nhập số điện thoại mua hàng" maxlength="10" />
                    <label className="hide"></label>
                    <button onClick={handleLogin} className="btn">Tiếp tục</button>
                </form>
            </div>
        </section>
    )
}
export default LoginHistory;