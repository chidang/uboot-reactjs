import React from 'react';

import Topbar from './partials/TopBar';
import LeftSidebar from './partials/LeftSidebar';

const Dashboard = props => 
    <>
        <Topbar />
        <div className="page-container">
            <LeftSidebar />
            <div className="page-content">
                {props.children}
            </div>
        </div>
    </>

export default Dashboard;
