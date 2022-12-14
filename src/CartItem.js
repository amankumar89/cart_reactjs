import React from "react";
const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
    props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} alt="" />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 20 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>
        <div className="cart-item-actions">
          {/* {*- Button */}
          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
            onClick={() => onDeleteProduct(product)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 120,
    width: 120,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
