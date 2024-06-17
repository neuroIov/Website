import React from 'react';
import Neurolov from './Neurolov.js';
import Terms from './Terms.js';
import Policy from './Policy.js';
import Disclaimer from './Disclaimer.js';
import FAQ from './FAQ.js';
import Roadmap from './Roadmap.js';
import About from './About.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/terms_conditions" element={<Terms />} />
          <Route path="/privacy_policy" element={<Policy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/" element={<Neurolov />} />
        </Routes>
      </Router>
    );
  }

export default App;
