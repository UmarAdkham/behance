import React from 'react';
import Register from './components/Register';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Register />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App