import { useState } from 'react';

import './App.css';
import YourName from './components/YourName';
import Salutation from './components/Salutaton';


function App() {

  const [name, setName] = useState()

  return (
    <div className="App">
      <h1>State Lift</h1>
      <YourName setName={setName}/>
      <Salutation name={name}/>
    </div>
  );
}

export default App;
