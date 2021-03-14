import { Link } from "react-router-dom";
import SingleSelect from "./SingleSelect";
import GroupedSelect from "./GroupedSelect";
import AnimationSelect from "./AnimationSelect";
import MultiSelect from "./MultiSelect"
import CustomStyleSingleSelect from "./CustomStyleSingleSelect";
import CustomStyleMultiSelect from "./CustomStyleMultiSelect";

const CustomSelect = () =>
  <>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb ps-0 fs-base">
        <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
        <li className="breadcrumb-item"><span>Page</span></li>
        <li className="breadcrumb-item active" aria-current="page">Custom Select</li>
      </ol>
    </nav>
    <div className="header mb-2">
      <h1 className="header-title h3">
        <i className="bi-star text-primary" /> Custom Select <sup className="badge bg-primary fw-300 fs-xs">ADDON</sup>
      </h1>
      <p className="mt-2">
        React Select - A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support.
      </p>
    </div>
    <div className="bd-callout bd-callout-highlight bg-highlight-100 d-flex align-items-center mb-5" role="alert">
      <div className="alert-icon"><i className="bi-info-circle text-highlight fs-xxl me-3" /></div>
      <div className="alert-text">
        <h4>Note</h4>
        <p>Each of the examples below is an interactive example of react-select.</p>

        <p>See the source or open the examples on codesandbox using the buttons that appear when you hover over each select below.</p>

        <p>For complete docs, see the <a href="https://react-select.com/props" target="_blank" className="text-highlight fw-700">Props API</a> and <a href="https://react-select.com/advanced" target="_blank" className="text-highlight fw-700">Advanced Usage</a>.</p>

        <p>If you're coming from react-select v1, check out the <a href="https://react-select.com/upgrade-guide" target="_blank" className="text-highlight fw-700">Upgrade Guide</a>.</p>

        <p>To contribute, or open an issue, check out the <a href="https://github.com/JedWatson/react-select" target="_blank" className="text-highlight fw-700">source code on GitHub</a>.</p>
        <p>
          Guidelines, tutorials and more on React-select's <a href="https://react-select.com/" target="_blank" className="text-highlight fw-700">Official Documentation</a>
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-6">
        <div className="card">
          <div className="card-header justify-content-between">
            <h4 className="fw-700 m-0 fs-base">
              Single
          </h4>
            <div className="card-widgets">
              <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
              <Link className="btn btn-warning" to="#" data-toggle="collapse" data-target="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i className="dripicons-minus" /></Link>
              <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
            </div>
          </div>
          <div id="cardCollpase1" className="card-body show">
            <SingleSelect />
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="card">
          <div className="card-header justify-content-between">
            <h4 className="fw-700 m-0 fs-base">
              Multi
          </h4>
            <div className="card-widgets">
              <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
              <Link className="btn btn-warning" to="#" data-toggle="collapse" data-target="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i className="dripicons-minus" /></Link>
              <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
            </div>
          </div>
          <div id="cardCollpase1" className="card-body show">
            <MultiSelect />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <div className="card">
          <div className="card-header justify-content-between">
            <h4 className="fw-700 m-0 fs-base">
              Group
          </h4>
            <div className="card-widgets">
              <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
              <Link className="btn btn-warning" to="#" data-toggle="collapse" data-target="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i className="dripicons-minus" /></Link>
              <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
            </div>
          </div>
          <div id="cardCollpase1" className="card-body show">
            <GroupedSelect />
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="card">
          <div className="card-header justify-content-between">
            <h4 className="fw-700 m-0 fs-base">
              Animation
          </h4>
            <div className="card-widgets">
              <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
              <Link className="btn btn-warning" to="#" data-toggle="collapse" data-target="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i className="dripicons-minus" /></Link>
              <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
            </div>
          </div>
          <div id="cardCollpase1" className="card-body show">
            <AnimationSelect />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <div className="card">
          <div className="card-header justify-content-between">
            <h4 className="fw-700 m-0 fs-base">
              Single - Custom Style
          </h4>
            <div className="card-widgets">
              <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
              <Link className="btn btn-warning" to="#" data-toggle="collapse" data-target="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i className="dripicons-minus" /></Link>
              <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
            </div>
          </div>
          <div id="cardCollpase1" className="card-body show">
            <CustomStyleSingleSelect />
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="card">
          <div className="card-header justify-content-between">
            <h4 className="fw-700 m-0 fs-base">
              Multi -  Custom Style
          </h4>
            <div className="card-widgets">
              <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
              <Link className="btn btn-warning" to="#" data-toggle="collapse" data-target="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i className="dripicons-minus" /></Link>
              <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
            </div>
          </div>
          <div id="cardCollpase1" className="card-body show">
            <CustomStyleMultiSelect />
          </div>
        </div>
      </div>
    </div>
  </>

export default CustomSelect;
