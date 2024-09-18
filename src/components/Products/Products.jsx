import { useState, useEffect } from "react";
import EmptyList from "./components/EmptyList/EmptyList";
import ErrorInfo from "./components/ErrorInfo/ErrorInfo";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import styles from "./Products.module.css";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/beauty")
      .then((response) => {
        setProducts(response.data.products || []);
      })
      .catch(() => {
        setShowError(true);
      });

    // fetch("https://dummyjson.com/products/category/beauty")
    //   .then((response) => {
    //     if (!response.ok) {
    //       return Promise.reject();
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setProducts(data.products);
    //   })
    //   .catch(() => {
    //     setShowError(true);
    //   });
  }, []);

  if (showError) {
    return <ErrorInfo />;
  }

  if (products.length === 0) {
    return <EmptyList />;
  }

  return (
    <section className={styles.list}>
      {products.map((product) => (
        <SingleProduct item={product} key={product.id} />
      ))}
    </section>
  );
};

export default Products;
