import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [
        {
          id: 1,
          price: 99,
          title: "Watch",
          qty: 10,
          img: "",
        },
        {
          id: 2,
          price: 999,
          title: "Mobile Phone",
          qty: 5,
          img: "",
        },
        {
          id: 3,
          price: 47282,
          title: "Laptop",
          qty: 1,
          img: "",
        },
      ],
    };
  }
  render() {
    const { product } = this.state;
    return (
      <div className="cart">
        {product.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default Cart;
