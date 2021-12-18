import React, { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/SharedComponents/Footer/Footer';
import PreLoader from './Pages/SharedComponents/PreLoader/PreLoader';
import RouteNavigation from './Pages/SharedComponents/RouteNavigation/RouteNavigation';
import ScrollToTop from './Pages/SharedComponents/ScrollToTop/ScrollToTop';
import TopNavigation from './Pages/SharedComponents/TopNavigation/TopNavigation';
const Home = lazy(() => import('./Pages/HomePage/Home/Home'));
const Login = lazy(() => import('./Pages/AuthPage/LogIn/Login'));
const AboutUs = lazy(() => import('./Pages/AboutUsPage/AboutUs/AboutUs'));
const Register = lazy(() => import('./Pages/AuthPage/Register/Register'));
const Dashboard = lazy(() => import('./Pages/DashboardPage/Dashboard/Dashboard'));
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));

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
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/not-found' element={<NotFoundPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
