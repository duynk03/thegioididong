import React from "react";
import "./productSort.scss";
export default function Sort (){

    {/*
        sort products
    */}

    return(
        <div className="sort-container">
            <div className="box-sort">
                <p className="sort-total">
                    <b>
                        90
                        <span>
                            &nbsp;Điện thoại
                        </span>
                    </b>
                </p>
            </div>
            <div className="checkbox-sort">
                <div className="box-fast-delivery">
                    <a className="fast-delivery" href="#">
                        <input type="checkbox" /> &nbsp;
                        <i className="fas fa-bolt"></i>
                        <span><b>&nbsp;GIAO NHANH</b></span>
                    </a>
                </div>
                <div className="box-discount">
                    <a className="discount" href="#">
                        <input type="checkbox" />
                        <span>&nbsp;Giảm giá</span>
                    </a>
                </div>
                <div className="box-installment">
                    <a className="installment" href="#">
                        <input type="checkbox" />
                        <span>&nbsp;Góp 0%</span>
                    </a>
                </div>
                <div className="box-unique">
                    <a className="unique" href="#">
                        <input type="checkbox" />
                        <span>&nbsp;Độc quyền</span>
                    </a>
                </div>
                <div className="box-new">
                    <a className="new" href="#">
                        <input type="checkbox" />
                        <span>&nbsp;Mới</span>
                    </a>
                </div>
            </div>
            <div className="select-sort">
                <p className="sort-content">Xếp theo:&nbsp;</p>
                <div className="sort-select-active">
                    <span>Nổi bật&nbsp;</span>
                    <i className="fa fa-caret-down"></i>
                </div>
            </div>
        </div>
    );
}