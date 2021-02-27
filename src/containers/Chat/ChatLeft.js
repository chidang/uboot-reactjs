import avatar from "../../assets/images/avatar.jpg";
import maleAvatar from "../../assets/images/default-male-avatar.jpg";
import PerfectScrollbar from 'react-perfect-scrollbar';

const ChatLeft = () =>  <>
    <div className="card">
        <div className="card-body">
            <div className="dropdown float-right">
                <div className="dropdown-menu dropdown-menu-right"><a className="dropdown-item">View full</a> <a className="dropdown-item">Edit Contact Info</a> <a className="dropdown-item">Remove</a></div>
            </div>
            <div className="mt-3 text-center">
                <span className="user-avatar user-avatar-lg user-avatar-success me-3">
                    <span className="user-avatar-img rounded-circle"
                    style={{ backgroundImage: "url(" + avatar + ")", backgroundSize: "cover" }}></span>
                </span>
                <h4>Jack Godfrey</h4>
                <ul className="d-flex justify-content-evenly list-unstyled mt-3 fs-lg">
                    <li>
                    <a href="#">
                        <i className="bi-chat-dots" data-original-title="Chat History" data-toggle="tooltip"></i>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <i className="bi-person-plus" data-original-title="Add friend" data-toggle="tooltip"></i>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <i className="bi-people" data-original-title="Create Group" data-toggle="tooltip"></i>
                    </a>
                    </li>
                </ul>
            </div>
            <hr />
            <PerfectScrollbar>
                <div className="custom-scroll" style={{maxHeight: "470px"}}>
                    <div className="mt-3">
                        <p className="mt-4 mb-1 d-flex align-items-center"><span className="ms-1 fw-700">Email</span></p>
                        <p>support@teachprod.com</p>
                        <p className="mt-4 mb-1 d-flex align-items-center"><span className="ms-1 fw-700">Phone</span></p>
                        <p>04 555 555</p>
                        <p className="mt-4 mb-1 d-flex align-items-center"><span className="ms-1 fw-700">Location:</span></p>
                        <p>Napa, California(CA), 94559</p>
                        <p className="mt-4 mb-1 d-flex align-items-center"><span className="ms-1 fw-700">Languages:</span></p>
                        <p>English, Spanish</p>
                    </div>
                    <hr />
                    <div className="fs-sm mb-1 mt-4"><strong>MISSED CALLS</strong></div>
                    <ul className="widget-missed-call list-unstyled m-0">
                        <li>
                            <div className="align-items-center d-flex flex-row position-relative show-child-on-hover">
                                <div className="my-2"><img className="rounded-circle" style={{"height": "40px"}} src={avatar} alt="User" /></div>
                                <div className="ms-3"><span className="m-0 fs-sm">+04224253253234</span></div>
                                <div className="position-absolute pos-right show-on-hover-parent">
                                    <span className="me-2 icon-sm bg-success rounded-circle"><i className="bi-telephone fs-md"></i></span>
                                    <span className="icon-sm bg-danger rounded-circle"><i className="bi-trash fs-md"></i></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="align-items-center d-flex flex-row position-relative show-child-on-hover">
                                <div className="my-2"><img className="rounded-circle" style={{height: "40px"}} src={avatar} alt="User" /></div>
                                <div className="ms-3"><span className="m-0 fs-sm">+04284759494984</span></div>
                                <div className="position-absolute pos-right show-on-hover-parent">
                                    <span className="me-2 icon-sm bg-success rounded-circle"><i className="bi-telephone fs-md"></i></span>
                                    <span className="icon-sm bg-danger rounded-circle"><i className="bi-trash fs-md"></i></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="align-items-center d-flex flex-row position-relative show-child-on-hover">
                                <div className="my-2"><img className="rounded-circle" style={{height: "40px"}} src={avatar} alt="User" /></div>
                                <div className="ms-3"><span className="m-0 fs-sm">+04224253235289</span></div>
                                <div className="position-absolute pos-right show-on-hover-parent">
                                    <span className="me-2 icon-sm bg-success rounded-circle"><i className="bi-telephone fs-md"></i></span>
                                    <span className="icon-sm bg-danger rounded-circle"><i className="bi-trash fs-md"></i></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="align-items-center d-flex flex-row position-relative show-child-on-hover">
                                <div className="my-2"><img className="rounded-circle" style={{height: "40px"}} src={maleAvatar} alt="User" /></div>
                                <div className="ms-3"><span className="m-0 fs-sm">+04246335365753</span></div>
                                <div className="position-absolute pos-right show-on-hover-parent"> </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </PerfectScrollbar>
        </div>
    </div>
</>

export default ChatLeft; 
