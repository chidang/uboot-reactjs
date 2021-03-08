import { Link } from "react-router-dom";
import {
    BarChart, 
    DoughnutChart,
    LineChart,
    PieChart,
    PolarChart,
    RadarChart
} from '../../components/Chart/Chartjs';

const Chartsjs = () => 
<>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb ps-0 fs-base">
        <li className="breadcrumb-item"><Link to="#">Uboot</Link></li>
        <li className="breadcrumb-item"><span>Charts</span></li>
        <li className="breadcrumb-item active" aria-current="page">Chartjs</li>
        </ol>
    </nav>
    <div className="header mb-4">
        <h1 className="header-title h3">
        <i className="bi-gift text-primary" /> Chartjs
        </h1>
    </div>
    <div className="row">
        <div className="col-lg-6 md-12 d-flex">
            <RadarChart />
        </div>
        <div className="col-lg-6 md-12 d-flex">
            <LineChart /> 
        </div>
    </div>
    <div className="row">
        <div className="col-lg-6 md-12 d-flex">
            <PolarChart />
        </div>
        <div className="col-lg-6 md-12 d-flex">
            <PieChart />
        </div>
    </div>
    <div className="row">
        <div className="col-lg-6 md-12 d-flex">
            <BarChart />
        </div>
        <div className="col-lg-6 md-12 d-flex">
            <DoughnutChart />
        </div>
    </div>
</>

export default Chartsjs;
