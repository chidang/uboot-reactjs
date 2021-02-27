import { Link } from "react-router-dom";

const Tabs = () => 
<>
<nav aria-label="breadcrumb">
    <ol className="breadcrumb ps-0 fs-base">
      <li className="breadcrumb-item"><a href="#">Uboot</a></li>
      <li className="breadcrumb-item"><span>UI Kit</span></li>
      <li className="breadcrumb-item active" aria-current="page">Tab</li>
    </ol>
  </nav>
  <div className="header mb-4">
    <h1 className="header-title h3">
      <i className="fal fa-indent text-primary" />
      Tab
    </h1>
  </div>
  <div className="row">
    <div className="col-lg-6">
      <div className="card">
        {/*begin card*/}
        <div className="card-header justify-content-between">
          <h4 className="fw-700 m-0 fs-base">
            Basic <span className="fw-300"><i>Tabs</i></span>
          </h4>
          <div className="card-widgets">
            <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
            <a className="btn btn-warning" data-toggle="collapse" data-target="#cardBasicTab" role="button" aria-expanded="false" aria-controls="cardBasicTab"><i className="dripicons-minus" /></a>
            <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
          </div>
        </div>
        <div id="cardBasicTab" className="card-body show">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#" data-target="#tabs_1_1">Active</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" data-toggle="tab" href="#tabs_1_2">Action</a>
                <a className="dropdown-item" data-toggle="tab" href="#tabs_1_3">Another action</a>
                <a className="dropdown-item" data-toggle="tab" href="#tabs_1_4">Something else here</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" data-toggle="tab" href="#tabs_1_2">Separated link</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#tabs_1_3">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" data-toggle="tab" href="#tabs_1_4">Disabled</a>
            </li>
          </ul>
          <div className="tab-content tab-content-bordered">
            <div className="tab-pane active" id="tabs_1_1" role="tabpanel">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in nulla enim. Aenean ac orci ut tortor eleifend suscipit eget vel eros. Aenean neque nisi, viverra et eros at, aliquet ullamcorper turpis. Sed mollis congue leo ac pulvinar. Donec mollis sed sem a viverra. Phasellus ex orci, fringilla in ipsum at, placerat efficitur metus. Quisque maximus, sem vitae imperdiet vehicula, purus turpis bibendum nulla, quis lobortis sem nulla vel magna. Aenean id tortor consequat diam rhoncus rutrum nec in massa. Donec aliquet faucibus libero at semper.
            </div>
            <div className="tab-pane" id="tabs_1_2" role="tabpanel">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut metus in urna convallis sollicitudin. Donec ut lacinia tortor. Fusce est justo, sagittis eu iaculis at, condimentum sed dui. Proin ultricies, nibh commodo imperdiet posuere, dui sapien accumsan lorem, sit amet posuere felis orci nec felis. Vivamus facilisis nulla imperdiet, gravida nunc et, vehicula sem. Integer congue vel odio sit amet luctus. Praesent dapibus erat vel elit tincidunt sodales nec sed purus. Curabitur pretium lectus vitae nisi posuere aliquam. Suspendisse sed risus sed turpis pharetra efficitur. Duis eleifend purus in risus suscipit, in viverra libero fermentum. Vestibulum vel orci eget sapien malesuada tempus.
            </div>
            <div className="tab-pane" id="tabs_1_3" role="tabpanel">
              Morbi ornare ipsum id lectus vulputate, non malesuada diam eleifend. Pellentesque nisl risus, laoreet eget metus id, interdum bibendum lectus. Duis eros sapien, iaculis a nisi vitae, molestie ornare purus. Donec ut iaculis tortor. Nunc ullamcorper orci ac tellus aliquam, vitae facilisis nisi consectetur. Vivamus et ligula malesuada, gravida tortor sit amet, pellentesque nisi. Nullam sagittis sollicitudin mauris, nec gravida sapien volutpat non.
            </div>
            <div className="tab-pane" id="tabs_1_4" role="tabpanel">
              Maecenas consectetur, orci a sollicitudin hendrerit, dui dolor pretium urna, sed porttitor nunc mauris non libero. Sed malesuada nulla tortor, ac porta velit rhoncus at. Fusce finibus, elit nec efficitur suscipit, ipsum nisi cursus ex, eleifend sagittis velit magna id orci. Aliquam feugiat ac purus non imperdiet. Donec id diam laoreet, semper est a, commodo nisl. Proin vehicula sem vel ligula egestas, gravida pretium nibh gravida. Nullam mauris justo, dignissim quis dignissim egestas, varius id velit. Morbi hendrerit tristique malesuada. Duis gravida diam non libero venenatis, ac gravida lorem laoreet. Duis vel urna ut metus consectetur dictum. Nulla pulvinar, turpis lobortis pulvinar malesuada, sapien turpis finibus ex, id bibendum tortor risus in mi. Nulla malesuada eget libero in finibus.
            </div>
          </div>
        </div>
      </div>
      {/*end card*/}
      <div className="card">
        {/*begin card*/}
        <div className="card-header justify-content-between">
          <h4 className="fw-700 m-0 fs-base">
            Icon <span className="fw-300"><i>Tabs</i></span>
          </h4>
          <div className="card-widgets">
            <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
            <a className="btn btn-warning" data-toggle="collapse" data-target="#cardIconTab" role="button" aria-expanded="false" aria-controls="cardIconTab"><i className="dripicons-minus" /></a>
            <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
          </div>
        </div>
        <div id="cardIconTab" className="card-body show">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#tabs_2_1">
                <i className="bi-check2" /> Active
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <i className="bi-gear" /> Dropdown
              </a>
              <div className="dropdown-menu" style={{}}>
                <a className="dropdown-item" data-toggle="tab" href="#tabs_2_3">Action</a>
                <a className="dropdown-item" data-toggle="tab" href="#tabs_2_4">Another action</a>
                <a className="dropdown-item" data-toggle="tab" href="#tabs_2_1">Something else here</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" data-toggle="tab" href="#tabs_2_2">Separated link</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#tabs_2_2">
                <i className="bi-link-45deg" /> Link 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#tabs_2_3">
                <i className="bi-link-45deg" /> Link 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" data-toggle="tab" href="#tabs_2_4">
                <i className="fal fa-exclamation-triangle" /> Disabled
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="tabs_2_1" role="tabpanel">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in nulla enim. Aenean ac orci ut tortor eleifend suscipit eget vel eros. Aenean neque nisi, viverra et eros at, aliquet ullamcorper turpis. Sed mollis congue leo ac pulvinar. Donec mollis sed sem a viverra. Phasellus ex orci, fringilla in ipsum at, placerat efficitur metus. Quisque maximus, sem vitae imperdiet vehicula, purus turpis bibendum nulla, quis lobortis sem nulla vel magna. Aenean id tortor consequat diam rhoncus rutrum nec in massa. Donec aliquet faucibus libero at semper.
            </div>
            <div className="tab-pane" id="tabs_2_2" role="tabpanel">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut metus in urna convallis sollicitudin. Donec ut lacinia tortor. Fusce est justo, sagittis eu iaculis at, condimentum sed dui. Proin ultricies, nibh commodo imperdiet posuere, dui sapien accumsan lorem, sit amet posuere felis orci nec felis. Vivamus facilisis nulla imperdiet, gravida nunc et, vehicula sem. Integer congue vel odio sit amet luctus. Praesent dapibus erat vel elit tincidunt sodales nec sed purus. Curabitur pretium lectus vitae nisi posuere aliquam. Suspendisse sed risus sed turpis pharetra efficitur. Duis eleifend purus in risus suscipit, in viverra libero fermentum. Vestibulum vel orci eget sapien malesuada tempus.
            </div>
            <div className="tab-pane" id="tabs_2_3" role="tabpanel">
              Morbi ornare ipsum id lectus vulputate, non malesuada diam eleifend. Pellentesque nisl risus, laoreet eget metus id, interdum bibendum lectus. Duis eros sapien, iaculis a nisi vitae, molestie ornare purus. Donec ut iaculis tortor. Nunc ullamcorper orci ac tellus aliquam, vitae facilisis nisi consectetur. Vivamus et ligula malesuada, gravida tortor sit amet, pellentesque nisi. Nullam sagittis sollicitudin mauris, nec gravida sapien volutpat non.
            </div>
            <div className="tab-pane" id="tabs_2_4" role="tabpanel">
              Maecenas consectetur, orci a sollicitudin hendrerit, dui dolor pretium urna, sed porttitor nunc mauris non libero. Sed malesuada nulla tortor, ac porta velit rhoncus at. Fusce finibus, elit nec efficitur suscipit, ipsum nisi cursus ex, eleifend sagittis velit magna id orci. Aliquam feugiat ac purus non imperdiet. Donec id diam laoreet, semper est a, commodo nisl. Proin vehicula sem vel ligula egestas, gravida pretium nibh gravida. Nullam mauris justo, dignissim quis dignissim egestas, varius id velit. Morbi hendrerit tristique malesuada. Duis gravida diam non libero venenatis, ac gravida lorem laoreet. Duis vel urna ut metus consectetur dictum. Nulla pulvinar, turpis lobortis pulvinar malesuada, sapien turpis finibus ex, id bibendum tortor risus in mi. Nulla malesuada eget libero in finibus.
            </div>
          </div>
          <div className="my-app-separator my-app-separator--border-dashed my-app-separator--space-lg" />
        </div>
      </div>
      {/*end card*/}
      <div className="card">
        {/*begin card*/}
        <div className="card-header justify-content-between">
          <h4 className="fw-700 m-0 fs-base">
            Adjusted <span className="fw-300"><i>Tabs</i></span>
          </h4>
          <div className="card-widgets">
            <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
            <a className="btn btn-warning" data-toggle="collapse" data-target="#cardAdjustTab" role="button" aria-expanded="false" aria-controls="cardAdjustTab"><i className="dripicons-minus" /></a>
            <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
          </div>
        </div>
        <div id="cardAdjustTab" className="card-body show">
          <ul className="nav nav-tabs nav-fill" role="tablist">
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#tabs_4_1">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#tabs_4_2">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#tabs_4_3">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" data-toggle="tab" href="#tabs_4_4">Disabled</a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane" id="tabs_4_1" role="tabpanel">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in nulla enim. Aenean ac orci ut tortor eleifend suscipit eget vel eros. Aenean neque nisi, viverra et eros at, aliquet ullamcorper turpis. Sed mollis congue leo ac pulvinar. Donec mollis sed sem a viverra. Phasellus ex orci, fringilla in ipsum at, placerat efficitur metus. Quisque maximus, sem vitae imperdiet vehicula, purus turpis bibendum nulla, quis lobortis sem nulla vel magna. Aenean id tortor consequat diam rhoncus rutrum nec in massa. Donec aliquet faucibus libero at semper.
            </div>
            <div className="tab-pane" id="tabs_4_2" role="tabpanel">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut metus in urna convallis sollicitudin. Donec ut lacinia tortor. Fusce est justo, sagittis eu iaculis at, condimentum sed dui. Proin ultricies, nibh commodo imperdiet posuere, dui sapien accumsan lorem, sit amet posuere felis orci nec felis. Vivamus facilisis nulla imperdiet, gravida nunc et, vehicula sem. Integer congue vel odio sit amet luctus. Praesent dapibus erat vel elit tincidunt sodales nec sed purus. Curabitur pretium lectus vitae nisi posuere aliquam. Suspendisse sed risus sed turpis pharetra efficitur. Duis eleifend purus in risus suscipit, in viverra libero fermentum. Vestibulum vel orci eget sapien malesuada tempus.
            </div>
            <div className="tab-pane active" id="tabs_4_3" role="tabpanel">
              Morbi ornare ipsum id lectus vulputate, non malesuada diam eleifend. Pellentesque nisl risus, laoreet eget metus id, interdum bibendum lectus. Duis eros sapien, iaculis a nisi vitae, molestie ornare purus. Donec ut iaculis tortor. Nunc ullamcorper orci ac tellus aliquam, vitae facilisis nisi consectetur. Vivamus et ligula malesuada, gravida tortor sit amet, pellentesque nisi. Nullam sagittis sollicitudin mauris, nec gravida sapien volutpat non.
            </div>
            <div className="tab-pane" id="tabs_4_4" role="tabpanel">
              Maecenas consectetur, orci a sollicitudin hendrerit, dui dolor pretium urna, sed porttitor nunc mauris non libero. Sed malesuada nulla tortor, ac porta velit rhoncus at. Fusce finibus, elit nec efficitur suscipit, ipsum nisi cursus ex, eleifend sagittis velit magna id orci. Aliquam feugiat ac purus non imperdiet. Donec id diam laoreet, semper est a, commodo nisl. Proin vehicula sem vel ligula egestas, gravida pretium nibh gravida. Nullam mauris justo, dignissim quis dignissim egestas, varius id velit. Morbi hendrerit tristique malesuada. Duis gravida diam non libero venenatis, ac gravida lorem laoreet. Duis vel urna ut metus consectetur dictum. Nulla pulvinar, turpis lobortis pulvinar malesuada, sapien turpis finibus ex, id bibendum tortor risus in mi. Nulla malesuada eget libero in finibus.
            </div>
          </div>
        </div>
      </div>
      {/*end card*/}
    </div>
    <div className="col-lg-6">
      <div className="card">
        {/*begin card*/}
        <div className="card-header justify-content-between">
          <h4 className="fw-700 m-0 fs-base">
            Pills
          </h4>
          <div className="card-widgets">
            <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
            <a className="btn btn-warning" data-toggle="collapse" data-target="#cardBill" role="button" aria-expanded="false" aria-controls="cardBill"><i className="dripicons-minus" /></a>
            <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
          </div>
        </div>
        <div id="cardBill" className="card-body show">
          <ul className="nav nav-pills" role="tablist">
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#tabs_5_1">Active</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu" style={{}}>
                <a className="dropdown-item" data-toggle="tab" href="#tabs_5_3" aria-expanded="true">Action</a>
                <a className="dropdown-item" data-toggle="tab" href="#tabs_5_1" aria-expanded="true">Another action</a>
                <a className="dropdown-item" data-toggle="tab" href="#tabs_5_4" aria-expanded="true">Something else here</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item active" data-toggle="tab" href="#tabs_5_2" aria-expanded="true">Separated link</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#tabs_5_3">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" data-toggle="tab" href="#tabs_5_4">Disabled</a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane" id="tabs_5_1" role="tabpanel">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in nulla enim. Aenean ac orci ut tortor eleifend suscipit eget vel eros. Aenean neque nisi, viverra et eros at, aliquet ullamcorper turpis. Sed mollis congue leo ac pulvinar. Donec mollis sed sem a viverra. Phasellus ex orci, fringilla in ipsum at, placerat efficitur metus. Quisque maximus, sem vitae imperdiet vehicula, purus turpis bibendum nulla, quis lobortis sem nulla vel magna. Aenean id tortor consequat diam rhoncus rutrum nec in massa. Donec aliquet faucibus libero at semper.
            </div>
            <div className="tab-pane active" id="tabs_5_2" role="tabpanel">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut metus in urna convallis sollicitudin. Donec ut lacinia tortor. Fusce est justo, sagittis eu iaculis at, condimentum sed dui. Proin ultricies, nibh commodo imperdiet posuere, dui sapien accumsan lorem, sit amet posuere felis orci nec felis. Vivamus facilisis nulla imperdiet, gravida nunc et, vehicula sem. Integer congue vel odio sit amet luctus. Praesent dapibus erat vel elit tincidunt sodales nec sed purus. Curabitur pretium lectus vitae nisi posuere aliquam. Suspendisse sed risus sed turpis pharetra efficitur. Duis eleifend purus in risus suscipit, in viverra libero fermentum. Vestibulum vel orci eget sapien malesuada tempus.
            </div>
            <div className="tab-pane" id="tabs_5_3" role="tabpanel">
              Morbi ornare ipsum id lectus vulputate, non malesuada diam eleifend. Pellentesque nisl risus, laoreet eget metus id, interdum bibendum lectus. Duis eros sapien, iaculis a nisi vitae, molestie ornare purus. Donec ut iaculis tortor. Nunc ullamcorper orci ac tellus aliquam, vitae facilisis nisi consectetur. Vivamus et ligula malesuada, gravida tortor sit amet, pellentesque nisi. Nullam sagittis sollicitudin mauris, nec gravida sapien volutpat non.
            </div>
            <div className="tab-pane" id="tabs_5_4" role="tabpanel">
              Maecenas consectetur, orci a sollicitudin hendrerit, dui dolor pretium urna, sed porttitor nunc mauris non libero. Sed malesuada nulla tortor, ac porta velit rhoncus at. Fusce finibus, elit nec efficitur suscipit, ipsum nisi cursus ex, eleifend sagittis velit magna id orci. Aliquam feugiat ac purus non imperdiet. Donec id diam laoreet, semper est a, commodo nisl. Proin vehicula sem vel ligula egestas, gravida pretium nibh gravida. Nullam mauris justo, dignissim quis dignissim egestas, varius id velit. Morbi hendrerit tristique malesuada. Duis gravida diam non libero venenatis, ac gravida lorem laoreet. Duis vel urna ut metus consectetur dictum. Nulla pulvinar, turpis lobortis pulvinar malesuada, sapien turpis finibus ex, id bibendum tortor risus in mi. Nulla malesuada eget libero in finibus.
            </div>
          </div>
        </div>
      </div>
      {/*end card*/}
      <div className="card">
        {/*begin card*/}
        <div className="card-header justify-content-between">
          <h4 className="fw-700 m-0 fs-base">
            Pill <span className="fw-300"><i>With Icon Tabs </i></span>
          </h4>
          <div className="card-widgets">
            <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
            <a className="btn btn-warning" data-toggle="collapse" data-target="#cardBillWithIconTab" role="button" aria-expanded="false" aria-controls="cardBillWithIconTab"><i className="dripicons-minus" /></a>
            <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
          </div>
        </div>
        <div id="cardBillWithIconTab" className="card-body show">
          <ul className="nav nav-pills" role="tablist">
            <li className="nav-item ">
              <a className="nav-link active" data-toggle="tab" href="#tabs_6_1"><i className="bi-check2" />Active</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <i className="bi-shield-minus" /> Dropdown
              </a>
              <div className="dropdown-menu" style={{}}>
                <a className="dropdown-item" data-toggle="tab" href="#tabs_6_3" aria-expanded="true">Action</a>
                <a className="dropdown-item" data-toggle="tab" href="#tabs_6_4">Another action</a>
                <a className="dropdown-item" data-toggle="tab" href="#tabs_6_1" aria-expanded="true">Something else here</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" data-toggle="tab" href="#tabs_6_2" aria-expanded="true">Separated link</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#tabs_6_3"><i className="bi-suit-club" /> Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" data-toggle="tab" href="#tabs_6_4"><i className="la la-question-circle" />Disabled</a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="tabs_6_1" role="tabpanel">
              Phasellus eu ultrices leo, eu aliquam erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus maximus mi sit amet consectetur. Morbi aliquet nisi venenatis consectetur dignissim. Praesent sollicitudin massa justo, nec viverra ligula interdum id. Nulla iaculis lacinia lectus, at imperdiet diam laoreet non. Cras ac sapien ex. Aliquam dictum felis id lectus finibus, vel commodo est scelerisque. Aenean ultricies neque ut arcu lacinia, vel pretium ante placerat. Ut eget tortor erat.
            </div>
            <div className="tab-pane" id="tabs_6_2" role="tabpanel">
              Maecenas consectetur, orci a sollicitudin hendrerit, dui dolor pretium urna, sed porttitor nunc mauris non libero. Sed malesuada nulla tortor, ac porta velit rhoncus at. Fusce finibus, elit nec efficitur suscipit, ipsum nisi cursus ex, eleifend sagittis velit magna id orci. Aliquam feugiat ac purus non imperdiet. Donec id diam laoreet, semper est a, commodo nisl. Proin vehicula sem vel ligula egestas, gravida pretium nibh gravida. Nullam mauris justo, dignissim quis dignissim egestas, varius id velit. Morbi hendrerit tristique malesuada. Duis gravida diam non libero venenatis, ac gravida lorem laoreet. Duis vel urna ut metus consectetur dictum. Nulla pulvinar, turpis lobortis pulvinar malesuada, sapien turpis finibus ex, id bibendum tortor risus in mi. Nulla malesuada eget libero in finibus.
            </div>
            <div className="tab-pane" id="tabs_6_3" role="tabpanel">
              Morbi ornare ipsum id lectus vulputate, non malesuada diam eleifend. Pellentesque nisl risus, laoreet eget metus id, interdum bibendum lectus. Duis eros sapien, iaculis a nisi vitae, molestie ornare purus. Donec ut iaculis tortor. Nunc ullamcorper orci ac tellus aliquam, vitae facilisis nisi consectetur. Vivamus et ligula malesuada, gravida tortor sit amet, pellentesque nisi. Nullam sagittis sollicitudin mauris, nec gravida sapien volutpat non.
            </div>
            <div className="tab-pane" id="tabs_6_4" role="tabpanel">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut metus in urna convallis sollicitudin. Donec ut lacinia tortor. Fusce est justo, sagittis eu iaculis at, condimentum sed dui. Proin ultricies, nibh commodo imperdiet posuere, dui sapien accumsan lorem, sit amet posuere felis orci nec felis. Vivamus facilisis nulla imperdiet, gravida nunc et, vehicula sem. Integer congue vel odio sit amet luctus. Praesent dapibus erat vel elit tincidunt sodales nec sed purus. Curabitur pretium lectus vitae nisi posuere aliquam. Suspendisse sed risus sed turpis pharetra efficitur. Duis eleifend purus in risus suscipit, in viverra libero fermentum. Vestibulum vel orci eget sapien malesuada tempus.
            </div>
          </div>
        </div>
      </div>
      {/*end card*/}
      <div className="card">
        {/*begin card*/}
        <div className="card-header justify-content-between">
          <h4 className="fw-700 m-0 fs-base">
            Adjusted <span className="fw-300"><i>Bills </i></span>
          </h4>
          <div className="card-widgets">
            <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
            <a className="btn btn-warning" data-toggle="collapse" data-target="#cardAdjustedBill" role="button" aria-expanded="false" aria-controls="cardAdjustedBill"><i className="dripicons-minus" /></a>
            <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
          </div>
        </div>
        <div id="cardAdjustedBill" className="card-body show">
          <ul className="nav nav-pills nav-fill" role="tablist">
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#tabs_7_1">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#tabs_7_2">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#tabs_7_3">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" data-toggle="tab" href="#tabs_7_4">Disabled</a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane" id="tabs_7_1" role="tabpanel">
              Phasellus eu ultrices leo, eu aliquam erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus maximus mi sit amet consectetur. Morbi aliquet nisi venenatis consectetur dignissim. Praesent sollicitudin massa justo, nec viverra ligula interdum id. Nulla iaculis lacinia lectus, at imperdiet diam laoreet non. Cras ac sapien ex. Aliquam dictum felis id lectus finibus, vel commodo est scelerisque. Aenean ultricies neque ut arcu lacinia, vel pretium ante placerat. Ut eget tortor erat.
            </div>
            <div className="tab-pane" id="tabs_7_2" role="tabpanel">
              Maecenas consectetur, orci a sollicitudin hendrerit, dui dolor pretium urna, sed porttitor nunc mauris non libero. Sed malesuada nulla tortor, ac porta velit rhoncus at. Fusce finibus, elit nec efficitur suscipit, ipsum nisi cursus ex, eleifend sagittis velit magna id orci. Aliquam feugiat ac purus non imperdiet. Donec id diam laoreet, semper est a, commodo nisl. Proin vehicula sem vel ligula egestas, gravida pretium nibh gravida. Nullam mauris justo, dignissim quis dignissim egestas, varius id velit. Morbi hendrerit tristique malesuada. Duis gravida diam non libero venenatis, ac gravida lorem laoreet. Duis vel urna ut metus consectetur dictum. Nulla pulvinar, turpis lobortis pulvinar malesuada, sapien turpis finibus ex, id bibendum tortor risus in mi. Nulla malesuada eget libero in finibus.
            </div>
            <div className="tab-pane active" id="tabs_7_3" role="tabpanel">
              Morbi ornare ipsum id lectus vulputate, non malesuada diam eleifend. Pellentesque nisl risus, laoreet eget metus id, interdum bibendum lectus. Duis eros sapien, iaculis a nisi vitae, molestie ornare purus. Donec ut iaculis tortor. Nunc ullamcorper orci ac tellus aliquam, vitae facilisis nisi consectetur. Vivamus et ligula malesuada, gravida tortor sit amet, pellentesque nisi. Nullam sagittis sollicitudin mauris, nec gravida sapien volutpat non.
            </div>
            <div className="tab-pane" id="tabs_7_4" role="tabpanel">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut metus in urna convallis sollicitudin. Donec ut lacinia tortor. Fusce est justo, sagittis eu iaculis at, condimentum sed dui. Proin ultricies, nibh commodo imperdiet posuere, dui sapien accumsan lorem, sit amet posuere felis orci nec felis. Vivamus facilisis nulla imperdiet, gravida nunc et, vehicula sem. Integer congue vel odio sit amet luctus. Praesent dapibus erat vel elit tincidunt sodales nec sed purus. Curabitur pretium lectus vitae nisi posuere aliquam. Suspendisse sed risus sed turpis pharetra efficitur. Duis eleifend purus in risus suscipit, in viverra libero fermentum. Vestibulum vel orci eget sapien malesuada tempus.
            </div>
          </div>
        </div>
      </div>
      {/*end card*/}
      <div className="card">
        <div className="card-header justify-content-between">
          <h4 className="fw-700 m-0 fs-base">
            Vertical <span className="fw-300"><i>Tabs </i></span>
          </h4>
          <div className="card-widgets">
            <a className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></a>
            <a className="btn btn-warning" data-toggle="collapse" data-target="#cardVerticalTab" role="button" aria-expanded="false" aria-controls="cardVerticalTab"><i className="dripicons-minus" /></a>
            <a className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></a>
          </div>
        </div>
        <div id="cardVerticalTab" className="card-body show">
          <div className="nav-tabs-left">
            <ul className="nav nav-tabs" id="nav-tabs-left">
              <li className="nav-item"><a href="#tab-left-home" className="nav-link active" data-toggle="tab">Home</a></li>
              <li className="nav-item"><a href="#tab-left-profile" className="nav-link" data-toggle="tab">Profile</a></li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link" data-toggle="dropdown">
                  Dropdown
                </a>
                <div className="dropdown-menu">
                  <a href="#tab-left-dropdown1" className="dropdown-item" data-toggle="tab">New</a>
                  <a href="#tab-left-dropdown2" className="dropdown-item" data-toggle="tab">Export</a>
                </div>
              </li>
            </ul>
            <div className="tab-content tab-content-bordered">
              <div className="tab-pane fade active show" id="tab-left-home">
                Phasellus eu ultrices leo, eu aliquam erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus maximus mi sit amet consectetur. Morbi aliquet nisi venenatis consectetur dignissim. Praesent sollicitudin massa justo, nec viverra ligula interdum id. Nulla iaculis lacinia lectus, at imperdiet diam laoreet non. Cras ac sapien ex. Aliquam dictum felis id lectus finibus, vel commodo est scelerisque. Aenean ultricies neque ut arcu lacinia, vel pretium ante placerat. Ut eget tortor erat.
              </div>
              <div className="tab-pane fade" id="tab-left-profile">
                Maecenas consectetur, orci a sollicitudin hendrerit, dui dolor pretium urna, sed porttitor nunc mauris non libero. Sed malesuada nulla tortor, ac porta velit rhoncus at. Fusce finibus, elit nec efficitur suscipit, ipsum nisi cursus ex, eleifend sagittis velit magna id orci. Aliquam feugiat ac purus non imperdiet. Donec id diam laoreet, semper est a, commodo nisl. Proin vehicula sem vel ligula egestas, gravida pretium nibh gravida. Nullam mauris justo, dignissim quis dignissim egestas, varius id velit. Morbi hendrerit tristique malesuada. Duis gravida diam non libero venenatis, ac gravida lorem laoreet. Duis vel urna ut metus consectetur dictum. Nulla pulvinar, turpis lobortis pulvinar malesuada, sapien turpis finibus ex, id bibendum tortor risus in mi. Nulla malesuada eget libero in finibus.
              </div>
              <div className="tab-pane fade" id="tab-left-dropdown1">
                Morbi ornare ipsum id lectus vulputate, non malesuada diam eleifend. Pellentesque nisl risus, laoreet eget metus id, interdum bibendum lectus. Duis eros sapien, iaculis a nisi vitae, molestie ornare purus. Donec ut iaculis tortor. Nunc ullamcorper orci ac tellus aliquam, vitae facilisis nisi consectetur. Vivamus et ligula malesuada, gravida tortor sit amet, pellentesque nisi. Nullam sagittis sollicitudin mauris, nec gravida sapien volutpat non.
              </div>
              <div className="tab-pane fade" id="tab-left-dropdown2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut metus in urna convallis sollicitudin. Donec ut lacinia tortor. Fusce est justo, sagittis eu iaculis at, condimentum sed dui. Proin ultricies, nibh commodo imperdiet posuere, dui sapien accumsan lorem, sit amet posuere felis orci nec felis. Vivamus facilisis nulla imperdiet, gravida nunc et, vehicula sem. Integer congue vel odio sit amet luctus. Praesent dapibus erat vel elit tincidunt sodales nec sed purus. Curabitur pretium lectus vitae nisi posuere aliquam. Suspendisse sed risus sed turpis pharetra efficitur. Duis eleifend purus in risus suscipit, in viverra libero fermentum. Vestibulum vel orci eget sapien malesuada tempus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

export default Tabs;
