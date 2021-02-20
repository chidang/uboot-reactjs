import React, { useState } from "react";
import { Accordion } from 'react-bootstrap';
import { routes } from "../../../routes";
import { NavLink, withRouter } from "react-router-dom";
import { LeftSidebarItemToggle } from '../../../components/Accordion';

const initOpenRoutes = (location) => {
    const pathName = location.pathname;
    let openRoute = {};
    routes.forEach((route, index) => {
        const isActive = pathName.indexOf(route.key) === 1;
        if (isActive) {
            openRoute = routes[index];
        }
    });
    return openRoute;
};

const SidebarCategory = withRouter(({
    ckey,
    name,
    badgeColor = 'primary',
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
            <LeftSidebarItemToggle eventKey={ckey}>
                <i className={icon}></i>
                <span>
                    {name}
                    {badgeText ? (
                        <span className={`badge bg-${badgeColor}`}>{badgeText}</span>
                    ) : null}
                </span>
            </LeftSidebarItemToggle>
            <Accordion.Collapse eventKey={ckey}>
                <ul className="sidebar-second-level list-unstyled" data-parent="#left-sidebar">
                    {children}
                </ul>
            </Accordion.Collapse>
        </li>
    );
});

const SidebarItem = withRouter(({ name, badgeColor, badgeText, icon, location, to }) => {
    const getSidebarItemClass = path => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <li className={"sidebar-item " + getSidebarItemClass(to)}>
            <NavLink to={to} className="sidebar-link" activeClassName="active">
                {icon ? (
                    <i className={icon}></i>
                ) : null}
                {name}
                {badgeText ? (
                    <span className={`badge bg-${badgeColor}`}>{badgeText}</span>
                ) : null}
            </NavLink>
        </li>
    )
});

const LeftSidebar = ({ location, sidebar, layout }) => {
    const [openRoutes, setOpenRoutes] = useState(() => initOpenRoutes(location));

    return (
        <nav id="left-sidebar">
            <Accordion defaultActiveKey={openRoutes.key}>
                <div className="sidebar-wrapper">
                    <div className="sidebar-body">
                        <div className="nav-filter align-items-center justify-content-center flex-row mb-4 p-2">
                            <input type="text" placeholder="Quick search" className="w-100 form-control" tabIndex="0"/>
                        </div>
                        <div className="sidebar-block">
                            <ul className="list-unstyled sidebar-content">
                            {
                                routes.map((category, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            {category.header ? (
                                                <li className="sidebar-title">{category.header}</li>
                                            ) : null}

                                            {category.children ? (
                                                <SidebarCategory
                                                    ckey={category.key}
                                                    name={category.name}
                                                    badgeColor={category.badgeColor}
                                                    badgeText={category.badgeText}
                                                    icon={category.icon}
                                                    to={category.path}
                                                    isOpen={openRoutes[index]}
                                                >
                                                {category.children.map((route, index) => (
                                                    <SidebarItem
                                                    key={index}
                                                    name={route.name}
                                                    to={route.path}
                                                    badgeColor={route.badgeColor}
                                                    badgeText={route.badgeText}
                                                    />
                                                ))}
                                                </SidebarCategory>
                                            ) : (
                                                <SidebarItem
                                                    name={category.name}
                                                    to={category.path}
                                                    icon={category.icon}
                                                    badgeColor={category.badgeColor}
                                                    badgeText={category.badgeText}
                                                />
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </Accordion>
        </nav>
    )
}

export default withRouter(LeftSidebar);
