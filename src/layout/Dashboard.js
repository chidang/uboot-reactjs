import React, { useContext } from 'react';

import Topbar from './partials/TopBar';
import LeftSidebar from './partials/LeftSidebar';
import RightSidebar from './partials/RightSidebar';
import SettingContext from '../context/setting-context';

const Dashboard = props => {
    const settingContext = useContext(SettingContext);

    return (
        <>
            <div 
            className="main-wrapper"
            data-theme-sidebar-shrinked={settingContext.leftSidebarShrinked}
            data-theme-mode={settingContext.themeMode}
            data-theme-color={settingContext.themeColor}
            >
                <Topbar />
                <div className="page-container">
                    <LeftSidebar />
                    <div className="page-content">
                        {props.children}
                    </div>
                </div>
                <RightSidebar/>
            </div>
        </>
    );
}


export default Dashboard;
