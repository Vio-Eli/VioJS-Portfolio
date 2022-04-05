import React, { useState } from 'react';
import Menu from './components/Menu/Menu';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/home/Home';

function App() {

  const [menuOpen, setMenuOpen] = useState<boolean>(false); // Determines if menu opens or not

  return (
    <div className="app">
      < Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      < Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> 
      <Home />
    </div>
  );
}

export default App;
