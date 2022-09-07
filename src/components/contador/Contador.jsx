import "./Contador.css";
import React, { Component } from "react";

import Display from "./Display";
import Button from "./Button";
import PassoForm from "./PassoForm";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h1>Contador</h1>
        <Display numero={this.state.numero}></Display>
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <Button setInc={this.inc} setDec={this.dec} />
      </div>
    );
  }
}

export default Contador;
