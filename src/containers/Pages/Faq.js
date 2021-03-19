import { Link } from "react-router-dom";
import { Accordion, Button, Card } from "react-bootstrap";

const Faq = () =>
  <>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb ps-0 fs-base">
        <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
        <li className="breadcrumb-item"><span>Page</span></li>
        <li className="breadcrumb-item active" aria-current="page">FAQ</li>
      </ol>
    </nav>
    <div className="d-flex header justify-content-between mb-4">
      <h1 className="header-title h3">
        <i className="bi-question-circle text-primary" /> FAQ
      </h1>
    </div>
    <div className="card">
      <div className="card-header justify-content-between">
        <h4 className="fw-700 m-0 fs-base">
          Default FAQ
      </h4>
        <div className="card-widgets">
          <Link className="btn btn-success" to="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
          <Link className="btn btn-warning" to="#" data-toggle="collapse" data-target="#cardCollpase0" role="button" aria-expanded="false" aria-controls="cardCollpase0"><i className="dripicons-minus" /></Link>
          <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
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
          <Link className="btn btn-success" to="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
          <Link className="btn btn-warning" to="#" data-toggle="collapse" data-target="#cardCollpase2" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i className="dripicons-minus" /></Link>
          <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
        </div>
      </div>
      <div id="cardCollpase2" className="card-body show">
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" className="text-info">
                What is Lorem Ipsum?
          </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1" className="text-info">
                What is Lorem Ipsum?
          </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2" className="text-info">
                What is Lorem Ipsum?
          </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3" className="text-info">
                What is Lorem Ipsum?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4" className="text-info">
                What is Lorem Ipsum?
          </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="5" className="text-info">
                What is Lorem Ipsum?
          </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="6" className="text-info">
                What is Lorem Ipsum?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  </>

export default Faq;
