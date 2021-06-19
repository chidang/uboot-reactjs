import { Link } from "react-router-dom";
import ReactiveButtons from "./ReactiveButtons";
import BasicButtons from "./BasicButtons";
import PillButtons from "./PillButtons";
import RippleHoverEffectButtons from "./RippleHoverEffectButtons";
import AirHoverEffectButtons from "./AirHoverEffectButtons";
import IconButtons from "./IconButtons";
import SocialLinkButtons from "./SocialLinkButtons";
import LabelStyle from "./LabelStyle";

const Buttons = () =>
  <>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb ps-0 fs-base">
        <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
        <li className="breadcrumb-item"><span>UI Kit</span></li>
        <li className="breadcrumb-item active" aria-current="page">Buttons</li>
      </ol>
    </nav>
    <div className="d-flex header justify-content-between mb-3">
      <h1 className="header-title h3">
        <i className="bi-box text-primary" /> Buttons
      </h1>
    </div>
    <div className="row">
      <div className="col-12">
        <ReactiveButtons />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <BasicButtons />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <PillButtons />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <RippleHoverEffectButtons />
      </div>
      <div className="col-lg-6">
        <AirHoverEffectButtons />
      </div>
      <div className="col-lg-6">
        <IconButtons />
      </div>
      <div className="col-lg-6">
        <SocialLinkButtons />
      </div>
      <div className="col-lg-6">
        <LabelStyle />
      </div>
    </div>
  </>

export default Buttons;
