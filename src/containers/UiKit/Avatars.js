import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.jpg";
import femaleAvatar from "../../assets/images/default-female-avatar.jpg";

const Avatars = () => 
<>
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb ps-0 fs-base">
      <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
      <li className="breadcrumb-item"><span>UI Kit</span></li>
      <li className="breadcrumb-item active" aria-current="page">Avatar</li>
    </ol>
  </nav>
  <div className="d-flex header justify-content-between mb-4">
    <h1 className="header-title h3">
    <i className="bi-person-circle text-primary" /> Avatar
    </h1>
  </div>
  <div className="row">
    <div className="col-12">
      <div className="card">
        <div className="card-header justify-content-between">
          <h4 className="fw-700 m-0 fs-base">
            Sizing
          </h4>
          <div className="card-widgets">
            <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
            <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i className="dripicons-minus" /></Link>
            <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
          </div>
        </div>
        <div id="cardCollpase1" className="card-body show">
          <div className="bd-callout bd-callout-highlight">
            <p>
              You can also use following utilities to set the width and height:
            </p>
            <code>.user-avatar-xs</code>, <code>.user-avatar-sm</code>, <code>.user-avatar-md</code>, <code>.user-avatar-lg</code>, <code>.user-avatar-xl</code>, <code>.user-avatar-xxl</code>
          </div>
          <div>
            <span className="user-avatar user-avatar-xs me-3">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: "url(" + avatar + ")", backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-sm me-3">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: "url(" + avatar + ")", backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-md me-3">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: "url(" + avatar + ")", backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-lg me-3">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: "url(" + avatar + ")", backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-xl me-3">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: "url(" + avatar + ")", backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-xxl me-3">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: "url(" + avatar + ")", backgroundSize: 'cover'}} />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header justify-content-between">
          <h4 className="fw-700 m-0 fs-base">
            Shape
          </h4>
          <div className="card-widgets">
            <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
            <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardCollpase4" role="button" aria-expanded="false" aria-controls="cardCollpase4"><i className="dripicons-minus" /></Link>
            <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
          </div>
        </div>
        <div id="cardCollpase4" className="card-body show">
          <div className="bd-callout bd-callout-highlight">
            <p>Default avatar is square in shape. For rounded and circle avatar add <code>.user-avatar-img .rounded</code> and <code>.user-avatar-img .rounded-circle</code> modifier classes respectively.</p>
          </div>
          <span className="user-avatar me-3">
            <span className="user-avatar-img" style={{backgroundImage: "url(" + avatar + ")", backgroundSize: 'cover'}} />
          </span>
          <span className="user-avatar me-3">
            <span className="user-avatar-img rounded" style={{backgroundImage: "url(" + avatar + ")", backgroundSize: 'cover'}} />
          </span>
          <span className="user-avatar me-3">
            <span className="user-avatar-img rounded-circle" style={{backgroundImage: "url(" + avatar + ")", backgroundSize: 'cover'}} />
          </span>
        </div>
      </div>
    </div>
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header justify-content-between">
          <h4 className="fw-700 m-0 fs-base">
            With status
          </h4>
          <div className="card-widgets">
            <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
            <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardCollpase5" role="button" aria-expanded="false" aria-controls="cardCollpase5"><i className="dripicons-minus" /></Link>
            <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
          </div>
        </div>
        <div id="cardCollpase5" className="card-body show">
          <div className="bd-callout bd-callout-highlight">
            <p>Change the border color using following utilities: <code>.user-avatar-secondary</code>, <code>.user-avatar-info</code>, <code>.user-avatar-warning</code>, <code>.user-avatar-danger</code>, <code>.user-avatar-light</code>, <code>.user-avatar-dark</code></p>
          </div>
          <div>
            <span className="user-avatar user-avatar-xs user-avatar-secondary me-2">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: "url(" + femaleAvatar + ")", backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-xs user-avatar-info me-2">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: "url(" + femaleAvatar + ")", backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-xs user-avatar-warning me-2">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: "url(" + femaleAvatar + ")", backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-xs user-avatar-danger me-2">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: "url(" + femaleAvatar + ")", backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-xs user-avatar-light me-2">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: "url(" + femaleAvatar + ")", backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-xs user-avatar-dark me-2">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: "url(" + femaleAvatar + ")", backgroundSize: 'cover'}} />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

export default Avatars;
