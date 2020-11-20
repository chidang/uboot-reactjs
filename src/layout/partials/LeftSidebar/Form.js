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
                <Link to="forms-basic-elements.html">Basic Elements</Link>
            </li>
            <li>
                <Link to="forms-checkboxs.html">Checkbox</Link>
            </li>
            <li>
                <Link to="forms-dropzonejs.html">DropzoneJS <span className="badge bg-primary">Plugin</span></Link>
            </li>
            <li>
                <Link to="forms-input-groups.html">Input Groups</Link>
            </li>
            <li>
                <Link to="forms-radios.html">Radio</Link>
            </li>
            <li>
                <Link to="forms-select2.html">Select2 <span className="badge bg-primary">Plugin</span></Link>
            </li>
            <li>
                <Link to="forms-validations.html">Validations</Link>
            </li>
            </ul>
        </Accordion.Collapse>
    </li>

export default Form;