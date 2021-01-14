import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap'

import { LeftSidebarItemToggle } from '../../../components/Accordion';

const Table = () => 
    <li className="sidebar-item">
        <LeftSidebarItemToggle eventKey="tableMenu">
            <i className="bi-table"></i>
            <span>Tables</span>
        </LeftSidebarItemToggle>
        <Accordion.Collapse eventKey="tableMenu">
            <ul className="sidebar-second-level list-unstyled" id="tables" data-parent="#left-sidebar">
                <li>
                    <Link to="/tables/basic-table">Basic Table</Link>
                </li>
                <li>
                    <Link to="/tables/data-table">Data Table <span className="badge bg-primary">Plugin</span></Link>
                </li>
            </ul>
        </Accordion.Collapse>
    </li>

export default Table;