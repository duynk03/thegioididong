import React from "react";
import PhoneSort from '~/pages/Products/Phone/phoneSort';
import FilterPhone from '~/pages/Products/Phone/phoneFilter';
import PhoneShowAll from '~/pages/Products/Phone/phoneShow';
import PhoneSlider from "~/pages/Products/Phone/phoneSlider";


export default function Phone(){
    return(
        <>
            <PhoneSlider />
            <FilterPhone />
            <PhoneSort />
            <PhoneShowAll />
        </>
    );
}