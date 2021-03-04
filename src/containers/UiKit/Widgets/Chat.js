import { Link } from "react-router-dom";
import avatar from "../../../assets/images/avatar.jpg";
import femaleAvatar from "../../../assets/images/default-female-avatar.jpg";

const Chat = () => {
    return (
        <>
            <div className="fs-sm mb-1 mt-4"><b>CHAT</b></div>
            <div className="card">
                <div className="card-header justify-content-between bg-primary text-white">
                    <div className="widget-media">
                        <img src={avatar} style={{ height: '40px' }} className="rounded-circle" alt="User" />
                    Jack Godfrey
                    </div>
                    <div className="card-widgets">
                        <Link to="#" className="me-2"><i className="bi-camera-video" /></Link>
                        <Link to="#" className="me-2"><i className="bi-telephone" /></Link>
                        <Link className="me-2" data-toggle="collapse" data-target="#cardReverseCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i className="dripicons-minus" /></Link>
                        <Link to="#" className="me-2" data-toggle="remove"><i className="bi-x" /></Link>
                    </div>
                </div>
                <div className="card-body ps-1">
                    <div className="d-flex mt-3 d-inline-block">
                        <img src={femaleAvatar} style={{ height: '30px' }} alt="User" className="rounded-circle" />
                        <div className="widget-chat-message-left ms-2 px-3 py-2 text-left mw-75">Hi
                    </div>
                    </div>
                    <div className="d-flex mt-3 justify-content-end">
                        <div className="widget-chat-message-right me-2 px-3 py-2 text-left d-inline-block">Hi
                    </div>
                        <img src={avatar} style={{ height: '30px' }} className="rounded-circle" alt="User" />
                    </div>
                    <div className="d-flex mt-3 d-inline-block">
                        <img src={femaleAvatar} style={{ height: '30px' }} className="rounded-circle" alt="User" />
                        <div className="widget-chat-message-left ms-2 px-3 p-2 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, nulla ut vulputate sodales
                    </div>
                    </div>
                    <div className="fw-600 fs-sm text-center my-3">Aug 14, 2020, 4:24 PM</div>
                    <div className="d-flex mt-3 justify-content-end">
                        <div className="widget-chat-message-right me-2 px-3 p-2 text-left d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, nulla ut vulputate sodales
                    </div>
                        <img src={avatar} style={{ height: '30px' }} className="rounded-circle" alt="User" />
                    </div>
                </div> {/* end card-body */}
                <div className="card-footer d-block">
                    <textarea className="form-control border-0 p-0" rows={2} placeholder="Type your message here" defaultValue={""} />
                    <div className="d-flex align-items-center justify-content-between mt-2">
                        <div className="me-3 fs-lg text-primary">
                            <Link to="#">
                                <i className="bi-plus-circle" />
                            </Link>
                            <Link to="#" className="ms-2">
                                <i className="bi-paperclip" />
                            </Link>
                            <Link to="#" className="ms-2">
                                <i className="bi-emoji-smile" />
                            </Link>
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary px-6 waves-effect">Send</button>
                        </div>
                    </div>
                </div> {/* end card-footer */}
            </div>
        </>
    );
}

export default Chat;
