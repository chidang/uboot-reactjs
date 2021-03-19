import { Link } from "react-router-dom";

const BreadCrumbs = () => 
<>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb ps-0 fs-base">
        <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
        <li className="breadcrumb-item"><span>UI Kit</span></li>
        <li className="breadcrumb-item active" aria-current="page">Breadcrum</li>
        </ol>
    </nav>
    <div className="d-flex header justify-content-between mb-4">
        <h1 className="header-title h3">
        <i className="bi-bookmarks text-primary" /> Breadcrum
        </h1>
    </div>
    <div className="row">
        <div className="col-lg-6">
            <div className="card">
                <div className="card-header justify-content-between">
                    <h4 className="fw-700 m-0 fs-base">
                    Breadcrumb <span className="fw-300"><i>Basic</i></span>
                    </h4>
                    <div className="card-widgets">
                    <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                    <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardBreadcrumb1" role="button" aria-expanded="false" aria-controls="cardBreadcrumb1"><i className="dripicons-minus" /></Link>
                    <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
                    </div>
                </div>
                <div id="cardBreadcrumb1" className="card-body show">
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">Library</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                    </nav>
                </div>{/* end card-body */}
            </div> {/* end card */}
            <div className="card">
                <div className="card-header justify-content-between">
                    <h4 className="fw-700 m-0 fs-base">
                    Breadcrumb <span className="fw-300"><i>Outlines</i></span>
                    </h4>
                    <div className="card-widgets">
                    <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                    <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardBreadcrumb2" role="button" aria-expanded="false" aria-controls="cardBreadcrumb2"><i className="dripicons-minus" /></Link>
                    <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
                    </div>
                </div>
                <div id="cardBreadcrumb2" className="card-body show">
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb border border-info p-2 rounded">
                        <li className="breadcrumb-item"><Link to="#">
                            <i className="bi-house me-1 fs-sm" />
                            Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">
                            <i className="bi-book me-1 fs-sm" /> Library</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">
                        <span><i className="bi-save fs-sm" /> Data</span></li>
                    </ol>
                    </nav>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb border border-primary p-2 rounded">
                        <li className="breadcrumb-item"><Link to="#">
                            <i className="bi-house me-1 fs-sm" />
                            Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">
                            <i className="bi-book me-1 fs-sm" /> Library</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">
                        <span><i className="bi-save fs-sm" /> Data</span></li>
                    </ol>
                    </nav>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb border border-warning p-2 rounded">
                        <li className="breadcrumb-item"><Link to="#">
                            <i className="bi-house me-1 fs-sm" />
                            Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">
                            <i className="bi-book me-1 fs-sm" /> Library</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">
                        <span><i className="bi-save fs-sm" /> Data</span></li>
                    </ol>
                    </nav>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb border border-danger p-2 rounded">
                        <li className="breadcrumb-item"><Link to="#">
                            <i className="bi-house me-1 fs-sm" />
                            Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">
                            <i className="bi-book me-1 fs-sm" /> Library</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">
                        <span><i className="bi-save fs-sm" /> Data</span></li>
                    </ol>
                    </nav>
                </div>{/* end card-body */}
            </div> {/* end card */}
        </div> {/* end col */}
        <div className="col-lg-6">
            <div className="card">
                <div className="card-header justify-content-between">
                    <h4 className="fw-700 m-0 fs-base">
                    Breadcrumb <span className="fw-300"><i>With Icon</i></span>
                    </h4>
                    <div className="card-widgets">
                    <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                    <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardBreadcrumb3" role="button" aria-expanded="false" aria-controls="cardBreadcrumb3"><i className="dripicons-minus" /></Link>
                    <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
                    </div>
                </div>
                <div id="cardBreadcrumb3" className="card-body show">
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="#">
                            <i className="bi-house me-1 fs-sm" />
                            Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">
                            <i className="bi-book me-1 fs-sm" /> Library</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">
                        <span><i className="bi-save fs-sm" /> Data</span></li>
                    </ol>
                    </nav>
                </div>{/* end card-body */}
            </div> {/* end card */}
        </div> {/* end col */}
    </div>
</>

export default BreadCrumbs;
