import { Link } from "react-router-dom";

const CheckBoxs = () =>
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-0 fs-base">
                <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
                <li className="breadcrumb-item"><span>Forms</span></li>
                <li className="breadcrumb-item active" aria-current="page">Checkbox</li>
            </ol>
        </nav>
        <div className="d-flex header justify-content-between mb-4">
            <h1 className="header-title h3">
                <i className="fab fa-wpforms text-primary" /> Checkbox
        </h1>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header justify-content-between">
                        <h4 className="fw-700 m-0 fs-base">Bootstrap <span className="fw-300"><i>Checkbox</i></span></h4>
                        <div className="card-widgets">
                            <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                            <Link className="btn btn-warning" data-toggle="collapse" to="#" data-target="#cardBoostrapCheckbox" role="button" aria-expanded="false" aria-controls="cardBoostrapCheckbox"><i className="dripicons-minus" /></Link>
                            <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
                        </div>
                    </div>
                    <div id="cardBoostrapCheckbox" className="card-body show">
                        <form>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Default checkbox
                    </label>
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Checked checkbox
                    </label>
                            </div>
                            <label className="fw-700 text-muted mb-2 mt-2">Switches</label>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox input</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
                            </div>
                            <div className="form-check form-switch mb-3">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" defaultChecked disabled />
                                <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
                            </div>
                            <label className="fw-700 text-muted mb-2 mt-2">Inline</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" placeholder="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" placeholder="option2" />
                                <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" placeholder="option3" disabled />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header justify-content-between">
                        <h4 className="fw-700 m-0 fs-base">Custom <span className="fw-300"><i>Checkbox</i></span></h4>
                        <div className="card-widgets">
                            <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                            <Link className="btn btn-warning" data-toggle="collapse" to="#" data-target="#cardCustomCheckbox" role="button" aria-expanded="false" aria-controls="cardCustomCheckbox"><i className="dripicons-minus" /></Link>
                            <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
                        </div>
                    </div>
                    <div id="cardCustomCheckbox" className="card-body show">
                        <form>
                            <div className="form-group">
                                <label className="fw-700 text-muted mb-2">Default Checkboxes</label>
                                <div>
                                    <label className="custom-checkbox">
                                        <input type="checkbox" /> Default
                        <span />
                                    </label>
                                    <label className="custom-checkbox">
                                        <input type="checkbox" /> Option 2
                        <span />
                                    </label>
                                    <label className="custom-checkbox">
                                        <input type="checkbox" disabled /> Disabled
                        <span />
                                    </label>
                                    <label className="custom-checkbox">
                                        <input type="checkbox" defaultChecked="checked" /> Checked
                        <span />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="fw-700 text-muted mb-2 mt-2">Inline Checkboxes</label>
                                <div>
                                    <label className="custom-checkbox d-inline-block me-3">
                                        <input type="checkbox" /> Option 1
                        <span />
                                    </label>
                                    <label className="custom-checkbox d-inline-block me-3">
                                        <input type="checkbox" /> Option 2
                        <span />
                                    </label>
                                    <label className="custom-checkbox d-inline-block me-3">
                                        <input type="checkbox" /> Option 3
                        <span />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="fw-700 text-muted mb-2 mt-2">Inline Checkboxes Checked State</label>
                                <div>
                                    <label className="custom-checkbox d-inline-block me-3">
                                        <input type="checkbox" defaultChecked /> Option 1
                        <span />
                                    </label>
                                    <label className="custom-checkbox d-inline-block me-3">
                                        <input type="checkbox" /> Option 2
                        <span />
                                    </label>
                                    <label className="custom-checkbox d-inline-block me-3">
                                        <input type="checkbox" defaultChecked /> Option 3
                        <span />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="fw-700 text-muted mb-2 mt-2">Switches</label>
                                <div>
                                    <div className="custom-switcher">
                                        <input type="checkbox" name="custom-switcher-1" id="custom-switcher-1" defaultChecked placeholder={1} />
                                        <label htmlFor="custom-switcher-1" />
                                    </div>
                                    <div className="custom-switcher custom-switcher-success">
                                        <input type="checkbox" name="custom-switcher-2" id="custom-switcher-2" defaultChecked placeholder={1} />
                                        <label htmlFor="custom-switcher-2" />
                                    </div>
                                    <div className="custom-switcher custom-switcher-info">
                                        <input type="checkbox" name="custom-switcher-3" id="custom-switcher-3" defaultChecked placeholder={1} />
                                        <label htmlFor="custom-switcher-3" />
                                    </div>
                                    <div className="custom-switcher custom-switcher-danger">
                                        <input type="checkbox" name="custom-switcher-4" id="custom-switcher-4" defaultChecked placeholder={1} />
                                        <label htmlFor="custom-switcher-4" />
                                    </div>
                                    <div className="custom-switcher custom-switcher-warning">
                                        <input type="checkbox" name="custom-switcher-5" id="custom-switcher-5" defaultChecked placeholder={1} />
                                        <label htmlFor="custom-switcher-5" />
                                    </div>
                                    <div className="custom-switcher">
                                        <input type="checkbox" name="custom-switcher-6" id="custom-switcher-6" defaultChecked placeholder={1} disabled />
                                        <label htmlFor="custom-switcher-6" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> {/* end card */}
                <div className="card">
                    <div className="card-header justify-content-between">
                        <h4 className="fw-700 m-0 fs-base">Horizontal <span className="fw-300"><i>Form</i></span></h4>
                        <div className="card-widgets">
                            <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                            <Link className="btn btn-warning" data-toggle="collapse" to="#" data-target="#cardHorizontalForm" role="button" aria-expanded="false" aria-controls="cardHorizontalForm"><i className="dripicons-minus" /></Link>
                            <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
                        </div>
                    </div>
                    <div id="cardHorizontalForm" className="card-body show">
                        <form>
                            <div className="form-group row">
                                <label className="col-3 fw-700 text-muted">Checkboxes</label>
                                <div className="col-9">
                                    <div>
                                        <label className="custom-checkbox d-inline-block me-3">
                                            <input type="checkbox" /> Option 1
                        <span />
                                        </label>
                                        <label className="custom-checkbox d-inline-block me-3">
                                            <input type="checkbox" /> Option 2
                        <span />
                                        </label>
                                        <label className="custom-checkbox d-inline-block me-3">
                                            <input type="checkbox" defaultChecked="checked" /> Checked
                        <span />
                                        </label>
                                        <label className="custom-checkbox d-inline-block me-3">
                                            <input type="checkbox" disabled /> Disabled
                        <span />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-3 fw-700 text-muted">Inline Checkboxes</label>
                                <div className="col-9">
                                    <div>
                                        <label className="custom-checkbox d-inline-block me-3">
                                            <input type="checkbox" /> Option 1
                        <span />
                                        </label>
                                        <label className="custom-checkbox d-inline-block me-3">
                                            <input type="checkbox" /> Option 2
                        <span />
                                        </label>
                                        <label className="custom-checkbox d-inline-block me-3">
                                            <input type="checkbox" /> Option 3
                        <span />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-3 fw-700 text-muted">Inline Checkboxes Checked State</label>
                                <div className="col-9">
                                    <div>
                                        <label className="custom-checkbox d-inline-block me-3">
                                            <input type="checkbox" /> Option 1
                        <span />
                                        </label>
                                        <label className="custom-checkbox d-inline-block me-3">
                                            <input type="checkbox" defaultChecked="checked" /> Option 2
                        <span />
                                        </label>
                                        <label className="custom-checkbox d-inline-block me-3">
                                            <input type="checkbox" /> Option 3
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
                            <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                            <Link className="btn btn-warning" data-toggle="collapse" to="#" data-target="#cardColorOption" role="button" aria-expanded="false" aria-controls="cardColorOption"><i className="dripicons-minus" /></Link>
                            <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
                        </div>
                    </div>
                    <div id="cardColorOption" className="card-body show">
                        <form>
                            <div className="form-group">
                                <label className="fw-700 text-muted mb-2">Default Checkboxes</label>
                                <div>
                                    <label className="custom-checkbox">
                                        <input type="checkbox" /> Default
                        <span />
                                    </label>
                                    <label className="custom-checkbox">
                                        <input type="checkbox" defaultChecked="checked" /> Checked
                        <span />
                                    </label>
                                    <label className="custom-checkbox">
                                        <input type="checkbox" disabled="disabled" /> Disabled
                        <span />
                                    </label>
                                    <label className="custom-checkbox custom-checkbox-success">
                                        <input type="checkbox" /> Success state
                        <span />
                                    </label>
                                    <label className="custom-checkbox custom-checkbox-info">
                                        <input type="checkbox" /> Info state
                        <span />
                                    </label>
                                    <label className="custom-checkbox custom-checkbox-warning">
                                        <input type="checkbox" /> Warning state
                        <span />
                                    </label>
                                    <label className="custom-checkbox custom-checkbox-danger">
                                        <input type="checkbox" /> Danger state
                                        <span />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="fw-700 text-muted mb-2 mt-2">Bold Checkboxes</label>
                                <div>
                                    <label className="custom-checkbox custom-checkbox-bold">
                                        <input type="checkbox" /> Default
                                        <span />
                                    </label>
                                    <label className="custom-checkbox custom-checkbox-bold">
                                        <input type="checkbox" defaultChecked="checked" /> Checked
                                        <span />
                                    </label>
                                    <label className="custom-checkbox custom-checkbox-bold">
                                        <input type="checkbox" disabled="disabled" /> Disabled
                                        <span />
                                    </label>
                                    <label className="custom-checkbox custom-checkbox-bold custom-checkbox-success">
                                        <input type="checkbox" /> Success state
                                        <span />
                                    </label>
                                    <label className="custom-checkbox custom-checkbox-bold custom-checkbox-info">
                                        <input type="checkbox" /> Info state
                                        <span />
                                    </label>
                                    <label className="custom-checkbox custom-checkbox-bold custom-checkbox-warning">
                                        <input type="checkbox" /> Warning state
                                        <span />
                                    </label>
                                    <label className="custom-checkbox custom-checkbox-bold custom-checkbox-danger">
                                        <input type="checkbox" /> Danger state
                                        <span />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="fw-700 text-muted mb-2 mt-2">Solid Checkboxes</label>
                                <div>
                                    <label className="custom-checkbox custom-checkbox-solid">
                                        <input type="checkbox" /> Default
                                        <span />
                                    </label>
                                    <label className="custom-checkbox custom-checkbox-solid">
                                        <input type="checkbox" defaultChecked="checked" /> Checked
                                        <span />
                                    </label>
                                    <label className="custom-checkbox custom-checkbox-solid">
                                        <input type="checkbox" disabled="disabled" /> Disabled
                                        <span />
                                    </label>
                                    <label className="custom-checkbox custom-checkbox-solid-success">
                                        <input type="checkbox" /> Success state
                                        <span />
                                    </label>
                                    <label className="custom-checkbox custom-checkbox-solid-info">
                                        <input type="checkbox" /> Info state
                                        <span />
                                    </label>
                                    <label className="custom-checkbox custom-checkbox-solid-warning">
                                        <input type="checkbox" /> Warning state
                                        <span />
                                    </label>
                                    <label className="custom-checkbox custom-checkbox-solid-danger">
                                        <input type="checkbox" /> Danger state
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

export default CheckBoxs;
