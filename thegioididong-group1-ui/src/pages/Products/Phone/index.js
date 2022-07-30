import { React, Fragment } from "react";
// import PhoneSort from '~/pages/Products/Phone/phoneSort';
// import FilterPhone from '~/pages/Products/Phone/phoneFilter';
// import PhoneShowAll from '~/pages/Products/Phone/phoneShow';
import PhoneSlider from "~/pages/Products/Phone/phoneSlider";
import MainPhone from "~/pages/Products/Phone/mainPhone";


export default function Phone(){
    return(
        <Fragment>
            <PhoneSlider />
            <MainPhone />
            {/* <FilterPhone />
            <PhoneSort />
            <PhoneShowAll /> */}
        </Fragment>
    );
}