import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import SettingContext from '../../../context/setting-context';

const ThemeColor = () => {
    const settingContext = useContext(SettingContext);
    let aquaClass = "bg-aqua", blueClass = "bg-blue", forestClass = "bg-forest";
    let hokiClass = "bg-hoki", facebookClass = "bg-facebook", anchorClass = "bg-anchor";
    let carrotClass = "bg-carrot", goldClass = "bg-gold", yellowClass = "bg-yellow", pinkClass = "bg-pink";
    let lollipopClass = "bg-lollipop", maroonClass = "bg-maroon", purpleClass = "bg-purple", indigoClass = "bg-indigo";

    if ( settingContext.themeColor === "app-theme-aqua") {
        aquaClass =  aquaClass + " active";
    }else if (settingContext.themeColor === "app-theme-blue") {
        blueClass = blueClass + " active";
    }
    else if (settingContext.themeColor === "app-theme-forest") {
        forestClass = forestClass + " active";
    }
    else if (settingContext.themeColor === "app-theme-hoki") {
        hokiClass = hokiClass + " active";
    }
    else if (settingContext.themeColor === "app-theme-facebook") {
        facebookClass = facebookClass + " active";
    }
    else if (settingContext.themeColor === "app-theme-anchor") {
        anchorClass = anchorClass + " active";
    }
    else if (settingContext.themeColor === "app-theme-carrot") {
        carrotClass = carrotClass + " active";
    }
    else if (settingContext.themeColor === "app-theme-gold") {
        goldClass = goldClass + " active";
    }
    else if (settingContext.themeColor === "app-theme-yellow") {
        yellowClass = yellowClass + " active";
    }
    else if (settingContext.themeColor === "app-theme-pink") {
        pinkClass = pinkClass + " active";
    }
    else if (settingContext.themeColor === "app-theme-lollipop") {
        lollipopClass = lollipopClass + " active";
    }
    else if (settingContext.themeColor === "app-theme-maroon") {
        maroonClass = maroonClass + " active";
    }
    else if (settingContext.themeColor === "app-theme-purple") {
        purpleClass = purpleClass + " active";
    }
    else if (settingContext.themeColor === "app-theme-indigo") {
        indigoClass = indigoClass + " active";
    }
    return <>
        <div className="mt-4 pl-3 pr-2">
            <h5 className="p-0 fw-700">
                Theme Colors
            </h5>
        </div>
        <div className="theme-colors pl-3 pr-2">
            <ul className="m-0 p-0">
                <li>
                    <Link to="#" className={aquaClass} onClick={() => settingContext.changeThemeColor("app-theme-aqua")} data-theme-color="app-theme-aqua" data-original-title="Aqua"></Link>
                </li>
                <li>
                    <Link to="#" className={blueClass} onClick={() => settingContext.changeThemeColor("app-theme-blue")} data-theme-color="app-theme-blue" data-original-title="Blue"></Link>
                </li>
                <li>
                    <Link to="#" className={forestClass} onClick={() => settingContext.changeThemeColor("app-theme-forest")} data-theme-color="app-theme-forest" data-original-title="Forest"></Link>
                </li>
                <li>
                    <Link to="#" className={hokiClass} onClick={() => settingContext.changeThemeColor("app-theme-hoki")} data-theme-color="app-theme-hoki" data-original-title="Hoki"></Link>
                </li>
                <li>
                    <Link to="#" className={facebookClass} onClick={() => settingContext.changeThemeColor("app-theme-facebook")} data-theme-color="app-theme-facebook" data-original-title="Facebook"></Link>
                </li>
                <li>
                    <Link to="#" className={anchorClass} onClick={() => settingContext.changeThemeColor("app-theme-anchor")} data-theme-color="app-theme-anchor" data-original-title="Anchor"></Link>
                </li>
                <li>
                    <Link to="#" className={carrotClass} onClick={() => settingContext.changeThemeColor("app-theme-carrot")} data-theme-color="app-theme-carrot" data-original-title="Carrot"></Link>
                </li>
                <li>
                    <Link to="#" className={goldClass} onClick={() => settingContext.changeThemeColor("app-theme-gold")} data-theme-color="app-theme-gold" data-original-title="Gold"></Link>
                </li>
                <li>
                    <Link to="#" className={yellowClass} onClick={() => settingContext.changeThemeColor("app-theme-yellow")} data-theme-color="app-theme-yellow" data-original-title="Yellow"></Link>
                </li>
                <li>
                    <Link to="#" className={pinkClass} onClick={() => settingContext.changeThemeColor("app-theme-pink")} data-theme-color="app-theme-pink" data-original-title="Pink"></Link>
                </li>
                <li>
                    <Link to="#" className={lollipopClass} onClick={() => settingContext.changeThemeColor("app-theme-lollipop")} data-theme-color="app-theme-lollipop" data-original-title="Lollipop"></Link>
                </li>
                <li>
                    <Link to="#" className={maroonClass} onClick={() => settingContext.changeThemeColor("app-theme-maroon")} data-theme-color="app-theme-maroon" data-original-title="Maroon"></Link>
                </li>
                <li>
                    <Link to="#" className={purpleClass} onClick={() => settingContext.changeThemeColor("app-theme-purple")} data-theme-color="app-theme-purple" data-original-title="Purple"></Link>
                </li>
                <li>
                    <Link to="#" className={indigoClass} onClick={() => settingContext.changeThemeColor("app-theme-indigo")} data-theme-color="app-theme-indigo" data-original-title="Indigo"></Link>
                </li>
            </ul>
        </div>
    </>
}

export default ThemeColor;