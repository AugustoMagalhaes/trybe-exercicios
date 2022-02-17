import logo from './logo.svg';
import './App.css';

function App() {
  const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }
  const commitments = ['Aprender a Sintaxe', 'Entender melhor o sistema de classes', 'Fazer uso de boas práticas'];
  const appendInDom = commitments.map((element) => Task(element));
  return (
    <ol>
      {appendInDom}
    </ol>
  );
}

export default App;
