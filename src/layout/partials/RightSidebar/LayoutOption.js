import React, { useState, useContext } from "react";
import SettingContext from '../../../context/setting-context';

const LayoutOption = () => {
    const settingContext = useContext(SettingContext);
    
    return <>
        <div className="mt-4 ps-3 pe-2">
            <h5 className="p-0 fw-700"> Layout Options</h5>
        </div>
        <div className="ps-3 pe-2">
            <div className="d-flex mb-2">
                <div className="custom-switcher custom-switcher-highlight">
                    <input
                        type="checkbox"
                        id="app-shrinking-left-sidebar"
                        checked={!!settingContext.leftSidebarShrinked}
                        onChange={settingContext.toggleLeftSidebar}
                    />
                    <label htmlFor="app-shrinking-left-sidebar"></label>
                </div>
                <div className="ms-3"><label htmlFor="app-shrinking-left-sidebar">Shrinking Left Navigation</label></div>
            </div>
            <div className="d-flex mb-2">
                <div className="custom-switcher custom-switcher-highlight">
                    <input
                        type="checkbox"
                        id="app-fixed-left-sidebar"
                        checked={!!settingContext.leftSidebarFixed}
                        onChange={settingContext.toggleLeftSidebarFixed}
                    />
                    <label htmlFor="app-fixed-left-sidebar"></label>
                </div>
                <div className="ms-3"><label htmlFor="app-fixed-left-sidebar">Fixed Navigation</label></div>
            </div>
            <div className="d-flex mb-2">
                <div className="custom-switcher custom-switcher-highlight">
                    <input
                        type="checkbox"
                        id="app-fixed-footer"
                        checked={!!settingContext.footerFixed}
                        onChange={settingContext.toggleFooterFixed}
                        disabled={!!settingContext.boxedLayout}
                    />
                    <label htmlFor="app-fixed-footer"></label>
                </div>
                <div className="ms-3"><label htmlFor="app-fixed-footer">Fixed Footer</label></div>
            </div>
            <div className="d-flex mb-2">
                <div className="custom-switcher custom-switcher-highlight">
                    <input
                        type="checkbox"
                        id="app-boxed-layout"
                        checked={!!settingContext.boxedLayout}
                        onChange={settingContext.toggleBoxedLayout}
                    />
                    <label htmlFor="app-boxed-layout"></label>
                </div>
                
                <div className="ms-3"><label htmlFor="app-boxed-layout">Boxed Layout{!!settingContext.boxedLayout}</label></div>
            </div>
        </div>
    </>
}

export default LayoutOption;
