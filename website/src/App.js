import React from 'react';
import MainNavigation from './components/MainNavigation';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Learn from './pages/Learn';
import Resources from './pages/Resources';

function App() {
  return (
    <div className="App" style={{ backgroundImage: "http://localhost:3000/" }}>
      <Router>
        <MainNavigation/>
        <main>
          <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/about" element={<About />} exact/>
          <Route path="/learn" element={<Learn />} exact/>
          <Route path="/resources" element={<Resources />} exact/>
          <Route path="*" element={ <Navigate to="/" /> } />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
