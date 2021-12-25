import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import CalculatorPage from './pages/CalculatorPage';

const App = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
