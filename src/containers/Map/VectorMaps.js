import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import SettingContext from '../../context/setting-context';
import {
    WorldMap,
    UsaMap,
    RegionLabel,
    MapLegends,
    GDP,
    EuropeMap,
    IndiaMap } from '../../components/Map/VectorMap';

const VectorMaps = () => {
    const settingContext = useContext(SettingContext);
    let theme = { color: settingContext.themeColor  }

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
                <GDP theme={theme} />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 md-12 d-flex">
                <UsaMap theme={theme} />
            </div>
            <div className="col-lg-6 md-12 d-flex">
                <RegionLabel />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 md-12 d-flex">
                <MapLegends />
            </div>
            <div className="col-lg-6 md-12 d-flex">
                <WorldMap theme={theme} />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 md-12 d-flex">
                <EuropeMap theme={theme} />
            </div>
            <div className="col-lg-6 md-12 d-flex">
                <IndiaMap theme={theme} />
            </div>
        </div>
    </>
}

export default VectorMaps;
