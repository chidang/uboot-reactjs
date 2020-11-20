import { Link } from "react-router-dom";

const Setting = () => 
    <li className="nav-item">
        <Link to="javascript:void(0);" className="nav-link" data-toggle="modal" data-target="#right-sidebar" id="modalSetting">
            <i className="rotate bi-gear"></i>
        </Link>
    </li>

export default Setting;