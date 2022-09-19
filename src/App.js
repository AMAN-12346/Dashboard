// import logo from './logo.svg';
import './App.css';

import React from 'react';
// import Test from './test';
import Dashboard from './dashboard';
import Loginform from './Loginform';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function Home() {
  return (
    <h2>Home Page</h2>
  )
}

function App() {

  return (
    
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Test />} exact /> */}
          <Route path="/loginform" element={<Loginform />} exact />
          <Route path="/dashboard" element={<Dashboard />} exact />

                  </Routes>
      </BrowserRouter>
  

  );
}

export default App;
