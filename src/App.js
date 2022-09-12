import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { db } from "./index";
import {
  collection,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
  }

  // fetching data from firebase
  componentDidMount() {
    const productsCollectionRef = collection(db, "products");

    onSnapshot(productsCollectionRef, (snapshot) => {
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();

        data["id"] = doc.id;
        return data;
      });

      this.setState({
        products,
        loading: false,
      });
    });
  }

  handleIncreaseQuantity = (product) => {
    // console.log("increase this", product);
    const { products } = this.state;

    const index = products.indexOf(product);

    const docRef = doc(db, "products", products[index].id);

    updateDoc(docRef, {
      qty: products[index].qty + 1,
    })
      .then(() => {
        console.log("increased Quantity Successfully");
      })
      .catch((err) => {
        console.log("error in increasing the quantity", err);
      });
  };

  handleDecreaseQuantity = (product) => {
    // console.log("decrease quantity", product);
    const { products } = this.state;

    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      this.handleDeleteProduct(product);
      return;
    }

    const docRef = doc(db, "products", products[index].id);

    updateDoc(docRef, {
      qty: products[index].qty - 1,
    })
      .then(() => {
        console.log("decreased Quantity Successfully");
      })
      .catch((err) => {
        console.log("error in decreasing the quantity", err);
      });

    // products[index].qty -= 1;

    // this.setState({
    //   products,
    // });
  };

  handleDeleteProduct = (product) => {
    const { products } = this.state;

    const index = products.indexOf(product);

    const docRef = doc(db, "products", products[index].id);

    deleteDoc(docRef)
      .then(() => {
        console.log("Product Deleted");
      })
      .catch((err) => {
        console.log("error in deleting the product", err);
      });

    // const items = products.filter((item) => {
    //   return item.id !== id;
    // });

    // this.setState({
    //   products: items,
    // });
  };

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;
    products.forEach((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });

    return cartTotal;
  };

  // add product on clicking on add button
  // addProduct = () => {
  //   const productsCollectionRef = collection(db, "products");
  //   addDoc(productsCollectionRef, {
  //     img: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1651815195.20164864.jpg",
  //     price: 300,
  //     qty: 1,
  //     title: "Charger",
  //   })
  //     .then((docRef) => {
  //       console.log("Product added", docRef);
  //     })
  //     .catch((err) => {
  //       console.log("error in adding doc", err);
  //       return;
  //     });
  // };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button
          onClick={this.addProduct}
          style={{ padding: 20, fontSize: 20, marginTop: 2, marginLeft: 2 }}
        >
          Add a product
        </button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h2>Loading Products...</h2>}
        <div style={{ fontSize: 22, padding: 10 }}>
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
