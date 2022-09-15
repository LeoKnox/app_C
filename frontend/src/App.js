import './App.css';
import Rooms from './rooms.js';
import Create from './create.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Create Rooms Here</h1>
        <Rooms />
        <Create />
      </header>
    </div>
  );
}

export default App;
