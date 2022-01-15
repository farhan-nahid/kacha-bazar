import React, { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import IsAdmin from './Pages/AuthPage/IsAdmin/IsAdmin';
import RequiredAuth from './Pages/AuthPage/RequiredAuth/RequiredAuth';
import SingleCategory from './Pages/CategoriesPage/SingleCategory/SingleCategory';
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
const ContactUs = lazy(() => import('./Pages/ContactUsPage/ContactUs'));
const Categories = lazy(() => import('./Pages/CategoriesPage/Categories/Categories'));
const CheckOutPage = lazy(() => import('./Pages/CheckOutPage/CheckOutPage'));
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicyPage/PrivacyPolicy'));
const ResetPassword = lazy(() => import('./Pages/AuthPage/ResetPassword/ResetPassword'));
const TermsAndCondition = lazy(() => import('./Pages/TermsAndConditionPage/TermsAndCondition'));

function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Toaster />
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-and-conditions' element={<TermsAndCondition />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/categories' element={<Categories />}>
            <Route path='/categories/:searchString' element={<SingleCategory />} />
          </Route>
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
            <Route path='/dashboard' element={<Profile />} />
            <Route path='/dashboard/profile' element={<Profile />} />
            <Route path='/dashboard/edit-profile' element={<Profile />} />
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
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
