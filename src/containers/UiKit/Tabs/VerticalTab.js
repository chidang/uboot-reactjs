import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";

const VerticalTab = () => {
    return (
        <div className="card">
            <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">
                    Vertical <span className="fw-300"><i>Tabs </i></span>
                </h4>
                <div className="card-widgets">
                    <Link className="btn btn-success" href="javascript:;" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                    <Link className="btn btn-warning" data-toggle="collapse" data-target="#cardVerticalTab" role="button" aria-expanded="false" aria-controls="cardVerticalTab"><i className="dripicons-minus" /></Link>
                    <Link className="btn btn-danger" href="#" data-toggle="remove"><i className="bi-x" /></Link>
                </div>
            </div>
            <div id="cardVerticalTab" className="card-body show">
                <div className="nav-tabs-left">
                <Tabs defaultActiveKey="tabs_8_1">
                    <Tab eventKey="tabs_8_1" title="Active">
                        <div className="tab-pane">
                            Phasellus eu ultrices leo, eu aliquam erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus maximus mi sit amet consectetur. Morbi aliquet nisi venenatis consectetur dignissim. Praesent sollicitudin massa justo, nec viverra ligula interdum id. Nulla iaculis lacinia lectus, at imperdiet diam laoreet non. Cras ac sapien ex. Aliquam dictum felis id lectus finibus, vel commodo est scelerisque. Aenean ultricies neque ut arcu lacinia, vel pretium ante placerat. Ut eget tortor erat.
                        </div>
                    </Tab>
                    <Tab eventKey="tabs_8_2" title="Link">
                        <div className="tab-pane">
                            Maecenas consectetur, orci a sollicitudin hendrerit, dui dolor pretium urna, sed porttitor nunc mauris non libero. Sed malesuada nulla tortor, ac porta velit rhoncus at. Fusce finibus, elit nec efficitur suscipit, ipsum nisi cursus ex, eleifend sagittis velit magna id orci. Aliquam feugiat ac purus non imperdiet. Donec id diam laoreet, semper est a, commodo nisl. Proin vehicula sem vel ligula egestas, gravida pretium nibh gravida. Nullam mauris justo, dignissim quis dignissim egestas, varius id velit. Morbi hendrerit tristique malesuada. Duis gravida diam non libero venenatis, ac gravida lorem laoreet. Duis vel urna ut metus consectetur dictum. Nulla pulvinar, turpis lobortis pulvinar malesuada, sapien turpis finibus ex, id bibendum tortor risus in mi. Nulla malesuada eget libero in finibus.
                        </div>
                    </Tab>
                    <Tab eventKey="tabs_8_3" title="Link">
                        <div className="tab-pane active">
                            Morbi ornare ipsum id lectus vulputate, non malesuada diam eleifend. Pellentesque nisl risus, laoreet eget metus id, interdum bibendum lectus. Duis eros sapien, iaculis a nisi vitae, molestie ornare purus. Donec ut iaculis tortor. Nunc ullamcorper orci ac tellus aliquam, vitae facilisis nisi consectetur. Vivamus et ligula malesuada, gravida tortor sit amet, pellentesque nisi. Nullam sagittis sollicitudin mauris, nec gravida sapien volutpat non.
                        </div>
                    </Tab>
                    <Tab eventKey="tabs_8_4" title="Disabled" disabled>
                        <div className="tab-pane">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut metus in urna convallis sollicitudin. Donec ut lacinia tortor. Fusce est justo, sagittis eu iaculis at, condimentum sed dui. Proin ultricies, nibh commodo imperdiet posuere, dui sapien accumsan lorem, sit amet posuere felis orci nec felis. Vivamus facilisis nulla imperdiet, gravida nunc et, vehicula sem. Integer congue vel odio sit amet luctus. Praesent dapibus erat vel elit tincidunt sodales nec sed purus. Curabitur pretium lectus vitae nisi posuere aliquam. Suspendisse sed risus sed turpis pharetra efficitur. Duis eleifend purus in risus suscipit, in viverra libero fermentum. Vestibulum vel orci eget sapien malesuada tempus.
                        </div>
                    </Tab>
                </Tabs>
                </div>
            </div>
        </div>
    );
};

export default VerticalTab;
