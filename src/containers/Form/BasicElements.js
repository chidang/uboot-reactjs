import { Link } from "react-router-dom";

const BasicElements = () =>
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-0 fs-base">
                <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
                <li className="breadcrumb-item"><span>Forms</span></li>
                <li className="breadcrumb-item active" aria-current="page">Basic Element</li>
            </ol>
        </nav>
        <div className="d-flex header justify-content-between mb-4">
            <h1 className="header-title h3">
                <i className="fab fa-wpforms text-primary" /> Basic Element
        </h1>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header justify-content-between">
                        <h4 className="fw-700 m-0 fs-base">Basic  <span className="fw-300"><i>Inputs</i></span></h4>
                        <div className="card-widgets">
                            <Link className="btn btn-success" to="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                            <Link className="btn btn-warning" data-toggle="collapse" to="#" data-target="#cardBasicInput" role="button" aria-expanded="false" aria-controls="cardBasicInput"><i className="dripicons-minus" /></Link>
                            <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
                        </div>
                    </div>
                    <div id="cardBasicInput" className="card-body show">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="example-input">Text</label>
                                <input type="text" id="example-input" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="example-input-email">Email</label>
                                <input type="email" id="example-input-email" name="example-input-email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="example-input-password">Password</label>
                                <input type="password" id="example-input-password" className="form-control" placeholder="password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="example-input-palaceholder">Placeholder</label>
                                <input type="text" id="example-input-palaceholder" className="form-control" placeholder="placeholder" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="example-textarea">Text area</label>
                                <textarea className="form-control" id="example-textarea" rows={3} placeholder={""} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="example-input-helping">Input with helping text</label>
                                <input type="text" id="example-input-helping" className="form-control" />
                                <span className="help-block">
                                    <small className="text-primary">A block of help text that breaks onto a new line and may extend beyond one line.</small>
                                </span>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="example-select">Input Select</label>
                                <select className="form-select" id="example-select">
                                    <option selected>Open this select menu</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="example-multiselect">Multiple Select</label>
                                <select className="form-select" id="example-multiselect" multiple>
                                    <option selected>Open this select menu</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>
                            </div>
                            <div className="form-file">
                                <div className="input-group mb-3">
                                    <label className="input-group-text" for="inputGroupFile01">Upload</label>
                                    <input type="file" className="form-control" id="inputGroupFile01" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header justify-content-between">
                        <h4 className="fw-700 m-0 fs-base">Input  <span className="fw-300"><i>Sizes</i></span></h4>
                        <div className="card-widgets">
                            <Link className="btn btn-success" to="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                            <Link className="btn btn-warning" data-toggle="collapse" to="#" data-target="#cardInputSize" role="button" aria-expanded="false" aria-controls="cardInputSize"><i className="dripicons-minus" /></Link>
                            <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
                        </div>
                    </div>
                    <div id="cardInputSize" className="card-body show">
                        <div className="bd-callout bd-callout-highlight">
                            <p>Set heights using classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.</p>
                        </div>
                        <form>
                            <div className="mb-3">
                                <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
                            </div>
                            <div className="mb-3">
                                <input className="form-control" type="text" placeholder="Default input" aria-label="deafult input example" />
                            </div>
                            <div className="mb-3">
                                <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example" />
                            </div>
                            <div className="mb-3">
                                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                    <option selected>Open this select menu</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Open this select menu</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <select className="form-select" multiple aria-label="multiple select example">
                                    <option selected>Open this select menu</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <select className="form-select" size={3} aria-label="size 3 select example">
                                    <option selected>Open this select menu</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header justify-content-between">
                        <h4 className="fw-700 m-0 fs-base">Html5 <span className="fw-300"><i>Inputs</i></span></h4>
                        <div className="card-widgets">
                            <Link className="btn btn-success" to="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                            <Link className="btn btn-warning" data-toggle="collapse" to="#" data-target="#cardHtml5Input" role="button" aria-expanded="false" aria-controls="cardHtml5Input"><i className="dripicons-minus" /></Link>
                            <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
                        </div>
                    </div>
                    <div id="cardHtml5Input" className="card-body show">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="example-input-date">Date</label>
                                <input className="form-control" id="example-input-date" type="date" name="date" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="example-input-month">Month</label>
                                <input className="form-control" id="example-input-month" type="month" name="month" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="example-input-time">Time</label>
                                <input className="form-control" id="example-input-time" type="time" name="time" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="example-input-week">Week</label>
                                <input className="form-control" id="example-input-week" type="week" name="week" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="example-input-number">Number</label>
                                <input className="form-control" id="example-input-number" type="number" name="number" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleColorInput" className="form-label">Color picker</label>
                                <input type="color" className="form-control form-control-color" id="exampleColorInput" placeholder="#563d7c" title="Choose your color" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header justify-content-between">
                        <h4 className="fw-700 m-0 fs-base">Input <span className="fw-300"><i>range</i></span></h4>
                        <div className="card-widgets">
                            <Link className="btn btn-success" to="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                            <Link className="btn btn-warning" data-toggle="collapse" to="#" data-target="#cardInputRange" role="button" aria-expanded="false" aria-controls="cardInputRange"><i className="dripicons-minus" /></Link>
                            <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
                        </div>
                    </div>
                    <div id="cardInputRange" className="card-body show">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="customRange1" className="form-label">Basic</label>
                                <input type="range" className="form-range" id="customRange1" />
                            </div>
                            <div className="mb-3">
                                <div className="bd-callout bd-callout-highlight">
                                    <p>Range inputs have implicit values for <code>min</code> and <code>max</code>—<code>0</code> and <code>100</code>, respectively. You may specify new values for those using the <code>min</code> and <code>max</code> attributes.</p>
                                </div>
                                <label htmlFor="customRange2" className="form-label">Min and max</label>
                                <input type="range" className="form-range" min={0} max={5} id="customRange2" />
                            </div>
                            <div className="mb-3">
                                <div className="bd-callout bd-callout-highlight">
                                    <p>By default, range inputs “snap” to integer values. To change this, you can specify a <code>step</code> value. In the example below, we double the number of steps by using <code>step="0.5"</code>.</p>
                                </div>
                                <label htmlFor="customRange3" className="form-label">Steps</label>
                                <input type="range" className="form-range" min={0} max={5} step="0.5" id="customRange3" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>

export default BasicElements;
