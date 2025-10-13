import React from "react";

export default function Cart({ cartItems, removeFromCart, closeCart }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "400px",
        maxWidth: "90%",
        height: "100%",
        background: "#fff",
        boxShadow: "-2px 0 10px rgba(0,0,0,0.2)",
        zIndex: 1000,
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={closeCart}
        style={{ alignSelf: "flex-end", fontSize: "1.5rem" }}
      >
        ✖
      </button>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div style={{ flex: 1, overflowY: "auto" }}>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
                borderBottom: "1px solid #eee",
                paddingBottom: "0.5rem",
              }}
            >
              <span>
                {item.name} x {item.quantity}
              </span>
              <button onClick={() => removeFromCart(item.id)}>−</button>
            </div>
          ))}
        </div>
      )}
      <h3>
        Total: $
        {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </h3>
      <button style={{ marginTop: "1rem" }}>Checkout</button>
    </div>
  );
}
