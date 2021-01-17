import { Link } from "react-router-dom";

const BreadCrumbs = () => 
<>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb pl-0 fs-base">
        <li className="breadcrumb-item"><a href="#">Uboot</a></li>
        <li className="breadcrumb-item"><span>UI Kit</span></li>
        <li className="breadcrumb-item active" aria-current="page">Breadcrum</li>
        </ol>
    </nav>
    <div className="d-flex header justify-content-between mb-4">
        <h1 className="header-title h3">
        <i className="fal fa-directions text-primary" />
        Breadcrum
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
                    <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
                    <a className="btn btn-warning" data-toggle="collapse" data-target="#cardBreadcrumb1" role="button" aria-expanded="false" aria-controls="cardBreadcrumb1"><i className="dripicons-minus" /></a>
                    <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
                    </div>
                </div>
                <div id="cardBreadcrumb1" className="card-body show">
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
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
                    <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
                    <a className="btn btn-warning" data-toggle="collapse" data-target="#cardBreadcrumb2" role="button" aria-expanded="false" aria-controls="cardBreadcrumb2"><i className="dripicons-minus" /></a>
                    <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
                    </div>
                </div>
                <div id="cardBreadcrumb2" className="card-body show">
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb border border-info">
                        <li className="breadcrumb-item"><a href="#">
                            <i className="bi-house mr-1 fs-sm" />
                            Home</a></li>
                        <li className="breadcrumb-item"><a href="#">
                            <i className="bi-book mr-1 fs-sm" /> Library</a></li>
                        <li className="breadcrumb-item active" aria-current="page">
                        <span><i className="bi-save fs-sm" /> Data</span></li>
                    </ol>
                    </nav>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb border border-primary">
                        <li className="breadcrumb-item"><a href="#">
                            <i className="bi-house mr-1 fs-sm" />
                            Home</a></li>
                        <li className="breadcrumb-item"><a href="#">
                            <i className="bi-book mr-1 fs-sm" /> Library</a></li>
                        <li className="breadcrumb-item active" aria-current="page">
                        <span><i className="bi-save fs-sm" /> Data</span></li>
                    </ol>
                    </nav>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb border border-warning">
                        <li className="breadcrumb-item"><a href="#">
                            <i className="bi-house mr-1 fs-sm" />
                            Home</a></li>
                        <li className="breadcrumb-item"><a href="#">
                            <i className="bi-book mr-1 fs-sm" /> Library</a></li>
                        <li className="breadcrumb-item active" aria-current="page">
                        <span><i className="bi-save fs-sm" /> Data</span></li>
                    </ol>
                    </nav>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb border border-danger">
                        <li className="breadcrumb-item"><a href="#">
                            <i className="bi-house mr-1 fs-sm" />
                            Home</a></li>
                        <li className="breadcrumb-item"><a href="#">
                            <i className="bi-book mr-1 fs-sm" /> Library</a></li>
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
                    <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
                    <a className="btn btn-warning" data-toggle="collapse" data-target="#cardBreadcrumb3" role="button" aria-expanded="false" aria-controls="cardBreadcrumb3"><i className="dripicons-minus" /></a>
                    <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
                    </div>
                </div>
                <div id="cardBreadcrumb3" className="card-body show">
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">
                            <i className="bi-house mr-1 fs-sm" />
                            Home</a></li>
                        <li className="breadcrumb-item"><a href="#">
                            <i className="bi-book mr-1 fs-sm" /> Library</a></li>
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
