import { Link } from "react-router-dom";

const Radios = () => 
<>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb ps-0 fs-base">
        <li className="breadcrumb-item"><a href="#">Uboot</a></li>
        <li className="breadcrumb-item"><span>Forms</span></li>
        <li className="breadcrumb-item active" aria-current="page">Radio</li>
        </ol>
    </nav>
    <div className="header mb-4">
        <h1 className="header-title h3">
        <i className="fab fa-wpforms text-primary" />
        Radio
        </h1>
    </div>
    <div className="row">
        <div className="col-md-6">
            <div className="card">
            <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">Bootstrap <span className="fw-300"><i>Radio</i></span></h4>
                <div className="card-widgets">
                <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
                <a className="btn btn-warning" data-toggle="collapse" data-target="#cardBoostrapRadio" role="button" aria-expanded="false" aria-controls="cardBoostrapRadio"><i className="dripicons-minus" /></a>
                <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
                </div>
            </div>
            <div id="cardBoostrapRadio" className="card-body show">
                <form>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Default radio
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Default checked radio
                    </label>
                </div>
                <label className="fw-700 text-muted mb-2 mt-2">Inline</label>
                <br />
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3" disabled />
                    <label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
                </div>
                </form>
            </div>
            </div>
            <div className="card">
            <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">Custom <span className="fw-300"><i>Radio</i></span></h4>
                <div className="card-widgets">
                <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
                <a className="btn btn-warning" data-toggle="collapse" data-target="#cardCustomRadio" role="button" aria-expanded="false" aria-controls="cardCustomRadio"><i className="dripicons-minus" /></a>
                <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
                </div>
            </div>
            <div id="cardCustomRadio" className="card-body show">
                <form>
                <div className="form-group">
                    <label className="fw-700 text-muted mb-2">Default Radios</label>
                    <div>
                    <label className="custom-radio">
                        <input type="radio" name="customRadio1" /> Default
                        <span />
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="customRadio1" /> Option 2
                        <span />
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="customRadio1" disabled /> Disabled
                        <span />
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="customRadio1" defaultChecked="checked" /> Checked
                        <span />
                    </label>
                    </div>
                </div>
                <div className="form-group">
                    <label className="fw-700 text-muted mb-2 mt-2">Inline Radios</label>
                    <div>
                    <label className="custom-radio d-inline-block me-3">
                        <input type="radio" name="CustomRadio2" /> Option 1
                        <span />
                    </label>
                    <label className="custom-radio d-inline-block me-3">
                        <input type="radio" name="CustomRadio2" /> Option 2
                        <span />
                    </label>
                    <label className="custom-radio d-inline-block me-3">
                        <input type="radio" name="CustomRadio2" /> Option 3
                        <span />
                    </label>
                    </div>
                </div>
                <div className="form-group">
                    <label className="fw-700 text-muted mb-2 mt-2">Inline Radios Checked State</label>
                    <div>
                    <label className="custom-radio d-inline-block me-3">
                        <input type="radio" name="customRadio3" defaultChecked /> Option 1
                        <span />
                    </label>
                    <label className="custom-radio d-inline-block me-3">
                        <input type="radio" name="customRadio3" /> Option 2
                        <span />
                    </label>
                    <label className="custom-radio d-inline-block me-3">
                        <input type="radio" name="customRadio3" defaultChecked /> Option 3
                        <span />
                    </label>
                    </div>
                </div>
                </form>
            </div>
            </div> {/* end card */}
            <div className="card">
            <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">Horizontal <span className="fw-300"><i>Form</i></span></h4>
                <div className="card-widgets">
                <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
                <a className="btn btn-warning" data-toggle="collapse" data-target="#cardHorizontalForm" role="button" aria-expanded="false" aria-controls="cardHorizontalForm"><i className="dripicons-minus" /></a>
                <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
                </div>
            </div>
            <div id="cardHorizontalForm" className="card-body show">
                <form>
                <div className="form-group row">
                    <label className="col-3 fw-700 text-muted">Radios</label>
                    <div className="col-9">
                    <div>
                        <label className="custom-radio d-inline-block me-3">
                        <input type="radio" name="customRadio4" /> Option 1
                        <span />
                        </label>
                        <label className="custom-radio d-inline-block me-3">
                        <input type="radio" name="customRadio4" /> Option 2
                        <span />
                        </label>
                        <label className="custom-radio d-inline-block me-3">
                        <input type="radio" name="customRadio4" defaultChecked="checked" /> Checked
                        <span />
                        </label>
                        <label className="custom-radio d-inline-block me-3">
                        <input type="radio" name="customRadio4" disabled /> Disabled
                        <span />
                        </label>
                    </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-3 fw-700 text-muted">Inline Radios</label>
                    <div className="col-9">
                    <div>
                        <label className="custom-radio d-inline-block me-3">
                        <input type="radio" name="customRadio5" /> Option 1
                        <span />
                        </label>
                        <label className="custom-radio d-inline-block me-3">
                        <input type="radio" name="customRadio5" /> Option 2
                        <span />
                        </label>
                        <label className="custom-radio d-inline-block me-3">
                        <input type="radio" name="customRadio5" /> Option 3
                        <span />
                        </label>
                    </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-3 fw-700 text-muted">Inline Radios Checked State</label>
                    <div className="col-9">
                    <div>
                        <label className="custom-radio d-inline-block me-3">
                        <input type="radio" name="customRadio6" /> Option 1
                        <span />
                        </label>
                        <label className="custom-radio d-inline-block me-3">
                        <input type="radio" name="customRadio6" defaultChecked="checked" /> Option 2
                        <span />
                        </label>
                        <label className="custom-radio d-inline-block me-3">
                        <input type="radio" name="customRadio6" /> Option 3
                        <span />
                        </label>
                    </div>
                    </div>
                </div>
                </form>
            </div>
            </div> {/* end card */}
        </div>
        <div className="col-md-6">
            <div className="card">
            <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">Color <span className="fw-300"><i>Options</i></span></h4>
                <div className="card-widgets">
                <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
                <a className="btn btn-warning" data-toggle="collapse" data-target="#cardColorOptionRadio" role="button" aria-expanded="false" aria-controls="cardColorOptionRadio"><i className="dripicons-minus" /></a>
                <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
                </div>
            </div>
            <div id="cardColorOptionRadio" className="card-body show">
                <form>
                <div className="form-group">
                    <label className="fw-700 text-muted mb-2">Default Radios</label>
                    <div>
                    <label className="custom-radio">
                        <input type="radio" name="customRadio7" /> Default
                        <span />
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="customRadio7" defaultChecked="checked" /> Checked
                        <span />
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="customRadio7" disabled="disabled" /> Disabled
                        <span />
                    </label>
                    <label className="custom-radio custom-radio-success">
                        <input type="radio" name="customRadio7" /> Success state
                        <span />
                    </label>
                    <label className="custom-radio custom-radio-info">
                        <input type="radio" name="customRadio7" /> Info state
                        <span />
                    </label>
                    <label className="custom-radio custom-radio-warning">
                        <input type="radio" name="customRadio7" /> Warning state
                        <span />
                    </label>
                    <label className="custom-radio custom-radio-danger">
                        <input type="radio" name="customRadio7" /> Danger state
                        <span />
                    </label>
                    </div>
                </div>
                <div className="form-group">
                    <label className="fw-700 text-muted mb-2 mt-2">Bold Radios</label>
                    <div>
                    <label className="custom-radio custom-radio-bold">
                        <input type="radio" name="customRadio8" /> Default
                        <span />
                    </label>
                    <label className="custom-radio custom-radio-bold">
                        <input type="radio" name="customRadio8" defaultChecked="checked" /> Checked
                        <span />
                    </label>
                    <label className="custom-radio custom-radio-bold">
                        <input type="radio" name="customRadio8" disabled="disabled" /> Disabled
                        <span />
                    </label>
                    <label className="custom-radio custom-radio-bold custom-radio-success">
                        <input type="radio" name="customRadio8" /> Success state
                        <span />
                    </label>
                    <label className="custom-radio custom-radio-bold custom-radio-info">
                        <input type="radio" name="customRadio8" /> Info state
                        <span />
                    </label>
                    <label className="custom-radio custom-radio-bold custom-radio-warning">
                        <input type="radio" name="customRadio8" /> Warning state
                        <span />
                    </label>
                    <label className="custom-radio custom-radio-bold custom-radio-danger">
                        <input type="radio" name="customRadio8" /> Danger state
                        <span />
                    </label>
                    </div>
                </div>
                <div className="form-group">
                    <label className="fw-700 text-muted mb-2 mt-2">Solid Radios</label>
                    <div>
                    <label className="custom-radio custom-radio-solid">
                        <input type="radio" name="customRadio9" /> Default
                        <span />
                    </label>
                    <label className="custom-radio custom-radio-solid">
                        <input type="radio" name="customRadio9" defaultChecked="checked" /> Checked
                        <span />
                    </label>
                    <label className="custom-radio custom-radio-solid">
                        <input type="radio" name="customRadio9" disabled="disabled" /> Disabled
                        <span />
                    </label>
                    <label className="custom-radio custom-radio-solid-success">
                        <input type="radio" name="customRadio9" /> Success state
                        <span />
                    </label>
                    <label className="custom-radio custom-radio-solid-info">
                        <input type="radio" name="customRadio9" /> Info state
                        <span />
                    </label>
                    <label className="custom-radio custom-radio-solid-warning">
                        <input type="radio" name="customRadio9" /> Warning state
                        <span />
                    </label>
                    <label className="custom-radio custom-radio-solid-danger">
                        <input type="radio" name="customRadio9" /> Danger state
                        <span />
                    </label>
                    </div>
                </div>
                </form>
            </div>
            </div> {/* end card */}
        </div>
        </div>

</>

export default Radios;
