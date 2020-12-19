import React, { useState } from 'react';
import Routes from './routes/Routes';
import SettingContext from './context/setting-context'

const App = () => {
  const [rightSidebarOpened, toggleRightSidebar] = useState(false);
  const [leftSidebarShrinked, toggleLeftSidebar] = useState(false);
  const [themeMode, changeThemeMode] = useState('default-mode');

  const toggleRightSidebarHandler = () => {
    toggleRightSidebar(!rightSidebarOpened);
  }

  const toggleLeftSidebarHandler = () => {
    toggleLeftSidebar(!leftSidebarShrinked);
  }

  const changeThemeModeHandler = (modeName) => {
    changeThemeMode(modeName);
  }

  return (
    <SettingContext.Provider
      value={{
        leftSidebarShrinked: leftSidebarShrinked,
        toggleLeftSidebar: toggleLeftSidebarHandler,
        rightSidebarOpened: rightSidebarOpened,
        toggleRightSidebar: toggleRightSidebarHandler,
        themeMode: themeMode,
        changeThemeMode: (modeName) => changeThemeModeHandler(modeName)
      }}
    >
      <Routes />
    </SettingContext.Provider>
  );
}

export default App;