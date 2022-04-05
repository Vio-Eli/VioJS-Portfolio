import React, { useState } from 'react';
import Home from './pages/home/Home';

function App() {

  const [menuOpen, setMenuOpen] = useState(false); // Determines if menu opens or not

  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
