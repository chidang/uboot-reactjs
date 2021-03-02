import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";

const ConfirmEmail = () =>
    <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
            <div className="col-lg-5 px-4">
            <div className="text-center mb-4">
                <Link to="/">
                    <img src={logo} style={{width: "145px"}} className="img-fluid" alt="Logo"/>
              </Link>
            </div>
            <div className="card shadow-sm rounded-0">
                <div className="card-body p-4">
                <div className="text-center w-75 m-auto">
                    <div className="mb-3 text-info"><i className="dripicons-mail fs-xxl"></i></div>
                    <h4 className="text-dark-50 text-center mt-0 font-weight-bold">Confirm email</h4>
                    <p className="text-muted mb-4">A email has been send to your-email@domain.com.</p>
                </div>
                <div className="mb-0 text-center"> <Link to="/" className="btn btn-warning text-white px-5"> <i className="fal fa-home-lg-alt"></i> <span>Back to Home Page</span></Link> </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12 text-center">
                <p className="text-muted"><Link to="/auth/login" className="text-muted ms-1"><span className="text-info">Back to Login</span></Link></p>
                </div>
            </div>
            </div>
        </div>
    </div>
export default ConfirmEmail;
