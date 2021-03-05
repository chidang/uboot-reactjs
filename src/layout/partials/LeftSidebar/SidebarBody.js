import React from "react";
import PropTypes from 'prop-types'
import SidebarCategory from "./SidebarCategory";
import SidebarItem from "./SidebarItem";
import { isMobile } from "../../../shared/utility";
import useWindowSize from "../../../hooks/WindowSize";

const SidebarBody = (props) => {
    const { openedRoute, routes, options } = props;
    const windowSize = useWindowSize();
    const headerBarHeight = 70;
    const sidebarStyle = (isMobile() || !options.leftSidebarFixed || options.leftSidebarShrinked) ? {} : { height: `${windowSize.height - headerBarHeight}px` };

    return (
        <div className="sidebar-body" style={sidebarStyle}>
            <div className="nav-filter align-items-center justify-content-center flex-row mb-4 p-2">
                <input type="text" placeholder="Quick search" className="w-100 form-control" tabIndex="0" />
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
                                            isOpen={openedRoute[index]}
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
                                                isCategory={true}
                                            />
                                        )}
                                </React.Fragment>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

SidebarBody.propTypes = {
    openedRoute: PropTypes.object,
    routes: PropTypes.array,
    options: PropTypes.object
}

export default SidebarBody;
