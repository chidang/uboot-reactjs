import { Link } from "react-router-dom";
import CompCalendar from "./CompCalendar";

const Calendar = () => {
    return <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-0 fs-base">
                <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Calendar</li>
            </ol>
        </nav>
        <div className="header mb-4">
            <h1 className="header-title h3">
            <i className="bi-calendar4 text-primary" /> Calendar
            </h1>
        </div>
        <div className="row">
            <div className="col-12">
                <CompCalendar />
            </div>
        </div>
    </>
}

export default Calendar;
