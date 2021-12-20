import React, { lazy, Suspense, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import IsAdmin from './Pages/AuthPage/IsAdmin/IsAdmin';
import RequiredAuth from './Pages/AuthPage/RequiredAuth/RequiredAuth';
import AddAdmin from './Pages/DashboardPage/AddAdmin/AddAdmin';
import AddProduct from './Pages/DashboardPage/AddProduct/AddProduct';
import AddReview from './Pages/DashboardPage/AddReview/AddReview';
import ManageOrders from './Pages/DashboardPage/ManageOrders/ManageOrders';
import ManageProduct from './Pages/DashboardPage/ManageProduct/ManageProduct';
import MyOrders from './Pages/DashboardPage/MyOrders/MyOrders';
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
const CheckOutPage = lazy(() => import('./Pages/CheckOutPage/CheckOutPage'));
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));
const ResetPassword = lazy(() => import('./Pages/AuthPage/ResetPassword/ResetPassword'));

function App() {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  const handleIncrease = (pd) => {
    setCart((prev) => {
      if (pd) {
        return prev.map((item) => {
          let items = item;
          if (item._id === pd._id) {
            item.quantity = item.quantity + 1;
            item.totalPrice = Number(item.quantity) * Number(item.price);
            items = { ...item };
          }
          return items;
        });
      }
    });
  };

  const handleDecrease = (pd) => {
    setCart((prev) => {
      if (pd) {
        return prev.map((item) => {
          let items = item;
          if (item._id === pd._id && item.quantity > 1) {
            item.quantity = item.quantity - 1;
            item.totalPrice = Number(item.quantity) * Number(item.price);
            items = { ...item };
          }
          return items;
        });
      }
    });
  };

  const handleCancelOrder = (id) => setCart(cart.filter((pd) => pd._id !== id));
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleAddToCart = (item) => setCart([...cart, item]);

  let totalPrice = 0;
  for (const pd of cart) {
    totalPrice = totalPrice + Number(pd.totalPrice);
  }

  return (
    <AuthProvider>
      <ScrollToTop />
      <Toaster />
      <TopNavigation
        cart={cart}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        totalPrice={totalPrice}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        handleCancelOrder={handleCancelOrder}
      />
      <RouteNavigation />
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route
            path='/'
            element={<Home handleAddToCart={handleAddToCart} cart={cart} handleShow={handleShow} totalPrice={totalPrice} />}
          />
          <Route
            path='/home'
            element={<Home handleAddToCart={handleAddToCart} cart={cart} handleShow={handleShow} totalPrice={totalPrice} />}
          />
          <Route path='/login' element={<Login />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route
            path='/checkout'
            element={
              <RequiredAuth>
                <CheckOutPage
                  cart={cart}
                  setCart={setCart}
                  totalPrice={totalPrice}
                  handleDecrease={handleDecrease}
                  handleIncrease={handleIncrease}
                  handleCancelOrder={handleCancelOrder}
                />
              </RequiredAuth>
            }
          />
          <Route
            path='/dashboard'
            element={
              <RequiredAuth>
                <Dashboard setCart={setCart} />
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
          <Route path='/not-found' element={<NotFoundPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </AuthProvider>
  );
}

export default App;
