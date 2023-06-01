import React from "react";
import { Link } from "react-router-dom";

interface IMenu {
  path: string;
  title: string;
}

const menuItems = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
];

const Menu = (): React.ReactElement => (
  <>
    {menuItems.map(({ path, title }: IMenu) => (
      <div key={title}>
        <Link to={path}>{title}</Link>
      </div>
    ))}
  </>
);

export default Menu;
