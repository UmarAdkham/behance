import React from 'react';
<<<<<<< HEAD


function App() {
  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
=======
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
>>>>>>> 33d2608f2f42d69d524d14e812c3fe83c4697dd4
}

export default App