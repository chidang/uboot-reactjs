import { Button } from "react-bootstrap";

const BasicButtons = () =>
  <>
    <div className="card">
      <div className="card-header">
        <h4 className="fw-700 m-0 fs-base">Basic Buttons</h4>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6">
            <div className="bd-example">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="info">Info</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="bd-example">
              <Button variant="danger" className="btn-lg">Large</Button>
              <Button variant="success">Normal</Button>
              <Button variant="warning" className="btn-sm">Small</Button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bd-example">
              <Button variant="primary" disabled="disabled">Primary</Button>
              <Button variant="secondary" disabled="disabled">Secondary</Button>
              <Button variant="success" disabled="disabled">Success</Button>
              <Button variant="info" disabled="disabled">Info</Button>
              <Button variant="warning" disabled="disabled">Warning</Button>
              <Button variant="danger" disabled="disabled">Danger</Button>
              <Button variant="link" disabled="disabled">Link</Button>
            </div>
            <div className="bd-example">
              <Button variant="outline-primary">Primary</Button>
              <Button variant="outline-secondary">Secondary</Button>
              <Button variant="outline-success">Success</Button>
              <Button variant="outline-danger">Danger</Button>
              <Button variant="outline-warning">Warning</Button>
              <Button variant="outline-info">Info</Button>
              <Button variant="outline-light">Light</Button>
              <Button variant="outline-dark">Dark</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

export default BasicButtons;
