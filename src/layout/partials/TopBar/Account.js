import { Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import { CustomDropdown, CustomDropdownToggle} from '../../../components/Dropdown';
import avatar from "../../../assets/images/avatar.jpg";

const Account = () => 
    <li className="nav-item user-setting-list topbar-dropdown">
        <Dropdown as={CustomDropdown}>
            <Dropdown.Toggle as={CustomDropdownToggle} className="nav-link dropdown-toggle nav-profile">
                <img src={avatar} alt="user-image" className="rounded-circle"/>
                <span className="ms-1 d-none d-lg-inline">
                    <span className="user-name">Hi, Admin</span>
                </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu dropdown-menu-right profile-dropdown py-0">
                <div className="dropdown-header">
                    <h6 className="text-center">Welcome !</h6>
                </div>
                <Link to="#" className="dropdown-item">
                    <i className="uil uil-user me-1 text-primary"></i>
                    <span>My Account</span>
                </Link>
                <Link to="#" className="dropdown-item">
                    <i className="bi-gear me-1 text-primary"></i>
                    <span>Settings</span>
                </Link>
                <Link to="#" className="dropdown-item">
                    <i className="bi-envelope me-1 text-primary"></i>
                    <span>Inbox</span>
                </Link>
                <Link to="#" className="dropdown-item">
                    <i className="bi-calendar2-event-fill me-1 text-primary"></i>
                    <span>Calendar</span>
                </Link>
                <Link to="#" className="dropdown-item">
                    <i className="bi-list-task me-1 text-primary"></i>
                    <span>Tasks</span>
                </Link>
                <Link to="#" className="dropdown-item">
                    <i className="uil uil-sign-out-alt me-1 text-primary"></i>
                    <span>Sign out</span>
                </Link>
            </Dropdown.Menu>
        </Dropdown>
    </li>

export default Account;