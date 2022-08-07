import '../history.scss';
function UserInfo() {
    
        return (
            <div className='parent'>
                <Left />
                <Right />
            </div>
        );
}
function showList(){
    const select= document.getElementsByClassName('select');
        if(select.style.display==='none'){
            select.style.display='block';
        }
        else select.style.display='none'
}
const Left = () => (
    <div className="left">
        <a href="/lich-su-mua-hang" className="">Danh sách đơn hàng đã mua</a>
        <a href="/lich-su-mua-hang/thong-tin-ca-nhan" className="active">Thông tin cá nhân và sổ địa chỉ</a>
    </div>
)
const Right = () => (
    <div className="right">
        <div className="user" data-customer="">
            Chào anh&nbsp;
            <b>Nguyễn Văn A</b> - <b>0123456789</b>
            <a href="/lich-su-mua-hang/dang-xuat" className="logout-h">Thoát tài khoản</a>
        </div>
        <div className="profile">
            <h3>Thông tin cá nhân</h3>
            <div>
                <span className="active" data-val="1"><i></i><b>Anh</b></span>
                <span className="" data-val="0"><i></i><b>Chị</b></span>
                <input type="hidden" name="hdGender" value="1" />
            </div>
            <input type="text" name="txtFullName" value="Nguyễn Văn A" />
            <input type="tel" name="txtPhoneNumber" disabled="" value="0123456789" />
            <a href="/lich-su-mua-hang" onclick="AddressEdit($(this), -2)" className="add show"><i className="iconlsmh-add"></i>Thêm địa chỉ nhận hàng</a>

            <form id="frmAddress" className="address">
                <div id="ddlProvince" className="province inline">
                    <span data-value="0">Tỉnh/ Thành phố</span>
                    <div className="select" style={{display: 'none'}} 
                    onClick={()=>document.getElementsByClassName('select').style.display='block'}>
                        <div className="o-search">
                            <input type="text" name="key" placeholder="Nhập tỉnh, thành để tìm nhanh" />
                            <button></button>
                        </div>
                        <div className="list scroll">
                            <div className="item">
                                <a href="/lich-su-mua-hang" data-value="3">Hồ Chí Minh</a>
                                <a href="/lich-su-mua-hang" data-value="5">Hà Nội</a>
                                <a href="/lich-su-mua-hang" data-value="9">Đà Nẵng</a>
                                <a href="/lich-su-mua-hang" data-value="82">An Giang</a>
                                <a href="/lich-su-mua-hang" data-value="102">Bà Rịa - Vũng Tàu</a>
                                <a href="/lich-su-mua-hang" data-value="103">Bắc Giang</a>
                                <a href="/lich-su-mua-hang" data-value="104">Bắc Kạn</a>
                                <a href="/lich-su-mua-hang" data-value="105">Bạc Liêu</a>
                                <a href="/lich-su-mua-hang" data-value="106">Bắc Ninh</a>
                                <a href="/lich-su-mua-hang" data-value="107">Bến Tre</a>
                                <a href="/lich-su-mua-hang" data-value="108">Bình Định</a>
                                <a href="/lich-su-mua-hang" data-value="109">Bình Dương</a>
                                <a href="/lich-su-mua-hang" data-value="110">Bình Phước</a>
                                <a href="/lich-su-mua-hang" data-value="111">Bình Thuận</a>
                                <a href="/lich-su-mua-hang" data-value="81">Cà Mau</a>
                                <a href="/lich-su-mua-hang" data-value="7">Cần Thơ</a>
                                <a href="/lich-su-mua-hang" data-value="112">Cao Bằng</a>
                                <a href="/lich-su-mua-hang" data-value="6">Đắk Lắk</a>
                                <a href="/lich-su-mua-hang" data-value="113">Đắk Nông</a>
                                <a href="/lich-su-mua-hang" data-value="114">Điện Biên</a>
                                <a href="/lich-su-mua-hang" data-value="8">Đồng Nai</a>
                                <a href="/lich-su-mua-hang" data-value="115">Đồng Tháp</a>
                                <a href="/lich-su-mua-hang" data-value="116">Gia Lai</a>
                                <a href="/lich-su-mua-hang" data-value="117">Hà Giang</a>
                                <a href="/lich-su-mua-hang" data-value="118">Hà Nam</a>
                                <a href="/lich-su-mua-hang" data-value="120">Hà Tĩnh</a>
                                <a href="/lich-su-mua-hang" data-value="121">Hải Dương</a>
                                <a href="/lich-su-mua-hang" data-value="101">Hải Phòng</a>
                                <a href="/lich-su-mua-hang" data-value="122">Hậu Giang</a>
                                <a href="/lich-su-mua-hang" data-value="123">Hòa Bình</a>
                                <a href="/lich-su-mua-hang" data-value="124">Hưng Yên</a>
                                <a href="/lich-su-mua-hang" data-value="125">Khánh Hòa</a>
                            </div>
                            <div className="item">
                                <a href="/lich-su-mua-hang" data-value="126">Kiên Giang</a>
                                <a href="/lich-su-mua-hang" data-value="127">Kon Tum</a>
                                <a href="/lich-su-mua-hang" data-value="128">Lai Châu</a>
                                <a href="/lich-su-mua-hang" data-value="129">Lâm Đồng</a>
                                <a href="/lich-su-mua-hang" data-value="130">Lạng Sơn</a>
                                <a href="/lich-su-mua-hang" data-value="131">Lào Cai</a>
                                <a href="/lich-su-mua-hang" data-value="132">Long An</a>
                                <a href="/lich-su-mua-hang" data-value="133">Nam Định</a>
                                <a href="/lich-su-mua-hang" data-value="134">Nghệ An</a>
                                <a href="/lich-su-mua-hang" data-value="135">Ninh Bình</a>
                                <a href="/lich-su-mua-hang" data-value="136">Ninh Thuận</a>
                                <a href="/lich-su-mua-hang" data-value="137">Phú Thọ</a>
                                <a href="/lich-su-mua-hang" data-value="138">Phú Yên</a>
                                <a href="/lich-su-mua-hang" data-value="139">Quảng Bình</a>
                                <a href="/lich-su-mua-hang" data-value="140">Quảng Nam</a>
                                <a href="/lich-su-mua-hang" data-value="141">Quảng Ngãi</a>
                                <a href="/lich-su-mua-hang" data-value="142">Quảng Ninh</a>
                                <a href="/lich-su-mua-hang" data-value="143">Quảng Trị</a>
                                <a href="/lich-su-mua-hang" data-value="144">Sóc Trăng</a>
                                <a href="/lich-su-mua-hang" data-value="145">Sơn La</a>
                                <a href="/lich-su-mua-hang" data-value="146">Tây Ninh</a>
                                <a href="/lich-su-mua-hang" data-value="147">Thái Bình</a>
                                <a href="/lich-su-mua-hang" data-value="148">Thái Nguyên</a>
                                <a href="/lich-su-mua-hang" data-value="149">Thanh Hóa</a>
                                <a href="/lich-su-mua-hang" data-value="150">Thừa Thiên Huế</a>
                                <a href="/lich-su-mua-hang" data-value="151">Tiền Giang</a>
                                <a href="/lich-su-mua-hang" data-value="152">Trà Vinh</a>
                                <a href="/lich-su-mua-hang" data-value="153">Tuyên Quang</a>
                                <a href="/lich-su-mua-hang" data-value="154">Vĩnh Long</a>
                                <a href="/lich-su-mua-hang" data-value="155">Vĩnh Phúc</a>
                                <a href="/lich-su-mua-hang" data-value="156">Yên Bái</a>
                            </div>
                        </div>
                        <input type="hidden" name="hdProvinceId" value="0" />
                    </div>
                </div>
                <div id="ddlDistrict" className="district inline">
                    <span data-value="0">Quận/ Huyện</span>
                    <input type="hidden" name="hdDistrictId" value="0" />
                </div>
                <div id="ddlWard" className="ward inline">
                    <span data-value="0">Phường/ Xã</span>
                    <input type="hidden" name="hdWardId" value="0" />
                </div>
                <input type="text" name="txtAddress" className="inline" placeholder="Số nhà, tên đường" />
                <p className="frmAddress_error"></p>
                <span className="">
                    <i></i>
                    <b>Đặt làm địa chỉ mặc định</b>
                    <input type="hidden" name="hdIsDefault" value="false" />
                </span>
            </form>
            <a href="/lich-su-mua-hangddressSubmit()" className="button">CẬP NHẬT</a>
            <input type="hidden" name="hdAddressId" value="-3" />
        </div>
    </div>
    
);
export default UserInfo;