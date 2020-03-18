import React from "react";
import * as styles from "./Row.module.css";

import Button from "../Button/Button";

const Row = props => {

    const buttons = props.digits.map((charecter, index) => {
        let styleType;
        if (index > 2) {
            styleType = "Operator"
        } else {
            styleType = "Button"
        }
        return (
            <Button
                key={charecter}
                inputHandler={input => props.inputHandler(input)}
                styleType={styleType}
            >
                {charecter}
            </Button>
        )
    })
    return (
        <div className={styles.Row}>
            {buttons}
        </div>
    )
}

export default Row;
