import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";
import Converter from "./currency/CurrencyConverter";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    switch: false,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  toggleSwitch = () => {
    this.setState({
      switch: !this.state.switch,
    });
  };

  render() {
    return (
      <div className="component-app">
        <div>
          <span
            onClick={() => {
              this.toggleSwitch();
            }}
          >
            <button className="circle">Switch</button>
          </span>
        </div>
        {this.state.switch ? (
          <>
            <Converter />
          </>
        ) : (
          <>
            <Display value={this.state.next || this.state.total || "0"} />
            <ButtonPanel clickHandler={this.handleClick} />
          </>
        )}
        x
      </div>
    );
  }
}
