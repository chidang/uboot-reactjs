
const LayoutOption = () =>
    <>
        <div className="mt-4 pl-3 pr-2">
            <h5 className="p-0 fw-700">
            Layout Options
            </h5>
        </div>
        <div className="pl-3 pr-2">
            <div className="d-flex mb-2">
                <div className="custom-switcher custom-switcher-highlight">
                    <input type="checkbox" name="app-shrinking-left-sidebar" id="app-shrinking-left-sidebar"/>
                    <label htmlFor="app-shrinking-left-sidebar"></label>
                </div>
                <div className="ml-3"><label htmlFor="app-shrinking-left-sidebar">Shrinking Left Navigation</label></div>
            </div>
            <div className="d-flex mb-2">
                <div className="custom-switcher custom-switcher-highlight">
                    <input type="checkbox" name="app-fixed-left-sidebar" id="app-fixed-left-sidebar"/>
                    <label htmlFor="app-fixed-left-sidebar"></label>
                </div>
                <div className="ml-3"><label htmlFor="app-fixed-left-sidebar">Fixed Navigation</label></div>
            </div>
        <div className="d-flex mb-2">
            <div className="custom-switcher custom-switcher-highlight">
                <input type="checkbox" name="app-fixed-footer" id="app-fixed-footer"/>
                <label htmlFor="app-fixed-footer"></label>
            </div>
            <div className="ml-3"><label htmlFor="app-fixed-footer">Fixed Footer</label></div>
        </div>
        <div className="d-flex mb-2">
            <div className="custom-switcher custom-switcher-highlight">
                <input type="checkbox" name="app-boxed-layout" id="app-boxed-layout"/>
                <label htmlFor="app-boxed-layout"></label>
            </div>
            <div className="ml-3"><label htmlFor="app-boxed-layout">Boxed Layout</label></div>
        </div>
    </div>
    </>

export default LayoutOption;