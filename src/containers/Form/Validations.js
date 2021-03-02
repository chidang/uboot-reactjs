import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

const SignupSchema = yup.object().shape({
    firstName: yup.string().required("First Name is a required field"),
    lastName: yup.string().required("Last Name is a required field"),
    email: yup.string().email("Email must be a valid email").required("Email is a required field"),
    gender: yup.string().required("Gender is a required field"),
    city: yup.string().required("City is a required field"),
    acceptPolicy: yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
    password: yup.string().required("Password is a required field"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    age: yup
        .number()
        .required()
        .positive()
        .integer(),
    website: yup.string().url()
});

const Validations = () => {
    const { register, handleSubmit, setValue, errors } = useForm({
        resolver: yupResolver(SignupSchema),
    });
    const onSubmit = data => {
        alert(JSON.stringify(data));
    };

    return <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-0 fs-base">
                <li className="breadcrumb-item"><Link to="#">Uboot</Link></li>
                <li className="breadcrumb-item"><span>Form</span></li>
                <li className="breadcrumb-item active" aria-current="page">Validation</li>
            </ol>
        </nav>
        <div className="header mb-2">
            <h1 className="header-title h3">
                <i className="bi-star text-primary" /> Validation <sup className="badge bg-primary fw-300 fs-xs">ADDON</sup>
            </h1>
            <p className="mt-2">
                react-hook-form + yup node module
        </p>
        </div>
        <div className="card">
            <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">
                    React hook form validation
          </h4>
                <div className="card-widgets">
                    <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                    <Link className="btn btn-warning" to="#" data-toggle="collapse" data-target="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i className="dripicons-minus" /></Link>
                    <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
                </div>
            </div>
            <div id="cardCollpase1" className="card-body show">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mb-3">
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" className="form-control" ref={register} />
                            {errors.firstName && <span className="text-danger">{errors.firstName.message}</span>}
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" className="form-control" ref={register} />
                            {errors.lastName && <span className="text-danger">{errors.lastName.message}</span>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="age">Age</label>
                            <input type="text" name="age" className="form-control" ref={register} />
                            {errors.age && <span className="text-danger">{errors.age.message}</span>}
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" className="form-control" placeholder="Email" ref={register} />
                            {errors.email && <span className="text-danger">{errors.email.message}</span>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="gender">Gender</label>
                            <select className="form-select" name="gender" ref={register} >
                                <option value="">-- Select gender --</option>
                                <option value={1}>Male</option>
                                <option value={2}>Female</option>
                            </select>
                            {errors.gender && <span className="text-danger">{errors.gender.message}</span>}
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="city">City</label>
                            <select className="form-select" name="city" ref={register} >
                                <option value="">-- Select city --</option>
                                <option value={1}>London</option>
                                <option value={2}>New York</option>
                                <option value={2}>Hanoi</option>
                            </select>
                            {errors.city && <span className="text-danger">{errors.city.message}</span>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className="form-control" placeholder="password" ref={register} />
                            {errors.password && <p className="text-danger">{errors.password.message}</p>}
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" className="form-control" placeholder="Confirm password" ref={register} />
                            {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label className="custom-checkbox custom-checkbox-solid">
                                <input type="checkbox" name="acceptPolicy" ref={register} /> I Accept Terms and Conditions
                    <span />
                            </label>
                            {errors.acceptPolicy && <p className="text-danger">{errors.acceptPolicy.message}</p>}
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>
        </div>
    </>
}

export default Validations;
