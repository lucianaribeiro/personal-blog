import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export interface IMenuItemProps {
  path: string;
  title: string;
}

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

const MenuItem: React.FC<IMenuItemProps> = ({
  path,
  title,
}: IMenuItemProps) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(STATUS.NORMAL);
  const [active, setActive] = useState("");

  useEffect(() => {
    console.log(status);
  });

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <>
      <div className={styles.menuWrapper} key={title}>
        <button
          className={active === title ? styles[status] : ""}
          onMouseEnter={() => {
            setActive(title);
            return onMouseEnter();
          }}
          onMouseLeave={onMouseLeave}
          onClick={() => navigate(path)}
        >
          {title}
        </button>
      </div>
    </>
  );
};

export default MenuItem;
