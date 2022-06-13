import React from "react";
import Tab from "../Tab/Tab";

import styles from "./styles.module.css";

const Tabs = ({ tabs, activeTabIndex, onClick }) => (
  <div>
    {tabs.map((tab, index) => (
      <Tab
        key={tab}
        isActive={index === activeTabIndex}
        onClick={() => onClick(index)}
        title={tab}
        className={styles.tab}
      />
    ))}
  </div>
);

export default Tabs;
