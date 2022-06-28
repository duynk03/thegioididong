import React from "react";
import Filter from '../../../components/Layout/ProductLayout/productFilter';
import ShowAll from '../../../components/Layout/ProductLayout/productShowAll';
import Sliders from '../../../components/Layout/ProductLayout/productSlider';
import Sort from '../../../components/Layout/ProductLayout/productSort';

export default function Tablet(){
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