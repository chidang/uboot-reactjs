import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../../assets/images/logo.svg";

const SigninSchema = yup.object().shape({
  email: yup.string().email("Email must be a valid email").required("Email is a required field"),
  password: yup.string().required("Password is a required field")
});

const Login = () => {
  const { register, handleSubmit, setValue, errors } = useForm({
    resolver: yupResolver(SigninSchema),
  });
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return <div className="container">
    <div className="row justify-content-center align-items-center vh-100">
      <div className="col-xl-4 col-lg-5 px-4">
        <div className="card shadow-sm rounded-0">
          <div className="card-body p-4">
            <div className="text-center mb-4">
              <Link to="/">
                <img src={logo} style={{ width: "145px" }} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="text-center m-auto">
              <h3 className="text-dark-50 text-center mt-0 font-weight-bold">Sign In</h3>
              <p className="text-muted mb-4">Enter your email address and password to access admin panel.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group mt-4">
                <span className="input-group-text" id="basic-addon1"><i className="bi-envelope"></i></span>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email address"
                  ref={register}
                />
              </div>
              {errors.email && <span className="text-danger">{errors.email.message}</span>}
              <div className="input-group mt-4">
                <span className="input-group-text" id="basic-addon2"><i className="bi-shield-lock"></i></span>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                  ref={register}
                />
              </div>
              {errors.password && <p className="text-danger">{errors.password.message}</p>}
              <div className="my-4 justify-content-between d-flex">
                <label className="custom-checkbox">
                  <input type="checkbox" id="remember-me" /> Keep me logged in
                <span></span>
                </label>
                <Link to="/auth/forgot-password" className="text-info ms-1">Forgot your password?</Link>
              </div>
              <div className="d-grid mb-0 text-center">
                <button
                  className="btn btn-warning btn-block text-white"
                  type="submit"
                >
                  <span>Sign In</span> <i className="fas fa-sign-in-alt"></i>
                </button>
              </div>
              <p className="text-center my-4">- OR -</p>
              <div className="d-grid mx-auto">
                <Link to="#" className="btn btn-facebook btn-block mb-4"><span className="me-2"><i className="fab fa-facebook-f"></i></span> Sign In with Facebook</Link>
                <Link to="#" className="btn btn-twitter  btn-block mb-4"><span className="me-2"><i className="fab fa-twitter"></i></span> Sign In with Twitter</Link>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p className="text-muted">Don't have an account? <Link to="/auth/register" className="text-info ms-1">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Login;
