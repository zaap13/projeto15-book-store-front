import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItens, setCartItem] = useState([]);

  function isThisInTheCart(productId) {
    if (cartItens.filter((item) => item._id === productId).length !== 0)
      return true;
    return false;
  }

  function addInTheCart(product) {
    const { title, image, price, _id } = product;
    setCartItem([...cartItens, { title, image, price, _id }]);
  }

  function removeFromTheCart(productId) {
    const filteredCart = cartItens.filter((item) => item._id !== productId);
    setCartItem(filteredCart);
  }

  return (
    <CartContext.Provider
      value={{
        cartItens,
        setCartItem,
        isThisInTheCart,
        addInTheCart,
        removeFromTheCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
export { CartProvider };
