import './App.css';
import OtherList from './components/OtherList';


function App() {

  const myItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Array Rendering</h1>
      <OtherList itens={myItens}/>
    </div>
  );
}

export default App;
