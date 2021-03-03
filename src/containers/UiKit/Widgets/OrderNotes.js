import { Link } from "react-router-dom";

const OrderNotes = () => {
    return (
        <>
            <div className="fs-sm mb-1 mt-4"><b>ORDER NOTES</b></div>
            <div className="card">
                <div className="card-body">
                    <ul className="widget-order-notes">
                        <li className="note">
                            <div className="note-content alert alert-secondary">
                                Stock levels reduced: Cats Kitty Tats Tattoos (AC31RFT) 444→443
                            </div>
                            <p className="meta fs-sm">
                                <abbr className="exact-date" title="2020-09-14 03:28:20">
                                    September 14, 2020 at 3:28 am </abbr> by Admin <Link to="#" className="delete-note text-danger" role="button">Delete note</Link>
                            </p>
                        </li>
                        <li className="note">
                            <div className="note-content alert alert-success">
                                Order status changed from Processing to Completed.
                            </div>
                            <p className="meta fs-sm">
                                <abbr className="exact-date" title="2020-09-14 03:28:20">
                                    September 14, 2020 at 3:28 am </abbr> by Admin <Link to="#" className="delete-note text-danger" role="button">Delete note</Link>
                            </p>
                        </li>
                        <li className="note">
                            <div className="note-content alert alert-warning">
                                Payment to be made upon delivery. Order status changed from Pending payment to Processing.
                            </div>
                            <p className="meta fs-sm">
                                <abbr className="exact-date" title="2020-09-14 03:28:20">
                                    September 14, 2020 at 3:28 am </abbr> by Admin <Link to="#" className="delete-note text-danger" role="button">Delete note</Link>
                            </p>
                        </li>
                        <li className="note">
                            <div className="note-content alert alert-info">
                                Stock levels reduced: Cats Kitty Tats Tattoos (AC31RFT) 444→443
                            </div>
                            <p className="meta fs-sm">
                                <abbr className="exact-date" title="2020-09-14 03:28:20">
                                    September 14, 2020 at 3:28 am </abbr> by Admin <Link to="#" className="delete-note text-danger" role="button">Delete note</Link>
                            </p>
                        </li>
                        <li className="note">
                            <div className="note-content alert alert-danger">
                                Stock levels reduced: Cats Kitty Tats Tattoos (AC31RFT) 444→443
                            </div>
                            <p className="meta fs-sm">
                                <abbr className="exact-date" title="2020-09-14 03:28:20">
                                    September 14, 2020 at 3:28 am </abbr> by Admin <Link to="#" className="delete-note text-danger" role="button">Delete note</Link>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default OrderNotes;
