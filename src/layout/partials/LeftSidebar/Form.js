import { Link } from "react-router-dom";

const Form = () => 
    <li className="sidebar-item">
        <Link to="#" data-target="#forms" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">
        <i className="bi-layout-text-window"></i>
        <span>Forms </span>
        </Link>
        <ul className="sidebar-second-level collapse list-unstyled" id="forms" data-parent="#left-sidebar">
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
    </li>

export default Form;