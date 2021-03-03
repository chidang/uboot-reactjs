import Chat from "./Chat";
import FriendList from "./FriendList";
import MissedCalls from "./MissedCalls";
import OrderNotes from "./OrderNotes";
import ProductRating from "./ProductRating";
import Setting from "./Setting";
import ImageList from "./ImageList";

const Widgets = () => 
    <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
            <ProductRating/>
            <Setting/>
            <ImageList />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <FriendList/>
            <Chat/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <MissedCalls/>
            <OrderNotes/>
        </div>
    </div>

export default Widgets;
