import { Link } from "react-router-dom";
import {
    DarkStyleMap,
    DefaultMap,
    HybridMap,
    LightStyleMap,
    MarkersMap,
    StreetViewMap
} from '../../components/Map/GoogleMap';

const markersData = [
    { 
        location: {
            lat: -32.8569,
            lng: 151.2152
        }
    },
    {
        location: {
            lat: -32.735248,
            lng: 151.2963704
        }
    },
    {
        location: {
            lat: -32.7942251,
            lng: 151.4706715
        }
    },
    {
        location: {
            lat: -32.8229769,
            lng: 151.401116
        }
    }
];


const GoogleMaps = () => {
    return <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-0 fs-base">
            <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
            <li className="breadcrumb-item"><span>Map</span></li>
            <li className="breadcrumb-item active" aria-current="page">Google Map</li>
            </ol>
        </nav>
        <div className="header mb-4">
            <h1 className="header-title h3">
            <i className="bi-map text-primary" /> Google Map
            </h1>
        </div>
        <div className="row">
            <div className="col-lg-6 md-12 d-flex">
                <DefaultMap />
            </div>
            <div className="col-lg-6 md-12 d-flex">
                <DarkStyleMap />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 md-12 d-flex">
                <HybridMap />
            </div>
            <div className="col-lg-6 md-12 d-flex">
                <LightStyleMap />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 md-12 d-flex">
                <MarkersMap markersData={markersData}/>
            </div>
            <div className="col-lg-6 md-12 d-flex">
                <StreetViewMap/>
            </div>
        </div>
    </>
}

export default GoogleMaps;
