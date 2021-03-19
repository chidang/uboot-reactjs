import { Link } from "react-router-dom";
import pic_1 from "../../assets/images/natural/pic-1.jpg";
import pic_2 from "../../assets/images/natural/pic-2.jpg";
import pic_3 from "../../assets/images/natural/pic-3.jpg";
import pic_4 from "../../assets/images/natural/pic-4.jpg";
import pic_5 from "../../assets/images/natural/pic-5.jpg";
import pic_6 from "../../assets/images/natural/pic-6.jpg";
import pic_7 from "../../assets/images/natural/pic-7.jpg";
import pic_8 from "../../assets/images/natural/pic-8.jpg";
import pic_9 from "../../assets/images/natural/pic-9.jpg";
import pic_10 from "../../assets/images/natural/pic-10.jpg";
import pic_11 from "../../assets/images/natural/pic-11.jpg";
import pic_12 from "../../assets/images/natural/pic-12.jpg";
import pic_13 from "../../assets/images/natural/pic-13.jpg";
import pic_14 from "../../assets/images/natural/pic-14.jpg";
import pic_15 from "../../assets/images/natural/pic-15.jpg";
import pic_16 from "../../assets/images/natural/pic-16.jpg";
import avatar from "../../assets/images/avatar.jpg";
import femaleAvatar from "../../assets/images/default-female-avatar.jpg";
import { Bar } from "react-chartjs-2";

