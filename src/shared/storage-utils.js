const defaultConfig = {
    fixedLeftSidebar: true,
    fixedHeader: false,
    fixedFooter: false,
    isShrinked: false,
    boxedLayout: false,
    themeColor: {
        primaryColor: '#4285f4',
        name: 'blue'
    },
    themeMode: 'default-mode'
  };

export const setConfig = (newConfig) => {
    let config = getConfig();
    localStorage.setItem('REACT_UBOOT_CONFIG', JSON.stringify({ ...config, ...newConfig }));
}

export const getConfig = () => {
    let config = localStorage.getItem('REACT_UBOOT_CONFIG');
    return config ? JSON.parse(config) : defaultConfig;
}