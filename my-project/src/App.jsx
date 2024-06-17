import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';

function App() {

  const name = "Benjamin"

  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName name="Rafael"/>
      <SayMyName name="Jonathan"/>
      <SayMyName name={name}/>
    </div>
  );
}

export default App;
