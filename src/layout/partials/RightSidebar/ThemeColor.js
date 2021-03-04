import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import SettingContext from '../../../context/setting-context';
import { THEME_COLORS } from '../../../shared/color-utils';

const ThemeColor = () => {
    const settingContext = useContext(SettingContext);
    let colors = THEME_COLORS.map(color => {
        let classes = `bg-${color.name}`;
        if (settingContext.themeColor.name === color.name) {
            classes += ' active';
        }
        return (<li key={color.name}>
            <Link
                to="#"
                className={classes}
                onClick={() => settingContext.changeThemeColor(color)}
                data-original-title={color.name}>
            </Link>
        </li>
    )});

    return <>
        <div className="mt-4 ps-3 pe-2">
            <h5 className="p-0 fw-700">
                Theme Colors
            </h5>
        </div>
        <div className="theme-colors ps-3 pe-2">
            <ul className="m-0 p-0">
                {colors}
            </ul>
        </div>
    </>
}

export default ThemeColor;
