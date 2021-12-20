import React, { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import useRedux from './hooks/useRedux';
import IsAdmin from './Pages/AuthPage/IsAdmin/IsAdmin';
import RequiredAuth from './Pages/AuthPage/RequiredAuth/RequiredAuth';
import AddAdmin from './Pages/DashboardPage/AddAdmin/AddAdmin';
import AddProduct from './Pages/DashboardPage/AddProduct/AddProduct';
import AddReview from './Pages/DashboardPage/AddReview/AddReview';
import ManageOrders from './Pages/DashboardPage/ManageOrders/ManageOrders';
import ManageProduct from './Pages/DashboardPage/ManageProduct/ManageProduct';
import MyOrders from './Pages/DashboardPage/MyOrders/MyOrders';
import Profile from './Pages/DashboardPage/Profile/Profile';
import PreLoader from './Pages/SharedComponents/PreLoader/PreLoader';
import ScrollToTop from './Pages/SharedComponents/ScrollToTop/ScrollToTop';
const Home = lazy(() => import('./Pages/HomePage/Home/Home'));
const Login = lazy(() => import('./Pages/AuthPage/LogIn/Login'));
const AboutUs = lazy(() => import('./Pages/AboutUsPage/AboutUs/AboutUs'));
const Register = lazy(() => import('./Pages/AuthPage/Register/Register'));
const Dashboard = lazy(() => import('./Pages/DashboardPage/Dashboard/Dashboard'));
const CheckOutPage = lazy(() => import('./Pages/CheckOutPage/CheckOutPage'));
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));
const ResetPassword = lazy(() => import('./Pages/AuthPage/ResetPassword/ResetPassword'));

function App() {
  const { setCart } = useRedux();

  return (
    <AuthProvider>
      <ScrollToTop />
      <Toaster />
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route
            path='/checkout'
            element={
              <RequiredAuth>
                <CheckOutPage />
              </RequiredAuth>
            }
          />
          <Route
            path='/dashboard'
            element={
              <RequiredAuth>
                <Dashboard />
              </RequiredAuth>
            }
          >
            <Route path='/dashboard' element={<Profile setCart={setCart} />} />
            <Route path='/dashboard/profile' element={<Profile setCart={setCart} />} />
            <Route path='/dashboard/edit-profile' element={<Profile setCart={setCart} />} />
            <Route path='/dashboard/review' element={<AddReview />} />
            <Route path='/dashboard/my-orders' element={<MyOrders />} />
            <Route
              path='/dashboard/manage-product'
              element={
                <IsAdmin>
                  <ManageProduct />
                </IsAdmin>
              }
            />
            <Route
              path='/dashboard/add-product'
              element={
                <IsAdmin>
                  <AddProduct />
                </IsAdmin>
              }
            />
            <Route
              path='/dashboard/manage-orders'
              element={
                <IsAdmin>
                  <ManageOrders />
                </IsAdmin>
              }
            />
            <Route
              path='/dashboard/make-admin'
              element={
                <IsAdmin>
                  <AddAdmin />
                </IsAdmin>
              }
            />
          </Route>
          <Route path='/not-found' element={<NotFoundPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
