import React from "react";
import styles from "./styles.module.css";
import MenuItem from "../menuItem";

interface IMenu {
  path: string;
  title: string;
}

const menuItems = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
];

const Menu = (): React.ReactElement => {
  return (
    <>
      {menuItems.map(({ path, title }: IMenu) => (
        <div className={styles.menuWrapper} key={title}>
          <MenuItem path={path} title={title} />
        </div>
      ))}
    </>
  );
};

export default Menu;
