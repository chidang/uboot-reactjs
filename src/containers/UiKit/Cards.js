import { Link } from "react-router-dom";

const Cards = () => 
<>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb ps-0 fs-base">
        <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
        <li className="breadcrumb-item"><span>UI Kit</span></li>
        <li className="breadcrumb-item active" aria-current="page">Card</li>
        </ol>
    </nav>
    <div className="d-flex header justify-content-between mb-4">
        <h1 className="header-title h3">
        <i className="bi-card-text text-primary" /> Card
        </h1>
    </div>
    <div className="row">
        <div className="col-lg-3 col-xl-3">
            <div className="card-box-color bg-primary rounded">
                <div className="card-box-color-content color-white">
                <div className="card-box-color-section">
                    <span className="card-box-color-bedge fs-md text-white">$</span>
                    <span className="card-box-color-number fs-xl text-white">34<span className="fs-base">M</span></span>
                </div>
                <div className="card-box-color-section">
                    <div className="fs-md fw-700 text-white">Sales Today</div>
                    <div className="fw-500 text-blurred fs-xs">DIRECT SALES</div>
                </div>
                </div>
                <div className="text-blurred">
                <div className="progress progress-sm m-0">
                    <div className="progress-bar bg-light" style={{width: '34%'}} role="progressbar" aria-valuenow={34} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <h5 className="mt-2">TARGET <span className="float-end">34%</span></h5>
                </div>
            </div> {/* end card-box-color*/}
        </div> {/* end col*/}
        <div className="col-lg-3 col-xl-3">
            <div className="card-box-color bg-warning rounded">
                <div className="card-box-color-content color-white">
                <div className="card-box-color-section">
                    <div className="fs-md fw-700 text-white">Sales Today</div>
                    <div className="fw-500 text-blurred fs-xs">DIRECT SALES</div>
                </div>
                <div className="card-box-color-section">
                    <span className="card-box-color-bedge fs-md text-white">$</span>
                    <span className="card-box-color-number fs-xl text-white">34<span className="fs-base">M</span></span>
                </div>
                </div>
                <div className="text-blurred">
                <div className="progress progress-sm m-0">
                    <div className="progress-bar bg-light" style={{width: '34%'}} role="progressbar" aria-valuenow={34} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <h5 className="mt-2">TARGET <span className="float-end">34%</span></h5>
                </div>
            </div> {/* end card-box-color*/}
        </div> {/* end col*/}
        <div className="col-lg-3 col-xl-3">
            <div className="card-box-color bg-danger rounded">
                <div className="card-box-color-content color-white">
                    <div className="card-box-color-section">
                        <span className="card-box-color-bedge fs-md text-white">$</span>
                        <span className="card-box-color-number fs-xl text-white">34<span className="fs-base">M</span></span>
                    </div>
                    <div className="card-box-color-section">
                        <div className="fs-md fw-700 text-white">Sales Today</div>
                        <div className="fw-500 text-blurred fs-xs">DIRECT SALES</div>
                    </div>
                </div>
                <div className="text-blurred">
                    <div className="progress progress-sm m-0">
                        <div className="progress-bar bg-light" style={{width: '34%'}} role="progressbar" aria-valuenow={34} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <h5 className="mt-2">TARGET <span className="float-end">34%</span></h5>
                </div>
            </div> {/* end card-box-color*/}
        </div> {/* end col*/}
        <div className="col-lg-3 col-xl-3">
            <div className="card-box-color bg-info rounded">
                <div className="card-box-color-content color-white">
                <div className="card-box-color-section">
                    <span className="card-box-color-bedge fs-md text-white">$</span>
                    <span className="card-box-color-number fs-xl text-white">34<span className="fs-base">M</span></span>
                </div>
                <div className="card-box-color-section">
                    <div className="fs-md fw-700 text-white">Sales Today</div>
                    <div className="fw-500 text-blurred fs-xs">DIRECT SALES</div>
                </div>
                </div>
                <div className="text-blurred">
                <div className="progress progress-sm m-0">
                    <div className="progress-bar bg-light" style={{width: '34%'}} role="progressbar" aria-valuenow={34} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <h5 className="mt-2">TARGET <span className="float-end">34%</span></h5>
                </div>
            </div> {/* end card-box-color*/}
        </div> {/* end col*/}
    </div>
    <div className="row">
        <div className="col-md-6 col-xl-3">
            <div className="card">
                <div className="card-body">
                <div className="row">
                    <div className="col-6">
                    <p className="text-muted mb-1 text-truncate">Total Earnings
                    </p>
                    </div>
                    <div className="col-6">
                    <div className="icon-sm bg-primary rounded float-end">
                        <i className="uil uil-usd-circle" />
                    </div>
                    </div>
                </div>
                <h2 className="my-1 fw-300">$24,431</h2>
                <div className="mt-3">
                    <h6>Target <span className="float-end">59%</span></h6>
                    <div className="progress progress-sm m-0">
                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={59} aria-valuemin={0} aria-valuemax={100} style={{width: '59%'}}>
                        <span className="sr-only">59% Complete</span>
                    </div>
                    </div>
                </div>
                </div>
            </div> {/* end card*/}
        </div> {/* end col */}
        <div className="col-md-6 col-xl-3">
            <div className="card">
                <div className="card-body">
                <div className="row">
                    <div className="col-6">
                    <p className="text-muted mb-1 text-truncate">Sales Today</p>
                    </div>
                    <div className="col-6">
                    <div className="icon-sm bg-success rounded float-end">
                        <i className="bi-cart2" />
                    </div>
                    </div>
                </div>
                <h2 className="my-1 fw-300">1,576</h2>
                <div className="mt-3">
                    <h6>Target <span className="float-end">68%</span></h6>
                    <div className="progress progress-sm m-0">
                    <div className="progress-bar bg-success" role="progressbar" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100} style={{width: '68%'}}>
                        <span className="sr-only">68% Complete</span>
                    </div>
                    </div>
                </div>
                </div>
            </div> {/* end card*/}
        </div> {/* end col */}
        <div className="col-md-6 col-xl-3">
            <div className="card">
                <div className="card-body">
                <div className="row">
                    <div className="col-6">
                    <p className="text-muted mb-1 text-truncate">Pending Orders</p>
                    </div>
                    <div className="col-6">
                    <div className="icon-sm bg-info rounded float-end">
                        <i className="bi-alarm" />
                    </div>
                    </div>
                </div>
                <h2 className="my-1 fw-300"><span>234</span></h2>
                <div className="mt-3">
                    <h6>Target <span className="float-end">74%</span></h6>
                    <div className="progress progress-sm m-0">
                    <div className="progress-bar bg-info" role="progressbar" aria-valuenow={74} aria-valuemin={0} aria-valuemax={100} style={{width: '74%'}}>
                        <span className="sr-only">74% Complete</span>
                    </div>
                    </div>
                </div>
                </div>
            </div> {/* end card*/}
        </div> {/* end col */}
        <div className="col-md-6 col-xl-3">
            <div className="card">
                <div className="card-body">
                <div className="row">
                    <div className="col-6">
                    <p className="text-muted mb-1 text-truncate">Payouts</p>
                    </div>
                    <div className="col-6">
                    <div className="icon-sm bg-warning rounded float-end">
                        <i className="bi-receipt" />
                    </div>
                    </div>
                </div>
                <h2 className="my-1 fw-300">$4,321</h2>
                <div className="mt-3">
                    <h6>Target <span className="float-end">76%</span></h6>
                    <div className="progress progress-sm m-0">
                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={76} aria-valuemin={0} aria-valuemax={100} style={{width: '76%'}}>
                        <span className="sr-only">76% Complete</span>
                    </div>
                    </div>
                </div>
                </div>
            </div> {/* end card*/}
        </div> {/* end col */}
    </div> {/* end row */}
    <div className="row">
        <div className="col-md-4">
            <div className="card">
                <div className="card-header">
                <h4 className="m-0 fw-700">Card title</h4>
                </div>
                <div className="card-body">
                <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="javascript: void(0);" className="btn btn-danger">Go somewhere</Link>
                </div>
            </div> {/* end card*/}
        </div> {/* end col*/}
        <div className="col-md-4">
            <div className="card">
                <div className="card-header">
                <h4 className="m-0 fw-700">Card title</h4>
                </div>
                <div className="card-body">
                <blockquote className="card-bodyquote">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer>Some quick example text to build on the card title and make up the bulk of the .<cite title="card's content">card's content</cite> </footer>
                </blockquote>
                </div>
            </div> {/* end card*/}
        </div> {/* end col*/}
        <div className="col-md-4">
            <div className="card text-xs-center">
                <div className="card-header">
                <h4 className="m-0 fw-700">Card title</h4>
                </div>
                <div className="card-body">
                <Link to="javascript: void(0);" className="btn btn-warning">Go somewhere</Link>
                </div>
                <div className="card-footer text-muted"> Some text here</div>
            </div> {/* end card*/}
        </div> {/* end col*/}
    </div>
    <div className="row">
        <div className="col-sm-6">
            <div className="card card-body">
                <h5 className="m-0 fw-700">Lorem ipsum dolor sit amet</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> <Link to="javascript: void(0);" className="btn btn-primary">Go somewhere</Link>
            </div> {/* end card*/}
        </div> {/* end col*/}
        <div className="col-sm-6">
            <div className="card card-body">
                <h5 className="m-0 fw-700">Lorem ipsum dolor sit amet</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> <Link to="javascript: void(0);" className="btn btn-primary">Go somewhere</Link>
            </div> {/* end card*/}
        </div> {/* end col*/}
    </div>
    <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-header">
                <h4 className="m-0 fw-700">Card title</h4>
                </div>
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="card-link">Card link</Link>
                <Link to="#" className="card-link">Another link</Link>
                </div>
            </div>{/* end card*/}
        </div>{/* end col */}
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-header">
                <h4 className="m-0 fw-700">Card title</h4>
                </div>
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>{/* end card*/}
        </div>{/* end col */}
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-header card-reverse">
                <h4 className="m-0 fw-700">Card title</h4>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>{/* end card*/}
        </div>{/* end col */}
    </div>
    <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-header justify-content-between">
                <h4 className="m-0 fw-700">Card title</h4>
                <div className="card-widgets">
                    <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                    <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardReverseCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i className="dripicons-minus" /></Link>
                    <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
                </div>
                </div>
                <div id="cardReverseCollpase1" className="card-body show">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="card-link">Card link</Link>
                <Link to="#" className="card-link">Another link</Link>
                </div>
            </div>{/* end card*/}
        </div>{/* end col */}
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-header bg-primary">
                <h4 className="m-0 fw-700">Card title</h4>
                </div>
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>{/* end card*/}
        </div>{/* end col */}
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-header bg-danger">
                <h4 className="m-0 fw-700">Card title</h4>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>{/* end card*/}
        </div>{/* end col */}
    </div>
    <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-header bg-info">
                <h4 className="m-0 fw-700">Card title</h4>
                </div>
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="card-link">Card link</Link>
                <Link to="#" className="card-link">Another link</Link>
                </div>
            </div>{/* end card*/}
        </div>{/* end col */}
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-header bg-warning">
                <h4 className="m-0 fw-700">Card title</h4>
                </div>
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>{/* end card*/}
        </div>{/* end col */}
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-header bg-secondary">
                <h4 className="m-0 fw-700">Card title</h4>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>{/* end card*/}
        </div>{/* end col */}
    </div>
    <div className="row">
        <div className="col-md-3">
            <div className="card bg-danger">
                <div className="card-body">
                <div className="card-widgets">
                    <Link to="#" data-toggle="remove"><i className="bi-x" /></Link>
                    <Link data-toggle="collapse" data-target="#cardCollpase0" role="button" aria-expanded="false" aria-controls="cardCollpase0"><i className="dripicons-minus" /></Link>
                    <Link to="#"><i className="bi-arrow-repeat" /></Link>
                </div>
                <h4 className="m-0 fw-700 mb-0 text-white">Card title</h4>
                <div id="cardCollpase0" className="collapse pt-3 show text-white"> Cras quis metus mauris. Maecenas posuere lorem eu tortor interdum rutrum. In consequat metus eu nisi accumsan iaculis. Vestibulum sed finibus ante. Mauris nulla sapien, sodales eu ultricies et, dignissim eu erat. Vestibulum hendrerit augue vitae scelerisque tempor. Vivamus a nulla risus. Aliquam venenatis odio eget varius iaculis. Nulla ultrices est eu interdum luctus. Sed eu elementum tellus. Etiam eget vulputate ante, in sagittis metus. Etiam finibus rutrum odio sollicitudin eleifend. Duis lacinia commodo orci nec placerat. Sed non leo quis augue tincidunt condimentum eleifend et mauris. Vivamus commodo nulla tristique, pretium arcu vitae, vestibulum lacus. </div>
                </div>
            </div> {/* end card*/}
        </div> {/* end col*/}
        <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                <div className="card-widgets">
                    <Link to="#" data-toggle="remove"><i className="bi-x" /></Link>
                    <Link data-toggle="collapse" data-target="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i className="dripicons-minus" /></Link>
                    <Link to="#"><i className="bi-arrow-repeat" /></Link>
                </div>
                <h4 className="m-0 fw-700 mb-0">Card title</h4>
                <div id="cardCollpase1" className="collapse pt-3 show"> Cras quis metus mauris. Maecenas posuere lorem eu tortor interdum rutrum. In consequat metus eu nisi accumsan iaculis. Vestibulum sed finibus ante. Mauris nulla sapien, sodales eu ultricies et, dignissim eu erat. Vestibulum hendrerit augue vitae scelerisque tempor. Vivamus a nulla risus. Aliquam venenatis odio eget varius iaculis. Nulla ultrices est eu interdum luctus. Sed eu elementum tellus. Etiam eget vulputate ante, in sagittis metus. Etiam finibus rutrum odio sollicitudin eleifend. Duis lacinia commodo orci nec placerat. Sed non leo quis augue tincidunt condimentum eleifend et mauris. Vivamus commodo nulla tristique, pretium arcu vitae, vestibulum lacus. </div>
                </div>
            </div> {/* end card*/}
        </div> {/* end col*/}
        <div className="col-md-3">
            <div className="card bg-primary text-white">
                <div className="card-body">
                <div className="card-widgets">
                    <Link to="#" data-toggle="remove"><i className="bi-x" /></Link>
                    <Link data-toggle="collapse" data-target="#cardCollpase2" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i className="dripicons-minus" /></Link>
                    <Link to="#" data-toggle="reload"><i className="bi-arrow-repeat" /></Link>
                </div>
                <h4 className="m-0 fw-700 mb-0">Card title</h4>
                <div id="cardCollpase2" className="collapse pt-3 show"> Cras quis metus mauris. Maecenas posuere lorem eu tortor interdum rutrum. In consequat metus eu nisi accumsan iaculis. Vestibulum sed finibus ante. Mauris nulla sapien, sodales eu ultricies et, dignissim eu erat. Vestibulum hendrerit augue vitae scelerisque tempor. Vivamus a nulla risus. Aliquam venenatis odio eget varius iaculis. Nulla ultrices est eu interdum luctus. Sed eu elementum tellus. Etiam eget vulputate ante, in sagittis metus. Etiam finibus rutrum odio sollicitudin eleifend. Duis lacinia commodo orci nec placerat. Sed non leo quis augue tincidunt condimentum eleifend et mauris. Vivamus commodo nulla tristique, pretium arcu vitae, vestibulum lacus. </div>
                </div>
            </div> {/* end card*/}
        </div> {/* end col*/}
        <div className="col-md-3">
            <div className="card bg-success text-white">
                <div className="card-body">
                <div className="card-widgets">
                    <Link to="#" data-toggle="remove"><i className="bi-x" /></Link>
                    <Link data-toggle="collapse" data-target="#cardCollpase3" role="button" aria-expanded="false" aria-controls="cardCollpase3"><i className="dripicons-minus" /></Link>
                    <Link to="#" data-toggle="reload"><i className="bi-arrow-repeat" /></Link>
                </div>
                <h4 className="m-0 fw-700 mb-0">Card title</h4>
                <div id="cardCollpase3" className="collapse pt-3 show"> Cras quis metus mauris. Maecenas posuere lorem eu tortor interdum rutrum. In consequat metus eu nisi accumsan iaculis. Vestibulum sed finibus ante. Mauris nulla sapien, sodales eu ultricies et, dignissim eu erat. Vestibulum hendrerit augue vitae scelerisque tempor. Vivamus a nulla risus. Aliquam venenatis odio eget varius iaculis. Nulla ultrices est eu interdum luctus. Sed eu elementum tellus. Etiam eget vulputate ante, in sagittis metus. Etiam finibus rutrum odio sollicitudin eleifend. Duis lacinia commodo orci nec placerat. Sed non leo quis augue tincidunt condimentum eleifend et mauris. Vivamus commodo nulla tristique, pretium arcu vitae, vestibulum lacus. </div>
                </div>
            </div> {/* end card*/}
        </div> {/* end col*/}
    </div>
</>

export default Cards;
