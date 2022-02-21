import React from 'react';
import './App.css';

function handleClick() {
  console.log('Clicou');
}
function handleClick2() {
  console.log('Agora no segundo botão!');
}
function handleClick3() {
  console.log('Último botão :)');
}
class App extends React.Component {
    render() {
      return (
        <>
        <button onClick={handleClick}>Botão 1</button>
        <button onClick={handleClick2}>Botão 2</button>
        <button onClick={handleClick3}>Botão 3</button>
        </>
      )
    }
}

export default App;
