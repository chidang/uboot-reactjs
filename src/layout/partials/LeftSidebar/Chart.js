import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap'
import { LeftSidebarItemToggle } from '../../../components/Accordion';

const Chart = () => 
    <li className="sidebar-item">
        <LeftSidebarItemToggle eventKey="chartsMenu">
            <i className="bi-bar-chart"></i>
            <span>Charts</span>
        </LeftSidebarItemToggle>
        <Accordion.Collapse eventKey="chartsMenu">
            <ul className="sidebar-second-level list-unstyled" id="charts" data-parent="#left-sidebar">
                <li>
                    <Link to="charts-britecharts.html">Britecharts <span className="badge bg-primary">Plugin</span></Link>
                </li>
                <li>
                    <Link to="charts-chartjs.html">Chartjs <span className="badge bg-primary">Plugin</span></Link>
                </li>
            </ul>
        </Accordion.Collapse>
    </li>

export default Chart;