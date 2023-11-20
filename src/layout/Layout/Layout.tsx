import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "../../components/Button/Button";

export function Layout() {
  return (
    <div className={styles["layout"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["user"]}>
          <img src="/avatar.png" alt="avatar"></img>
          <div className={styles["name"]}>хателов</div>
          <div className={styles["email"]}>ArtV@gmail.com</div>
        </div>
        <div className={styles["menu"]}>
          <Link to="/" className={styles["link"]}>
            <img src="/menu-icon.svg" alt="menu"></img>
            Menu
          </Link>
          <Link to="/cart" className={styles["link"]}>
            <img src="/cart-icon.svg" alt="cart"></img>Cart
          </Link>
        </div>
        <Button className={styles["exit"]}>
          <img src="/exit-icon.svg" alt="exit"></img>Выход
        </Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
