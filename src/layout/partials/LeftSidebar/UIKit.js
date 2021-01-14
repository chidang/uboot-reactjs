import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap'

import { LeftSidebarItemToggle } from '../../../components/Accordion';

const UIKit = () => 
    <li className="sidebar-item">
        <LeftSidebarItemToggle eventKey="uikitMenu">
            <i className="bi-gem"></i>
            <span>UI Kit</span>
        </LeftSidebarItemToggle>
        <Accordion.Collapse eventKey="uikitMenu">
            <ul className="sidebar-second-level list-unstyled" id="ui-kit" data-parent="#left-sidebar">
                <li>
                    <Link to="/ui-kits/avatars">Avatars</Link>
                </li>
                <li>
                    <Link to="/ui-kits/breadcrumbs">Breadcrumbs</Link>
                </li>
                <li>
                    <Link to="/ui-kits/buttons">Buttons</Link>
                </li>
                <li>
                    <Link to="/ui-kits/cards">Cards</Link>
                </li>
                <li>
                    <Link to="/ui-kits/dual-listbox">Dual Listbox <span className="badge bg-primary">Plugin</span></Link>
                </li>
                <li>
                    <Link to="/ui-kits/jstree">jsTree <span className="badge bg-primary">Plugin</span></Link>
                </li>
                <li>
                    <Link to="/ui-kits/image-cropper">Image cropper <span className="badge bg-primary">Plugin</span></Link>
                </li>
                <li>
                    <Link to="/ui-kits/notifications">Notifications</Link>
                </li>
                <li>
                    <Link to="/ui-kits/spinners">Spinner</Link>
                </li>
                <li>
                    <Link to="/ui-kits/sweetalert">SweetAlert2 <span className="badge bg-primary">Plugin</span></Link>
                </li>
                <li>
                    <Link to="/ui-kits/tabs">Tabs</Link>
                </li>
                <li>
                    <Link to="/ui-kits/toastr">Toastr <span className="badge bg-primary">Plugin</span></Link>
                </li>
                <li>
                    <Link to="/ui-kits/widgets">Widgets</Link>
                </li>
            </ul>
        </Accordion.Collapse>
    </li>  

export default UIKit;