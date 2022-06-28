import iPhoneLogo from "../../../assets/iphone.png";
import samsungLogo from "../../../assets/samsung.png";
import oppoLogo from "../../../assets/oppo.jpg";
import xiaomiLogo from "../../../assets/xiaomi.png";
import vivoLogo from "../../../assets/vivo.png";
import realmeLogo from "../../../assets/realme.png";
import nokiaLogo from "../../../assets/nokia.jpg";
import itelLogo from "../../../assets//itel.jpg";
import masstelLogo from "../../../assets/masstel.png";
import React from "react";
import "./productFilter.scss";


export default function Filter(){

    {/* 
        filter about the products 
            + filter by brand
            + filter by price
            + filter by type of phone
            + filter by performance and battery
            + filter by RAM
            + filter by ROM (Internal memory)
            + filter by Camera
            + filter by special features
            + filter by design
            + filter by screen
    */}

    return(
        <div className="session-filter">
            <div className="scroll-container">
                <div className="filter-total">
                    <div className="filter-item">
                        <div className="filter">
                            <i className="fa fa-filter"></i>
                            <span>&nbsp;Bộ lọc</span>
                        </div>
                        <div className="manufacturer">
                            <span>Hãng &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="price">
                            <span>Giá &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="type-of-products">
                            <span>Loại điện thoại &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="performance-battery">
                            <span>Hiệu suất & Pin &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="ram">
                            <span>RAM &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="internal-memory">
                            <span>Bộ nhớ trong &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="camera">
                            <span>Camera &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="special-features">
                            <span>Tính năng đặc biệt &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="design">
                            <span>Thiết kế &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="screen">
                            <span>Màn hình &nbsp;</span>
                            <i className="fa fa-caret-down"></i>
                        </div>
                    </div>
                    <div className="quick-access-brand">
                        <div className="logo-iphone">
                        <a href="#" className="iPhone">
                                <img 
                                    // className="iPhone"
                                    src={iPhoneLogo}
                                    alt=""
                                />                                    
                            </a>
                        </div>
                        <div className="logo-samsung">
                            <a href="#" className="samsung">
                                <img 
                                    // className="samsung"
                                    src={samsungLogo}
                                    alt=""
                                />                                    
                            </a>
                        </div>
                        <div className="logo-oppo">
                            <a href="#" className="oppo">
                                <img 
                                    // className="oppo"
                                    src={oppoLogo}
                                    alt=""
                                />                                    
                            </a>
                        </div>
                        <div className="logo-xiaomi">
                            <a href="#" className="xiaomi">
                                <img 
                                    // className="xiaomi"
                                    src={xiaomiLogo}
                                    alt=""
                                />                                    
                            </a>
                        </div>
                        <div className="logo-vivo">
                            <a href="#" className="vivo">
                                <img 
                                    // className="vivo"
                                    src={vivoLogo}
                                    alt=""
                                />                                    
                            </a>
                        </div>
                        <div className="logo-realme">
                            <a href="#" className="realme">
                                <img 
                                    // className="realme"
                                    src={realmeLogo}
                                    alt=""
                                />                                    
                            </a>
                        </div>
                        <div className="logo-nokia">
                            <a href="#" className="nokia">
                                <img 
                                    // className="nokia"
                                    src={nokiaLogo}
                                    alt=""
                                />                                    
                            </a>
                        </div>
                        <div className="logo-itel">
                            <a href="#" className="itel">
                                <img 
                                    // className="itel"
                                    src={itelLogo}
                                    alt=""
                                />                                    
                            </a>
                        </div>
                        <div className="logo-masstel">
                            <a href="#" className="masstel">
                                <img 
                                    // className="masstel"
                                    src={masstelLogo}
                                    alt=""
                                />                                    
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}