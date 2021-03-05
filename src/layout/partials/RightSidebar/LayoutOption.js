const LayoutOption = (props) => {
    const options = props.options;

    return <>
        <div className="mt-4 ps-3 pe-2">
            <h5 className="p-0 fw-700"> Layout Options</h5>
        </div>
        <div className="ps-3 pe-2">
            <div className="d-flex mb-2">
                <div className="custom-switcher custom-switcher-highlight">
                    <input
                        type="checkbox"
                        id="app-shrinking-left-sidebar"
                        checked={!!options.leftSidebarShrinked}
                        onChange={options.toggleLeftSidebar}
                    />
                    <label htmlFor="app-shrinking-left-sidebar"></label>
                </div>
                <div className="ms-3"><label htmlFor="app-shrinking-left-sidebar">Shrinking Left Navigation</label></div>
            </div>
            <div className="d-flex mb-2">
                <div className="custom-switcher custom-switcher-highlight">
                    <input
                        type="checkbox"
                        id="app-fixed-left-sidebar"
                        checked={!!options.leftSidebarFixed}
                        onChange={options.toggleLeftSidebarFixed}
                    />
                    <label htmlFor="app-fixed-left-sidebar"></label>
                </div>
                <div className="ms-3"><label htmlFor="app-fixed-left-sidebar">Fixed Navigation</label></div>
            </div>
            <div className="d-flex mb-2">
                <div className="custom-switcher custom-switcher-highlight">
                    <input
                        type="checkbox"
                        id="app-fixed-footer"
                        checked={!!options.footerFixed}
                        onChange={options.toggleFooterFixed}
                        disabled={!!options.boxedLayout}
                    />
                    <label htmlFor="app-fixed-footer"></label>
                </div>
                <div className="ms-3"><label htmlFor="app-fixed-footer">Fixed Footer</label></div>
            </div>
            <div className="d-flex mb-2">
                <div className="custom-switcher custom-switcher-highlight">
                    <input
                        type="checkbox"
                        id="app-boxed-layout"
                        checked={!!options.boxedLayout}
                        onChange={options.toggleBoxedLayout}
                    />
                    <label htmlFor="app-boxed-layout"></label>
                </div>

                <div className="ms-3"><label htmlFor="app-boxed-layout">Boxed Layout{!!options.boxedLayout}</label></div>
            </div>
        </div>
    </>
}

export default LayoutOption;
