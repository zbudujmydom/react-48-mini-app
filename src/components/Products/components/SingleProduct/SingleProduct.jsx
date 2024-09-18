import styles from "./SingleProduct.module.css";

const SingleProduct = (props) => {
  const { thumbnail, title, description, price } = props.item;

  return (
    <div className={styles.container}>
      <img src={thumbnail} alt={title} className={styles.image} />
      <div>
        <h3>{title}</h3>
        <div>{description}</div>
        <div>{price} USD</div>
      </div>
    </div>
  );
};

export default SingleProduct;
