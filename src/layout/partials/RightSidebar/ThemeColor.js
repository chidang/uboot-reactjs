import { Link } from "react-router-dom";

const ThemeColor = () =>
<>
    <div className="mt-4 pl-3 pr-2">
        <h5 className="p-0 fw-700">
            Theme Colors
        </h5>
    </div>
    <div className="theme-colors pl-3 pr-2">
        <ul className="m-0 p-0">
            <li>
            <Link to="#" className="bg-aqua" data-theme-color="app-theme-aqua" data-original-title="Aqua"></Link>
            </li>
            <li>
            <Link to="#" className="bg-blue" data-theme-color="app-theme-blue" data-original-title="Blue"></Link>
            </li>
            <li>
            <Link to="#" className="bg-forest" data-theme-color="app-theme-forest" data-original-title="Forest"></Link>
            </li>
            <li>
            <Link to="#" className="bg-hoki" data-theme-color="app-theme-hoki" data-original-title="Hoki"></Link>
            </li>
            <li>
            <Link to="#" className="bg-facebook" data-theme-color="app-theme-facebook" data-original-title="Facebook"></Link>
            </li>
            <li>
            <Link to="#" className="bg-anchor" data-theme-color="app-theme-anchor" data-original-title="Anchor"></Link>
            </li>
            <li>
            <Link to="#" className="bg-carrot" data-theme-color="app-theme-carrot" data-original-title="Carrot"></Link>
            </li>
            <li>
            <Link to="#" className="bg-gold" data-theme-color="app-theme-gold" data-original-title="Gold"></Link>
            </li>
            <li>
            <Link to="#" className="bg-yellow" data-theme-color="app-theme-yellow" data-original-title="Yellow"></Link>
            </li>
            <li>
            <Link to="#" className="bg-pink" data-theme-color="app-theme-pink" data-original-title="Pink"></Link>
            </li>
            <li>
            <Link to="#" className="bg-lollipop" data-theme-color="app-theme-lollipop" data-original-title="Lollipop"></Link>
            </li>
            <li>
            <Link to="#" className="bg-maroon" data-theme-color="app-theme-maroon" data-original-title="Maroon"></Link>
            </li>
            <li>
            <Link to="#" className="bg-purple" data-theme-color="app-theme-purple" data-original-title="Purple"></Link>
            </li>
            <li>
            <Link to="#" className="bg-indigo" data-theme-color="app-theme-indigo" data-original-title="Indigo"></Link>
            </li>
        </ul>
    </div>
</>

export default ThemeColor;