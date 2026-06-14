import React, {Fragment, useEffect, useState} from 'react'
// import {Route, Routes, createBrowserRouter, createRoutesFromElements, createRoutesFromChildren, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client';

import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
// import Dashboard_IGLikes from './components/Dashboard_IGLikes'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Dashboard></Dashboard>
      {/* <Dashboard_IGLikes></Dashboard_IGLikes> */}
    </div>
  );
};

export default App
