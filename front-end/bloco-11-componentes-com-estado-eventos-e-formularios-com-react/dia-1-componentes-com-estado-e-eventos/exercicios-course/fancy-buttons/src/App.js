import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      firstBtnClicks: 0,
      secBtnClicks: 0,
      thirdBtnClicks: 0,
      firstBtnClicksColor: 'black',
      secBtnClicksColor: 'black',
      thirdBtnClicksColor: 'black',
    }
  }

  changeColor(element) {
    return (this.state[element] % 2 === 0) 
      ? 'black' : 'white';
  }

  handleClick(event) {
    const { name } = event.target;
    this.setState((previousState, _props) => ({
      [name]: previousState[name] + 1,
    }), () => { 
      console.log(this.changeColor(name)) 
    })
  }

  componentDidUpdate(_prevProps, prevState) {
    const prevKeys = Object.keys(prevState);
    const diff = prevKeys.find((elem) => {
      return prevState[elem] !== this.state[elem]
    })
    if (diff) {
    this.setState({
      [diff+'Color']: this.changeColor(diff),
    })
    }
  }

  render() {
    const { state: {
      firstBtnClicksColor, secBtnClicksColor, thirdBtnClicksColor,
      firstBtnClicks, secBtnClicks, thirdBtnClicks,
    }, handleClick} = this;

    return (
      <>
        <button onClick={handleClick} style={{color: firstBtnClicksColor}} 
          name="firstBtnClicks">Botão 1
          <br/>Cliques: {firstBtnClicks}</button>
        <button onClick={handleClick} style={{color: secBtnClicksColor}} 
          name="secBtnClicks">Botão 2
          <br/>Cliques: {secBtnClicks}</button>
        <button onClick={handleClick} style={{color: thirdBtnClicksColor}}
          name="thirdBtnClicks">Botão 3
          <br/>Cliques: {thirdBtnClicks}</button>
      </>
    );
  }
}

export default App;
