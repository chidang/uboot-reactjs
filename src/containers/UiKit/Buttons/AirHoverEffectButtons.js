import { Button } from "react-bootstrap";

const AirHoverEffectButtons = () =>
  <>
    <div className="card">
      <div className="card-header">
        <h4 className="fw-700 m-0 fs-base">Air Hover Effect Buttons</h4>
      </div>
      <div className="card-body">
        <div className="bd-example">
          <Button variant="light" className="btn-air">Light</Button>
          <Button variant="secondary" className="btn-air">Secondary</Button>
          <Button variant="primary" className="btn-air">Primary</Button>
          <Button variant="success" className="btn-air">Success</Button>
          <Button variant="info" className="btn-air">Info</Button>
          <Button variant="danger" className="btn-air">Danger</Button>
          <Button variant="warning" className="btn-air">Warning</Button>
          <hr />
          <Button variant="light" className="btn-air btn-rounded">Light</Button>
          <Button variant="secondary" className="btn-air btn-rounded">Secondary</Button>
          <Button variant="primary" className="btn-air btn-rounded">Primary</Button>
          <Button variant="success" className="btn-air btn-rounded">Success</Button>
          <Button variant="info" className="btn-air btn-rounded">Info</Button>
          <Button variant="danger" className="btn-air btn-rounded">Danger</Button>
          <Button variant="warning" className="btn-air btn-rounded">Warning</Button>
          <hr />
          <Button variant="light" className="btn-air btn-rounded btn-sm">Light</Button>
          <Button variant="secondary" className="btn-air btn-rounded btn-sm">Secondary</Button>
          <Button variant="primary" className="btn-air btn-rounded btn-sm">Primary</Button>
          <Button variant="success" className="btn-air btn-rounded btn-sm">Success</Button>
          <Button variant="info" className="btn-air btn-rounded btn-sm">Info</Button>
          <Button variant="danger" className="btn-air btn-rounded btn-sm">Danger</Button>
          <Button variant="warning" className="btn-air btn-rounded btn-sm">Warning</Button>
        </div>
      </div>
    </div>
  </>

export default AirHoverEffectButtons;
