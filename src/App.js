// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Counter from './pages/Counter';
import Welcome from './pages/Welcome';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome />}/>
      <Route path='/counter' element={<Counter />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
