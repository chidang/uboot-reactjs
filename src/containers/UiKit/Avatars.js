import { Link } from "react-router-dom";

const Avatars = () => 
<>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb pl-0 fs-base">
        <li className="breadcrumb-item"><a href="#">Uboot</a></li>
        <li className="breadcrumb-item"><span>UI Kit</span></li>
        <li className="breadcrumb-item active" aria-current="page">Avatar</li>
        </ol>
    </nav>
    <div className="d-flex header justify-content-between mb-4">
        <h1 className="header-title h3">
        <i className="bi-person-circle text-primary" />
        Avatar
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
            <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
            <a className="btn btn-warning" data-toggle="collapse" data-target="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i className="dripicons-minus" /></a>
            <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
          </div>
        </div>
        <div id="cardCollpase1" className="card-body show">
          <div className="bd-callout bd-callout-highlight">
            <p>
              You can also use following utilities to set the width and height:
            </p>
            <code>.user-avatar-xs</code>, <code>.user-avatar-sm</code>, <code>.user-avatar-md</code>, <code>.user-avatar-lg</code>, <code>.user-avatar-xl</code>, <code>.user-avatar-xxl</code>
          </div>
          <div className>
            <span className="user-avatar user-avatar-xs mr-3">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: 'url("assets/images/default-male-avatar.jpg")', backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-sm mr-3">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: 'url("assets/images/default-male-avatar.jpg")', backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-md mr-3">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: 'url("assets/images/default-male-avatar.jpg")', backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-lg mr-3">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: 'url("assets/images/default-male-avatar.jpg")', backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-xl mr-3">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: 'url("assets/images/default-male-avatar.jpg")', backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-xxl mr-3">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: 'url("assets/images/default-male-avatar.jpg")', backgroundSize: 'cover'}} />
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
            <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
            <a className="btn btn-warning" data-toggle="collapse" data-target="#cardCollpase4" role="button" aria-expanded="false" aria-controls="cardCollpase4"><i className="dripicons-minus" /></a>
            <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
          </div>
        </div>
        <div id="cardCollpase4" className="card-body show">
          <div className="bd-callout bd-callout-highlight">
            <p>Default avatar is square in shape. For rounded and circle avatar add <code>.user-avatar-img .rounded</code> and <code>.user-avatar-img .rounded-circle</code> modifier classes respectively.</p>
          </div>
          <span className="user-avatar mr-3">
            <span className="user-avatar-img" style={{backgroundImage: 'url("assets/images/default-male-avatar.jpg")', backgroundSize: 'cover'}} />
          </span>
          <span className="user-avatar mr-3">
            <span className="user-avatar-img rounded" style={{backgroundImage: 'url("assets/images/default-male-avatar.jpg")', backgroundSize: 'cover'}} />
          </span>
          <span className="user-avatar mr-3">
            <span className="user-avatar-img rounded-circle" style={{backgroundImage: 'url("assets/images/default-male-avatar.jpg")', backgroundSize: 'cover'}} />
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
            <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
            <a className="btn btn-warning" data-toggle="collapse" data-target="#cardCollpase5" role="button" aria-expanded="false" aria-controls="cardCollpase5"><i className="dripicons-minus" /></a>
            <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
          </div>
        </div>
        <div id="cardCollpase5" className="card-body show">
          <div className="bd-callout bd-callout-highlight">
            <p>Change the border color using following utilities: <code>.user-avatar-secondary</code>, <code>.user-avatar-info</code>, <code>.user-avatar-warning</code>, <code>.user-avatar-danger</code>, <code>.user-avatar-light</code>, <code>.user-avatar-dark</code></p>
          </div>
          <div className>
            <span className="user-avatar user-avatar-xs user-avatar-secondary mr-2">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: 'url("assets/images/default-female-avatar.jpg")', backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-xs user-avatar-info mr-2">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: 'url("assets/images/default-female-avatar.jpg")', backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-xs user-avatar-warning mr-2">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: 'url("assets/images/default-female-avatar.jpg")', backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-xs user-avatar-danger mr-2">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: 'url("assets/images/default-female-avatar.jpg")', backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-xs user-avatar-light mr-2">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: 'url("assets/images/default-female-avatar.jpg")', backgroundSize: 'cover'}} />
            </span>
            <span className="user-avatar user-avatar-xs user-avatar-dark mr-2">
              <span className="user-avatar-img rounded-circle" style={{backgroundImage: 'url("assets/images/default-female-avatar.jpg")', backgroundSize: 'cover'}} />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

export default Avatars;
