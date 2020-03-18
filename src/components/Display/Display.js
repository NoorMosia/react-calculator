import React from "react";

import * as styles from "./Display.module.css";

const Display = props => {
    return (
        <div className={styles.Display}>
            {props.children}
        </div>
    )
}

export default Display;