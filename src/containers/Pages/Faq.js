import { Link } from "react-router-dom";
// https://reactjsexample.com/faq-accordion-card-build-with-react-js-and-hooks/
const Faq = () => 
<>
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb pl-0 fs-base">
      <li className="breadcrumb-item"><a href="#">Uboot</a></li>
      <li className="breadcrumb-item"><span>Page</span></li>
      <li className="breadcrumb-item active" aria-current="page">FAQ</li>
    </ol>
  </nav>
  <div className="d-flex header justify-content-between mb-4">
    <h1 className="header-title h3">
      <i className="bi-question-circle text-primary" />
      FAQ
    </h1>
  </div>
  <div className="card">
    <div className="card-header justify-content-between">
      <h4 className="fw-700 m-0 fs-base">
        Default FAQ
      </h4>
      <div className="card-widgets">
        <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
        <a className="btn btn-warning" data-toggle="collapse" data-target="#cardCollpase0" role="button" aria-expanded="false" aria-controls="cardCollpase0"><i className="dripicons-minus" /></a>
        <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
      </div>
    </div>
    <div id="cardCollpase0" className="card-body show">
      <div className="row pt-5">
        <div className="col-lg-5 offset-lg-1">
          <div>
            <h4 className="faq-question text-info fw-700"><i className="bi-question-circle" /> What is Lorem Ipsum?</h4>
            <p className="faq-answer mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1">
          <div>
            <h4 className="faq-question text-info fw-700"><i className="bi-question-circle" /> What is Lorem Ipsum?</h4>
            <p className="faq-answer mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1">
          <div>
            <h4 className="faq-question text-info fw-700"><i className="bi-question-circle" /> What is Lorem Ipsum?</h4>
            <p className="faq-answer mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1">
          <div>
            <h4 className="faq-question text-info fw-700"><i className="bi-question-circle" /> What is Lorem Ipsum?</h4>
            <p className="faq-answer mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1">
          <div>
            <h4 className="faq-question text-info fw-700"><i className="bi-question-circle" /> What is Lorem Ipsum?</h4>
            <p className="faq-answer mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1">
          <div>
            <h4 className="faq-question text-info fw-700"><i className="bi-question-circle" /> What is Lorem Ipsum?</h4>
            <p className="faq-answer mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1">
          <div>
            <h4 className="faq-question text-info fw-700"><i className="bi-question-circle" /> What is Lorem Ipsum?</h4>
            <p className="faq-answer mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1">
          <div>
            <h4 className="faq-question text-info fw-700"><i className="bi-question-circle" /> What is Lorem Ipsum?</h4>
            <p className="faq-answer mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header justify-content-between">
      <h4 className="fw-700 m-0 fs-base">
        Accodions FAQ
      </h4>
      <div className="card-widgets">
        <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
        <a className="btn btn-warning" data-toggle="collapse" data-target="#cardCollpase2" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i className="dripicons-minus" /></a>
        <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
      </div>
    </div>
    <div id="cardCollpase2" className="card-body show">
      <div id="accordion1" className="accordion">
        <div className="card">
          <div>
            <div className="card-header">
              <h4 className="mb-0">
                <a href="javascript:void(0);" className="text-info" data-toggle="collapse" data-target="#collapse11" aria-expanded="true">What is Lorem Ipsum?</a>
              </h4>
            </div>
            <div id="collapse11" className="collapse show" data-parent="#accordion1" style={{}}>
              <div className="card-body">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </div>
            </div>
          </div>
          <div>
            <div className="card-header">
              <h4 className="mb-0">
                <a href="javascript:void(0);" className="text-info collapsed" data-toggle="collapse" data-target="#collapse12" aria-expanded="false">What is Lorem Ipsum?</a>
              </h4>
            </div>
            <div id="collapse12" className="collapse" data-parent="#accordion1" style={{}}>
              <div className="card-body">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </div>
            </div>
          </div>
          <div>
            <div className="card-header">
              <h4 className="mb-0">
                <a href="javascript:void(0);" className="text-info collapsed" data-toggle="collapse" data-target="#collapse13" aria-expanded="false">What is Lorem Ipsum?</a>
              </h4>
            </div>
            <div id="collapse13" className="collapse" data-parent="#accordion1" style={{}}>
              <div className="card-body">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </div>
            </div>
          </div>
          <div>
            <div className="card-header">
              <h4 className="mb-0">
                <a href="javascript:void(0);" className="text-info collapsed" data-toggle="collapse" data-target="#collapse14" aria-expanded="false">What is Lorem Ipsum?</a>
              </h4>
            </div>
            <div id="collapse14" className="collapse" data-parent="#accordion1" style={{}}>
              <div className="card-body">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

export default Faq;
