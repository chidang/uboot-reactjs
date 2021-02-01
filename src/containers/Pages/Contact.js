import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.jpg";

const Contact = () => 
<>
<nav aria-label="breadcrumb">
  <ol className="breadcrumb ps-0 fs-base">
    <li className="breadcrumb-item"><Link to="/">FlexAdmin</Link></li>
    <li className="breadcrumb-item"><span>Page</span></li>
    <li className="breadcrumb-item active" aria-current="page">Contact</li>
  </ol>
</nav>
<div className="d-flex header justify-content-between mb-4">
  <h1 className="header-title h3">
    <i className="fal fa-id-card text-highlight"></i>
    Contact
  </h1>
</div>
<div className="card p-4">
  <div className="row js-list-filter">
    <div className="col-xl-4">
      <div className="card border shadow-0 mb-g shadow-sm-hover">
        <div className="card-body ">
          <div className="text-center">
            <span className="user-avatar user-avatar-md user-avatar-success me-3">
              <span className="user-avatar-img rounded-circle"  style={{ backgroundImage: "url(" + avatar + ")", backgroundSize: "cover" }}></span>
            </span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <Link to="/" className="fs-md fw-700" data-bs-toggle="dropdown" aria-expanded="false">
                Jenny Butterscotch
                <i className="bi-chevron-down d-inline-block ms-1 fs-md"></i>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/">Send A Message</Link>
                <Link className="dropdown-item" to="/">Unfollow</Link>
                <Link className="dropdown-item" to="/">Create A Room</Link>
                <Link className="dropdown-item" to="/">Block</Link>
              </div>
            </div>
            <div className="text-truncate text-truncate-xl">IT Director</div>
          </div>
          <div className="p-3 text-center">
            <Link to="tel:808-395-9741" className="mt-1 d-block fs-sm fw-400">
              <i className="fas fa-mobile-alt text-muted"></i> 808-395-9741</Link>
            <Link to="mailto:jenny.butterscotch@example.com" className="mt-1 d-block fs-sm fw-400">
              <i className="bi-envelope text-muted"></i> jenny.butterscotch@example.com</Link>
            <address className="fs-sm fw-400 mt-4 text-muted">
              <i className="bi-map text-muted"></i> City, State, Zip: Kokohead, Hawaii(HI), 96825</address>
            <div className="d-flex flex-row justify-content-center">
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#3b5998"}}>
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#38A1F3"}}>
                <i className="fab fa-twitter-square"></i>
              </Link>
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#0077B5"}}>
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-4">
      <div className="card border shadow-0 mb-g shadow-sm-hover">
        <div className="card-body ">
          <div className="text-center">
            <span className="user-avatar user-avatar-md user-avatar-success me-3">
              <span className="user-avatar-img rounded-circle" style={{ backgroundImage: "url(" + avatar + ")", backgroundSize: "cover" }}></span>
            </span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <Link to="/" className="fs-md fw-700" data-bs-toggle="dropdown" aria-expanded="false">
                Carole T Lusk
                <i className="bi-chevron-down d-inline-block ms-1 fs-md"></i>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/">Send A Message</Link>
                <Link className="dropdown-item" to="/">Unfollow</Link>
                <Link className="dropdown-item" to="/">Create A Room</Link>
                <Link className="dropdown-item" to="/">Block</Link>
              </div>
            </div>
            <div className="text-truncate text-truncate-xl">Soil and Water Conservationist</div>
          </div>
          <div className="p-3 text-center">
            <Link to="tel:619-347-3841" className="mt-1 d-block fs-sm fw-400">
              <i className="fas fa-mobile-alt text-muted"></i> 619-347-3841</Link>
            <Link to="mailto:monty.skile6@yahoo.com" className="mt-1 d-block fs-sm fw-400">
              <i className="bi-envelope text-muted"></i> monty.skile6@yahoo.com</Link>
            <address className="fs-sm fw-400 mt-4 text-muted">
              <i className="bi-map text-muted"></i> Napa, California(CA), 94559</address>
            <div className="d-flex flex-row justify-content-center">
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#3b5998"}}>
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#38A1F3"}}>
                <i className="fab fa-twitter-square"></i>
              </Link>
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#0077B5"}}>
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-4">
      <div className="card border shadow-0 mb-g shadow-sm-hover">
        <div className="card-body ">
          <div className="text-center">
            <span className="user-avatar user-avatar-md user-avatar-success me-3">
              <span className="user-avatar-img rounded-circle" style={{ backgroundImage: "url(" + avatar + ")", backgroundSize: "cover" }}></span>
            </span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <Link to="/" className="fs-md fw-700" data-bs-toggle="dropdown" aria-expanded="false">
                John K Gordon
                <i className="bi-chevron-down d-inline-block ms-1 fs-md"></i>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/">Send A Message</Link>
                <Link className="dropdown-item" to="/">Unfollow</Link>
                <Link className="dropdown-item" to="/">Create A Room</Link>
                <Link className="dropdown-item" to="/">Block</Link>
              </div>
            </div>
            <div className="text-truncate text-truncate-xl">Insulation Worker, Mechanical</div>
          </div>
          <div className="p-3 text-center">
            <Link to="tel:808-395-9741" className="mt-1 d-block fs-sm fw-400">
              <i className="fas fa-mobile-alt text-muted"></i> 616-460-6774</Link>
            <Link to="mailto:jayda.kuh0@gmail.com" className="mt-1 d-block fs-sm fw-400">
              <i className="bi-envelope text-muted"></i> jayda.kuh0@gmail.com</Link>
            <address className="fs-sm fw-400 mt-4 text-muted">
              <i className="bi-map text-muted"></i> Grand Rapids, Michigan(MI), 49503</address>
            <div className="d-flex flex-row justify-content-center">
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#3b5998"}}>
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#38A1F3"}}>
                <i className="fab fa-twitter-square"></i>
              </Link>
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#0077B5"}}>
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row js-list-filter">
    <div className="col-xl-4">
      <div className="card border shadow-0 mb-g shadow-sm-hover">
        <div className="card-body ">
          <div className="text-center">
            <span className="user-avatar user-avatar-md user-avatar-success me-3">
              <span className="user-avatar-img rounded-circle" style={{ backgroundImage: "url(" + avatar + ")", backgroundSize: "cover" }}></span>
            </span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <Link to="/" className="fs-md fw-700" data-bs-toggle="dropdown" aria-expanded="false">
                Jenny Butterscotch
                <i className="bi-chevron-down d-inline-block ms-1 fs-md"></i>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/">Send A Message</Link>
                <Link className="dropdown-item" to="/">Unfollow</Link>
                <Link className="dropdown-item" to="/">Create A Room</Link>
                <Link className="dropdown-item" to="/">Block</Link>
              </div>
            </div>
            <div className="text-truncate text-truncate-xl">IT Director</div>
          </div>
          <div className="p-3 text-center">
            <Link to="tel:808-395-9741" className="mt-1 d-block fs-sm fw-400">
              <i className="fas fa-mobile-alt text-muted"></i> 808-395-9741</Link>
           /.. <Link to="mailto:jenny.butterscotch@example.com" className="mt-1 d-block fs-sm fw-400">
              <i className="bi-envelope text-muted"></i> jenny.butterscotch@example.com</Link>
            <address className="fs-sm fw-400 mt-4 text-muted">
              <i className="bi-map text-muted"></i> City, State, Zip: Kokohead, Hawaii(HI), 96825</address>
            <div className="d-flex flex-row justify-content-center">
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#3b5998"}}>
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#38A1F3"}}>
                <i className="fab fa-twitter-square"></i>
              </Link>
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#0077B5"}}>
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-4">
      <div className="card border shadow-0 mb-g shadow-sm-hover">
        <div className="card-body ">
          <div className="text-center">
            <span className="user-avatar user-avatar-md user-avatar-success me-3">
              <span className="user-avatar-img rounded-circle" style={{ backgroundImage: "url(" + avatar + ")", backgroundSize: "cover" }}></span>
            </span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <Link to="/" className="fs-md fw-700" data-bs-toggle="dropdown" aria-expanded="false">
                Carole T Lusk
                <i className="bi-chevron-down d-inline-block ms-1 fs-md"></i>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/">Send A Message</Link>
                <Link className="dropdown-item" to="/">Unfollow</Link>
                <Link className="dropdown-item" to="/">Create A Room</Link>
                <Link className="dropdown-item" to="/">Block</Link>
              </div>
            </div>
            <div className="text-truncate text-truncate-xl">Soil and Water Conservationist</div>
          </div>
          <div className="p-3 text-center">
            <Link to="tel:619-347-3841" className="mt-1 d-block fs-sm fw-400">
              <i className="fas fa-mobile-alt text-muted"></i> 619-347-3841</Link>
            <Link to="mailto:monty.skile6@yahoo.com" className="mt-1 d-block fs-sm fw-400">
              <i className="bi-envelope text-muted"></i> monty.skile6@yahoo.com</Link>
            <address className="fs-sm fw-400 mt-4 text-muted">
              <i className="bi-map text-muted"></i> Napa, California(CA), 94559</address>
            <div className="d-flex flex-row justify-content-center">
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#3b5998"}}>
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#38A1F3"}}>
                <i className="fab fa-twitter-square"></i>
              </Link>
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#0077B5"}}>
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-4">
      <div className="card border shadow-0 mb-g shadow-sm-hover">
        <div className="card-body ">
          <div className="text-center">
            <span className="user-avatar user-avatar-md user-avatar-success me-3">
              <span className="user-avatar-img rounded-circle" style={{ backgroundImage: "url(" + avatar + ")", backgroundSize: "cover" }}></span>
            </span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <Link to="/" className="fs-md fw-700" data-bs-toggle="dropdown" aria-expanded="false">
                John K Gordon
                <i className="bi-chevron-down d-inline-block ms-1 fs-md"></i>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/">Send A Message</Link>
                <Link className="dropdown-item" to="/">Unfollow</Link>
                <Link className="dropdown-item" to="/">Create A Room</Link>
                <Link className="dropdown-item" to="/">Block</Link>
              </div>
            </div>
            <div className="text-truncate text-truncate-xl">Insulation Worker, Mechanical</div>
          </div>
          <div className="p-3 text-center">
            <Link to="tel:808-395-9741" className="mt-1 d-block fs-sm fw-400">
              <i className="fas fa-mobile-alt text-muted"></i> 616-460-6774</Link>
            <Link to="mailto:jayda.kuh0@gmail.com" className="mt-1 d-block fs-sm fw-400">
              <i className="bi-envelope text-muted"></i> jayda.kuh0@gmail.com</Link>
            <address className="fs-sm fw-400 mt-4 text-muted">
              <i className="bi-map text-muted"></i> Grand Rapids, Michigan(MI), 49503</address>
            <div className="d-flex flex-row justify-content-center">
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#3b5998"}}>
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#38A1F3"}}>
                <i className="fab fa-twitter-square"></i>
              </Link>
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#0077B5"}}>
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row js-list-filter">
    <div className="col-xl-4">
      <div className="card border shadow-0 mb-g shadow-sm-hover">
        <div className="card-body ">
          <div className="text-center">
            <span className="user-avatar user-avatar-md user-avatar-success me-3">
              <span className="user-avatar-img rounded-circle"  style={{ backgroundImage: "url(" + avatar + ")", backgroundSize: "cover" }}></span>
            </span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <Link to="/" className="fs-md fw-700" data-bs-toggle="dropdown" aria-expanded="false">
                Jenny Butterscotch
                <i className="bi-chevron-down d-inline-block ms-1 fs-md"></i>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/">Send A Message</Link>
                <Link className="dropdown-item" to="/">Unfollow</Link>
                <Link className="dropdown-item" to="/">Create A Room</Link>
                <Link className="dropdown-item" to="/">Block</Link>
              </div>
            </div>
            <div className="text-truncate text-truncate-xl">IT Director</div>
          </div>
          <div className="p-3 text-center">
            <Link to="tel:808-395-9741" className="mt-1 d-block fs-sm fw-400">
              <i className="fas fa-mobile-alt text-muted"></i> 808-395-9741</Link>
            <Link to="mailto:jenny.butterscotch@example.com" className="mt-1 d-block fs-sm fw-400">
              <i className="bi-envelope text-muted"></i> jenny.butterscotch@example.com</Link>
            <address className="fs-sm fw-400 mt-4 text-muted">
              <i className="bi-map text-muted"></i> City, State, Zip: Kokohead, Hawaii(HI), 96825</address>
            <div className="d-flex flex-row justify-content-center">
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#3b5998"}}>
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#38A1F3"}}>
                <i className="fab fa-twitter-square"></i>
              </Link>
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#0077B5"}}>
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-4">
      <div className="card border shadow-0 mb-g shadow-sm-hover">
        <div className="card-body ">
          <div className="text-center">
            <span className="user-avatar user-avatar-md user-avatar-success me-3">
              <span className="user-avatar-img rounded-circle"  style={{ backgroundImage: "url(" + avatar + ")", backgroundSize: "cover" }}></span>
            </span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <Link to="/" className="fs-md fw-700" data-bs-toggle="dropdown" aria-expanded="false">
                Carole T Lusk
                <i className="bi-chevron-down d-inline-block ms-1 fs-md"></i>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/">Send A Message</Link>
                <Link className="dropdown-item" to="/">Unfollow</Link>
                <Link className="dropdown-item" to="/">Create A Room</Link>
                <Link className="dropdown-item" to="/">Block</Link>
              </div>
            </div>
            <div className="text-truncate text-truncate-xl">Soil and Water Conservationist</div>
          </div>
          <div className="p-3 text-center">
            <Link to="tel:619-347-3841" className="mt-1 d-block fs-sm fw-400">
              <i className="fas fa-mobile-alt text-muted"></i> 619-347-3841</Link>
            <Link to="mailto:monty.skile6@yahoo.com" className="mt-1 d-block fs-sm fw-400">
              <i className="bi-envelope text-muted"></i> monty.skile6@yahoo.com</Link>
            <address className="fs-sm fw-400 mt-4 text-muted">
              <i className="bi-map text-muted"></i> Napa, California(CA), 94559</address>
            <div className="d-flex flex-row justify-content-center">
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#3b5998"}}>
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#38A1F3"}}>
                <i className="fab fa-twitter-square"></i>
              </Link>
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#0077B5"}}>
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-4">
      <div className="card border shadow-0 mb-g shadow-sm-hover">
        <div className="card-body ">
          <div className="text-center">
            <span className="user-avatar user-avatar-md user-avatar-success me-3">
              <span className="user-avatar-img rounded-circle"  style={{ backgroundImage: "url(" + avatar + ")", backgroundSize: "cover" }}></span>
            </span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <Link to="/" className="fs-md fw-700" data-bs-toggle="dropdown" aria-expanded="false">
                John K Gordon
                <i className="bi-chevron-down d-inline-block ms-1 fs-md"></i>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/">Send A Message</Link>
                <Link className="dropdown-item" to="/">Unfollow</Link>
                <Link className="dropdown-item" to="/">Create A Room</Link>
                <Link className="dropdown-item" to="/">Block</Link>
              </div>
            </div>
            <div className="text-truncate text-truncate-xl">Insulation Worker, Mechanical</div>
          </div>
          <div className="p-3 text-center">
            <Link to="tel:808-395-9741" className="mt-1 d-block fs-sm fw-400">
              <i className="fas fa-mobile-alt text-muted"></i> 616-460-6774</Link>
            <Link to="mailto:jayda.kuh0@gmail.com" className="mt-1 d-block fs-sm fw-400">
              <i className="bi-envelope text-muted"></i> jayda.kuh0@gmail.com</Link>
            <address className="fs-sm fw-400 mt-4 text-muted">
              <i className="bi-map text-muted"></i> Grand Rapids, Michigan(MI), 49503</address>
            <div className="d-flex flex-row justify-content-center">
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#3b5998"}}>
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#38A1F3"}}>
                <i className="fab fa-twitter-square"></i>
              </Link>
              <Link to="javascript:void(0);" className="me-2 fs-xl" style={{color: "#0077B5"}}>
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>

export default Contact;