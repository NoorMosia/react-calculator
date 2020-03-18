import React from "react";

import * as styles from "./Clear.module.css";

const Clear = props => {
    return (
        <div className={styles.Clear} onClick={() => props.clearHandler()}>
            Clear
        </div >
    )
}

export default Clear;