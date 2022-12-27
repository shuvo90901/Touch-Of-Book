import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/shared/Navbar/Navbar';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router/Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
