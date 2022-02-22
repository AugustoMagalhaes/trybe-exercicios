import './App.css';
import React from 'react';
import data from './data'
import Card from './Card'

function App() {
  return (
    <Card card={data}/>
  );
}

export default App;
