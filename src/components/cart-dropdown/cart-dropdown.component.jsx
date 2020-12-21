import React from 'react';
import "../../css/cart-dropdown.styles.css";
import CustomButton from "../custom-button/custom-button.component"

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-item">
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
