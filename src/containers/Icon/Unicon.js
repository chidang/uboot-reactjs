import { Link } from "react-router-dom";

const Unicon = () => 
<>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb pl-0 fs-base">
        <li className="breadcrumb-item"><a href="#">Uboot</a></li>
        <li className="breadcrumb-item"><span>Icons</span></li>
        <li className="breadcrumb-item"><span>Unicons</span></li>
        <li className="breadcrumb-item active" aria-current="page">Line</li>
        </ol>
    </nav>
    <div className="header mb-4">
        <h1 className="header-title h3">
        <i className="bi-gift text-primary" />
        Unicons: Line
        </h1>
    </div>
    <div className="form-group mb-3">
        <form id="search-icons">
        <div className="input-group">
            <input type="text" id="filter-icons" className="form-control" placeholder="Search" />
            <div className="input-group-append">
            <button className="btn btn-primary" type="submit"><i className="bi-search" /></button>
            </div>
        </div>
        </form>
    </div>
    <div className="card">
        <div className="card-body">
        <div className="text-center">
            <ul id="icon-list" className="pl-0">
            </ul>
        </div>
        </div>
    </div>
</>

export default Unicon;
