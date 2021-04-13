import React from "react";
import styles from "./ExpenseItem.module.css";
import ExpenseDate from "./expenseDate";

const ExpenseItem = (props) => {
  return (
    <div className={styles.ExpenseItem}>
      <div className={styles.ExpenseItemDescription}>
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <div className={styles.ExpenseItemPrice}>{props.amount}$</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
