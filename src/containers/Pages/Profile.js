import { Link } from "react-router-dom";

const Profile = () => 
<>
<nav aria-label="breadcrumb">
    <ol className="breadcrumb pl-0 fs-base">
      <li className="breadcrumb-item"><a href="#">Uboot</a></li>
      <li className="breadcrumb-item"><span>Page</span></li>
      <li className="breadcrumb-item active" aria-current="page">Profile</li>
    </ol>
  </nav>
  <div className="d-flex header justify-content-between mb-4">
    <h1 className="header-title h3">
      <i className="fas fa-user-circle text-primary" />
      Profile
    </h1>
  </div>
  <div className="row">
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8">
              <div className="media">
                <span className="float-left m-2 mr-4">
                  <img src="assets/images/avatar.jpg" style={{height: '100px'}} alt="User" className="rounded-circle img-thumbnail" />
                </span>
                <div>
                  <h4 className="mt-1 mb-1">Jack Godfrey</h4>
                  <p className="fs-sm">Frontend developer</p>
                  <ul className="mb-0 list-inline">
                    <li className="d-inline">
                      <a href="javascript:void(0);" className="fs-lg" style={{color: '#3b5998'}}>
                        <i className="fab fa-facebook" />
                      </a>
                    </li>
                    <li className="d-inline">
                      <a href="javascript:void(0);" className="fs-lg" style={{color: '#38A1F3'}}>
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="d-inline">
                      <a href="javascript:void(0);" className="fs-lg" style={{color: '#db3236'}}>
                        <i className="fab fa-google-plus" />
                      </a>
                    </li>
                    <li className="d-inline">
                      <a href="javascript:void(0);" className="fs-lg" style={{color: '#0077B5'}}>
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center mt-sm-0 mt-3 text-sm-right">
                <a href="#" data-original-title="Edit" data-toggle="tooltip"><i className="bi-pencil" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <div className="card">
        <div className="card-header">
          <h4 className="fw-700 m-0 fs-base"><span className="p-2"><i className="bi-bar-chart" /></span> Tasks and Preview</h4>
        </div>
        <div className="card-body">
          <div style={{height: '300px'}}>
            <canvas id="bar-chartjs" />
          </div>
        </div>
      </div> {/* end card */}
      <div className="card">
        <div className="card-header">
          <h4 className="fw-700 m-0 fs-base"><span className="p-2"><i className="bi-list-task" /></span>
            Current Project</h4>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a href="#">
                <span className="task small">
                  <span className="desc">Design database</span>
                  <span className="percent">74%</span>
                </span>
                <div className="progress progress-sm m-0">
                  <div className="progress-bar bg-success" role="progressbar" aria-valuenow={74} aria-valuemin={0} aria-valuemax={100} style={{width: '74%'}}>
                    <span className="sr-only">74% Complete</span>
                  </div>
                </div>
              </a>
            </li>
            <li className="list-group-item">
              <a href="#">
                <span className="task small">
                  <span className="desc">Testing</span>
                  <span className="percent">30%</span>
                </span>
                <div className="progress progress-sm m-0">
                  <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{width: '30%'}}>
                    <span className="sr-only">30% Complete</span>
                  </div>
                </div>
              </a>
            </li>
            <li className="list-group-item">
              <a href="#">
                <span className="task small">
                  <span className="desc">Document writting</span>
                  <span className="percent">50%</span>
                </span>
                <div className="progress progress-sm m-0">
                  <div className="progress-bar bg-info" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>
                    <span className="sr-only">50% Complete</span>
                  </div>
                </div>
              </a>
            </li>
            <li className="list-group-item">
              <a href="#">
                <span className="task small">
                  <span className="desc">Development</span>
                  <span className="percent">45%</span>
                </span>
                <div className="progress progress-sm m-0">
                  <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} style={{width: '45%'}}>
                    <span className="sr-only">45% Complete</span>
                  </div>
                </div>
              </a>
            </li>
            <li className="list-group-item">
              <a href="#">
                <span className="task small">
                  <span className="desc">HTML slicing</span>
                  <span className="percent">66%</span>
                </span>
                <div className="progress progress-sm m-0">
                  <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} style={{width: '66%'}}>
                    <span className="sr-only">66% Complete</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div> {/* end card */}
      <div className="card">
        <div className="card-header">
          <h4 className="fw-700 m-0 fs-base"><span className="p-2"><i className="fal fa-image" /></span>
            Photos</h4>
        </div>
        <div className="card-body">
          {'{'}{'{'}&gt; ../../components/widgets/image-list {'}'}{'}'}
        </div>
      </div> {/* end card */}
    </div> {/* end col */}
    <div className="col-md-8">
      <div className="row">
        <div className="col-md-12 col-lg-7">
          <div className="card">
            <div className="card-header">
              <h4 className="fw-700 m-0 fs-base"><span className="p-2"><i className="bi-info-circle" /></span>
                Basic Information</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <dl className="dl-horizontal">
                        <dt>First Name</dt>
                        <dd>Jack</dd>
                        <dt>Last Name</dt>
                        <dd>Godfrey</dd>
                        <dt>Job Title</dt>
                        <dd>Frontend developer</dd>
                        <dt>Current Role</dt>
                        <dd>
                          <span className="badge bg-success">Admin</span>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <dl className="dl-horizontal">
                        <dt>Registered on</dt>
                        <dd><span className="badge bg-success">10/02/2019</span></dd>
                        <dt>Mobile</dt>
                        <dd><a target="_blank" href="tel:+0422xxxx">+0422xxxx</a></dd>
                        <dt>Timezone</dt>
                        <dd>
                          <span className="badge bg-success">New York</span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary mb-4">Update Profile</button>
                  <button type="button" className="btn btn-danger mb-4">Change Password</button>
                </div>
              </div>
            </div>
          </div> {/* end card */}
        </div>
        <div className="col-md-12 col-lg-5">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center text-primary">
                <div className="mr-3 fs-xxl">
                  <i className="fas fa-graduation-cap" />
                </div>
                <div className="d-flex flex-column">
                  <a href="#" className="fw-700 mb-3">Qualifications</a>
                  <div className="text-dark-75">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy since the 1500s.</div>
                </div>
              </div>
            </div>
          </div> {/* end card */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center text-info">
                <div className="mr-3 fs-xxl">
                  <i className="fas fa-id-card-alt" />
                </div>
                <div className="d-flex flex-column">
                  <a href="#" className="fw-700 mb-3">Skill</a>
                  <div className="text-dark-75">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy since the 1500s.</div>
                </div>
              </div>
            </div>
          </div> {/* end card */}
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h4 className="fw-700 m-0 fs-base"><span className="p-2"><i className="bi-table" /></span> My Products</h4>
        </div>
        <div className="card-body">
          {'{'}{'{'}&gt; ../../components/tables/hover-table {'}'}{'}'}
        </div>
      </div> {/* end card */}
      <div className="card">
        <div className="card-header">
          <h4 className="fw-700 m-0 fs-base"><span className="p-2"><i className="bi-people" /></span>
            List Friends</h4>
        </div>
        <div className="card-body">
          <div className="row friend-list">
            <div className=" col-12 col-lg-6">
              <a href="#" className="friend-list-item card mb-2 p-2 border-0">
                <div className=" align-items-center d-flex flex-row">
                  <div className="my-2">
                    <img src="assets/images/default-female-avatar.jpg" style={{height: '50px'}} alt="User" className="rounded-circle" />
                  </div>
                  <div className="ml-3">
                    <h4 className="m-0 fs-base fw-700">Sam Robert</h4>
                    <span className="m-0 fs-sm text-muted">37 mutual friends</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-lg-6">
              <a href="#" className="friend-list-item card mb-2 p-2 border-0">
                <div className=" align-items-center d-flex flex-row">
                  <div className="my-2">
                    <img src="assets/images/avatar.jpg" style={{height: '50px'}} alt="User" className="rounded-circle" />
                  </div>
                  <div className="ml-3">
                    <h4 className="m-0 fs-base fw-700">Schirsten Vander</h4>
                    <span className="m-0 fs-sm text-muted">29 mutual friends</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-lg-6">
              <a href="#" className="friend-list-item card mb-2 p-2 border-0">
                <div className=" align-items-center d-flex flex-row">
                  <div className="my-2">
                    <img src="assets/images/default-female-avatar.jpg" style={{height: '50px'}} alt="User" className="rounded-circle" />
                  </div>
                  <div className="ml-3">
                    <h4 className="m-0 fs-base fw-700">Robert Nordic</h4>
                    <span className="m-0 fs-sm text-muted">22 mutual friends</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-lg-6">
              <a href="#" className="friend-list-item card mb-2 p-2 border-0">
                <div className=" align-items-center d-flex flex-row">
                  <div className="my-2">
                    <img src="assets/images/default-female-avatar.jpg" style={{height: '50px'}} alt="User" className="rounded-circle" />
                  </div>
                  <div className="ml-3">
                    <h4 className="m-0 fs-base fw-700">Michael Branson</h4>
                    <span className="m-0 fs-sm text-muted">34 mutual friends</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-lg-6">
              <a href="#" className="friend-list-item card mb-2 p-2 border-0">
                <div className=" align-items-center d-flex flex-row">
                  <div className="my-2">
                    <img src="assets/images/default-female-avatar.jpg" style={{height: '50px'}} alt="User" className="rounded-circle" />
                  </div>
                  <div className="ml-3">
                    <h4 className="m-0 fs-base fw-700">Robert Nordic</h4>
                    <span className="m-0 fs-sm text-muted">22 mutual friends</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-lg-6">
              <a href="#" className="friend-list-item card mb-2 p-2 border-0">
                <div className=" align-items-center d-flex flex-row">
                  <div className="my-2">
                    <img src="assets/images/default-female-avatar.jpg" style={{height: '50px'}} alt="User" className="rounded-circle" />
                  </div>
                  <div className="ml-3">
                    <h4 className="m-0 fs-base fw-700">Michael Branson</h4>
                    <span className="m-0 fs-sm text-muted">34 mutual friends</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-lg-6">
              <a href="#" className="friend-list-item card mb-2 p-2 border-0">
                <div className=" align-items-center d-flex flex-row">
                  <div className="my-2">
                    <img src="assets/images/default-female-avatar.jpg" style={{height: '50px'}} alt="User" className="rounded-circle" />
                  </div>
                  <div className="ml-3">
                    <h4 className="m-0 fs-base fw-700">Robert Nordic</h4>
                    <span className="m-0 fs-sm text-muted">22 mutual friends</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-lg-6">
              <a href="#" className="friend-list-item card mb-2 p-2 border-0">
                <div className=" align-items-center d-flex flex-row">
                  <div className="my-2">
                    <img src="assets/images/default-female-avatar.jpg" style={{height: '50px'}} alt="User" className="rounded-circle" />
                  </div>
                  <div className="ml-3">
                    <h4 className="m-0 fs-base fw-700">Michael Branson</h4>
                    <span className="m-0 fs-sm text-muted">34 mutual friends</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div> {/* end card */}
    </div> {/* end col */}
  </div>
</>

export default Profile;
