import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './home.js';
import Single from './single.js';
import NavBar from './nav.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <NavBar />
            <Route path="/" element={<Home />} />
            <Route path="single" element={<Single />}>
              <Route path=":roomid" element={<Single />} />
            </Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
