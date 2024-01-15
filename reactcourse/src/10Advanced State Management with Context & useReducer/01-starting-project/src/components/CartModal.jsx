/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";

const CartModal = forwardRef(
  ({ cartItems, onUpdateCartItemQuantity, title, actions }, ref) => {
    const dialog = useRef();

    useImperativeHandle(ref, () => ({
      open: () => {
        dialog.current.showModal();
      },
    }));

    return createPortal(
      <dialog id="modal" ref={dialog}>
        <h2>{title}</h2>
        <Cart
          items={cartItems}
          onUpdateItemQuantity={(productId, amount) =>
            onUpdateCartItemQuantity(productId, amount)
          }
        />
        <form method="dialog" id="modal-actions">
          {actions}
        </form>
      </dialog>,
      document.getElementById("modal1")
    );
  }
);

export default CartModal;
