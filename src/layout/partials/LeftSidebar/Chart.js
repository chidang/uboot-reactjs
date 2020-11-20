import { Link } from "react-router-dom";

const Chart = () => 
    <li className="sidebar-item">
        <Link to="#" data-target="#charts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">
        <i className="bi-bar-chart"></i>
        <span>Charts</span>
        </Link>
        <ul className="sidebar-second-level collapse list-unstyled" id="charts" data-parent="#left-sidebar">
            <li>
                <Link to="charts-britecharts.html">Britecharts <span className="badge bg-primary">Plugin</span></Link>
            </li>
            <li>
                <Link to="charts-chartjs.html">Chartjs <span className="badge bg-primary">Plugin</span></Link>
            </li>
        </ul>
    </li>

export default Chart;