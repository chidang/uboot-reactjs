import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap'

import { LeftSidebarItemToggle } from '../../../components/Accordion';

const Icon = () => 
    <li id="sidebar-icons" className="sidebar-item">
        <LeftSidebarItemToggle eventKey="iconMenu">
            <i className="bi-gift"></i>
            <span>Icons</span>
        </LeftSidebarItemToggle>
        <Accordion.Collapse eventKey="iconMenu">
            <ul className="sidebar-second-level list-unstyled" id="icons" data-parent="#left-sidebar">
                <li>
                    <Link to="/icons/bootstrapicons">Bootstrapicons</Link>
                </li>
                <li>
                    <Link to="/icons/dripicons">Dripicons</Link>
                </li>
                <li>
                    <Link to="/icons/font-awesome">Font Awesome</Link>
                </li>
                <li>
                    <Link to="/icons/unicon">Unicons</Link>
                </li>
            </ul>
        </Accordion.Collapse>
    </li>

export default Icon;