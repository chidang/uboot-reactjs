import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";

const Register = () => 
    <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
            <div className="col-lg-5 px-4">
                <div className="card mt-3 shadow-sm rounded-0">
                    <div className="card-body p-4">
                        <div className="text-center mb-4">
                            <Link to="/dashboard/ecommerce">
                                <img src={logo} style={{width: "145px"}} className="img-fluid" alt="Logo"/>
                            </Link>
                        </div>
                        <div className="text-center w-75 m-auto">
                            <h4 className="text-dark-50 fs-lg text-center mt-0 font-weight-bold">Register now</h4>
                            <p className="text-muted mb-4">Get started absolutely free.</p>
                        </div>
                        <form >
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="first-name">First name</label>
                                    <input type="text" id="first-name" className="form-control" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="last-name">Last name</label>
                                    <input type="text" id="last-name" className="form-control" required />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="custom-checkbox">
                                <input type="checkbox" id="term-and-conditions" /> I agree to <Link className="text-info" to="#">terms & conditions</Link>
                                <span></span>
                                </label>
                            </div>
                            <div className="mb-3">
                                <label className="custom-checkbox">
                                <input type="checkbox" id="newsletters" /> Sign up for newsletters
                                <span></span>
                                </label>
                            </div>
                            <div className="d-grid mb-0 text-center">
                                <button className="btn btn-warning btn-block text-white" type="submit"> <span>Sign Up</span> <i className="fal fa-sign-in-alt"></i></button>
                            </div>
                            <p className="text-center my-4">- OR -</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <Link to="#" className="btn btn-facebook btn-block mb-4"><span className="me-2"><i className="fab fa-facebook-f"></i></span> Sign Up with Facebook</Link>
                                </div>
                                <div className="col-md-6">
                                    <Link to="#" className="btn btn-twitter  btn-block mb-4"><span className="me-2"><i className="fab fa-twitter"></i></span> Sign Up with Twitter</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12 text-center">
                        <p className="text-muted">Already have an account? <Link to="/auth/login" className="text-muted ms-1"><span className="text-info">Sign in</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default Register;