import { Link } from "react-router-dom";

const Main = () => 
<div className="sidebar-block">
    <div className="sidebar-title">MAIN</div>
        <ul className="list-unstyled sidebar-content">
        <li className="sidebar-item">
            <Link to="#" data-target="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">
            <i className="bi-sliders"></i>
            <span>Dashboard</span>
            </Link>
            <ul className="sidebar-second-level collapse list-unstyled" id="homeSubmenu" data-parent="#left-sidebar">
            <li>
                <Link to="index.html">Analytics</Link>
            </li>
            <li>
                <Link to="dashboard-ecommerce.html">Ecommerce</Link>
            </li>
            </ul>
        </li>
        <li className="sidebar-item">
            <Link to="calendar.html">
            <i className="bi-calendar2-event-fill"></i>
            <span>Calendar <span className="badge bg-primary">Plugin</span></span>
            </Link>
        </li>
        <li className="sidebar-item">
            <Link to="chat.html">
            <i className="bi-chat-square-text"></i>
            <span>Chat</span>
            </Link>
        </li>
        <li className="sidebar-item">
            <Link to="#" data-target="#pageSubmenuEcommerce" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">
            <i className="bi-cart3"></i>
            <span>Ecommerce <span className="badge bg-primary">New</span></span>
            </Link>
            <ul className="sidebar-second-level collapse list-unstyled" id="pageSubmenuEcommerce" data-parent="#left-sidebar">
            <li>
                <Link to="ecommerce-products.html">All Products</Link>
            </li>
            <li>
                <Link to="ecommerce-product-detail.html">Product Detail</Link>
            </li>
            <li>
                <Link to="ecommerce-add-product.html">Add Product</Link>
            </li>
            <li>
                <Link to="ecommerce-orders.html">Orders</Link>
            </li>
            <li>
                <Link to="ecommerce-order-detail.html">Order Detail</Link>
            </li>
            <li>
                <Link to="ecommerce-customers.html">Customers</Link>
            </li>
            <li>
                <Link to="ecommerce-shopping-card.html">Shopping Card</Link>
            </li>
            <li>
                <Link to="ecommerce-checkout.html">Checkout</Link>
            </li>
            </ul>
        </li>
        <li id="sidebar-pages" className="sidebar-item">
            <Link to="#" data-target="#pageSubmenu1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">
            <i className="bi-book"></i>
            <span>Pages</span>
            </Link>
            <ul className="sidebar-second-level collapse list-unstyled" id="pageSubmenu1" data-parent="#left-sidebar">
            <li>
                <Link to="#" data-target="#pageAuthentication" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">Authentication</Link>
                <ul className="sidebar-third-level collapse list-unstyled" id="pageAuthentication" data-parent="#sidebar-pages">
                <li>
                    <Link to="pages-authentication-login.html" target="_blank">Login</Link>
                </li>
                <li>
                    <Link to="pages-authentication-register.html" target="_blank">Register</Link>
                </li>
                <li>
                    <Link to="pages-authentication-forgot-password.html" target="_blank">Forgot Password</Link>
                </li>
                <li>
                    <Link to="pages-authentication-confirm-email.html" target="_blank">Confirm Email</Link>
                </li>
                </ul>
            </li>

            <li>
                <Link to="pages-contact.html">Contact</Link>
            </li>
            <li>
                <Link to="#" data-target="#pageError" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">Error</Link>
                <ul className="sidebar-third-level collapse list-unstyled" id="pageError" data-parent="#sidebar-pages">
                <li>
                    <Link to="pages-error-404.html">Error 404 </Link>
                </li>
                <li>
                    <Link to="pages-error-500.html">Error 500</Link>
                </li>
                </ul>
            </li>
            <li>
                <Link to="pages-faq.html">FAQ</Link>
            </li>
            <li>
                <Link to="pages-invoice.html">Invoice</Link>
            </li>
            <li>
                <Link to="pages-maintenance.html" target="_blank">Maintenance Page</Link>
            </li>
            <li>
                <Link to="pages-pricing.html">Pricing</Link>
            </li>
            <li>
                <Link to="pages-profile.html">Profile</Link>
            </li>
            <li>
                <Link to="pages-starter.html">Starter Page</Link>
            </li>
            </ul>
        </li>
        <li className="sidebar-item">
            <Link to="project-structure.html">
            <i className="bi-diagram-3"></i>
            <span>Project Structure</span>
            </Link>
        </li>
        </ul>
    </div>

export default Main;