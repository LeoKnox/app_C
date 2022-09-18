import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './home.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="single" element={<single />} />
            </Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
