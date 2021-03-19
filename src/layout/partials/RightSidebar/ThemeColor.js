import React from 'react';
import { Link } from "react-router-dom";
import { THEME_COLORS } from '../../../shared/color-utils';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const ThemeColor = (props) => {
    const options = props.options;
    let colors = THEME_COLORS.map(color => {
        let classes = `bg-${color.name}`;
        if (options.themeColor.name === color.name) {
            classes += ' active';
        }
        return (<li key={color.name}>
            <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip>
                      { color.name.charAt(0).toUpperCase() + color.name.slice(1) }
                    </Tooltip>
                  }
                >
                    <Link
                        to="#"
                        className={classes}
                        onClick={() => options.changeThemeColor(color)}
                        data-original-title={color.name}>
                    </Link>
                </OverlayTrigger>
        </li>
        )
    });

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
