import { NavLink, withRouter } from "react-router-dom";

const SidebarItem = (props) => {
    const { name, badgeColor, badgeText, icon, location, to, isCategory } = props;
    const getSidebarItemClass = path => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <li className={"sidebar-item " + getSidebarItemClass(to)}>
            <NavLink to={to} className="sidebar-link" activeClassName="active">
                {icon ? (
                    <i className={icon}></i>
                ) : null}
                {isCategory ? <span>{name}</span> : name}
                {badgeText ? (
                    <span className={`badge bg-${badgeColor}`}>{badgeText}</span>
                ) : null}
            </NavLink>
        </li>
    );
};

export default withRouter(SidebarItem);
