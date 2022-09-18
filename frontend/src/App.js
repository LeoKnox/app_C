import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './home.js';
import Single from './single.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="single" element={<Single />} />
            </Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
