import { Button } from "react-bootstrap";

const PillButtons = () =>
  <>
    <div className="card">
      <div className="card-header">
        <h4 className="fw-700 m-0 fs-base">Pill Buttons</h4>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6">
            <div className="bd-example">
              <Button variant="primary" className="btn-rounded">Primary</Button>
              <Button variant="secondary" className="btn-rounded">Secondary</Button>
              <Button variant="success" className="btn-rounded">Success</Button>
              <Button variant="danger" className="btn-rounded">Danger</Button>
              <Button variant="warning" className="btn-rounded">Warning</Button>
              <Button variant="info" className="btn-rounded">Info</Button>
              <Button variant="light" className="btn-rounded">Light</Button>
              <Button variant="dark" className="btn-rounded">Dark</Button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bd-example">
              <Button variant="outline-primary" className="btn-rounded">Primary</Button>
              <Button variant="outline-secondary" className="btn-rounded">Secondary</Button>
              <Button variant="outline-success" className="btn-rounded">Success</Button>
              <Button variant="outline-danger" className="btn-rounded">Danger</Button>
              <Button variant="outline-warning" className="btn-rounded">Warning</Button>
              <Button variant="outline-info" className="btn-rounded">Info</Button>
              <Button variant="outline-light" className="btn-rounded">Light</Button>
              <Button variant="outline-dark" className="btn-rounded">Dark</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

export default PillButtons;
