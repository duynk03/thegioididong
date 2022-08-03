import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
// import sliderImg from "../../assets/iphone-13-pro-max-gold-1-200x200.jpg";
export default function Left() {
    let sliderImg="https://cdn.tgdd.vn/Products/Images/42/250261/Slider/iphone-13-pro-max-256gb637698376653324619.jpg"
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="Left">
            <div className="product-Slider">
                <div className="left-Slider">
                    <Slider className="left-Content" {...settings}>
                        <div className="container-image">
                            <img alt="" src={sliderImg} />
                        </div>
                        <div className="container-image">
                            <img alt="" src={sliderImg} />
                        </div>
                        <div className="container-image">
                            <img alt="" src={sliderImg} />
                        </div>
                        <div className="container-image">
                            <img alt="" src={sliderImg} />
                        </div>
                        <div className="container-image">
                            <img alt="" src={sliderImg} />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='article content-t-wrap'>
                <div className="article__content short">

                    <h3 className="article__content__title">Thông tin sản phẩm</h3>
                    <div className="content-article">
                        <h3 style={{ textAlign: "justify" }}>
                            iPhone 13 Pro Max 256 GB - siêu phẩm mang trên mình bộ vi xử lý Apple A15 Bionic hàng đầu, màn hình Super Retina XDR 120 Hz, cụm camera khẩu độ f/1.5 cực lớn, tất cả sẽ mang lại cho bạn những trải nghiệm tuyệt vời chưa từng có.
                        </h3>
                        <h3 style={{ textAlign: "justify" }}>Thiết kế đẳng cấp, sang trọng</h3>
                        <p style={{ textAlign: "justify" }}>iPhone 13 Pro Max vẫn sẽ kế thừa thiết kế đặc trưng của iPhone 12 Series, vẫn là một sản phẩm với khung viền được hoàn thiện từ thép không gỉ, hai mặt trước sau được trang bị kính cường lực bóng bẩy.
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <img alt="Thiết kế nguyên khối đẳng cấp - iPhone 13 Pro Max 256GB" data-src="https://cdn.tgdd.vn/Products/Images/42/250261/iphone-13-pro-max-256gb-1.jpg" class=" ls-is-cached lazyloaded" title="Thiết kế nguyên khối đẳng cấp - iPhone 13 Pro Max 256GB" src="https://cdn.tgdd.vn/Products/Images/42/250261/iphone-13-pro-max-256gb-1.jpg" />
                        </p>
                        <p style={{ textAlign: "justify" }}>Điểm thay đổi lớn trên 13 Pro Max có thể là phần module camera được làm to hơn khá nhiều, phần cạnh viền máy được vát phẳng sang trọng cùng bốn góc được làm bo cong nhẹ, phủ một lớp mờ giúp hạn chế bám bụi bẩn và vân tay.
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <img alt="Ngoại hình trẻ trung -  iPhone 13 Pro Max 256GB" data-src="https://cdn.tgdd.vn/Products/Images/42/250261/iphone-13-pro-max-256gb-2.jpg" className=" ls-is-cached lazyloaded" title="Ngoại hình trẻ trung -  iPhone 13 Pro Max 256GB" src="https://cdn.tgdd.vn/Products/Images/42/250261/iphone-13-pro-max-256gb-2.jpg" />
                        </p>
                        <p style={{ textAlign: "justify" }}>Ngoài ra, iPhone 13 Pro Max cũng sẽ đảm bảo được khả năng&nbsp;
                            kháng nước và bụi&nbsp;với chuẩn IP68 và sẽ được ra mắt với nhiều tùy chọn màu sắc khác nhau bao gồm một số màu nổi bật như: Vàng, bạc, xanh dương và xám.</p>
                        <p style={{ textAlign: "justify" }}>
                            <img alt="Khả năng kháng bụi, nước - iPhone 13 Pro Max 256GB" data-src="https://cdn.tgdd.vn/Products/Images/42/250261/iphone-13-pro-max-256gb-3.jpg" className="ls-is-cached lazyload" title="Khả năng kháng bụi, nước - iPhone 13 Pro Max 256GB" src="https://cdn.tgdd.vn/Products/Images/42/250261/iphone-13-pro-max-256gb-3.jpg"/>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}