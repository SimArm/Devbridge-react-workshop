import React from 'react'

import "./Button.scss";

const Button = ({
    children,
    active,
    secondary,
    onClick,
    type
}) => {
const classes = `
        button
        ${active && "is-active"}
        ${secondary && "secondary"}
    `;

    return (
        <button className={classes} onClick={onClick} type={type}>
        {children}
        </button>
    );
}

export default Button;