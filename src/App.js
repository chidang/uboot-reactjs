import React, { useState } from 'react';
import Routes from './routes/Routes';
import SettingContext from './context/setting-context'

const App = () => {
  const [rightSidebarOpened, toggleRightSidebar] = useState(false);

  const toggleHandler = () => {
    toggleRightSidebar(!rightSidebarOpened);
  }

  return (<SettingContext.Provider
    value={{
      rightSidebarOpened: rightSidebarOpened,
      toggle: toggleHandler
    }}
  >
    <Routes />
  </SettingContext.Provider>);
}

export default App;