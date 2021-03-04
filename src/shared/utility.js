export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const isMobile = () => {
    const width = window.innerWidth
    return width < 994;
}
