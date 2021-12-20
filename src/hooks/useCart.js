import { useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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

  const handleAddToCart = (item) => setCart([...cart, item]);

  let totalPrice = 0;
  for (const pd of cart) {
    totalPrice = totalPrice + Number(pd.totalPrice);
  }

  return {
    show,
    cart,
    totalPrice,
    setCart,
    handleShow,
    handleClose,
    handleIncrease,
    handleDecrease,
    handleCancelOrder,
    handleAddToCart,
  };
};
export default useCart;
