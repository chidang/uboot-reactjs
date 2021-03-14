import { Link } from "react-router-dom";
import Chat from "./Chat";
import FriendList from "./FriendList";
import MissedCalls from "./MissedCalls";
import OrderNotes from "./OrderNotes";
import ProductRating from "./ProductRating";
import Setting from "./Setting";
import ImageList from "./ImageList";

const Widgets = () =>
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-0 fs-base">
                <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
                <li className="breadcrumb-item"><span>UI Kit</span></li>
                <li className="breadcrumb-item active" aria-current="page">Widget</li>
            </ol>
        </nav>
        <div className="d-flex header justify-content-between mb-4">
            <h1 className="header-title h3">
                <i className="bi-puzzle text-primary"></i> Widget
            </h1>
        </div>
        <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
                <ProductRating />
                <Setting />
                <ImageList />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <FriendList />
                <Chat />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <MissedCalls />
                <OrderNotes />
            </div>
        </div>
    </>

export default Widgets;
