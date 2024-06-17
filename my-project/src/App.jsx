import './App.css';
import SayMyName from './components/SayMyName';
import Person from './components/Person';

function App() {

  const name = "Benjamin"

  return (
    <div className="App">
      <SayMyName name="Rafael"/>
      <SayMyName name="Jonathan"/>
      <SayMyName name={name}/>
      <Person
      name="Rodrygo"
      age= "28"
      occupation="Freelancer"
      photo="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
