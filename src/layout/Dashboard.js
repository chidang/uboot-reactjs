import React, { useContext, useState, useEffect } from 'react';
import Topbar from './partials/TopBar';
import LeftSidebar from './partials/LeftSidebar';
import RightSidebar from './partials/RightSidebar';
import SettingContext from '../context/setting-context';
import Footer from './partials/Footer';
import LoadingBar from 'react-top-loading-bar'


const Dashboard = props => {
    const [progress, setProgress] = useState(0)
    const settingContext = useContext(SettingContext);
    const dataThemeColor = `app-theme-${settingContext.themeColor.name}`;

    useEffect(() => {
        setProgress(100)
    }, []);

    return (
        <>
            <LoadingBar
                color='#fff'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
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
