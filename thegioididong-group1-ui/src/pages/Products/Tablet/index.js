import React, {Fragment} from "react";
import TabletSlider from "~/pages/Products/Tablet/tabletSlider";
import MainTablet from "~/pages/Products/Tablet/mainTablet";

export default function Tablet(){
    return(
        <Fragment>
            <TabletSlider />
            <MainTablet />
        </Fragment>
    );
}