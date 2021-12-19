import React, { lazy, Suspense, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import IsAdmin from './Pages/AuthPage/IsAdmin/IsAdmin';
import RequiredAuth from './Pages/AuthPage/RequiredAuth/RequiredAuth';
import AddProduct from './Pages/DashboardPage/AddProduct/AddProduct';
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

  const handleIncrease = (id) => {
    const selected = cart.find((pd) => pd._id === id);
    selected.quantity = selected.quantity + 1;
    selected.totalPrice = Number(selected.quantity) * Number(selected.price);
    const rest = cart.filter((pd) => pd._id !== id);
    setCart([selected, ...rest]);
  };

  const handleDecrease = (id) => {
    const selected = cart.find((pd) => pd._id === id);
    if (selected.quantity > 1) {
      selected.quantity = selected.quantity - 1;
      selected.totalPrice = Number(selected.quantity) * Number(selected.price);
    }
    const rest = cart.filter((pd) => pd._id !== id);
    setCart([selected, ...rest]);
  };

  const handleCancelOrder = (id) => {
    const restProduct = cart.filter((pd) => pd._id !== id);
    setCart(restProduct);
  };

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
                <Dashboard />
              </RequiredAuth>
            }
          >
            <Route path='/dashboard' element={<Profile />} />
            <Route path='/dashboard/profile' element={<Profile />} />
            <Route path='/dashboard/edit-profile' element={<Profile />} />
            <Route path='/dashboard/review' element={<Profile />} />
            <Route path='/dashboard/my-orders' element={<MyOrders />} />
            <Route
              path='/dashboard/manage-product'
              element={
                <IsAdmin>
                  <ManageProduct />
                </IsAdmin>
              }
            />
            <Route path='/dashboard/add-product' element={<AddProduct />} />
            <Route path='/dashboard/manage-orders' element={<ManageOrders />} />
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
/* 
    // for (const pd of newCart) {
    //   // console.log(pd._id);
    //   // console.log(id);
    //   if (pd._id !== id) {
    //     newCart = [...rest, selected];
    //     // console.log(newCart);
    //   } else {
    //     newCart = [selected];
    //     // console.log(newCart);
    //   }
    // }

      // let shipping = 0;
  // let totalQuantity = 0;
  // const [totalPrice, setTotalPrice] = useState(0);
    // setCart(newCart);
    // selected.quantity = selected.quantity + 1;
    // console.log(selected.quantity);
    // setCart([...cart, selected]);
    //  setTotalPrice(selected.price * productCount);

      // useEffect(() => {
  //   for (const pd of cart) {
  //     setTotalPrice(totalPrice + pd.price * productCount);
  //   }
  // }, [cart, productCount]);
  // const handleDecrease = (id) => (productCount > 1 ? setProductCount(productCount - 1) : productCount);

  
  // useEffect(() => {
  //   for (const pd of cart) {
  //     pd.quantity = !pd.quantity ? 1 : pd.quantity;
  //   }
  // }, [cart]);


    // for (const pd of cart) {
  //   quantity = pd.quantity === 0 ? 1 : pd.quantity;
  //   price = pd.price;
  //   const oldPrice = totalPrice;
  //   const newPrice = quantity * price;
  //   console.log(oldPrice, newPrice);
  //   // setTotalPrice(totalPrice + quantity * price);
  // }

    // for (const pd of cart) {
  //   // pd.quantity = !pd.quantity ? 1 : pd.quantity;
  //   // const newPrice = pd.quantity * Number(pd.price);
  //   console.log(totalPrice);
  //   setTotalPrice(totalPrice + Number(pd.totalPrice));
  //   console.log(totalPrice);
  // }

*/
