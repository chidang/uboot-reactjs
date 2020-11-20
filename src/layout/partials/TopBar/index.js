import { Link } from "react-router-dom";
import Account from './Account';
import Email from './Email';
import FormSearch from './FormSearch';
import Notification from './Notification';
import Setting from './Setting';
import Task from './Task';

const Topbar = () => 
    <nav id="nav-topbar" className="navbar topbar px-2">
        <div className="sidebar-header">
            <Link className="sidebar-toggle-btn" to="#">
            </Link>
            <div className="logo text-white mr-5">
                <h3>
                    <Link to="/index.html">
                        <span className="fw-700">Uboot</span> Admin
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

export default Topbar;