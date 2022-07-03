import React from "react";
import FilterLaptop from '~/components/Layout/ProductLayout/laptopFilter';
// import ShowAll from '~/components/Layout/ProductLayout/productShowAll';
import Sliders from '~/components/Layout/ProductLayout/productSlider';
import MenuLaptop from '~/components/Layout/ProductLayout/laptopMenu';
import ShockDeal from "~/components/Layout/ProductLayout/productShockDeal";
// import Sort from '~/components/Layout/ProductLayout/productSort';

export default function Laptop(){
    return(
        <div>
            <Sliders />
            <FilterLaptop />
            <MenuLaptop />
            <ShockDeal />
            {/* <div className="session-category"> */}
                {/* <Sort /> */}
                {/* <ShowAll /> */}
            {/* </div> */}
        </div>
    );
}