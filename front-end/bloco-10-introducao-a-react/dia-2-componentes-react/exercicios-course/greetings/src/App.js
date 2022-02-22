import './App.css';
import Greeting from './Greeting';
import PropTypes from 'prop-types'

function App() {
  const person = {
    name: 'Augusto',
    lastName: 'Magalhães',
  };

  return (
    <Greeting name={person.name} lastName={person.lastName}/>
  )
}

export default App;
