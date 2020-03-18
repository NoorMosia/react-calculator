import React, { Component } from "react";
import * as styles from "./Wrapper.module.css";

import { evaluate } from "mathjs";

import Row from "../../components/Row/Row";
import Clear from "../../components/Clear/Clear";
import Display from "../../components/Display/Display";


class Wrapper extends Component {
    state = {
        digits: [
            ['7', '8', '9', '/'],
            ['4', '5', '6', '*'],
            ['1', '2', '3', '+'],
            ['.', '0', '=', '-'],
        ],
        input: ""
    }

    addToInput = charecter => {
        if (charecter[0] === "=") {
            const newState = { ...this.state };
            let answer;
            try {
                answer = evaluate(newState["input"]);
            } catch {
                answer = "0"
            }

            if (!answer) {
                answer = ""
            }

            this.setState({
                input: answer
            })

        } else {
            this.setState({
                input: this.state.input + charecter[0]
            })
        }
    }

    clearInput = () => {
        this.setState({
            input: ""
        })
    }

    render() {
        return (
            <div className={styles.Wrapper}>
                <Display>{this.state.input}</Display>
                <Row digits={this.state.digits[0]} inputHandler={input => this.addToInput(input)}></Row>
                <Row digits={this.state.digits[1]} inputHandler={input => this.addToInput(input)}></Row>
                <Row digits={this.state.digits[2]} inputHandler={input => this.addToInput(input)}></Row>
                <Row digits={this.state.digits[3]} inputHandler={input => this.addToInput(input)}></Row>
                <Clear clearHandler={this.clearInput}></Clear>
            </div>
        )
    }
}

export default Wrapper;