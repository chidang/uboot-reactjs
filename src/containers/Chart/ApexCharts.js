import { Link } from "react-router-dom";
import {
    AreaChart,
    BarChart, 
    CandlestickChart,
    ColumnChart,
    HeatmapChart,
    LineChart,
    MixedChart,
    PieChart
} from '../../components/Chart/ApexChart';

const ApexCharts = () => 
<>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb ps-0 fs-base">
        <li className="breadcrumb-item"><Link to="#">Uboot</Link></li>
        <li className="breadcrumb-item"><span>Charts</span></li>
        <li className="breadcrumb-item active" aria-current="page">Apex Charts</li>
        </ol>
    </nav>
    <div className="header mb-4">
        <h1 className="header-title h3">
        <i className="bi-bar-chart text-primary" /> Apex Charts
        </h1>
    </div>
    <div className="row">
        <div className="col-lg-6 md-12 d-flex">
            <AreaChart />
        </div>
        <div className="col-lg-6 md-12 d-flex">
            <BarChart />
        </div>
    </div>
    <div className="row">
        <div className="col-lg-6 md-12 d-flex">
            <CandlestickChart />
        </div>
        <div className="col-lg-6 md-12 d-flex">
            <ColumnChart />
        </div>
    </div>

    <div className="row">
        <div className="col-lg-6 md-12 d-flex">
            <HeatmapChart />
        </div>
        <div className="col-lg-6 md-12 d-flex">
            <LineChart />
        </div>
    </div>

    <div className="row">
        <div className="col-lg-6 md-12 d-flex">
            <MixedChart />
        </div>
        <div className="col-lg-6 md-12 d-flex">
            <PieChart />
        </div>
    </div>
</>

export default ApexCharts;
