import { Link } from "react-router-dom";

const NotFoundError = () => 
<>
    <div className="d-flex header justify-content-between mb-2">
        <h1 className="header-title h3">
        <i className="bi-exclamation-triangle text-primary" />
        Page Not Found
        </h1>
    </div>
    <div className="container">
        <div className="row justify-content-center align-items-center">
        <div className="col-lg-5">
            <div className="text-center m-auto">
            <div className="mb-3 text-danger"><i className="bi-exclamation-triangle fs-xxl" /></div>
            <p className="text-muted mb-4">We couldn’t find this page.</p>
            </div>
            <div className="mb-0 text-center"> <Link to="/" className="text-primary"> <i className="bi-house" /> <span>Back to Dashboard</span></Link> </div>
        </div>
        </div>
    </div>
</>

export default NotFoundError;
