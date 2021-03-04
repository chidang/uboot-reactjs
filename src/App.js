import React, { useState, useEffect } from 'react';
import Routes from './routes/Routes';
import SettingContext from './context/setting-context';
import { defaultConfig, setConfig, getConfig } from './shared/storage-utils';
import { isMobile } from "./shared/utility";

const App = () => {
  const [rightSidebarOpened, toggleRightSidebar] = useState(false);
  const [leftSidebarShrinked, toggleLeftSidebar] = useState(false);
  const [showMobileNav, toggleMobileNav] = useState(false);
  const [themeMode, changeThemeMode] = useState(getConfig().themeMode);
  const [themeColor, changeThemeColor] = useState(getConfig().themeColor);
  const [boxedLayout, toggleBoxedLayout] = useState(false);
  const [leftSidebarFixed, toggleLeftSidebarFixed] = useState(false);
  const [footerFixed, toggleFooterFixed] = useState(false);

  useEffect(() => {
    const initConfig = getConfig();
    toggleLeftSidebar(initConfig.isShrinked);
    toggleBoxedLayout(initConfig.boxedLayout);
    toggleLeftSidebarFixed(initConfig.fixedLeftSidebar);
    toggleFooterFixed(initConfig.fixedFooter)
  }, []);

  const toggleRightSidebarHandler = () => {
    toggleRightSidebar(!rightSidebarOpened);
  }

  const toggleLeftSidebarHandler = () => {
    if (isMobile()) {
      toggleMobileNav(!showMobileNav);
    } else {
      setConfig({ isShrinked: !leftSidebarShrinked });
      toggleLeftSidebar(!leftSidebarShrinked);
    }
  }

  const toggleMobileNavHandler = () => {
    toggleLeftSidebarHandler();
  }

  const changeThemeModeHandler = (modeName) => {
    setConfig({ themeMode: modeName });
    changeThemeMode(modeName);
  }

  const changeThemeColorHandler = (color) => {
    setConfig({ themeColor: color });
    changeThemeColor(color);
  }

  const toggleBoxedLayoutHandler = () => {
    setConfig({ boxedLayout: !boxedLayout });
    if (!boxedLayout) {
      toggleFooterFixed(false);
      setConfig({ fixedFooter: false });
    }
    toggleBoxedLayout(!boxedLayout);
  }

  const toggleLeftSidebarFixedHandler = () => {
    setConfig({ fixedLeftSidebar: !leftSidebarFixed });
    toggleLeftSidebarFixed(!leftSidebarFixed);
  }

  const toggleFooterFixedHandler = () => {
    setConfig({ fixedFooter: !footerFixed });
    toggleFooterFixed(!footerFixed);
  }

  const resetSettingHandler = () => {
    toggleLeftSidebar(false);
    toggleFooterFixed(false);
    toggleBoxedLayout(false);
    changeThemeMode('default-mode');
    changeThemeColor(defaultConfig.themeColor);
    setConfig(defaultConfig);
  }

  return (
    <SettingContext.Provider
      value={{
        leftSidebarShrinked: leftSidebarShrinked,
        rightSidebarOpened: rightSidebarOpened,
        themeMode: themeMode,
        themeColor: themeColor,
        showMobileNav: showMobileNav,
        boxedLayout: boxedLayout,
        leftSidebarFixed: leftSidebarFixed,
        footerFixed: footerFixed,
        toggleFooterFixed: toggleFooterFixedHandler,
        toggleLeftSidebar: toggleLeftSidebarHandler,
        toggleRightSidebar: toggleRightSidebarHandler,
        changeThemeMode: (modeName) => changeThemeModeHandler(modeName),
        changeThemeColor: (color) => changeThemeColorHandler(color),
        toggleMobileNav: toggleMobileNavHandler,
        toggleBoxedLayout: toggleBoxedLayoutHandler,
        toggleLeftSidebarFixed: toggleLeftSidebarFixedHandler,
        resetSetting: resetSettingHandler
      }}
    >
      <Routes />
    </SettingContext.Provider>
  );
}

export default App;