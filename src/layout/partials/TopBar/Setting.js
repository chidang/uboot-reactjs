import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import SettingContext from '../../../context/setting-context';

const Setting = () => {
    const settingContext = useContext(SettingContext);
    return (
        <li className="nav-item">
            <Link to="#" className="nav-link" onClick={settingContext.toggle} id="modalSetting">
                <i className="rotate bi-gear"></i>
            </Link>
        </li>
    );
} 

export default Setting;