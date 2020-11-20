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
                    <Link to="ui-kits-avatars.html">Avatars</Link>
                </li>
                <li>
                    <Link to="ui-kits-breadcrumbs.html">Breadcrumbs</Link>
                </li>
                <li>
                    <Link to="ui-kits-buttons.html">Buttons</Link>
                </li>
                <li>
                    <Link to="ui-kits-cards.html">Cards</Link>
                </li>
                <li>
                    <Link to="ui-kits-dual-listbox.html">Dual Listbox <span className="badge bg-primary">Plugin</span></Link>
                </li>
                <li>
                    <Link to="ui-kits-jstree.html">jsTree <span className="badge bg-primary">Plugin</span></Link>
                </li>
                <li>
                    <Link to="ui-kits-image-cropper.html">Image cropper <span className="badge bg-primary">Plugin</span></Link>
                </li>
                <li>
                    <Link to="ui-kits-notifications.html">Notifications</Link>
                </li>
                <li>
                    <Link to="ui-kits-spinners.html">Spinner</Link>
                </li>
                <li>
                    <Link to="ui-kits-sweetalert.html">SweetAlert2 <span className="badge bg-primary">Plugin</span></Link>
                </li>
                <li>
                    <Link to="ui-kits-tabs.html">Tabs</Link>
                </li>
                <li>
                    <Link to="ui-kits-toastr.html">Toastr <span className="badge bg-primary">Plugin</span></Link>
                </li>
                <li>
                    <Link to="ui-kits-widgets.html">Widgets</Link>
                </li>
            </ul>
        </Accordion.Collapse>
    </li>  

export default UIKit;