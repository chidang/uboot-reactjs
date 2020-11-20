import { Link } from "react-router-dom";
import avatar from "../../../assets/images/avatar.jpg";

const Account = () => 
    <li className="nav-item user-setting-list topbar-dropdown">
        <Link className="nav-link dropdown-toggle nav-profile" data-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
        <img src={avatar} alt="user-image" className="rounded-circle"/>
        <span className="ml-1 d-none d-lg-inline">
            <span className="user-name">Hi, Admin</span>
        </span>
        </Link>
        <div className="dropdown-menu dropdown-menu-right profile-dropdown dropdown-animate">
            <div className="dropdown-header">
                <h6 className="text-center">Welcome !</h6>
            </div>
            <Link to="javascript:void(0);" className="dropdown-item">
                <i className="uil uil-user mr-1 text-primary"></i>
                <span>My Account</span>
            </Link>
            <Link to="javascript:void(0);" className="dropdown-item">
                <i className="bi-gear mr-1 text-primary"></i>
                <span>Settings</span>
            </Link>
            <Link to="javascript:void(0);" className="dropdown-item">
                <i className="bi-envelope mr-1 text-primary"></i>
                <span>Inbox</span>
            </Link>
            <Link to="javascript:void(0);" className="dropdown-item">
                <i className="bi-calendar2-event-fill mr-1 text-primary"></i>
                <span>Calendar</span>
            </Link>
            <Link to="javascript:void(0);" className="dropdown-item">
                <i className="bi-list-task mr-1 text-primary"></i>
                <span>Tasks</span>
            </Link>
            <Link to="javascript:void(0);" className="dropdown-item">
                <i className="uil uil-sign-out-alt mr-1 text-primary"></i>
                <span>Sign out</span>
            </Link>
        </div>
    </li>

export default Account;