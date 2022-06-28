import React from "react";
import Sort from '../../../components/Layout/ProductLayout/productSort';
import Filter from '../../../components/Layout/ProductLayout/productFilter';
import ShowAll from '../../../components/Layout/ProductLayout/productShowAll';
import Sliders from '../../../components/Layout/ProductLayout/productSlider';


export default function Phone(){
    return(
        <div>
            <Sliders />
            <Filter />
            <div className="session-category">
                <Sort />
                <ShowAll />
            </div>
        </div>
    );
}