import React from "react";
// import Filter from '~/components/Layout/ProductLayout/phoneFilter';
import ShowAll from '~/components/Layout/ProductLayout/productShowAll';
import Sliders from '~/components/Layout/ProductLayout/productSlider';
// import Sort from '~/components/Layout/ProductLayout/productSort';

export default function Smartwatch(){
    return(
        <div>
            <Sliders />
            {/* <Filter /> */}
            <div className="session-category">
                {/* <Sort /> */}
                <ShowAll />
            </div>
        </div>
    );
}