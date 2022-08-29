import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
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

  handleIncreaseQuantity = (product) => {
    // console.log("increase this", product);
    const { products } = this.state;

    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products,
    });
  };

  handleDecreaseQuantity = (product) => {
    // console.log("decrease quantity", product);
    const { products } = this.state;

    const index = products.indexOf(product);

    if (products[index].qty === 1) return;

    products[index].qty -= 1;

    this.setState({
      products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => {
      return item.id !== id;
    });

    this.setState({
      products: items,
    });
  };
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
