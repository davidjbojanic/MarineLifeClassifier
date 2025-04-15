
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AnalysisTable from './components/AnalysisTable';
import Header from './components/Header';
import Visualizations from './components/Visualizations';

function App() {
  return (
      <div className='App'>
          <Header/>
      <nav style={{ marginBottom: '2rem' }}>
        
      </nav>
          
        <div className='card-body'>
          <AnalysisTable/> 
        </div>
        <div>
          <Visualizations/>
        </div>
      </div>
  );
}

export default App;
