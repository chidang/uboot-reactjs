import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.jpg";
import maleAvatar from "../../assets/images/default-male-avatar.jpg";
import femaleAvatar from "../../assets/images/default-female-avatar.jpg";
import PerfectScrollbar from 'react-perfect-scrollbar';

const ChatContent = () =>  <>
    <div className="chatbox card">
        <div className="card-body p-0">
            <div className="chatbox-header d-flex justify-content-between align-items-center p-3">
                <div className="fs-md fw-700 d-flex align-items-center">
                <span className="user-avatar user-avatar-xs user-avatar-success me-3">
                    <span className="user-avatar-img rounded-circle"
                    style={{ backgroundImage: "url(" + avatar + ")", backgroundSize: "cover" }}></span>
                </span>
                    Jack Godfrey</div>
                <div> </div>
            </div>
            <div className="position-relative">
                <PerfectScrollbar>
                    <div className="chatbox-body custom-scroll p-3">
                        <div className="d-flex mt-3 d-inline-block">
                            <img className="rounded-circle" style={{height: "30px"}} src={avatar} alt="User" />
                            <div className="widget-chat-message-left ms-2 px-3 py-2 text-start mw-75">Hi</div>
                        </div>
                        <div className="d-flex mt-3 justify-content-end">
                            <div className="widget-chat-message-right me-2 px-3 py-2 text-start d-inline-block">Hi</div>
                            <img className="rounded-circle" style={{height: "30px"}} src={maleAvatar} alt="User" />
                        </div>
                        <div className="d-flex mt-3 d-inline-block">
                            <img className="rounded-circle" style={{height: "30px"}} src={avatar} alt="User" />
                            <div className="widget-chat-message-left ms-2 px-3 p-2 text-start">
                                <p>Lorem ipsum dolor sit amet</p>
                                <p>Consectetur adipiscing elit.</p>
                                <p>Mauris condimentum, nulla ut vulputate sodales</p>
                            </div>
                        </div>
                        <div className="fw-600 fs-sm text-center my-3 py-2">Aug 14, 2020, 4:24 PM</div>
                        <div className="d-flex mt-3 justify-content-end">
                            <div className="widget-chat-message-right me-2 px-3 p-2 text-start d-inline-block">
                                <p>Lorem ipsum dolor sit amet</p>
                                <p>Consectetur adipiscing elit.</p>
                                <p>Mauris condimentum, nulla ut vulputate sodales</p>
                            </div>
                            <img className="rounded-circle" style={{height: "30px"}} src={maleAvatar} alt="User" />
                        </div>
                        <div className="d-flex mt-3 d-inline-block">
                            <img className="rounded-circle" style={{height: "30px"}} src={avatar} alt="User" />
                            <div className="widget-chat-message-left ms-2 px-3 p-2 text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, nulla ut vulputate sodales</div>
                        </div>
                        <div className="fw-600 fs-sm text-center my-3 py-2">Aug 15, 2020, 4:24 PM</div>
                        <div className="d-flex mt-3 justify-content-end">
                            <div className="widget-chat-message-right me-2 px-3 p-2 text-start d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, nulla ut vulputate sodales</div>
                            <img className="rounded-circle" style={{height: "30px"}} src={maleAvatar} alt="User" />
                        </div>
                        <div className="d-flex mt-3 d-inline-block">
                            <img className="rounded-circle" style={{height: "30px"}} src={avatar} alt="User" />
                            <div className="widget-chat-message-left ms-2 px-3 p-2 text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, nulla ut vulputate sodales</div>
                        </div>
                        <div className="d-flex mt-3 justify-content-end">
                            <div className="widget-chat-message-right me-2 px-3 p-2 text-start d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, nulla ut vulputate sodales</div>
                            <img className="rounded-circle" style={{height: "30px"}} src={maleAvatar} alt="User" />
                        </div>
                        <div className="d-flex mt-3 d-inline-block">
                            <img className="rounded-circle" style={{height: "30px"}} src={avatar} alt="User" />
                            <div className="widget-chat-message-left ms-2 px-3 p-2 text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, nulla ut vulputate sodales</div>
                        </div>
                        <div className="fw-600 fs-sm text-center my-3 py-2">Aug 16, 2020, 4:24 PM</div>
                        <div className="d-flex mt-3 justify-content-end">
                            <div className="widget-chat-message-right me-2 px-3 p-2 text-start d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, nulla ut vulputate sodales</div>
                            <img className="rounded-circle" style={{height: "30px"}} src={maleAvatar} alt="User" />
                        </div>
                        <div className="d-flex mt-3 d-inline-block">
                            <img className="rounded-circle" style={{height: "30px"}} src={avatar} alt="User" />
                            <div className="widget-chat-message-left ms-2 px-3 p-2 text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, nulla ut vulputate sodales</div>
                        </div>
                        <div className="d-flex mt-3 justify-content-end">
                            <div className="widget-chat-message-right me-2 px-3 p-2 text-start d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, nulla ut vulputate sodales</div>
                            <img className="rounded-circle" style={{height: "30px"}} src={maleAvatar} alt="User" />
                        </div>
                    </div>
                </PerfectScrollbar>
                <div className="chatbox-footer p-3 mt-3 d-flex">
                    <div className="d-flex w-100 align-items-center justify-content-between mt-2">
                        <div className="me-3 fs-lg">
                        <div className="me-3 fs-lg">
                            <Link to="#" className="">
                                <i className="bi-plus-circle"></i>
                            </Link>
                            <Link to="#" className="ms-2">
                                <i className="bi-paperclip"></i>
                            </Link>
                            <Link to="#" className="ms-2">
                                <i className="bi-emoji-smile"></i>
                            </Link>
                        </div>
                        </div>
                        <div className="chatbox-message-input"><input className="form-control" type="text" placeholder="Type a message..." /></div>
                        <div><button className="btn btn-primary ms-2 px-6" type="button">Send</button></div>
                    </div>
                </div>
                <div className="chatbox-friend-list custom-scroll position-absolute pos-top pos-bottom p-2">
                    <div className="mt-3 text-gray-300">
                        <div className="chatbox-search-btn h3 m-0 d-flex justify-content-center flex-column ps-2 mt-2">
                            <i className="bi-search"></i>
                        </div>
                        <input id="chatbox-search-friend" className="form-control mb-3" type="text" placeholder="Search Messenger" />
                    </div>
                    <div className="chatbox-friend-list-item align-items-center d-flex flex-row">
                        <div className="my-2">
                            <Link to="#">
                                <span className="user-avatar user-avatar-xs user-avatar-danger me-2">
                                    <span className="user-avatar-img rounded-circle" style={{ backgroundImage: "url(" + femaleAvatar + ")", backgroundSize: "cover" }}></span>
                                </span>
                            </Link>
                        </div>
                        <div className="ms-1">
                            <h4 className="m-0 fs-base fw-400">Michael Branson</h4>
                            <span className="m-0 fs-sm text-muted">You: last message - 13h</span>
                        </div>
                    </div>
                    <div className="chatbox-friend-list-item align-items-center d-flex flex-row">
                        <div className="my-2">
                            <Link to="#">
                                <span className="user-avatar user-avatar-xs user-avatar-danger me-2">
                                    <span className="user-avatar-img rounded-circle" style={{ backgroundImage: "url(" + femaleAvatar + ")", backgroundSize: "cover" }}></span>
                                </span>
                            </Link>
                        </div>
                        <div className="ms-1">
                            <h4 className="m-0 fs-base fw-400">Michael Branson</h4>
                            <span className="m-0 fs-sm text-muted">You: last message - 13h</span>
                        </div>
                    </div>
                    <div className="chatbox-friend-list-item align-items-center d-flex flex-row">
                        <div className="my-2">
                            <Link to="#">
                                <span className="user-avatar user-avatar-xs user-avatar-success me-2">
                                    <span className="user-avatar-img rounded-circle" style={{ backgroundImage: "url(" + femaleAvatar + ")", backgroundSize: "cover" }}></span>
                                </span>
                            </Link>
                        </div>
                        <div className="ms-1">
                            <h4 className="m-0 fs-base fw-400">Michael Branson</h4>
                            <span className="m-0 fs-sm text-muted">You: last message - 13h</span>
                        </div>
                    </div>
                    <div className="chatbox-friend-list-item align-items-center d-flex flex-row">
                        <div className="my-2">
                            <Link to="#">
                                <span className="user-avatar user-avatar-xs user-avatar-danger me-2">
                                    <span className="user-avatar-img rounded-circle" style={{ backgroundImage: "url(" + femaleAvatar + ")", backgroundSize: "cover" }}></span>
                                </span>
                            </Link>
                        </div>
                        <div className="ms-1">
                            <h4 className="m-0 fs-base fw-400">Michael Branson</h4>
                            <span className="m-0 fs-sm text-muted">You: last message - 13h</span>
                        </div>
                    </div>
                    <div className="chatbox-friend-list-item align-items-center d-flex flex-row">
                        <div className="my-2">
                            <Link to="#">
                                <span className="user-avatar user-avatar-xs user-avatar-success me-2">
                                    <span className="user-avatar-img rounded-circle" style={{ backgroundImage: "url(" + femaleAvatar + ")", backgroundSize: "cover" }}></span>
                                </span>
                            </Link>
                        </div>
                        <div className="ms-1">
                            <h4 className="m-0 fs-base fw-400">Michael Branson</h4>
                            <span className="m-0 fs-sm text-muted">You: last message - 13h</span>
                        </div>
                    </div>
                    <div className="chatbox-friend-list-item align-items-center d-flex flex-row">
                        <div className="my-2">
                            <Link to="#">
                                <span className="user-avatar user-avatar-xs user-avatar-success me-2">
                                    <span className="user-avatar-img rounded-circle" style={{ backgroundImage: "url(" + femaleAvatar + ")", backgroundSize: "cover" }}></span>
                                </span>
                            </Link>
                        </div>
                        <div className="ms-1">
                            <h4 className="m-0 fs-base fw-400">Michael Branson</h4>
                            <span className="m-0 fs-sm text-muted">You: last message - 13h</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>

export default ChatContent; 
