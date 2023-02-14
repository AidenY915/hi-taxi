import Nav from "./Nav";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import "../../Fonts.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="img/logo.png" alt="logo" />
          </Link>
        </div>

        <Nav className={styles.test} />
      </div>
    </header>
  );
};

export default Header;
