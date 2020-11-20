import React from 'react';

export const CustomDropdownToggle = React.forwardRef((props, ref) => (
    <a
        href=""
        ref={ref}
        onClick={e => {
            e.preventDefault();
            props.onClick(e);
        }}
        className={props.className}
    >
        {props.children}
    </a>
));

export const CustomDropdown = React.forwardRef((props, ref) => (
    <>
        {props.children}
    </>
));
