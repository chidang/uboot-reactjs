import {
    BorderedTable,
    ContextualTable, 
    DefaultTable,
    HoverTable,
    StripedTable,
    SmallTable,
    WithButtonTable,
    WithCheckboxTable
} from '../../components/Table';

const BasicTable = () => 
<>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb ps-0 fs-base">
        <li className="breadcrumb-item"><a href="#">Uboot</a></li>
        <li className="breadcrumb-item"><span>Tables</span></li>
        <li className="breadcrumb-item active" aria-current="page">Basic Table</li>
        </ol>
    </nav>
    <div className="d-flex header justify-content-between mb-2">
        <h1 className="header-title h3">
        <i className="bi-table text-primary" />
        Basic Table
        </h1>
    </div>
    <div className="bd-callout bd-callout-highlight bg-highlight-100 d-flex align-items-center" role="alert">
        <div className="alert-icon"><i className="bi-info-circle text-primary fs-xxl me-3" /></div>
        <div className="alert-text">
        <h4>About</h4>
        <p className="mt-2">
            Just add the base class <code>.table</code> to any <code>table</code>, then extend with custom styles or bootstrap various included modifier classes.
        </p>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6">
        <div className="card">
            <div className="card-header justify-content-between">
            <h4 className="fw-700 m-0 fs-base">Default <span className="fw-300"><i>Table</i></span></h4>
            <div className="card-widgets">
                <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
                <a className="btn btn-warning" data-toggle="collapse" data-target="#cardTableDefault" role="button" aria-expanded="false" aria-controls="cardTableDefault"><i className="dripicons-minus" /></a>
                <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
            </div>
            </div>
            <div id="cardTableDefault" className="card-body show">
                <DefaultTable />
            </div>
        </div> {/* end card */}
        <div className="card">
            <div className="card-header justify-content-between">
            <h4 className="fw-700 m-0 fs-base">Striped <span className="fw-300"><i>Table</i></span></h4>
            <div className="card-widgets">
                <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
                <a className="btn btn-warning" data-toggle="collapse" data-target="#cardTableStriped" role="button" aria-expanded="false" aria-controls="cardTableStriped"><i className="dripicons-minus" /></a>
                <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
            </div>
            </div>
            <div id="cardTableStriped" className="card-body show">
            <StripedTable />
            </div>
        </div> {/* end card */}
        <div className="card">
            <div className="card-header justify-content-between">
            <h4 className="fw-700 m-0 fs-base">Bordered <span className="fw-300"><i>Table</i></span></h4>
            <div className="card-widgets">
                <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
                <a className="btn btn-warning" data-toggle="collapse" data-target="#cardTableBordered" role="button" aria-expanded="false" aria-controls="cardTableBordered"><i className="dripicons-minus" /></a>
                <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
            </div>
            </div>
            <div id="cardTableBordered" className="card-body show">
            <BorderedTable />
            </div>
        </div> {/* end card */}
        <div className="card">
            <div className="card-header justify-content-between">
            <h4 className="fw-700 m-0 fs-base">Hover <span className="fw-300"><i>Table</i></span></h4>
            <div className="card-widgets">
                <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
                <a className="btn btn-warning" data-toggle="collapse" data-target="#cardTableHover" role="button" aria-expanded="false" aria-controls="cardTableHover"><i className="dripicons-minus" /></a>
                <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
            </div>
            </div>
            <div id="cardTableHover" className="card-body show">
            <HoverTable />
            </div>
        </div> {/* end card */}
        </div> {/* end colunm */}
        <div className="col-md-6">
        <div className="card">
            <div className="card-header justify-content-between">
            <h4 className="fw-700 m-0 fs-base">Contextual <span className="fw-300"><i>classes</i></span></h4>
            <div className="card-widgets">
                <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
                <a className="btn btn-warning" data-toggle="collapse" data-target="#cardTableContextual" role="button" aria-expanded="false" aria-controls="cardTableContextual"><i className="dripicons-minus" /></a>
                <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
            </div>
            </div>
            <div id="cardTableContextual" className="card-body show">
            <ContextualTable />
            </div>
        </div> {/* end card */}
        <div className="card">
            <div className="card-header justify-content-between">
            <h4 className="fw-700 m-0 fs-base">Small <span className="fw-300"><i>Table</i></span></h4>
            <div className="card-widgets">
                <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
                <a className="btn btn-warning" data-toggle="collapse" data-target="#cardTableSmall" role="button" aria-expanded="false" aria-controls="cardTableSmall"><i className="dripicons-minus" /></a>
                <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
            </div>
            </div>
            <div id="cardTableSmall" className="card-body show">
            <SmallTable />
            </div>
        </div> {/* end card */}
        <div className="card">
            <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">With Checkbox <span className="fw-300"><i>Table</i></span></h4>
                <div className="card-widgets">
                    <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
                    <a className="btn btn-warning" data-toggle="collapse" data-target="#cardTableWithCheckbox" role="button" aria-expanded="false" aria-controls="cardTableWithCheckbox"><i className="dripicons-minus" /></a>
                    <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
                </div>
            </div>
            <div id="cardTableWithCheckbox" className="card-body show">
                <WithCheckboxTable />
            </div>
        </div> {/* end card */}
        <div className="card">
            <div className="card-header justify-content-between">
            <h4 className="fw-700 m-0 fs-base">With Button <span className="fw-300"><i>Table</i></span></h4>
            <div className="card-widgets">
                <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
                <a className="btn btn-warning" data-toggle="collapse" data-target="#cardTableWithButton" role="button" aria-expanded="false" aria-controls="cardTableWithButton"><i className="dripicons-minus" /></a>
                <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
            </div>
            </div>
            <div id="cardTableWithButton" className="card-body show">
            <WithButtonTable />
            </div>
        </div> {/* end card */}
        </div> {/* end column */}
    </div>{/* end row */}
</>

export default BasicTable;
