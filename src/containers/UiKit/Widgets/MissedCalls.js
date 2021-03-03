import avatar from "../../../assets/images/avatar.jpg";
import maleAvatar from "../../../assets/images/default-male-avatar.jpg";
import femaleAvatar from "../../../assets/images/default-female-avatar.jpg";

const MissedCalls = () => {
    return (
        <>
            <div className="fs-sm mb-1"><b>MISSED CALLS</b></div>
            <div className="card">
                <div className="card-body">
                    <ul className="widget-missed-call list-unstyled m-0">
                        <li>
                            <div className="align-items-center d-flex flex-row position-relative show-child-on-hover">
                                <div className="my-2">
                                    <img src={femaleAvatar} style={{ height: '40px' }} alt="User" className="rounded-circle" />
                                </div>
                                <div className="ms-3">
                                    <span className="m-0 fs-sm">+04284759494984</span>
                                </div>
                                <div className="position-absolute pos-right show-on-hover-parent">
                                    <a href="#" className="me-2 icon-sm bg-success rounded-circle"><i className="bi-telephone fs-md" /></a>
                                    <a href="#" className="icon-sm bg-danger rounded-circle"><i className="bi-trash fs-md" /></a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="align-items-center d-flex flex-row position-relative show-child-on-hover">
                                <div className="my-2">
                                    <img src={maleAvatar} style={{ height: '40px' }} alt="User" className="rounded-circle" />
                                </div>
                                <div className="ms-3">
                                    <span className="m-0 fs-sm">+04246335365753</span>
                                </div>
                                <div className="position-absolute pos-right show-on-hover-parent">
                                    <a href="#" className="me-2 icon-sm bg-success rounded-circle"><i className="bi-telephone fs-md" /></a>
                                    <a href="#" className="icon-sm bg-danger rounded-circle"><i className="bi-trash fs-md" /></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MissedCalls;