const Profile = () => {
  const theme = { color: { primary: '#4285f4' } };
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: "Last year",
        backgroundColor: theme.color.primary,
        borderColor: theme.color.primary,
        hoverBackgroundColor: theme.color.primary,
        hoverBorderColor: theme.color.primary,
        data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
        barPercentage: 0.75,
        categoryPercentage: 0.5
      },
      {
        label: "This year",
        backgroundColor: "#E8EAED",
        borderColor: "#E8EAED",
        hoverBackgroundColor: "#E8EAED",
        hoverBorderColor: "#E8EAED",
        data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
        barPercentage: 0.75,
        categoryPercentage: 0.5
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false
          },
          stacked: false,
          ticks: {
            stepSize: 20
          }
        }
      ],
      xAxes: [
        {
          stacked: false,
          gridLines: {
            color: "transparent"
          }
        }
      ]
    }
  };
  return (<>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb ps-0 fs-base">
        <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
        <li className="breadcrumb-item"><span>Page</span></li>
        <li className="breadcrumb-item active" aria-current="page">Profile</li>
      </ol>
    </nav>
    <div className="d-flex header justify-content-between mb-4">
      <h1 className="header-title h3">
        <i className="fas fa-user-circle text-primary" /> Profile
    </h1>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-8">
                <div className="media">
                  <span className="float-start m-2 me-4">
                    <img src={avatar} style={{ height: '100px' }} alt="User" className="rounded-circle img-thumbnail" />
                  </span>
                  <div>
                    <h4 className="mt-1 mb-1">Jack Godfrey</h4>
                    <p className="fs-sm">Frontend developer</p>
                    <ul className="mb-0 list-inline">
                      <li className="d-inline me-2">
                        <Link to="#" className="fs-lg" style={{ color: '#3b5998' }}>
                          <i className="fab fa-facebook" />
                        </Link>
                      </li>
                      <li className="d-inline me-2">
                        <Link to="#" className="fs-lg" style={{ color: '#38A1F3' }}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li className="d-inline me-2">
                        <Link to="#" className="fs-lg" style={{ color: '#db3236' }}>
                          <i className="fab fa-google-plus" />
                        </Link>
                      </li>
                      <li className="d-inline me-2">
                        <Link to="#" className="fs-lg" style={{ color: '#0077B5' }}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center mt-sm-0 mt-3 text-sm-right">
                  <Link to="#" data-original-title="Edit" data-toggle="tooltip"><i className="bi-pencil" /></Link>
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
            <div style={{ height: '300px' }}>
              <Bar data={data} options={options} />
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
                <Link to="#">
                  <span className="task small">
                    <span className="desc">Design database</span>
                    <span className="percent ms-2">74%</span>
                  </span>
                  <div className="progress progress-sm m-0">
                    <div className="progress-bar bg-success" role="progressbar" aria-valuenow={74} aria-valuemin={0} aria-valuemax={100} style={{ width: '74%' }}>
                      <span className="sr-only">74% Complete</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="#">
                  <span className="task small">
                    <span className="desc">Testing</span>
                    <span className="percent ms-2">30%</span>
                  </span>
                  <div className="progress progress-sm m-0">
                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{ width: '30%' }}>
                      <span className="sr-only">30% Complete</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="#">
                  <span className="task small">
                    <span className="desc">Document writting</span>
                    <span className="percent ms-2">50%</span>
                  </span>
                  <div className="progress progress-sm m-0">
                    <div className="progress-bar bg-info" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                      <span className="sr-only">50% Complete</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="#">
                  <span className="task small">
                    <span className="desc">Development</span>
                    <span className="percent ms-2">45%</span>
                  </span>
                  <div className="progress progress-sm m-0">
                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} style={{ width: '45%' }}>
                      <span className="sr-only">45% Complete</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="#">
                  <span className="task small">
                    <span className="desc">HTML slicing</span>
                    <span className="percent ms-2">66%</span>
                  </span>
                  <div className="progress progress-sm m-0">
                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} style={{ width: '66%' }}>
                      <span className="sr-only">66% Complete</span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div> {/* end card */}
        <div className="card">
          <div className="card-header">
            <h4 className="fw-700 m-0 fs-base"><span className="p-2"><i className="bi-card-image" /></span>
            Photos</h4>
          </div>
          <div className="card-body">
            <div className="widget-image-list">
              <div className="d-flex p-1">
                <div className="w-25">
                  <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_1 + ")" }} /></Link>
                  <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_2 + ")" }} /></Link>
                  <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_3 + ")" }} /></Link>
                  <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_4 + ")" }} /></Link>
                </div>
                <div className="w-25">
                  <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_5 + ")" }} /></Link>
                  <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_6 + ")" }} /></Link>
                  <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_7 + ")" }} /></Link>
                  <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_8 + ")" }} /></Link>
                </div>
                <div className="w-25">
                  <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_9 + ")" }} /></Link>
                  <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_10 + ")" }} /></Link>
                  <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_11 + ")" }} /></Link>
                  <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_12 + ")" }} /></Link>
                </div>
                <div className="w-25">
                  <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_13 + ")" }} /></Link>
                  <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_14 + ")" }} /></Link>
                  <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_15 + ")" }} /></Link>
                  <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_16 + ")" }} /></Link>
                </div>
              </div>
            </div>
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
                          <dd><Link to="tel:+0422xxxx">+0422xxxx</Link></dd>
                          <dt>Timezone</dt>
                          <dd>
                            <span className="badge bg-success">New York</span>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <button type="button" className="btn btn-primary mb-4 me-2">Update Profile</button>
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
                  <div className="me-3 fs-xxl">
                    <i className="fas fa-graduation-cap" />
                  </div>
                  <div className="d-flex flex-column">
                    <Link to="#" className="fw-700 mb-3">Qualifications</Link>
                    <div className="text-dark-75">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy since the 1500s.</div>
                  </div>
                </div>
              </div>
            </div> {/* end card */}
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center text-info">
                  <div className="me-3 fs-xxl">
                    <i className="fas fa-id-card-alt" />
                  </div>
                  <div className="d-flex flex-column">
                    <Link to="#" className="fw-700 mb-3">Skill</Link>
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
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" />
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Amout</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>PlayStation Store Gift Card</td>
                    <td>$10</td>
                    <td>100</td>
                    <td>$1,000</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Water Sports Shoes</td>
                    <td>$13.68</td>
                    <td>100</td>
                    <td>$1,368</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Wireless Security Camera</td>
                    <td>$29.99</td>
                    <td>100</td>
                    <td>$2,999</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>WiFi Sports Action Camera Ultra HD</td>
                    <td>$50</td>
                    <td>100</td>
                    <td>$5,000</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Electronics Universal Smartphone</td>
                    <td>$6.99</td>
                    <td>100</td>
                    <td>$699</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>WD 4TB Elements Portable External Hard Drive</td>
                    <td>$89.99</td>
                    <td>100</td>
                    <td>$8,999</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Unlisted by Kenneth Cole Men's Dress Shirt Slim Fit Checks and Stripes</td>
                    <td>19.99</td>
                    <td>100</td>
                    <td>$1,999</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Wireless Security Camera</td>
                    <td>$29.99</td>
                    <td>100</td>
                    <td>$2,999</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>WiFi Sports Action Camera Ultra HD</td>
                    <td>$50</td>
                    <td>100</td>
                    <td>$5,000</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Electronics Universal Smartphone</td>
                    <td>$6.99</td>
                    <td>100</td>
                    <td>$699</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>WD 4TB Elements Portable External Hard Drive</td>
                    <td>$89.99</td>
                    <td>100</td>
                    <td>$8,999</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
                <Link to="#" className="friend-list-item card mb-2 p-2 border-0">
                  <div className=" align-items-center d-flex flex-row">
                    <div className="my-2">
                      <img src={femaleAvatar} style={{ height: '50px' }} alt="User" className="rounded-circle" />
                    </div>
                    <div className="ms-3">
                      <h4 className="m-0 fs-base fw-700">Sam Robert</h4>
                      <span className="m-0 fs-sm text-muted">37 mutual friends</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-6">
                <Link to="#" className="friend-list-item card mb-2 p-2 border-0">
                  <div className=" align-items-center d-flex flex-row">
                    <div className="my-2">
                      <img src={femaleAvatar} style={{ height: '50px' }} alt="User" className="rounded-circle" />
                    </div>
                    <div className="ms-3">
                      <h4 className="m-0 fs-base fw-700">Schirsten Vander</h4>
                      <span className="m-0 fs-sm text-muted">29 mutual friends</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-6">
                <Link to="#" className="friend-list-item card mb-2 p-2 border-0">
                  <div className=" align-items-center d-flex flex-row">
                    <div className="my-2">
                      <img src={femaleAvatar} style={{ height: '50px' }} alt="User" className="rounded-circle" />
                    </div>
                    <div className="ms-3">
                      <h4 className="m-0 fs-base fw-700">Robert Nordic</h4>
                      <span className="m-0 fs-sm text-muted">22 mutual friends</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-6">
                <Link to="#" className="friend-list-item card mb-2 p-2 border-0">
                  <div className=" align-items-center d-flex flex-row">
                    <div className="my-2">
                      <img src={femaleAvatar} style={{ height: '50px' }} alt="User" className="rounded-circle" />
                    </div>
                    <div className="ms-3">
                      <h4 className="m-0 fs-base fw-700">Michael Branson</h4>
                      <span className="m-0 fs-sm text-muted">34 mutual friends</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-6">
                <Link to="#" className="friend-list-item card mb-2 p-2 border-0">
                  <div className=" align-items-center d-flex flex-row">
                    <div className="my-2">
                      <img src={femaleAvatar} style={{ height: '50px' }} alt="User" className="rounded-circle" />
                    </div>
                    <div className="ms-3">
                      <h4 className="m-0 fs-base fw-700">Robert Nordic</h4>
                      <span className="m-0 fs-sm text-muted">22 mutual friends</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-6">
                <Link to="#" className="friend-list-item card mb-2 p-2 border-0">
                  <div className=" align-items-center d-flex flex-row">
                    <div className="my-2">
                      <img src={femaleAvatar} style={{ height: '50px' }} alt="User" className="rounded-circle" />
                    </div>
                    <div className="ms-3">
                      <h4 className="m-0 fs-base fw-700">Michael Branson</h4>
                      <span className="m-0 fs-sm text-muted">34 mutual friends</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-6">
                <Link to="#" className="friend-list-item card mb-2 p-2 border-0">
                  <div className=" align-items-center d-flex flex-row">
                    <div className="my-2">
                      <img src={femaleAvatar} style={{ height: '50px' }} alt="User" className="rounded-circle" />
                    </div>
                    <div className="ms-3">
                      <h4 className="m-0 fs-base fw-700">Robert Nordic</h4>
                      <span className="m-0 fs-sm text-muted">22 mutual friends</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-6">
                <Link to="#" className="friend-list-item card mb-2 p-2 border-0">
                  <div className=" align-items-center d-flex flex-row">
                    <div className="my-2">
                      <img src={femaleAvatar} style={{ height: '50px' }} alt="User" className="rounded-circle" />
                    </div>
                    <div className="ms-3">
                      <h4 className="m-0 fs-base fw-700">Michael Branson</h4>
                      <span className="m-0 fs-sm text-muted">34 mutual friends</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div> {/* end card */}
      </div> {/* end col */}
    </div>
  </>)
}

export default Profile;
