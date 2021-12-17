import React, { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DailyNeeds from './Pages/SharedComponents/DailyNeeds/DailyNeeds';
import Footer from './Pages/SharedComponents/Footer/Footer';
import PreLoader from './Pages/SharedComponents/PreLoader/PreLoader';
import RouteNavigation from './Pages/SharedComponents/RouteNavigation/RouteNavigation';
import ScrollToTop from './Pages/SharedComponents/ScrollToTop/ScrollToTop';
import TopNavigation from './Pages/SharedComponents/TopNavigation/TopNavigation';
const Home = lazy(() => import('./Pages/HomePage/Home/Home'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster />
      <TopNavigation />
      <RouteNavigation />
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Suspense>
      <DailyNeeds />
      <Footer />
    </>
  );
}

export default App;
