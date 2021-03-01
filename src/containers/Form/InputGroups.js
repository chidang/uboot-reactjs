import { Link } from "react-router-dom";

const InputGroups = () => 
<>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb ps-0 fs-base">
        <li className="breadcrumb-item"><Link to="#">Uboot</Link></li>
        <li className="breadcrumb-item"><span>Forms</span></li>
        <li className="breadcrumb-item active" aria-current="page">Input Group</li>
        </ol>
    </nav>
    <div className="header mb-4">
        <h1 className="header-title h3">
        <i className="fab fa-wpforms text-primary" />
        Input Group
        </h1>
    </div>
    <div className="row">
        <div className="col-md-6">
            <div className="card">
            <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">Basic</h4>
                <div className="card-widgets">
                <Link className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardInputGroup" role="button" aria-expanded="false" aria-controls="cardInputGroup"><i className="dripicons-minus" /></Link>
                <Link className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></Link>
                </div>
            </div>
            <div id="cardInputGroup" className="card-body show">
                <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                </div>
                <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">$</span>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                    <span className="input-group-text">.00</span>
                </div>
                <div className="input-group">
                    <span className="input-group-text">With textarea</span>
                    <textarea className="form-control" aria-label="With textarea" placeholder={""} />
                </div>
                </form>
            </div>
            </div>
            <div className="card">
            <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">Checkboxes and radios</h4>
                <div className="card-widgets">
                <Link className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardCheckboxAndRadio" role="button" aria-expanded="false" aria-controls="cardCheckboxAndRadio"><i className="dripicons-minus" /></Link>
                <Link className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></Link>
                </div>
            </div>
            <div id="cardCheckboxAndRadio" className="card-body show">
                <form>
                <div className="input-group mb-3">
                    <div className="input-group-text">
                    <label className="custom-checkbox d-inline-block m-0">
                        <input type="checkbox" defaultChecked />
                        <span />
                    </label>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with checkbox" />
                </div>
                <div className="input-group">
                    <div className="input-group-text">
                    <label className="custom-radio d-inline-block h-100 m-0">
                        <input type="radio" />
                        <span />
                    </label>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with radio button" />
                </div>
                </form>
            </div>
            </div>
            <div className="card">
            <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">Button addons</h4>
                <div className="card-widgets">
                <Link className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardButtonRadio" role="button" aria-expanded="false" aria-controls="cardButtonRadio"><i className="dripicons-minus" /></Link>
                <Link className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></Link>
                </div>
            </div>
            <div id="cardButtonRadio" className="card-body show">
                <form>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
                    <input type="text" className="form-control" placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button">Button</button>
                    <button className="btn btn-outline-secondary" type="button">Button</button>
                    <input type="text" className="form-control" placeholder aria-label="Example text with two button addons" />
                </div>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" />
                    <button className="btn btn-outline-secondary" type="button">Button</button>
                    <button className="btn btn-outline-secondary" type="button">Button</button>
                </div>
                </form>
            </div>
            </div>
            <div className="card">
            <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">Segmented buttons</h4>
                <div className="card-widgets">
                <Link className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardSegmentedButton" role="button" aria-expanded="false" aria-controls="cardSegmentedButton"><i className="dripicons-minus" /></Link>
                <Link className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></Link>
                </div>
            </div>
            <div id="cardSegmentedButton" className="card-body show">
                <form>
                <div className="input-group mb-3">
                    <button type="button" className="btn btn-outline-secondary">Action</button>
                    <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu">
                    <li><Link className>="dropdown-item" href="#">Action</Link></li>
                    <li><Link className>="dropdown-item" href="#">Another action</Link></li>
                    <li><Link className>="dropdown-item" href="#">Something else here</Link></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><Link className>="dropdown-item" href="#">Separated link</Link></li>
                    </ul>
                    <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                </div>
                <div className="input-group">
                    <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                    <button type="button" className="btn btn-outline-secondary">Action</button>
                    <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right">
                    <li><Link className>="dropdown-item" href="#">Action</Link></li>
                    <li><Link className>="dropdown-item" href="#">Another action</Link></li>
                    <li><Link className>="dropdown-item" href="#">Something else here</Link></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><Link className>="dropdown-item" href="#">Separated link</Link></li>
                    </ul>
                </div>
                </form>
            </div>
            </div>
            <div className="card">
            <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">Custom select</h4>
                <div className="card-widgets">
                <Link className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardCustomSelect" role="button" aria-expanded="false" aria-controls="cardCustomSelect"><i className="dripicons-minus" /></Link>
                <Link className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></Link>
                </div>
            </div>
            <div id="cardCustomSelect" className="card-body show">
                <form>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                    <select className="form-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <select className="form-select" id="inputGroupSelect02">
                    <option selected>Choose...</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                    </select>
                    <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-sm btn-outline-secondary" type="button">Button</button>
                    <select className="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                    <option selected>Choose...</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                    </select>
                </div>
                <div className="input-group">
                    <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option selected>Choose...</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                    </select>
                    <button className="btn btn-sm btn-outline-secondary" type="button">Button</button>
                </div>
                </form>
            </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="card">
            <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">Sizing</h4>
                <div className="card-widgets">
                <Link className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardSizing" role="button" aria-expanded="false" aria-controls="cardSizing"><i className="dripicons-minus" /></Link>
                <Link className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></Link>
                </div>
            </div>
            <div id="cardSizing" className="card-body show">
                <form>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group input-group-lg">
                    <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                </div>
                </form>
            </div>
            </div>
            <div className="card">
            <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">Multiple inputs</h4>
                <div className="card-widgets">
                <Link className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardMultipleInputs" role="button" aria-expanded="false" aria-controls="cardMultipleInputs"><i className="dripicons-minus" /></Link>
                <Link className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></Link>
                </div>
            </div>
            <div id="cardMultipleInputs" className="card-body show">
                <form>
                <div className="input-group">
                    <span className="input-group-text">First and last name</span>
                    <input type="text" aria-label="First name" className="form-control" />
                    <input type="text" aria-label="Last name" className="form-control" />
                </div>
                </form>
            </div>
            </div>
            <div className="card">
            <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">Multiple addons</h4>
                <div className="card-widgets">
                <Link className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardMultipleAddons" role="button" aria-expanded="false" aria-controls="cardMultipleAddons"><i className="dripicons-minus" /></Link>
                <Link className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></Link>
                </div>
            </div>
            <div id="cardMultipleAddons" className="card-body show">
                <form>
                <div className="input-group mb-3">
                    <span className="input-group-text">$</span>
                    <span className="input-group-text">0.00</span>
                    <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                </div>
                <div className="input-group">
                    <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                    <span className="input-group-text">$</span>
                    <span className="input-group-text">0.00</span>
                </div>
                </form>
            </div>
            </div>
            <div className="card">
            <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">Buttons with dropdowns</h4>
                <div className="card-widgets">
                <Link className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardBottonWithDropdown" role="button" aria-expanded="false" aria-controls="cardBottonWithDropdown"><i className="dripicons-minus" /></Link>
                <Link className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></Link>
                </div>
            </div>
            <div id="cardBottonWithDropdown" className="card-body show">
                <form>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">Dropdown</button>
                    <ul className="dropdown-menu">
                    <li><Link className>="dropdown-item" href="#">Action</Link></li>
                    <li><Link className>="dropdown-item" href="#">Another action</Link></li>
                    <li><Link className>="dropdown-item" href="#">Something else here</Link></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><Link className>="dropdown-item" href="#">Separated link</Link></li>
                    </ul>
                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">Dropdown</button>
                    <ul className="dropdown-menu dropdown-menu-right">
                    <li><Link className>="dropdown-item" href="#">Action</Link></li>
                    <li><Link className>="dropdown-item" href="#">Another action</Link></li>
                    <li><Link className>="dropdown-item" href="#">Something else here</Link></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><Link className>="dropdown-item" href="#">Separated link</Link></li>
                    </ul>
                </div>
                <div className="input-group">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">Dropdown</button>
                    <ul className="dropdown-menu">
                    <li><Link className>="dropdown-item" href="#">Action before</Link></li>
                    <li><Link className>="dropdown-item" href="#">Another action before</Link></li>
                    <li><Link className>="dropdown-item" href="#">Something else here</Link></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><Link className>="dropdown-item" href="#">Separated link</Link></li>
                    </ul>
                    <input type="text" className="form-control" aria-label="Text input with 2 dropdown buttons" />
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">Dropdown</button>
                    <ul className="dropdown-menu dropdown-menu-right">
                    <li><Link className>="dropdown-item" href="#">Action</Link></li>
                    <li><Link className>="dropdown-item" href="#">Another action</Link></li>
                    <li><Link className>="dropdown-item" href="#">Something else here</Link></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><Link className>="dropdown-item" href="#">Separated link</Link></li>
                    </ul>
                </div>
                </form>
            </div>
            </div>
            <div className="card">
            <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">Custom file input</h4>
                <div className="card-widgets">
                <Link className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardCustomFileInput" role="button" aria-expanded="false" aria-controls="cardCustomFileInput"><i className="dripicons-minus" /></Link>
                <Link className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></Link>
                </div>
            </div>
            <div id="cardCustomFileInput" className="card-body show">
                <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                    <div className="form-file">
                    <input type="file" className="form-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                    <label className="form-file-label" htmlFor="inputGroupFile01">
                        <span className="form-file-text">Choose file...</span>
                        <span className="form-file-button">Browse</span>
                    </label>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <div className="form-file">
                    <input type="file" className="form-file-input" id="inputGroupFile02" />
                    <label className="form-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">
                        <span className="form-file-text">Choose file...</span>
                        <span className="form-file-button">Browse</span>
                    </label>
                    </div>
                    <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-sm btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
                    <div className="form-file">
                    <input type="file" className="form-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" />
                    <label className="form-file-label" htmlFor="inputGroupFile03">
                        <span className="form-file-text">Choose file...</span>
                        <span className="form-file-button">Browse</span>
                    </label>
                    </div>
                </div>
                <div className="input-group">
                    <div className="form-file">
                    <input type="file" className="form-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
                    <label className="form-file-label" htmlFor="inputGroupFile04">
                        <span className="form-file-text">Choose file...</span>
                        <span className="form-file-button">Browse</span>
                    </label>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>

</>

export default InputGroups;
