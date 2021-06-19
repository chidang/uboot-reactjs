import { Link } from "react-router-dom";

const SocialLinkButtons = () =>
  <>
    <div className="card">
      <div className="card-header">
        <h4 className="fw-700 m-0 fs-base">Social Link Buttons</h4>
      </div>
      <div className="card-body">
        <div className="bd-example">
          <Link to="#" className="btn btn-facebook"><span className="me-2"><i className="fab fa-facebook-f" /></span> Facebook</Link>
          <Link to="#" className="btn btn-twitter"><span className="me-2"><i className="fab fa-twitter" /></span> Twitter</Link>
          <Link to="#" className="btn btn-google"><span className="me-2"><i className="fab fa-google" /></span> Google</Link>
          <Link to="#" className="btn btn-instagram"><span className="me-2"><i className="fab fa-instagram" /></span> Instagram</Link>
          <Link to="#" className="btn btn-linkedin"><span className="me-2"><i className="fab fa-linkedin-in" /></span> Linkedin</Link>
        </div>
      </div>
    </div>
  </>

export default SocialLinkButtons;
