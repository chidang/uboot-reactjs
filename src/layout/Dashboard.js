import React, { useContext } from 'react';
import Topbar from './partials/TopBar';
import LeftSidebar from './partials/LeftSidebar';
import RightSidebar from './partials/RightSidebar';
import SettingContext from '../context/setting-context';
import Footer from './partials/Footer';

const Dashboard = props => {
    const settingContext = useContext(SettingContext);
    const dataThemeColor = `app-theme-${settingContext.themeColor.name}`;
    return (
        <>
            <div className="main-wrapper"
                data-theme-sidebar-shrinked={settingContext.leftSidebarShrinked}
                data-theme-mode={settingContext.themeMode}
                data-theme-color={dataThemeColor}
                data-theme-boxed-layout={settingContext.boxedLayout}
                data-theme-sidebar-fixed={settingContext.leftSidebarFixed}
                data-theme-footer-fixed={settingContext.footerFixed}
            >
                <Topbar />
                <div className="page-container">
                    <LeftSidebar />
                    <div className="page-content">
                        {props.children}
                        <Footer />
                    </div>
                </div>
                <RightSidebar/>
            </div>
        </>
    );
}

export default Dashboard;
