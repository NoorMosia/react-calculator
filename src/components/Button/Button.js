import React from "react";

import * as styles from "./Button.module.css";

const Button = props => {
    return (
        <div
            onClick={() => props.inputHandler(props.children)}
            className={styles[props.styleType]}
        >
            {props.children}
        </div>
    )
}

export default Button;