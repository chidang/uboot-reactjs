import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import LayoutOption from './LayoutOption';
import ThemeColor from './ThemeColor';
import ThemeMode from './ThemeMode';
import SettingContext from '../../../context/setting-context';

const RightSidebar = () => {
  const settingContext = useContext(SettingContext);
  const modalClasses = settingContext.rightSidebarOpened ? "modal-right show" : "modal-right";
  let backdrop = null;
  if ( settingContext.rightSidebarOpened ) {
    backdrop = <div onClick={settingContext.toggleRightSidebar} className="modal-backdrop fade show"></div>;
  }

  return (
    <>
      <div className={modalClasses} id="right-sidebar">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="align-items-center bg-trans-gradient justify-content-center modal-header rounded-0 w-100">
            <h4 className="m-0 text-center text-white fw-700">
              Settings
              <small className="mb-0 opacity-80">User Interface Settings</small>
            </h4>
            <Link to="#" className="pos-top-right text-white p-2 m-1 me-2 fs-md" onClick={settingContext.toggleRightSidebar}><i className="bi-x"></i></Link>
          </div>
          <div className="modal-body p-0">
            <div className="settings-panel">
              <div className="mx-3 mt-2">
                <p className="text-muted fs-base">Customize layout, topbar, left sidebar menu, etc. Uboot stores the preferences in local storage.</p>
              </div>
              <LayoutOption />
              <ThemeColor />
              <ThemeMode />
              <div className="d-flex justify-content-center mt-4 pt-4">
                <button id="reset-setting" type="button" className="btn btn-primary btn-rounded d-block w-75">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {backdrop}
  </>
  );
};

export default RightSidebar;