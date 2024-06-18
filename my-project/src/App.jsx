import './App.css';
import Event from './components/Event';
import Form from './components/Forms';

function App() {
  return (
    <div className="App">
      <h1>Testing Events</h1>
      <Event number="4"/>
      <Event number="3"/>
      <Form/>
    </div>
  );
}

export default App;
