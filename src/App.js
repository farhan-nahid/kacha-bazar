import React, { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import IsAdmin from './Pages/AuthPage/IsAdmin/IsAdmin';
import RequiredAuth from './Pages/AuthPage/RequiredAuth/RequiredAuth';
import AddProduct from './Pages/DashboardPage/AddProduct/AddProduct';
import ManageProduct from './Pages/DashboardPage/ManageProduct/ManageProduct';
import Profile from './Pages/DashboardPage/Profile/Profile';
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
const ResetPassword = lazy(() => import('./Pages/AuthPage/ResetPassword/ResetPassword'));

function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Toaster />
      <TopNavigation />
      <RouteNavigation />
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route
            path='/dashboard'
            element={
              <RequiredAuth>
                <Dashboard />
              </RequiredAuth>
            }
          >
            <Route path='/dashboard' element={<Profile />} />
            <Route path='/dashboard/profile' element={<Profile />} />
            <Route path='/dashboard/place-order' element={<Profile />} />
            <Route path='/dashboard/review' element={<Profile />} />
            <Route path='/dashboard/my-orders' element={<Profile />} />
            <Route
              path='/dashboard/manage-product'
              element={
                <IsAdmin>
                  <ManageProduct />
                </IsAdmin>
              }
            />
            <Route path='/dashboard/add-product' element={<AddProduct />} />
            <Route path='/dashboard/manage-orders' element={<Profile />} />
            <Route path='/dashboard/make-admin' element={<Profile />} />
          </Route>
          <Route path='/not-found' element={<NotFoundPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </AuthProvider>
  );
}

export default App;
