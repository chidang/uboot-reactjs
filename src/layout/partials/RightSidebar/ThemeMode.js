import websiteLayout from "../../../assets/images/website-layout.jpg";
import websiteLayoutDark from "../../../assets/images/website-layout-dark.jpg";

const ThemeMode = () =>
<>
    <div class="mt-4 pl-3 pr-2">
    <h5 class="p-0 fw-700">
        Theme Modes
    </h5>
    </div>
    <div class="theme-modes pl-3 pr-2">
    <div class="row">
        <div class="col-6 pr-2 text-center">
        <div data-theme-mode="default-mode" class="theme-mode-config bg-white border border-secondary rounded overflow-hidden text-success" style={{height: "100px"}}>
            <div class="bg-primary border-bottom py-1"></div>
            <div class="d-flex w-100 flex-row" style={{height: "92px"}}>
            <div class="map-left-sidebar px-2 pt-0 border-right h-100"></div>
            <div class="bg-white h-100 pt-3 pb-3 px-2" style={{flex: "1 1 auto"}}>
                <div class="py-3 h-100" style={{background: `url(${websiteLayout}) top left no-repeat`, backgroundSize: "100%"}}></div>
            </div>
            </div>
        </div>
        Default
        </div>
        <div class="col-6 pl-2 text-center">
        <div data-theme-mode="dark-mode" class="theme-mode-config border border-white rounded overflow-hidden bg-dark text-success" style={{height: "100px"}}>
            <div class="border-bottom py-1"></div>
            <div class="d-flex w-100 flex-row" style={{height: "92px"}}>
            <div class="map-left-sidebar px-2 pt-0 border-right h-100"></div>
            <div class="bg-dark h-100 pt-3 pb-3 px-2" style={{flex: "1 1 auto"}}>
                <div class="py-3 h-100 " style={{background: `url(${websiteLayoutDark}) top left no-repeat`, backgroundSize: "100%"}}></div>
            </div>
            </div>
        </div>
        Dark
        </div>
    </div>
    </div>
</>

export default ThemeMode;