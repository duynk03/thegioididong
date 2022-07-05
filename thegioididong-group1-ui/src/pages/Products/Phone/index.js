import React from "react";
import Sort from '~/pages/Products/Phone/phoneSort';
import FilterPhone from '~/pages/Products/Phone/phoneFilter';
import ShowAll from '~/pages/Products/Phone/phoneShow';
import PhoneSlider from "~/pages/Products/Phone/phoneSlider";


export default function Phone(){
    return(
        <div>
            <PhoneSlider />
            <FilterPhone />
            <div className="session-category">
                <Sort />
                <ShowAll />
            </div>
        </div>
    );
}