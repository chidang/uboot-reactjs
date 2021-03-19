import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";

const SignupSchema = yup.object().shape({
    firstName: yup.string().required("First Name is a required field"),
    lastName: yup.string().required("Last Name is a required field"),
    email: yup.string().email("Email must be a valid email").required("Email is a required field"),
    acceptPolicy: yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
    password: yup.string().required("Password is a required field"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    website: yup.string().url()
});

const Register = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(SignupSchema),
    });
    const onSubmit = data => {
        alert(JSON.stringify(data));
    };

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-lg-8 px-4">
                    <div className="mt-3 rounded-0">
                        <div className="p-4">
                            <div className="text-center mb-4">
                                <Link to="/">
                                    <img src={logo} style={{ width: "145px" }} className="img-fluid" alt="Logo" />
                                </Link>
                            </div>
                            <div className="text-center w-75 m-auto">
                                <h4 className="text-dark-50 fs-lg text-center mt-0 font-weight-bold">Register now</h4>
                                <p className="text-muted mb-4">Get started absolutely free.</p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" name="firstName" id="firstName" placeholder="First Name" className="form-control" ref={register} />
                                        {errors.firstName && <span className="text-danger">{errors.firstName.message}</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" name="lastName" id="lastName" placeholder="Last Name" className="form-control" ref={register} />
                                        {errors.lastName && <span className="text-danger">{errors.lastName.message}</span>}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-6 mb-3">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" className="form-control" placeholder="Email" ref={register} />
                                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                                    </div>
                                    <div className="col-12 col-lg-6 mb-3">
                                        <label htmlFor="lastName">Website</label>
                                        <input type="text" name="website" id="website" placeholder="Website" className="form-control" ref={register} />
                                        {errors.website && <span className="text-danger">{errors.website.message}</span>}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-6 mb-3">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" className="form-control" placeholder="Password" ref={register} />
                                        {errors.password && <p className="text-danger">{errors.password.message}</p>}
                                    </div>
                                    <div className="col-12 col-lg-6 mb-3">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <input type="password" id="confirmPassword" name="confirmPassword" className="form-control" placeholder="Confirm password" ref={register} />
                                        {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="custom-checkbox">
                                        <input type="checkbox" id="acceptPolicy" name="acceptPolicy" ref={register} /> I agree to <Link className="text-info" to="#">terms & conditions</Link>
                                        <span></span>
                                    </label>
                                    {errors.acceptPolicy && <p className="text-danger">{errors.acceptPolicy.message}</p>}
                                </div>
                                <div className="mb-3">
                                    <label className="custom-checkbox">
                                        <input type="checkbox" id="newsletters" name="newsletters" ref={register} /> Sign up for newsletters
                                    <span></span>
                                    </label>
                                </div>
                                <div className="d-grid mb-0 mt-3 text-center">
                                    <button className="btn btn-warning btn-block text-white w-50 m-auto" type="submit"> <span>Sign Up</span> <i className="fas fa-user-plus"></i></button>
                                </div>
                                <p className="text-center my-4">- OR -</p>
                                <div className="d-grid mb-0 mt-3 text-center">
                                    <Link to="#" className="btn btn-facebook btn-block m-auto w-50"><span className="me-2"><i className="fab fa-facebook-f"></i></span> Sign In with Facebook</Link>
                                </div>
                                <div className="d-grid mb-0 mt-3 text-center">
                                    <Link to="#" className="btn btn-twitter  btn-block m-auto w-50"><span className="me-2"><i className="fab fa-twitter"></i></span> Sign In with Twitter</Link>
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
    );
}

export default Register;
