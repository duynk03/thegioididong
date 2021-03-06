import React from "react";
import TabletSlider from "./tabletSlider";
import FilterTablet from "./tabletFilter";
import TabletSort from "./tabletSort";
import TabletShowAll from "./tabletShow";

export default function Tablet(){
    return(
        <>
            <TabletSlider />
            <FilterTablet />
            <TabletSort />
            <TabletShowAll />
        </>
    );
}