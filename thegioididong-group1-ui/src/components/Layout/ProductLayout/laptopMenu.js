import React from "react";
import "./laptopMenu.scss";

export default function MenuLaptop (){

    return(
        <div className="menu-laptop">
            <div className="menu-container">
                <a href="#" className="nav-item">
                    <div className="hot-deal">
                        <i className="fab fa-hotjar"></i>
                    </div>
                    <span>Deal sốc</span>
                </a>
                <a href="#" className="nav-item">
                    <div className="gaming">
                        <i className="fas fa-gamepad"></i>
                    </div>
                    <span>Gaming</span>
                </a>
                <a href="#" className="nav-item">
                    <div className="macbook">
                        <i className="fab fa-apple"></i>
                    </div>
                    <span>Macbook</span>
                </a>
                <a href="#" className="nav-item">
                    <div className="study-office">
                        <i className="fas fa-book-reader"></i>
                    </div>
                    <span>Học tập, Văn phòng</span>
                </a>
                <a href="#" className="nav-item">
                    <div className="graphics-engineer">
                        <i className="fas fa-bezier-curve"></i>
                    </div>
                    <span>Đồ họa, Kỹ thuật</span>
                </a>
                <a href="#" className="nav-item">
                    <div className="thin-light">
                        <i className="fas fa-feather-alt"></i>
                    </div>
                    <span>Mỏng nhẹ</span>
                </a>
                <a href="#" className="nav-item">
                    <div className="luxury">
                        <i className="fas fa-gem"></i>
                    </div>
                    <span>Cao cấp, sang trọng</span>
                </a>
                <a href="#" className="nav-item">
                    <div className="software">
                        <i className="fab fa-windows"></i>
                    </div>
                    <span>Phần mềm</span>
                </a>
            </div>
        </div>
    );

}