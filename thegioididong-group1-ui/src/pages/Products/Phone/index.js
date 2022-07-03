import React from "react";
import Sort from '~/components/Layout/ProductLayout/productSort';
import FilterPhone from '~/components/Layout/ProductLayout/phoneFilter';
import ShowAll from '~/components/Layout/ProductLayout/productShowAll';
import Sliders from '~/components/Layout/ProductLayout/productSlider';


export default function Phone(){
    return(
        <div>
            <Sliders />
            <FilterPhone />
            <div className="session-category">
                <Sort />
                <ShowAll />
            </div>
        </div>
    );
}