import React from "react";

import classnames from "classnames";

import styles from "./styles.module.css";

const Tab = ({ isActive, onClick, title, className }) => (
  <button
    onClick={onClick}
    className={classnames(styles.root, className, {
      [styles.isActive]: isActive,
    })}
  >
    {title}
  </button>
);

export default Tab;
