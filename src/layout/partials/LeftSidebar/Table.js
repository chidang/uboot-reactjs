import { Link } from "react-router-dom";

const Table = () => 
    <li className="sidebar-item">
        <Link to="#" data-target="#tables" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">
        <i className="bi-table"></i>
        <span>Tables</span>
        </Link>
        <ul className="sidebar-second-level collapse list-unstyled" id="tables" data-parent="#left-sidebar">
            <li>
                <Link to="tables-basic-table.html">Basic Table</Link>
            </li>
            <li>
                <Link to="tables-data-table.html">Data Table <span className="badge bg-primary">Plugin</span></Link>
            </li>
        </ul>
    </li>

export default Table;