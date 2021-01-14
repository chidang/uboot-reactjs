import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap'
import { LeftSidebarItemToggle } from '../../../components/Accordion';

const Main = () => 
    <div className="sidebar-block">
        <div className="sidebar-title">MAIN</div>
        <ul className="list-unstyled sidebar-content">
            <li className="sidebar-item">
            <LeftSidebarItemToggle eventKey="dashboardMenu">
                <i className="bi-sliders"></i>
                <span>Dashboard</span>
            </LeftSidebarItemToggle>
            <Accordion.Collapse transition="false" eventKey="dashboardMenu">
                <ul className="sidebar-second-level list-unstyled" id="dashboardMenu" data-parent="#left-sidebar">
                    <li>
                        <Link to="/dashboard/analytics">Analytics</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/ecommerce">Ecommerce</Link>
                    </li>
                </ul>
            </Accordion.Collapse>
            </li>
            <li className="sidebar-item">
                <Link to="/calendar">
                <i className="bi-calendar2-event-fill"></i>
                <span>Calendar <span className="badge bg-primary">Plugin</span></span>
                </Link>
            </li>
            <li className="sidebar-item">
                <Link to="/chat">
                <i className="bi-chat-square-text"></i>
                <span>Chat</span>
                </Link>
            </li>
            <li className="sidebar-item">
                <LeftSidebarItemToggle eventKey="menuEcommerce">
                    <i className="bi-cart3"></i>
                    <span>Ecommerce <span className="badge bg-primary">New</span></span>
                </LeftSidebarItemToggle>
                <Accordion.Collapse eventKey="menuEcommerce">
                    <ul className="sidebar-second-level list-unstyled" id="pageSubmenuEcommerce" data-parent="#left-sidebar">
                        <li>
                            <Link to="/ecommerce/products">All Products</Link>
                        </li>
                        <li>
                            <Link to="/ecommerce/product-detail">Product Detail</Link>
                        </li>
                        <li>
                            <Link to="/ecommerce/add-product">Add Product</Link>
                        </li>
                        <li>
                            <Link to="/ecommerce/orders">Orders</Link>
                        </li>
                        <li>
                            <Link to="/ecommerce/order-detail">Order Detail</Link>
                        </li>
                        <li>
                            <Link to="/ecommerce/customers">Customers</Link>
                        </li>
                        <li>
                            <Link to="/ecommerce/shopping-cart">Shopping Cart</Link>
                        </li>
                        <li>
                            <Link to="/ecommerce/checkout">Checkout</Link>
                        </li>
                    </ul>
                </Accordion.Collapse>
            </li>
            <li id="sidebar-pages" className="sidebar-item">
                <LeftSidebarItemToggle eventKey="menuPages">
                    <i className="bi-book"></i>
                    <span>Pages</span>
                </LeftSidebarItemToggle>
                <Accordion.Collapse eventKey="menuPages">
                    <Accordion>
                        <ul className="sidebar-second-level list-unstyled" id="pageSubmenu1" data-parent="#left-sidebar">
                            <li>
                                <LeftSidebarItemToggle eventKey="menuAuthentication">
                                    Authentication
                                </LeftSidebarItemToggle>
                                <Accordion.Collapse eventKey="menuAuthentication">
                                    <ul className="sidebar-third-level list-unstyled" id="pageAuthentication" data-parent="#sidebar-pages">
                                        <li>
                                            <Link to="/auth/login" target="_blank">Login</Link>
                                        </li>
                                        <li>
                                            <Link to="/auth/register" target="_blank">Register</Link>
                                        </li>
                                        <li>
                                            <Link to="/auth/forgot-password" target="_blank">Forgot Password</Link>
                                        </li>
                                        <li>
                                            <Link to="/auth/confirm-email" target="_blank">Confirm Email</Link>
                                        </li>
                                    </ul>
                                </Accordion.Collapse>
                            </li>
                            <li>
                                <Link to="/pages/contact">Contact</Link>
                            </li>
                            <li>
                                <LeftSidebarItemToggle eventKey="menuError">
                                Error
                                </LeftSidebarItemToggle>
                                <Accordion.Collapse eventKey="menuError">
                                    <ul className="sidebar-third-level list-unstyled" id="pageError" data-parent="#sidebar-pages">
                                        <li>
                                            <Link to="/pages/page-not-found">Error 404 </Link>
                                        </li>
                                        <li>
                                            <Link to="/pages/internal-server-error">Error 500</Link>
                                        </li>
                                    </ul>
                                </Accordion.Collapse>
                            </li>
                            <li>
                                <Link to="/pages/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/pages/invoice">Invoice</Link>
                            </li>
                            <li>
                                <Link to="/pages/maintenance" target="_blank">Maintenance Page</Link>
                            </li>
                            <li>
                                <Link to="/pages/pricing">Pricing</Link>
                            </li>
                            <li>
                                <Link to="/pages/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/pages/starter">Starter Page</Link>
                            </li>
                        </ul>
                    </Accordion>
                </Accordion.Collapse>
                
            </li>
            <li className="sidebar-item">
                <Link to="/pages/project-structure">
                    <i className="bi-diagram-3"></i>
                    <span>Project Structure</span>
                </Link>
            </li>
        </ul>
    </div>
export default Main;