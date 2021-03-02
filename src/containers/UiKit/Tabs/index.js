import { Link } from "react-router-dom";
import BasicTab from "./BasicTab";
import AdjustedTab from "./AdjustedTab";
import PillsTab from "./PillsTab";
import AdjustedBillTab from "./AdjustedBillTab";
import VerticalTab from "./VerticalTab";

const Tabs = () =>
  <>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb ps-0 fs-base">
        <li className="breadcrumb-item"><Link to="#">Uboot</Link></li>
        <li className="breadcrumb-item"><span>UI Kit</span></li>
        <li className="breadcrumb-item active" aria-current="page">Tab</li>
      </ol>
    </nav>
    <div className="header mb-4">
      <h1 className="header-title h3">
        <i className="bi-card-list text-primary" /> Tab
      </h1>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <BasicTab />
        <AdjustedTab />
        <PillsTab />
      </div>
      <div className="col-lg-6">
        <AdjustedBillTab />
        <VerticalTab />
      </div>
    </div>
  </>

export default Tabs;
