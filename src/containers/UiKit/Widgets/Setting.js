const Setting = () => {
    return (
        <>
            <div className="fs-sm mb-1"><b>SETTINGS</b></div>
            <div className="card">
                <div className="widget-list">
                    <div className="widget-item d-flex justify-content-between p-2 widget-list-item">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="my-2">
                                <span className="btn btn-icon btn-circle bg-highlight-100 waves-effect"><i className="bi-gear fs-md text-primary" /></span>
                            </div>
                            <div className="ms-3">
                                <h4 className="m-0 fs-base fw-700">Global Settings</h4>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="custom-switcher custom-switcher-highlight">
                                <input type="checkbox" name="custom-switcher-1" id="custom-switcher-1" defaultChecked defaultValue={1} />
                                <label htmlFor="custom-switcher-1" />
                            </div>
                        </div>
                    </div> {/* end widget-tiem */}
                    <div className="widget-item d-flex justify-content-between p-2 widget-list-item">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="my-2">
                                <span className="btn btn-icon btn-circle bg-highlight-100 waves-effect"><i className="bi-bar-chart fs-md text-primary" /></span>
                            </div>
                            <div className="ms-3">
                                <h4 className="m-0 fs-base fw-700">Analytics</h4>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="custom-switcher custom-switcher-highlight">
                                <input type="checkbox" name="custom-switcher-2" id="custom-switcher-2" defaultChecked defaultValue={1} />
                                <label htmlFor="custom-switcher-2" />
                            </div>
                        </div>
                    </div> {/* end widget-tiem */}
                    <div className="widget-item d-flex justify-content-between p-2 widget-list-item">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="my-2">
                                <span className="btn btn-icon btn-circle bg-highlight-100 waves-effect"><i className="bi-pie-chart fs-md text-primary" /></span>
                            </div>
                            <div className="ms-3">
                                <h4 className="m-0 fs-base fw-700">Layout Settings</h4>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="custom-switcher custom-switcher-highlight">
                                <input type="checkbox" name="custom-switcher-3" id="custom-switcher-3" defaultValue={1} />
                                <label htmlFor="custom-switcher-3" />
                            </div>
                        </div>
                    </div> {/* end widget-tiem */}
                </div> {/* end widget-list */}
            </div>

        </>
    );
}

export default Setting;
