import React from "react";
import LaptopSlider from "~/pages/Products/Laptop/laptopSlider";
import FilterLaptop from '~/pages/Products/Laptop/laptopFilter';
import MenuLaptop from '~/pages/Products/Laptop/laptopMenu';
import LaptopDeal from "~/pages/Products/Laptop/laptopDeal";
import BannerGaming from "~/pages/Products/Laptop/bannerGaming";
import BannerMacbook from "~/pages/Products/Laptop/bannerMacbook";
import BannerOffice from "~/pages/Products/Laptop/bannerOffice";
import BannerEnginneer from "~/pages/Products/Laptop/bannerEngineer";
import BannerThin from "~/pages/Products/Laptop/bannerThin";
import BannerLuxury from "~/pages/Products/Laptop/bannerLuxury";
import BannerSoftware from "~/pages/Products/Laptop/bannerSoftware";
import BannerSpecial from "~/pages/Products/Laptop/bannerSpecial";

export default function Laptop(){
    
    return(
        <div>
            <LaptopSlider />
            <FilterLaptop />
            <MenuLaptop />
            <LaptopDeal />
            <BannerGaming />
            <BannerMacbook />
            <BannerOffice />
            <BannerEnginneer />
            <BannerThin />
            <BannerLuxury />
            <BannerSoftware />
            <BannerSpecial />
        </div>
    );
}