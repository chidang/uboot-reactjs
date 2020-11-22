import React, { useState } from 'react';
import Routes from './routes/Routes';
import SettingContext from './context/setting-context'

const App = () => {
  const [rightSidebarOpened, toggleRightSidebar] = useState(false);
  const [leftSidebarShrinked, toggleLeftSidebar] = useState(false);

  const toggleRightSidebarHandler = () => {
    toggleRightSidebar(!rightSidebarOpened);
  }

  const toggleLeftSidebarHandler = () => {
    toggleLeftSidebar(!leftSidebarShrinked);
  }

  return (
    <SettingContext.Provider
      value={{
        leftSidebarShrinked: leftSidebarShrinked,
        toggleLeftSidebar: toggleLeftSidebarHandler,
        rightSidebarOpened: rightSidebarOpened,
        toggleRightSidebar: toggleRightSidebarHandler
      }}
    >
      <Routes />
    </SettingContext.Provider>
  );
}

export default App;