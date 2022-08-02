import "../history.scss";
import loginImg from '../../../assets/i1.png';
function Login() {
    return (
        <section className="login-container">
            <div className="login">
                <img alt="" src={loginImg} />
                <span>Tra cứu thông tin đơn hàng</span>
                <form id="frmGetVerifyCode" method='post'>
                    <input type="tel" name="txtPhoneNumber" placeholder="Nhập số điện thoại mua hàng" autocomplete="off" maxlength="10" />
                    <label className="hide"></label>
                    <button type="submit" className="btn">Tiếp tục</button>
                </form>
            </div>
        </section>
    )
}
export default Login;