import React, { useState } from 'react';
import Menu from './components/Menu/Menu';
import Home from './pages/home/Home';

function App() {

  const [menuOpen, setMenuOpen] = useState<boolean>(false); // Determines if menu opens or not

  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
