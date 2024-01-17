/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import logo from "../../public/logo.png";

import CartModal from "./CartModal";

export default function Header({ cart, onUpdateCartItemQuantity }) {
  const modal = useRef();

  const cartQuantity = cart.items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button type="button">Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button type="button">Close</button>
        <button type="button">Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        cartItems={cart.items}
        onUpdateCartItemQuantity={(productId, amount) =>
          onUpdateCartItemQuantity(productId, amount)
        }
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <img src={logo} alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button type="button" onClick={() => handleOpenCartClick()}>
            Cart ({cartQuantity})
          </button>
        </p>
      </header>
    </>
  );
}
