import React, { useState } from "react";
import styles from "./styles.module.css";

export interface IMenuItemProps {
  path: string;
  title: string;
  onNavigate: (path: string) => void;
}

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

const MenuItem: React.FC<IMenuItemProps> = ({
  path,
  title,
  onNavigate,
}: IMenuItemProps): React.ReactElement => {
  const [status, setStatus] = useState(STATUS.NORMAL);
  const [active, setActive] = useState("");

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
          onClick={() => onNavigate(path)}
        >
          {title}
        </button>
      </div>
    </>
  );
};

export default MenuItem;
