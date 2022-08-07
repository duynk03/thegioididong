import { React, Fragment } from "react";
import PhoneSlider from "~/pages/Products/Phone/phoneSlider";
import MainPhone from "~/pages/Products/Phone/mainPhone";


export default function Phone(){
    return(
        <Fragment>
            <PhoneSlider />
            <MainPhone />
        </Fragment>
    );
}