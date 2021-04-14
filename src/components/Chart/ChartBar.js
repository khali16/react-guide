import React from "react";
import styles from "./ChartBar.module.css";

const ChartBar = ({ max, value, maxValue, label }) => {
  let barHeight = "0%";

  if (maxValue > 0) {
    barHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className={styles.ChartBar}>
      <div className={styles.ChartBarInner}>
        <div
          className={styles.ChartBarFill}
          style={{ height: barHeight }}
        ></div>
      </div>
      <div className={styles.ChartBarLabel}>{label}</div>
    </div>
  );
};

export default ChartBar;
