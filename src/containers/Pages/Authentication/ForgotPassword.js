import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";

const FogotPassword = () =>
    <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
            <div className="col-lg-5 px-4">
                <div className="card shadow-sm rounded-0">
                    <div className="card-body p-4">
                        <div className="text-center mb-4">
                        <Link to="/">
                            <img src={logo} style={{width: "145px"}} className="img-fluid" alt="Logo"/>
                        </Link>
                        </div>
                        <div className="text-center w-75 m-auto">
                        <h4 className="text-dark-50 text-center mt-0 font-weight-bold">Forgot Password</h4>
                        <p className="text-muted mb-4">Enter your email and we'll send you a reset link.</p>
                        </div>
                        <form action="#">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i className="fal fa-envelope"></i></span>
                            <input type="email" id="emailaddress" className="form-control" required="" placeholder="Email address" aria-label="Email"/>
                        </div>
                        <div className="mb-0 text-center">
                            <button className="btn btn-warning btn-block text-white" type="submit"> <span>Send me reset password instruction</span> <i className="fal fa-sign-in-alt"></i></button>
                        </div>
                        </form>
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

export default FogotPassword;