
import { Link } from "react-router-dom";
import avatar from "../../../assets/images/avatar.jpg";
import maleAvatar from "../../../assets/images/default-male-avatar.jpg";
import femaleAvatar from "../../../assets/images/default-female-avatar.jpg";

const FriendList = () => {
    return (
        <>
            <div className="fs-sm mb-1"><b>FIEND LIST</b></div>
            <div className="card">
                <div className="friend-list">
                    <Link to="#" className="friend-list-item card mb-0 p-2 border-0">
                        <div className=" align-items-center d-flex flex-row">
                            <div className="my-2">
                                <img src={avatar} style={{ height: '50px' }} alt="User" className="rounded-circle" />
                            </div>
                            <div className="ms-3">
                                <h4 className="m-0 fs-base fw-700">Sam Robert</h4>
                                <span className="m-0 fs-sm text-muted">37 mutual friends</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="#" className="friend-list-item card mb-0 p-2 border-0">
                        <div className=" align-items-center d-flex flex-row">
                            <div className="my-2">
                                <img src={femaleAvatar} style={{ height: '50px' }} className="rounded-circle" alt="User" />
                            </div>
                            <div className="ms-3">
                                <h4 className="m-0 fs-base fw-700">Schirsten Vander</h4>
                                <span className="m-0 fs-sm text-muted">29 mutual friends</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="#" className="friend-list-item card mb-0 p-2 border-0">
                        <div className=" align-items-center d-flex flex-row">
                            <div className="my-2">
                                <img src={maleAvatar} style={{ height: '50px' }} className="rounded-circle" alt="User" />
                            </div>
                            <div className="ms-3">
                                <h4 className="m-0 fs-base fw-700">Robert Nordic</h4>
                                <span className="m-0 fs-sm text-muted">22 mutual friends</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="#" className="friend-list-item card mb-0 p-2 border-0">
                        <div className=" align-items-center d-flex flex-row">
                            <div className="my-2">
                                <img src={maleAvatar} alt="User" style={{ height: '50px' }} className="rounded-circle" />
                            </div>
                            <div className="ms-3">
                                <h4 className="m-0 fs-base fw-700">Michael Branson</h4>
                                <span className="m-0 fs-sm text-muted">34 mutual friends</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default FriendList;
