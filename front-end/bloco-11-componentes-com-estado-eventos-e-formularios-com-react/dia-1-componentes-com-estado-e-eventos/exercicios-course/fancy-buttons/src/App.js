import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      firstBtnClicks: 0,
      secBtnClicks: 0,
      thirdBtnClicks: 0,
    }
  }

  handleClick(event) {
    const { name, textContent } = event.target;
    this.setState((previousState, _props) => ({
      [name]: previousState[name] + 1,
    } ))
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick} name="firstBtnClicks">Botão 1
        <br/>Cliques: {this.state.firstBtnClicks}</button>
        <button onClick={this.handleClick} name="secBtnClicks">Botão 2
        <br/>Cliques: {this.state.secBtnClicks}</button>
        <button onClick={this.handleClick} name="thirdBtnClicks">Botão 3
          <br/>Cliques: {this.state.thirdBtnClicks}</button>
      </>
    );
  }
}

export default App;
