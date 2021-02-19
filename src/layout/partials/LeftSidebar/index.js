import React, { useState } from "react";
import { Accordion } from 'react-bootstrap'
import  { routes } from "../../../routes";
import { NavLink, withRouter } from "react-router-dom";
import { LeftSidebarItemToggle } from '../../../components/Accordion';
const initOpenRoutes = (location) => {
    const pathName = location.pathname;
    let _routes = {};
    routes.forEach((route, index) => {
      const isHome = route.containsHome && pathName === "/" ? true : false;
      const isActive = pathName.indexOf(route.path) === 0;
      const isOpen = route.open;
      _routes = Object.assign({}, _routes, {[index]: isActive || isOpen || isHome})
    });
  
    return _routes;
  };
const SidebarCategory = withRouter(
    ({
        name,
        badgeColor,
        badgeText,
        icon,
        isOpen,
        children,
        onClick,
        location,
        to
    }) => {
        const getSidebarItemClass = path => {
        return location.pathname.indexOf(path) !== -1 ||
            (location.pathname === "/" && path === "/dashboard")
            ? "active"
            : "";
        };

        return (
            <li className={"sidebar-item " + getSidebarItemClass(to)}>
                <LeftSidebarItemToggle eventKey={`${name}Menu`}>
                    <i className={icon}></i>
                    <span>{name}</span>
                </LeftSidebarItemToggle>
                <Accordion.Collapse eventKey={`${name}Menu`}>
                    <ul className="sidebar-second-level list-unstyled" data-parent="#left-sidebar">
                        {children}
                    </ul>
                </Accordion.Collapse>
            </li>
        );
    }
);

const SidebarItem = withRouter(
    ({ name, badgeColor, badgeText, icon, location, to }) => {
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
            </NavLink>
            </li>
        );
        }
    );

const LeftSidebar = ({ location, sidebar, layout }) => {
    const [openRoutes, setOpenRoutes] = useState(() => initOpenRoutes(location));

    const toggle = index => {
        // Collapse all elements
        Object.keys(openRoutes).forEach(
        item => openRoutes[index] || setOpenRoutes(openRoutes => Object.assign({}, openRoutes, {[item]: false}))
        )
        
        // Toggle selected element
        setOpenRoutes(openRoutes => Object.assign({}, openRoutes, {[index]: !openRoutes[index]}));
    }

    return (
        <nav id="left-sidebar">
            <Accordion defaultActiveKey="0">
                <div className="sidebar-wrapper">
                    <div className="sidebar-body">
                        <div className="nav-filter align-items-center justify-content-center flex-row mb-4 p-2">
                            <input type="text" placeholder="Quick search" className="w-100 form-control" tabIndex="0"/>
                        </div>
                        <div className="sidebar-block">
                            <ul className="list-unstyled sidebar-content">
                            {routes.map((category, index) => {
                                return (
                                    <React.Fragment key={index}>
                                    {category.header ? (
                                        <li className="sidebar-title">{category.header}</li>
                                    ) : null}

                                    {category.children ? (
                                        <SidebarCategory
                                        name={category.name}
                                        badgeColor={category.badgeColor}
                                        badgeText={category.badgeText}
                                        icon={category.icon}
                                        to={category.path}
                                        isOpen={openRoutes[index]}
                                        onClick={() => toggle(index)}
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
