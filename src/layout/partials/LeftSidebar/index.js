import Chart from "./Chart";
import Form from "./Form";
import Icon from "./Icon";
import Main from "./Main";
import Map from "./Map";
import Table from "./Table";
import UIKit from "./UIKit";

const LeftSidebar = () => 
    <nav id="left-sidebar">
        <div className="sidebar-wrapper">
            <div className="sidebar-body">
            <div className="nav-filter align-items-center justify-content-center flex-row mb-4 p-2">
                <input type="text" placeholder="Quick search" className="w-100 form-control" tabIndex="0"/>
            </div>
            <Main />
            <div className="sidebar-block">
                <div className="sidebar-title">COMPONENT</div>
                <ul className="list-unstyled sidebar-content">
                    <UIKit />
                    <Form />
                    <Chart />
                    <Table />
                    <Icon />
                    <Map />
                </ul>
            </div>
            </div>
        </div>
    </nav>

export default LeftSidebar;