import React from "react";
import Filter from '../../../pages/Products/Phone/phoneFilter';
import ShowAll from '../../../pages/Products/Phone/phoneShow';
import Sliders from './productSlider';
import Sort from '../../../pages/Products/Phone/phoneSort';

export default function ProductLayout(){
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