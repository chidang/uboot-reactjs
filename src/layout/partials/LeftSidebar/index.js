import React, { useContext } from "react";
import { Accordion } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { withRouter } from "react-router-dom";
import { routes } from "../../../routes";
import SettingContext from '../../../context/setting-context';
import useWindowSize from "../../../hooks/WindowSize";
import { isMobile } from "../../../shared/utility";
import SidebarBody from "./SidebarBody";

const initOpenRoute = (location) => {
    const pathName = location.pathname;
    let openRoute = {};
    routes.forEach((route, index) => {
        const isActive = pathName.indexOf(route.key) === 1;
        if (isActive) {
            openRoute = routes[index];
        }
    });
    return openRoute;
};

const LeftSidebar = ({ location }) => {
    const openedRoute = initOpenRoute(location);
    const settingContext = useContext(SettingContext);
    const sidebarWrapperStyle = settingContext.showMobileNav ? { display: "block" } : {};
    const windowSize = useWindowSize();
    const usePerfectScroolbar = !isMobile() && !settingContext.leftSidebarShrinked && settingContext.leftSidebarFixed

    return (
        <nav id="left-sidebar">
            <Accordion defaultActiveKey={openedRoute.key}>
                <div className="sidebar-wrapper" style={sidebarWrapperStyle}>
                    {
                        usePerfectScroolbar ?
                        <PerfectScrollbar>
                            <SidebarBody
                                openedRoute={openedRoute}
                                routes={routes}
                                options={{...settingContext, windowSize: windowSize}}
                            />
                        </PerfectScrollbar>
                        :
                        <SidebarBody
                            openedRoute={openedRoute}
                            routes={routes}
                            options={{...settingContext, windowSize: windowSize}}
                        />
                    }
                </div>
            </Accordion>
        </nav>
    );
}

export default withRouter(LeftSidebar);
