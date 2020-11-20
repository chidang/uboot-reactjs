import { Link } from "react-router-dom";

const Task = () => 
    <li className="nav-item task-list topbar-dropdown">
        <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false" id="tasksDropdown">
        <i className="bi-list-task"></i>
        <span className="badge bg-white rounded-circle">5</span>
        </Link>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0 dropdown-animate" aria-labelledby="tasksDropdown">
        <div className="dropdown-menu-header">
            4 New Tasks
        </div>
        <div className="list-group">
            <Link className="list-group-item" to="#">
            <span className="task small">
                <span className="desc">Design database</span>
                <span className="percent">74%</span>
            </span>
            <div className="progress progress-sm m-0">
                <div className="progress-bar bg-success" role="progressbar" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100" style={{width: '74%'}}>
                <span className="sr-only">74% Complete</span>
                </div>
            </div>
            </Link>
            <Link className="list-group-item" to="#">
            <span className="task small">
                <span className="desc">Testing</span>
                <span className="percent">30%</span>
            </span>
            <div className="progress progress-sm m-0">
                <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{width: "30%"}}>
                <span className="sr-only">30% Complete</span>
                </div>
            </div>
            </Link>
            <Link className="list-group-item" to="#">
            <span className="task small">
                <span className="desc">Document writting</span>
                <span className="percent">50%</span>
            </span>
            <div className="progress progress-sm m-0">
                <div className="progress-bar bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}>
                <span className="sr-only">50% Complete</span>
                </div>
            </div>
            </Link>
            <Link className="list-group-item" to="#">
            <span className="task small">
                <span className="desc">Development</span>
                <span className="percent">45%</span>
            </span>
            <div className="progress progress-sm m-0">
                <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: '45%'}}>
                <span className="sr-only">45% Complete</span>
                </div>
            </div>
            </Link>
            <Link className="list-group-item" to="#">
            <span className="task small">
                <span className="desc">HTML slicing</span>
                <span className="percent">66%</span>
            </span>
            <div className="progress progress-sm m-0">
                <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" style={{width: "66%"}}>
                <span className="sr-only">66% Complete</span>
                </div>
            </div>
            </Link>
        </div>
        <div className="dropdown-menu-footer">
            <Link to="#" className="text-primary">View all</Link>
        </div>
        </div>
    </li>

export default Task;