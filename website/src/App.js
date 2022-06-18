import React from 'react';
import MainNavigation from './components/MainNavigation';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Mission from './pages/Mission';
import Learn from './pages/Learn';
import Resources from './pages/Resources';

function App() {
  return (
    <div className="App" >
      <Router>
        <MainNavigation/>
        <main>
          <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/mission" element={<Mission />} exact/>
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
