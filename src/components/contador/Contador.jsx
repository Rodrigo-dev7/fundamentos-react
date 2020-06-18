import React, { Component } from 'react';

import './Contador.css'

export default class Contador extends Component {

  state = {
    passo: this.props.passo,
    valor: this.props.valor
  }

  inc = () => {
    this.setState({
      valor: this.state.valor + this.state.passo
    })
  }

  dec = () => {
    this.setState({
      valor: this.state.valor - this.state.passo
    })
  }

  render() {
    return (
      <div className="Contador" >
        <h2>Contador</h2>
        <div>
          <label htmlFor="inputpasso" >Passo: </label>
          <input id="inputpasso" type="number" 
            value={this.state.passo}
            onChange={e => { this.setState({ passo: +e.target.passo }) }}
          />
        </div>

        <h4>Valor: {this.state.valor}</h4>

        <div>
          <button onClick={this.inc} >+</button>
          <button onClick={this.dec} >-</button>
        </div>
      </div>
    )
  }
}