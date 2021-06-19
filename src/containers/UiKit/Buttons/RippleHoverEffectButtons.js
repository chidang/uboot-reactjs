import { Button } from "react-bootstrap";

const RippleHoverEffectButtons = () =>
  <>
    <div className="card">
      <div className="card-header">
        <h4 className="fw-700 m-0 fs-base">Ripple Hover Effect Buttons</h4>
      </div>
      <div className="card-body">
        <div className="bd-example">
          <Button variant="light" className="btn-ripple">Light</Button>
          <Button variant="secondary" className="btn-ripple">Secondary</Button>
          <Button variant="primary" className="btn-ripple">Primary</Button>
          <Button variant="success" className="btn-ripple">Success</Button>
          <Button variant="info" className="btn-ripple">Info</Button>
          <Button variant="danger" className="btn-ripple">Danger</Button>
          <Button variant="warning" className="btn-ripple">Warning</Button>
          <hr />
          <Button variant="light" className="btn-ripple btn-rounded">Light</Button>
          <Button variant="secondary" className="btn-ripple btn-rounded">Secondary</Button>
          <Button variant="primary" className="btn-ripple btn-rounded">Primary</Button>
          <Button variant="success" className="btn-ripple btn-rounded">Success</Button>
          <Button variant="info" className="btn-ripple btn-rounded">Info</Button>
          <Button variant="danger" className="btn-ripple btn-rounded">Danger</Button>
          <Button variant="warning" className="btn-ripple btn-rounded">Warning</Button>
          <hr />
          <Button variant="light" className="btn-ripple btn-rounded btn-sm">Light</Button>
          <Button variant="secondary" className="btn-ripple btn-rounded btn-sm">Secondary</Button>
          <Button variant="primary" className="btn-ripple btn-rounded btn-sm">Primary</Button>
          <Button variant="success" className="btn-ripple btn-rounded btn-sm">Success</Button>
          <Button variant="info" className="btn-ripple btn-rounded btn-sm">Info</Button>
          <Button variant="danger" className="btn-ripple btn-rounded btn-sm">Danger</Button>
          <Button variant="warning" className="btn-ripple btn-rounded btn-sm">Warning</Button>
        </div>
      </div>
    </div>
  </>

export default RippleHoverEffectButtons;
