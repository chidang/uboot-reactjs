import React from 'react';

const settingContext = React.createContext({
  rightSidebarOpened: false,
  toggle: () => {}
});

export default settingContext;
