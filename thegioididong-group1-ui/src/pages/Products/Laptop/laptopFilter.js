import React from "react";
import MacLogo from "~/assets/mac.png"
import AsusLogo from "~/assets/asus.png"
import HPLogo from "~/assets/hp.png"
import LenovoLogo from "~/assets/lenovo.png"
import AcerLogo from "~/assets/acer.png"
import DellLogo from "~/assets/dell.png"
import msiLogo from "~/assets/msi.png"
import SurfaceLogo from "~/assets/surface.png"
import LGLogo from "~/assets/lg.png"
import GigabyteLogo from "~/assets/gigabyte.png"
import intelLogo from "~/assets/intel.png"
import ChuwiLogo from "~/assets/chuwi.png"
import lapItelLogo from "~/assets/itel.png"
import "./laptopFilter.scss";

export default function FilterLaptop (){

    return(
        <div className="manufacturer-container">
            <div className="manufacturer-content">
                <div className="logo-macbook">
                    <a href="#" className="Mac">
                        <img 
                            src={MacLogo}
                            alt=""
                        />                                    
                    </a>
                </div>
                <div className="logo-asus">
                    <a href="#" className="Asus">
                        <img 
                            src={AsusLogo}
                            alt=""
                        />                                    
                    </a>
                </div>
                <div className="logo-hp">
                    <a href="#" className="HP">
                        <img 
                            src={HPLogo}
                            alt=""
                        />                                    
                    </a>
                </div>
                <div className="logo-lenovo">
                    <a href="#" className="Lenovo">
                        <img 
                            src={LenovoLogo}
                            alt=""
                        />                                    
                    </a>
                </div>
                <div className="logo-acer">
                    <a href="#" className="Acer">
                        <img 
                            src={AcerLogo}
                            alt=""
                        />                                    
                    </a>
                </div>
                <div className="logo-dell">
                    <a href="#" className="Dell">
                        <img 
                            src={DellLogo}
                            alt=""
                        />                                    
                    </a>
                </div>
                <div className="logo-msi">
                    <a href="#" className="MSI">
                        <img 
                            src={msiLogo}
                            alt=""
                        />                                    
                    </a>
                </div>
                <div className="logo-surface">
                    <a href="#" className="Surface">
                        <img 
                            src={SurfaceLogo}
                            alt=""
                        />                                    
                    </a>
                </div>
                <div className="logo-LG">
                    <a href="#" className="LG">
                        <img 
                            src={LGLogo}
                            alt=""
                        />                                    
                    </a>
                </div>
                <div className="logo-gigabyte">
                    <a href="#" className="Gigabyte">
                        <img 
                            src={GigabyteLogo}
                            alt=""
                        />                                    
                    </a>
                </div>
                <div className="logo-intel">
                    <a href="#" className="Intel">
                        <img 
                            src={intelLogo}
                            alt=""
                        />                                    
                    </a>
                </div>
                <div className="logo-chuwi">
                    <a href="#" className="Chuwi">
                        <img 
                            src={ChuwiLogo}
                            alt=""
                        />                                    
                    </a>
                </div>
                <div className="logo-lapItel">
                    <a href="#" className="lap-itel">
                        <img 
                            src={lapItelLogo}
                            alt=""
                        />                                    
                    </a>
                </div>
            </div>
        </div>
    );
}