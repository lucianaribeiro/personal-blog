import React from "react";
import styles from "./styles.module.css";
import MenuItem from "../menuItem";
import { BrowserRouter, useNavigate } from "react-router-dom";

interface IMenuItem {
  path: string;
  title: string;
}

interface IMenu {
  useNavigate: ReturnType<typeof useNavigate>;
}

const menuItems = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
];

const Menu = (): React.ReactElement => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <>
      {menuItems.map(({ path, title }: IMenuItem) => (
        <div className={styles.menuWrapper} key={title}>
          <MenuItem path={path} title={title} onNavigate={handleNavigate} />
        </div>
      ))}
    </>
  );
};

export default Menu;
