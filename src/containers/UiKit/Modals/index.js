import { Link } from "react-router-dom";
import BasicModal from './BasicModal';
import StaticBackdropModal from './StaticBackdropModal';
import WithoutAnimationModal from './WithoutAnimationModal';
import VerticallyCenteredModal from './VerticallyCenteredModal';
import GridModal from './GridModal';
import OptionalSizesModal from './OptionalSizesModal';

const Modals = () =>
  <>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb ps-0 fs-base">
        <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
        <li className="breadcrumb-item"><span>UI Kit</span></li>
        <li className="breadcrumb-item active" aria-current="page">Modals</li>
      </ol>
    </nav>
    <div className="header mb-4">
      <h1 className="header-title h3">
        <i className="bi-card-list text-primary" /> Modals
      </h1>
      <p class="mt-2">Add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
    </div>
    <div className="row">
      <div className="col-12">
        <BasicModal />
      </div>
      <div className="col-12">
        <StaticBackdropModal />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <WithoutAnimationModal />
      </div>
      <div className="col-lg-6">
        <VerticallyCenteredModal />
      </div>
    </div>

    <div className="row">
      <div className="col-lg-6">
        <GridModal />
      </div>
      <div className="col-lg-6">
        <OptionalSizesModal />
      </div>
    </div>
  </>

export default Modals;
