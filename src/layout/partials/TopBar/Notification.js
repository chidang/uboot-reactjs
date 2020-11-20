import { Link } from "react-router-dom";

const Notification = () => 
    <li className="nav-item notification-list topbar-dropdown">
        <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false" id="notificationsDropdown">
        <i className="bi-bell"></i>
        <span className="badge bg-white rounded-circle">4</span>
        </Link>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0 dropdown-animate" aria-labelledby="notificationsDropdown">
        <div className="dropdown-menu-header">
            4 New Notifications
        </div>
        <div className="list-group">
            <Link to="#" className="list-group-item">
            <div className="row align-items-center">
                <div className="col-2">
                <i className="ml-1 text-primary uil uil-user"></i>
                </div>
                <div className="col-10">
                <div>New user registered</div>
                <div className="text-muted small mt-1">Lorem ipsum dolor sit amet</div>
                <div className="text-muted small mt-1">1h ago</div>
                </div>
            </div>
            </Link>
            <Link to="#" className="list-group-item">
            <div className="row align-items-center">
                <div className="col-2">
                <i className="ml-1 text-warning bi-bell-fill"></i>
                </div>
                <div className="col-10">
                <div>Update completed</div>
                <div className="text-muted small mt-1">Lorem ipsum dolor sit amet.</div>
                <div className="text-muted small mt-1">2h ago</div>
                </div>
            </div>
            </Link>
            <Link to="#" className="list-group-item">
            <div className="row align-items-center">
                <div className="col-2">
                <i className="ml-1 text-info bi-envelope-open"></i>
                </div>
                <div className="col-10">
                <div>Mark cancelled the event</div>
                <div className="text-muted small mt-1">Lorem ipsum dolor sit amet, consectetur adip</div>
                <div className="text-muted small mt-1">4h ago</div>
                </div>
            </div>
            </Link>
            <Link to="#" className="list-group-item">
            <div className="row align-items-center">
                <div className="col-2">
                <i className="ml-1 text-danger bi-building"></i>
                </div>
                <div className="col-10">
                <div>Login from 192.168.1.1</div>
                <div className="text-muted small mt-1">6h ago</div>
                </div>
            </div>
            </Link>
        </div>
        <div className="dropdown-menu-footer">
            <Link to="#" className="text-primary">View all</Link>
        </div>
        </div>
    </li>

export default Notification;