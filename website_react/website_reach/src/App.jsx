import React, {Fragment, useEffect, useState} from 'react'
// import {Route, Routes, createBrowserRouter, createRoutesFromElements, createRoutesFromChildren, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client';

import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Dashboard></Dashboard>
    </div>
  );
};

export default App
