import './cart.scss';
import iphone13ProMaxGold from "../../assets/iphone-13-pro-max-gold-1-200x200.jpg"
function Cart() {
   let isempty = false;
   if (isempty) {
      return (
         <div className="cartempty">
            <i className="cartnew-empty"></i>
            <span>
               Không có sản phẩm nào trong giỏ hàng
            </span>
            <a href="/" className="backhome">
               Về trang chủ
            </a>
            <p>
               Khi cần trợ giúp vui lòng gọi <a style={{ color: '#288ad6' }} href="#">1800.1060</a>
               hoặc <a style={{ color: '#288ad6' }} href="#">028.3622.1060</a>
               (7h30 - 22h)
            </p>
         </div>
      );
   } else return (
      <section>
         <div className="yourCart top-content">
            <a href="/" className="buymore">Mua thêm sản phẩm khác</a>
            <span>Giỏ hàng của anh </span>
         </div>
         <div className="middleCart">
            <ul className="listing-cart">
               <li className="product-item">
                  <div className="imgsp">
                     <a href="#" target="_blank">
                        <img  data-src={iphone13ProMaxGold}
                              src={iphone13ProMaxGold}
                              alt="Điện thoại iPhone 13 Pro Max 256GB" 
                              loading="lazy" 
                              className=" ls-is-cached lazyloaded"/>
                     </a>
                     <div>
                        <button>
                           <span></span>
                           Xóa
                        </button>
                     </div>
                  </div>
                  <div data-tmp-price-original="36990000"
                     data-tmp-price-discount="30890000"
                     data-tmp-product-name="Điện thoại iPhone 13 Pro Max 256GB"
                     data-tmp-product-type="2"
                     data-tmp-quantity="1"
                     data-tmp-max-quantity="1"
                     className="infosp">
                     <div className="name-price">
                        <div className="name-container">
                           <a href="/dtdd/iphone-13-pro-max-256gb" className="product-item__name"> Điện thoại iPhone 13 Pro Max 256GB </a>
                        </div>
                        <span>
                           30.890.000₫
                           <strike>36.990.000₫</strike>
                        </span>
                     </div>
                     <hr style={{ width: '65%', visibility: 'hidden' }} />
                     <div className="product-note">
                        <span>Giá rẻ online</span>
                        <span className="product-note__labelExpand active"> (Xem chi tiết)</span>
                        <div className="product-note__list active">
                           <label className="product-note__scenarioTitle">Chính sách Online giá rẻ</label>
                           <ul>
                              <li className="product-note__list__item">Chỉ áp dụng giao tận nơi.</li>
                              <li className="product-note__list__item">Thời gian nhận hàng: 1 ngày sau khi đặt</li>
                              <li className="product-note__list__item">Không áp dụng chung với khuyến mãi khác.</li>
                              <li className="product-note__list__item">Mỗi khách hàng (1 SĐT) chỉ được mua 1 sản phẩm</li>
                              <li className="product-note__list__item">Áp dụng góp Online qua thẻ tín dụng</li>
                              <li className="product-note__list__item">Bắt buộc khui hộp và kích hoạt khi nhận máy</li>
                              <li className="product-note__list__item">Không áp dụng góp nhà tài chính</li>
                              <li className="product-note__list__item">Số lượng có hạn, áp dụng tùy tỉnh thành</li>
                              <li className="product-note__list__item">Hư gì đổi nấy trong 15 ngày nếu lỗi do nhà sản xuất</li>
                           </ul>
                        </div>
                     </div>
                     <div className="promo"></div>
                     <div fragment="83857017b6" className="choose-color">
                        <div className="product-size-and-color-selection">
                           <aside>
                              <label className="">
                                 <span className="color-label">Màu: </span>
                                 <span className="color-text">Vàng đồng</span>
                              </label>
                              <div className="sg-color" style={{ display: 'none' }}>
                                 <div className="select-color active">
                                    <img data-src="" src="" loading="lazy" className="lazyload" /><small>Vàng đồng</small>
                                 </div>
                                 <div className="select-color">
                                    <img data-src="" src="" loading="lazy" className="lazyload" /><small>Bạc</small>
                                 </div>
                                 <div className="select-color">
                                    <img data-src="" src="" loading="lazy" className="lazyload" /><small>Xám</small>
                                 </div>
                                 <div className="select-color">
                                    <img data-src="" src="" loading="lazy" className="lazyload" /><small>Xanh lá</small>
                                 </div>
                                 <div className="select-color">
                                    <img data-src="" src="" loading="lazy" className="lazyload" /><small>Xanh Dương</small>
                                 </div>
                              </div>
                           </aside>
                        </div>
                        <div className="choosenumber" fragment="422a272ec0">
                           <div className="minus" style={{ pointerEvents: 'none' }}>
                              <i style={{ backgroundColor: "rgb(204, 204, 204)" }}></i>
                           </div>
                           <input type="text" maxlength="3" className="number" style={{ border: 'none', pointerEvents: 'none' }} />
                           <div className="plus" style={{pointerEvents: 'none'}}>
                              <i style={{ backgroundColor: 'rgb(204, 204, 204)' }}></i>
                              <i style={{backgroundColor: 'rgb(204, 204, 204)'}}></i>
                           </div>
                           <input type="hidden" />
                        </div>
                     </div>
                  </div>
                  <input fragment="1615d39a298" type="hidden" value="true" />
               </li>
            </ul>
            <div className="total-provisional">
               <span data-tmp-total-product-quantity="1" className="total-product-quantity">
                  <span className="total-label">Tạm tính </span>
                  (1 sản phẩm):
               </span>
               <span data-tmp-temp-total-money="30890000" className="temp-total-money">30.890.000₫</span>
            </div>
            <div className="infor-customer">
               <h4>Thông tin khách hàng</h4>
               <div className="infor">
                  <span>Anh <b>Nguyễn Văn A</b> - 0123456789 </span>
                  <span>Sửa</span>
               </div>
            </div>
            <div className="choosegetgoods">
               <h4>Chọn cách thức nhận hàng</h4>
               <input type="hidden" value="2" />
               <div className="click-choose">
                  <div data-tab="tab-1" className="choose-link current">
                     <i className="cartnew-choose"></i>
                     <span>Giao tận nơi</span>
                  </div>
                  <div data-tab="tab-2" className="choose-link">
                     <i className="cartnew-choose"></i>
                     <span>Nhận tại siêu thị</span>
                  </div>
               </div>
               <div id="tab-1" className="choose-content current">
                  <div className="deli-address">
                     <form className="active">
                        <p> Chọn địa chỉ để biết thời gian nhận hàng và phí vận chuyển (nếu có) </p>
                        <div className="cntry-district">
                           <div className="btn-click country">
                              <button type="button" className="">Hồ Chí Minh</button>
                              <input fragment="134adb03b28" type="hidden" className="ddlist" value="3" />
                              <div className="select" fragment="134adb03b28" style={{ display: 'none' }}>
                                 <div className="boxsearch">
                                    <input placeholder="Nhập tỉnh, thành để tìm nhanh" />
                                    <a href="javascript:;"><i className="cartnew-search"></i></a>
                                 </div>
                                 <div className="listName" style={{position: 'relative'}}>
                                    <aside></aside>
                                    <aside></aside>
                                    <div className="resize-triggers">
                                       <div className="expand-trigger">
                                          <div style={{ width: '1px', height: '1px' }}></div>
                                       </div>
                                       <div className="contract-trigger"></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="btn-click district">
                              <button type="button" className="">Chọn Quận / Huyện</button>
                              <input fragment="e1682f0734" type="hidden" className="ddlist" value="0" />
                              <div className="select" fragment="e1682f0734" style={{ display: 'none' }}>
                                 <div className="boxsearch">
                                    <input placeholder="Nhập quận, huyện để tìm nhanh" />
                                    <a href="javascript:;"><i className="cartnew-search"></i></a>
                                 </div>
                                 <div className="listName" style={{position: 'relative'}}>
                                    <aside></aside>
                                    <aside></aside>
                                    <div className="resize-triggers">
                                       <div className="expand-trigger">
                                          <div style={{ width: '1px', height: '1px' }}></div>
                                       </div>
                                       <div className="contract-trigger"></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="wards disable">
                              <button type="button" disabled="disabled" className="">Chọn Phường / Xã</button>

                              <input fragment="fbd98aa5bf" type="hidden" className="ddlist" value="0" />
                              <div className="select" fragment="fbd98aa5bf" style={{ display: 'none' }}>
                                 <div className="boxsearch">
                                    <input placeholder="Nhập phường, xã để tìm nhanh" />
                                    <a href="javascript:;"><i className="cartnew-search"></i></a>
                                 </div>
                                 <div className="listName" style={{ position: 'relative' }}>
                                    <aside>
                                       <span className="active">Chọn Phường / Xã</span>
                                    </aside>
                                    <aside></aside>
                                    <div className="resize-triggers">
                                       <div className="expand-trigger">
                                          <div style={{ width: '1px', height: '1px' }}></div>
                                       </div>
                                       <div className="contract-trigger"></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="filladdress">
                              <input placeholder="" maxlength="255" id="cusAddr" name="cusAddr" required="required" className="untouched pristine required" />
                              <label for="cusAddr" className="form-label">Số nhà, tên đường</label>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
               <div id="tab-2" className="choose-content">
                  <div className="notsupport">
                     <input fragment="101e7a4d408" type="hidden" className="untouched pristine required" value="true" />
                     <span>Giỏ hàng đang có sản phẩm không hỗ trợ nhận hàng tại siêu thị</span>
                     <small>Điện thoại iPhone 13 Pro Max 256GB</small>
                     <span>Vui lòng chọn <b>giao tận nơi</b> để đặt hàng</span>
                  </div>
               </div>
            </div>
            <div className="choosegetgoods" style={{ display: 'none' }}>
               <div id="tab-3" className="choose-content current">
                  <aside>
                     <div className="latch-order">
                        <div className="box-order error-order">
                           <ul>
                              <li>
                                 <strong><b>Sản phẩm tạm ngưng nhận tại siêu thị khu vực anh chọn</b></strong>
                                 <a href="/dtdd/iphone-13-pro-max-256gb" className="img-order">
                                    <img data-src="" src="" width="40px" height="auto" loading="lazy" className="lazyload" />
                                 </a>
                                 <a href="/dtdd/iphone-13-pro-max-256gb" className="text-order">
                                    <a href="/dtdd/iphone-13-pro-max-256gb" target="_blank" className="text-order__product-name">Điện thoại iPhone 13 Pro Max 256GB</a>
                                    <div className="amount-color">
                                       <small>Màu: Vàng đồng</small>
                                       <small>Số lượng: 1</small>
                                    </div>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </aside>
               </div>
            </div>
            <div className="anotheroption">
               <div className="customer-note">
                  <input placeholder="" id="cusNote" name="cusNote" required="required" />
                  <label for="cusNote" className="form-label">Yêu cầu khác (không bắt buộc)</label>
               </div>
            </div>
            <div className="cate-printing-ink-note" style={{ display: 'none' }}>
               <div className="cate-printing-ink-note__message"></div>
            </div>
            <div className="finaltotal">
               <div className="area-total">
                  <div></div>
                  <div data-tmp-total-money-in-all="30890000" className="total-price">
                     <strong>Tổng tiền:</strong><strong>30.890.000₫</strong>
                  </div>
               </div><button type="button" className="submitorder"><b style={{textTransform:'uppercase'}}>Đặt hàng</b></button>
               <small> Anh có thể chọn hình thức thanh toán sau khi đặt hàng </small></div>
         </div>
      </section >
   )
}

export default Cart;
