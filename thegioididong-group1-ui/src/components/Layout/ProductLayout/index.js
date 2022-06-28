import React from "react";
import Filter from './productFilter';
import ShowAll from './productShowAll';
import Sliders from './productSlider';
import Sort from './productSort';

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