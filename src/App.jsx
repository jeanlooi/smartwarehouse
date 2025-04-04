import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './components/home/HomePage';
import InventoryList from './components/orders/InventoryList';


function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/orders" element={<InventoryList />} />
        </Routes>
      </Router>    
    </>
  )
}

export default App