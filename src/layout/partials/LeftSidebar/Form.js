import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap'

import { LeftSidebarItemToggle } from '../../../components/Accordion';

const Form = () => 
    <li className="sidebar-item">
        <LeftSidebarItemToggle eventKey="formMenu">
            <i className="bi-layout-text-window"></i>
            <span>Forms </span>
        </LeftSidebarItemToggle>
        <Accordion.Collapse eventKey="formMenu"> 
            <ul className="sidebar-second-level list-unstyled" id="forms" data-parent="#left-sidebar">
            <li>
                <Link to="/forms/basic-elements">Basic Elements</Link>
            </li>
            <li>
                <Link to="/forms/checkboxs">Checkbox</Link>
            </li>
            <li>
                <Link to="/forms/dropzonejs">DropzoneJS <span className="badge bg-primary">Plugin</span></Link>
            </li>
            <li>
                <Link to="/forms/input-groups">Input Groups</Link>
            </li>
            <li>
                <Link to="/forms/radios">Radio</Link>
            </li>
            <li>
                <Link to="/forms/select2">Select2 <span className="badge bg-primary">Plugin</span></Link>
            </li>
            <li>
                <Link to="/forms/validations">Validations</Link>
            </li>
            </ul>
        </Accordion.Collapse>
    </li>

export default Form;