import { useRef, useContext } from "react";
import CartModal from "./CartModal.jsx";
import { CartContext } from "../Store/shopping-cart-context.jsx";
import { createPortal } from "react-dom";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const modal = useRef();

  const cartQuantity = cartCtx.items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  const modalButtons = (
    <>
      <button onClick={() => modal.current.close()}>Close</button>
      <button disabled={cartQuantity === 0}>Checkout</button>
    </>
  );

  return (
    <>
      {createPortal(
        <CartModal
          ref={modal}
          cartItems={cartCtx.items}
          updateCartItemQuantity={cartCtx.addItemToCart}
          title="Your Cart"
          actions={modalButtons}
        />,
        document.body
      )}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
