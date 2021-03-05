import websiteLayout from "../../../assets/images/website-layout.jpg";
import websiteLayoutDark from "../../../assets/images/website-layout-dark.jpg";

const ThemeMode = (props) => {
    const options = props.options;
    const commonModeClass = "theme-mode-config border rounded overflow-hidden text-success";
    let defaultModeClass = commonModeClass + "  border-secondary bg-white";
    let darkModeClass = commonModeClass + "  border-white bg-dark";
    if (options.themeMode === "dark-mode") {
        darkModeClass = darkModeClass + " active";
    } else {
        defaultModeClass = defaultModeClass + " active";
    }
    return <>
        <div className="mt-4 ps-3 pe-2">
            <h5 className="p-0 fw-700">
                Theme Modes
            </h5>
        </div>
        <div className="theme-modes ps-3 pe-2">
            <div className="row">
                <div className="col-6 pe-2 text-center">
                    <div onClick={() => options.changeThemeMode("default-mode")} className={defaultModeClass} style={{ height: "100px" }}>
                        <div className="bg-primary border-bottom py-1"></div>
                        <div className="d-flex w-100 flex-row" style={{ height: "92px" }}>
                            <div className="map-left-sidebar px-2 pt-0 border-right h-100"></div>
                            <div className="bg-white h-100 pt-3 pb-3 px-2" style={{ flex: "1 1 auto" }}>
                                <div className="py-3 h-100" style={{ background: `url(${websiteLayout}) top left no-repeat`, backgroundSize: "100%" }}></div>
                            </div>
                        </div>
                    </div>
                    Default
                </div>
                <div className="col-6 ps-2 text-center">
                    <div onClick={() => options.changeThemeMode("dark-mode")} className={darkModeClass} style={{ height: "100px" }}>
                        <div className="border-bottom py-1"></div>
                        <div className="d-flex w-100 flex-row" style={{ height: "92px" }}>
                            <div className="map-left-sidebar px-2 pt-0 border-right h-100"></div>
                            <div className="bg-dark h-100 pt-3 pb-3 px-2" style={{ flex: "1 1 auto" }}>
                                <div className="py-3 h-100 " style={{ background: `url(${websiteLayoutDark}) top left no-repeat`, backgroundSize: "100%" }}></div>
                            </div>
                        </div>
                    </div>
                    Dark
                </div>
            </div>
        </div>
    </>
}

export default ThemeMode;
