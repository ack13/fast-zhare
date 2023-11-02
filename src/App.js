import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/home.js';

function App() {
  return (
    <div className='App'>
      <Router basename="/">
        <Routes>
          <Route exact path="/:shortUrl" element={<Home />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;