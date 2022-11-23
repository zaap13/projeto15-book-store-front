import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [displayCart, setDisplayCart] = useState(false);


  return (
    <CartContext.Provider value={{ displayCart, setDisplayCart }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
export { CartProvider };