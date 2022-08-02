import '../history.scss';
import iphone13ProMaxGold from "../../../assets/iphone-13-pro-max-gold-1-200x200.jpg"
var today= new Date();
var date= ("0" + today.getDate()).slice(-2)+'/'+("0" + (today.getMonth() + 1)).slice(-2)+'/'+today.getFullYear();
var last_year=("0" + today.getDate()).slice(-2)+'/'+("0" + (today.getMonth() + 1)).slice(-2)+'/'+(today.getFullYear()-1);
function History(){
    return(
        <div className='parent'>
            <Left/>
            <Right/>
        </div>
    );
}
const Left=()=>(
        <div className="left">
            <a href="/lich-su-mua-hang" className="active">Danh sách đơn hàng đã mua</a>
            <a href="/lich-su-mua-hang/thong-tin-ca-nhan" className="">Thông tin cá nhân và sổ địa chỉ</a>
        </div>
)
const Right=()=>(
    <div className="right">
        <div className="user" data-customer="">
            Chào anh
            <b>Nguyễn Văn A</b> - <b>0123456789</b>
            <a href="/lich-su-mua-hang/dang-xuat" className="logout-h">Thoát tài khoản</a>
        </div>
        <div className="list" id="list_order">
            <b>Đơn hàng đã mua gần đây</b>
            <aside className="h-date">
                <i>i</i>
                <span>Đây là danh sách đơn hàng bạn đã mua từ ngày <b>{ last_year }</b> đến <b>{ date }</b></span>
            </aside>
            <table cellpadding="0" cellspacing="0">
                <tbody><tr>
                    <th>Mã đơn hàng</th>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Ngày đặt mua</th>
                    <th>Trạng thái</th>
                </tr>


                    <tr className="" data-id="  ">
                        <td>
                            <a href="/lich-su-mua-hang/don-hang-" data-id="" className="order_item">Điện thoại iPhone 13 Pro Max 256GB</a>
                        </td>

                        <td>
                            <a href="/lich-su-mua-hang/don-hang-" data-id="" className="order_item"><img alt="" src={iphone13ProMaxGold}/></a>
                            <div>
                                <a href="/lich-su-mua-hang/don-hang-" data-id="" className="order_item">Điện thoại iPhone 13 Pro Max 256GB</a>
                                <div className="link">
                                    <a href="/lich-su-mua-hang/don-hang-" data-id="" className="order_item">Xem chi tiết</a>
                                </div>
                            </div>
                        </td>

                        <td>
                            <b>30.890.000₫</b>
                        </td>

                        <td>
                            <span>30/06/2022</span>
                        </td>

                        <td>
                            <i className="success" data-status="1">Đã nhận hàng</i>
                        </td>
                    </tr>

                </tbody></table>
        </div>
    </div>
    )
export default History;