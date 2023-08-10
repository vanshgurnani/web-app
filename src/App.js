
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from '../src/components/HOMEPAGE';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='' element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;

