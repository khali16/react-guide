import React from "react";
import styles from "./ExpenseDate.module.css";

const ExpenseDate = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className={styles.ExpenseDate}>
      <div className={styles.ExpenseDateDay}>{day}</div>
      <div className={styles.ExpenseDateMonth}>{month}</div>
      <div className={styles.ExpenseDateYear}>{year}</div>
    </div>
  );
};

export default ExpenseDate;
