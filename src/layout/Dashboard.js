import React, { useContext } from 'react';

import Topbar from './partials/TopBar';
import LeftSidebar from './partials/LeftSidebar';
import RightSidebar from './partials/RightSidebar';

const Dashboard = props => {
    return (
        <>
            <div className="main-wrapper">
                <Topbar />
                <div className="page-container">
                    <LeftSidebar />
                    <div className="page-content">
                        {props.children}
                    </div>
                </div>
            </div>
            <RightSidebar/>
        </>
    );
}


export default Dashboard;
