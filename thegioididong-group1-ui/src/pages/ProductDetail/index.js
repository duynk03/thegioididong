import "./productDetail.scss";
import Breadcrumb from "./breadcrumb.js";
import Left from "./showSlider.js";
import Right from "./right.js";
function ProductDetail(){
    let product_title ="Điện thoại iPhone 13 Pro Max 256GB";
    return(
        <div>
            <Breadcrumb></Breadcrumb>
            <h1 className="product-title">{product_title}</h1>
            <div className="main">
                <Left></Left>
                <Right></Right>
            </div>
        </div>
    );
}
export default ProductDetail;