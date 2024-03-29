import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Account from './Account';
import Email from './Email';
import FormSearch from './FormSearch';
import Notification from './Notification';
import Setting from './Setting';
import Task from './Task';
import SettingContext from '../../../context/setting-context';

const Topbar = () => {
    const settingContext = useContext(SettingContext);

    return (
        <nav id="nav-topbar" className="navbar topbar px-2">
            <div className="sidebar-header">
                <span className="sidebar-toggle-btn" onClick={settingContext.toggleLeftSidebar}>
                </span>
                <div className="logo text-white me-5">
                    <h3>
                        <Link to="/">
                            <span className="fw-700">Uboot</span> React
                        </Link>
                    </h3>
                </div>
            </div>
            <div className="top-right-nav d-flex flex-grow-1 justify-content-between align-items-center">
                <FormSearch />
                <ul className="list-unstyled top-right-menu">
                    <Email />
                    <Task />
                    <Notification />
                    <Account />
                    <Setting />
                </ul>
            </div>
        </nav>
    );
}
    

export default Topbar;