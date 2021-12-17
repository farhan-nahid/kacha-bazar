import React, { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home/Home';
import PreLoader from './Pages/SharedComponents/PreLoader/PreLoader';
import RouteNavigation from './Pages/SharedComponents/RouteNavigation/RouteNavigation';
import ScrollToTop from './Pages/SharedComponents/ScrollToTop/ScrollToTop';
import TopNavigation from './Pages/SharedComponents/TopNavigation/TopNavigation';

function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster />
      <Suspense fallback={<PreLoader />}>
        <TopNavigation />
        <RouteNavigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
