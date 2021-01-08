import React, { useState } from 'react';
import Routes from './routes/Routes';
import SettingContext from './context/setting-context'
import { setConfig, getConfig } from './shared/storage-utils';

const App = () => {
  const [rightSidebarOpened, toggleRightSidebar] = useState(false);
  const [leftSidebarShrinked, toggleLeftSidebar] = useState(false);
  const [themeMode, changeThemeMode] = useState(getConfig().themeMode);
  const [themeColor, changeThemeColor] = useState(getConfig().themeColor);
  
  const toggleRightSidebarHandler = () => {
    toggleRightSidebar(!rightSidebarOpened);
  }

  const toggleLeftSidebarHandler = () => {
    toggleLeftSidebar(!leftSidebarShrinked);
  }

  const changeThemeModeHandler = (modeName) => {
    setConfig({ themeMode: modeName });
    changeThemeMode(modeName);
  }

  const changeThemeColorHandler = (color) => {
    setConfig({ themeColor: color });
    changeThemeColor(color);
  }

  return (
    <SettingContext.Provider
      value={{
        leftSidebarShrinked: leftSidebarShrinked,
        toggleLeftSidebar: toggleLeftSidebarHandler,
        rightSidebarOpened: rightSidebarOpened,
        toggleRightSidebar: toggleRightSidebarHandler,
        themeMode: themeMode,
        changeThemeMode: (modeName) => changeThemeModeHandler(modeName),
        themeColor: themeColor,
        changeThemeColor: (color) => changeThemeColorHandler(color)
      }}
    >
      <Routes />
    </SettingContext.Provider>
  );
}

export default App;