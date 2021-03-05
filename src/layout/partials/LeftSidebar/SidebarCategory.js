import { withRouter } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import SidebarToggleItem from './SidebarToggleItem';

const SidebarCategory = ({
    ckey,
    name,
    badgeColor = 'success',
    badgeText,
    icon,
    children,
    location
}) => {
    const getSidebarItemClass = path => {
        return location.pathname.indexOf(path) !== -1 ? "active" : "";
    };

    return (
        <li className={"sidebar-item " + getSidebarItemClass(ckey)}>
            <SidebarToggleItem eventKey={ckey}>
                <i className={icon}></i>
                <span>
                    {name}
                    {badgeText ? (
                        <span className={`badge bg-${badgeColor}`}>{badgeText}</span>
                    ) : null}
                </span>
            </SidebarToggleItem>
            <Accordion.Collapse eventKey={ckey}>
                <ul className="sidebar-second-level list-unstyled">
                    {children}
                </ul>
            </Accordion.Collapse>
        </li>
    );
};

export default withRouter(SidebarCategory);
