import iPhoneLogo from "~/assets/iphone.png";
import samsungLogo from "~/assets/samsung.png";
import oppoLogo from "~/assets/oppo.jpg";
import xiaomiLogo from "~/assets/xiaomi.png";
import vivoLogo from "~/assets/vivo.png";
import realmeLogo from "~/assets/realme.png";
import nokiaLogo from "~/assets/nokia.jpg";
import itelLogo from "~/assets//itel.jpg";
import masstelLogo from "~/assets/masstel.png";
import React from "react";
import "./phoneFIlter.scss";


export default class FilterPhone extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            isChangeBrand           :false,
            isChangeIconPrice       :false,
            isChangeTypeOfPhone     :false,
            isChangePerformance     :false,
            isChangeRam             :false,
            isChangeInternalMemory  :false,
            isChangeCamera          :false,
            isChangeSpecialFeature  :false,
            isChangeDesign          :false,
            isChangeMonitor         :false
        }
    }

    handleChangeBrand = () => {
        this.setState({
            isChangeBrand: !this.state.isChangeBrand
        })
    }
    handleChangePrice = () => {
        this.setState({
            isChangePrice: !this.state.isChangePrice
        })
    }
    handleChangeTypeOfPhone = () => {
        this.setState({
            isChangeTypeOfPhone: !this.state.isChangeTypeOfPhone
        })
    }
    handleChangePerformance = () => {
        this.setState({
            isChangePerformance: !this.state.isChangePerformance
        })
    }
    handleChangeRam = () => {
        this.setState({
            isChangeRam: !this.state.isChangeRam
        })
    }
    handleChangeInternalMemory = () => {
        this.setState({
            isChangeInternalMemory  : !this.state.isChangeInternalMemory
        })
    }
    handleChangeCamera= () => {
        this.setState({
            isChangeCamera: !this.state.isChangeCamera
        })
    }
    handleChangeSpecialFeature = () => {
        this.setState({
            isChangeSpecialFeature: !this.state.isChangeSpecialFeature
        })
    }
    handleChangeDesign = () => {
        this.setState({
            isChangeDesign: !this.state.isChangeDesign
        })
    }
    handleChangeMonitor = () => {
        this.setState({
            isChangeMonitor: !this.state.isChangeMonitor
        })
    }
    
    render() {
        return(
            <div className="session-filter">
                <div className="scroll-container">
                    <div className="filter-total">
                        <div className="filter-item">
                            <div className="filter">
                                <i className="fas fa-filter"></i>
                                <span>&nbsp;Bộ lọc</span>
                            </div>
                            <div className="manufacturer">
                                <span onClick={() => {this.handleChangeBrand()}}>
                                    Hãng &nbsp;
                                    <i className={
                                            this.state.isChangeBrand ? 
                                            "fas fa-caret-up" : "fas fa-caret-down"
                                            }>
                                    </i>
                                </span>
                            </div>
                            <div className="price">
                                <span onClick={() => {this.handleChangePrice()}}>
                                    Giá &nbsp;
                                    <i className={
                                            this.state.isChangePrice ? 
                                            "fas fa-caret-up" : "fas fa-caret-down"
                                            }>
                                    </i>
                                </span>
                            </div>
                            <div className="type-of-products">
                                <span onClick={() => {this.handleChangeTypeOfPhone()}}>
                                    Loại điện thoại &nbsp;
                                    <i className={
                                            this.state.isChangeTypeOfPhone ? 
                                            "fas fa-caret-up" : "fas fa-caret-down"
                                            }>
                                    </i>
                                </span>
                            </div>
                            <div className="performance-battery">
                                <span onClick={() => {this.handleChangePerformance()}}>
                                    Hiệu suất & Pin &nbsp;
                                    <i className={
                                            this.state.isChangePerformance ? 
                                            "fas fa-caret-up" : "fas fa-caret-down"
                                            }>
                                    </i>
                                </span>
                            </div>
                            <div className="ram">
                                <span onClick={() => {this.handleChangeRam()}}>
                                    RAM &nbsp;
                                    <i className={
                                            this.state.isChangeRam ? 
                                            "fas fa-caret-up" : "fas fa-caret-down"
                                            }>
                                    </i>
                                </span>
                            </div>
                            <div className="internal-memory">
                                <span onClick={() => {this.handleChangeInternalMemory()}}>
                                    Bộ nhớ trong &nbsp;
                                    <i className={
                                            this.state.isChangeInternalMemory ? 
                                            "fas fa-caret-up" : "fas fa-caret-down"
                                            }>
                                    </i>
                                </span>
                            </div>
                            <div className="camera">
                                <span onClick={() => {this.handleChangeCamera()}}>
                                    Camera &nbsp;
                                    <i className={
                                            this.state.isChangeCamera ? 
                                            "fas fa-caret-up" : "fas fa-caret-down"
                                            }>
                                    </i>
                                </span>
                            </div>
                            <div className="special-features">
                                <span onClick={() => {this.handleChangeSpecialFeature()}}>
                                    Tính năng đặc biệt &nbsp;
                                    <i className={
                                            this.state.isChangeSpecialFeature ? 
                                            "fas fa-caret-up" : "fas fa-caret-down"
                                            }>
                                    </i>
                                </span>
                            </div>
                            <div className="design">
                                <span onClick={() => {this.handleChangeDesign()}}>
                                    Thiết kế &nbsp;
                                    <i className={
                                            this.state.isChangeDesign ? 
                                            "fas fa-caret-up" : "fas fa-caret-down"
                                            }>
                                    </i>
                                </span>
                            </div>
                            <div className="screen">
                                <span onClick={() => {this.handleChangeMonitor()}}>
                                    Màn hình&nbsp;
                                    <i className={
                                            this.state.isChangeMonitor ? 
                                            "fas fa-caret-up" : "fas fa-caret-down"
                                            }>
                                    </i>
                                </span>
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
}