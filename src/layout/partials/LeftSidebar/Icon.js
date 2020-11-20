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
        </Accordion.Collapse>
    </li>

export default Icon;