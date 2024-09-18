import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <img src="/images/logo.jpg" alt="company logo" className={styles.logo} />
      <div>The best company</div>
    </header>
  );
};

export default Header;
