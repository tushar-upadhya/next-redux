"use client";

import { remove } from "@/redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>Cart Page</h3>

      <div className="cartWrapper">
        {cartItems.map((item) => {
          return (
            <div key={item.id} className="cartCard">
              <img src={item.image} alt={item.title} />

              <h5>{item.title}</h5>
              <h5>{item.price}</h5>

              <button className="btn" onClick={() => handleRemove(item.id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartPage;
