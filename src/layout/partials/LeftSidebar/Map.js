import { Link } from "react-router-dom";

const Map = () => 
    <li className="sidebar-item">
        <Link to="#" data-target="#maps" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">
        <i className="bi-map"></i>
        <span>Maps</span>
        </Link>
        <ul className="sidebar-second-level collapse list-unstyled" id="maps" data-parent="#left-sidebar">
            <li>
                <Link to="maps-google-map.html">Google Map <span className="badge bg-primary">Plugin</span></Link>
            </li>
            <li>
                <Link to="maps-vector-map.html">Vector Map <span className="badge bg-primary">Plugin</span></Link>
            </li>
        </ul>
    </li>

export default Map;