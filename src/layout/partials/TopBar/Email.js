import { Link } from "react-router-dom";

const Email = () => 
    <li className="nav-item topbar-dropdown">
        <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false" id="emailsDropdown">
            <i className="bi-envelope"></i>
            <span className="badge bg-white rounded-circle">6</span>
        </Link>
        <div className="dropdown-menu dropdown-animate dropdown-menu-lg dropdown-menu-right py-0" aria-labelledby="emailsDropdown">
        <div className="dropdown-menu-header">
            6 New Emails
        </div>
        <div className="list-group">
            <Link to="#" className="list-group-item">
            <div className="row no-gutters align-items-center">
                <div className="col-2">
                <img src="assets/images/avatar.jpg" className="user-avatar rounded-circle" alt="User"/>
                </div>
                <div className="col-10">
                <div>Sam Robert</div>
                <div className="text-muted small mt-1">Ability to select/create Modules</div>
                <div className="text-muted small mt-1">1h ago</div>
                </div>
            </div>
            </Link>
            <Link to="#" className="list-group-item">
            <div className="row no-gutters align-items-center">
                <div className="col-2">
                <img src="assets/images/default-female-avatar.jpg" alt="User" className="user-avatar rounded-circle"/>
                </div>
                <div className="col-10">
                <div>Schirsten Vander</div>
                <div className="text-muted small mt-1">Add widgets descriptions</div>
                <div className="text-muted small mt-1">2h ago</div>
                </div>
            </div>
            </Link>
            <Link to="#" className="list-group-item">
            <div className="row no-gutters align-items-center">
                <div className="col-2">
                <img src="assets/images/default-female-avatar.jpg" alt="User" className="user-avatar rounded-circle"/>
                </div>
                <div className="col-10">
                <div>Robert Nordic</div>
                <div className="text-muted small mt-1">Mark cancelled the event</div>
                <div className="text-muted small mt-1">4h ago</div>
                </div>
            </div>
            </Link>
            <Link to="#" className="list-group-item">
            <div className="row no-gutters align-items-center">
                <div className="col-2">
                <img src="assets/images/default-female-avatar.jpg" alt="User" className="user-avatar rounded-circle"/>
                </div>
                <div className="col-10">
                <div>Michael Branson</div>
                <div className="text-muted small mt-1">Lorem ipsum dolor sit amet</div>
                <div className="text-muted small mt-1">6h ago</div>
                </div>
            </div>
            </Link>
            <Link to="#" className="list-group-item">
            <div className="row no-gutters align-items-center">
                <div className="col-2">
                <img src="assets/images/default-female-avatar.jpg" alt="User" className="user-avatar rounded-circle"/>
                </div>
                <div className="col-10">
                <div>Antonym Sladers</div>
                <div className="text-muted small mt-1">Lorem ipsum dolor sit amet</div>
                <div className="text-muted small mt-1">6h ago</div>
                </div>
            </div>
            </Link>
            <Link to="#" className="list-group-item">
            <div className="row no-gutters align-items-center">
                <div className="col-2">
                <img src="assets/images/default-female-avatar.jpg" alt="User" className="user-avatar rounded-circle"/>
                </div>
                <div className="col-10">
                <div>Marcus</div>
                <div className="text-muted small mt-1">Lorem ipsum dolor sit amet</div>
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

export default Email;