import React from "react";
import BannerTop from "./bannerTop";
import MenuBar from "./menuBar";
import ShockDeal from "./bannerDeal";
import DealSilde from "./bannerDealSlide";
import BannerFashion from "./bannerFashion";
import BannerUtility from "./bannerUtility";
import BannerSport from "./bannerSport";
import BannerChildren from "./bannerChildren";
import BannerAccessory from "./bannerAccessory";

export default function Smartwatch(){
    return(
        <>
            <BannerTop />
            <MenuBar />
            <ShockDeal />
            <DealSilde />
            <BannerFashion />
            <BannerUtility />
            <BannerSport />
            <BannerChildren />
            <BannerAccessory />
        </>
    );
}