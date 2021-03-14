import { Link } from "react-router-dom";
import { WorldMap } from '../../components/Map/VectorMap';

const VectorMaps = () => {
    return <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-0 fs-base">
            <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
            <li className="breadcrumb-item"><span>Map</span></li>
            <li className="breadcrumb-item active" aria-current="page">Vector Map</li>
            </ol>
        </nav>
        <div className="header mb-4">
            <h1 className="header-title h3">
            <i className="bi-map text-primary" /> Vector Map
            </h1>
        </div>
        <div className="row">
            <div className="col-12 d-flex">
                <WorldMap />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 md-12 d-flex">
            </div>
            <div className="col-lg-6 md-12 d-flex">
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 md-12 d-flex">
            </div>
            <div className="col-lg-6 md-12 d-flex">
            </div>
        </div>
    </>
}

export default VectorMaps;
