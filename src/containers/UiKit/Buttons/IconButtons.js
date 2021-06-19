import { Button } from "react-bootstrap";

const IconButtons = () =>
  <>
    <div className="card">
      <div className="card-header">
        <h4 className="fw-700 m-0 fs-base">Icon Buttons</h4>
      </div>
      <div className="card-body">
        <div className="bd-example">
          <Button variant="success" className="btn-xl">
            <i className="bi-hand-thumbs-up" /> <span>Thumbs Up</span>
          </Button>
          <Button variant="warning" className="btn-lg">
            <i className="bi-exclamation-triangle" /> <span>Warning</span>
          </Button>
          <Button variant="info">
            <span>Home</span> <i className="bi-house" />
          </Button>
          <Button variant="danger">
            <span>Alarm</span> <i className="bi-alarm" />
          </Button>
          <hr />
          <Button variant="primary" className="btn-icon">
            <i className="bi-search" />
          </Button>
          <Button variant="info" className="btn-icon btn-circle">
            <i className="bi-camera" />
          </Button>
          <Button variant="success" className="btn btn-icon">
            <i className="bi-shield" />
          </Button>
          <Button variant="facebook" className="btn btn-icon">
            <i className="fab fa-facebook-f" />
          </Button>
          <Button variant="twitter" className="btn btn-icon">
            <i className="fab fa-twitter" />
          </Button>
          <Button variant="google" className="btn btn-icon">
            <i className="fab fa-google" />
          </Button>
          <Button variant="instagram" className="btn btn-icon">
            <i className="fab fa-instagram" />
          </Button>
          <Button variant="linkedin" className="btn btn-icon">
            <i className="fab fa-linkedin" />
          </Button>
        </div>
      </div>
    </div>
  </>

export default IconButtons;