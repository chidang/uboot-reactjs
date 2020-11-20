import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap'

import { LeftSidebarItemToggle } from '../../../components/Accordion';

const Map = () => 
    <li className="sidebar-item">
        <LeftSidebarItemToggle eventKey="mapMenu">
            <i className="bi-map"></i>
            <span>Maps</span>
        </LeftSidebarItemToggle>
        <Accordion.Collapse eventKey="mapMenu">
            <ul className="sidebar-second-level list-unstyled" id="maps" data-parent="#left-sidebar">
                <li>
                    <Link to="maps-google-map.html">Google Map <span className="badge bg-primary">Plugin</span></Link>
                </li>
                <li>
                    <Link to="maps-vector-map.html">Vector Map <span className="badge bg-primary">Plugin</span></Link>
                </li>
            </ul>
        </Accordion.Collapse>
    </li>

export default Map;