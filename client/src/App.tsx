import React, { useState } from 'react';
import Menu from './components/Menu/Menu';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/home/Home';
import Sections from './pages/Sections/Sections';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [menuOpen, setMenuOpen] = useState<boolean>(false); // Determines if menu opens or not

  return (
    <Router>
      <div className="app">

        < Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        < Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/intro' element={<Sections/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
