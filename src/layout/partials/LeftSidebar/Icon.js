import { Link } from "react-router-dom";

const Icon = () => 
    <li id="sidebar-icons" className="sidebar-item">
        <Link to="#" data-target="#icons" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">
        <i className="bi-gift"></i>
        <span>Icons</span>
        </Link>
        <ul className="sidebar-second-level collapse list-unstyled" id="icons" data-parent="#left-sidebar">
        <li>
            <Link to="icon-bootstrapicons.html">Bootstrapicons</Link>
        </li>
        <li>
            <Link to="icon-dripicons.html">Dripicons</Link>
        </li>
        <li>
            <Link to="icon-fontawesome.html">Font Awesome</Link>
        </li>
        <li>
            <Link to="icon-unicons-line.html">Unicons</Link>
        </li>
        </ul>
    </li>

export default Icon;