import React, { useState } from "react";
import styles from "./ExpenseItem.module.css";
import ExpenseDate from "./expenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const changeTitleHandler = () => {
    setTitle("Updated!");
  };

  return (
    <div className={styles.ExpenseItem}>
      <div className={styles.ExpenseItemDescription}>
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>
        <div className={styles.ExpenseItemPrice}>{props.amount}$</div>
      </div>
      <button onClick={changeTitleHandler}>Change Title </button>
    </div>
  );
};

export default ExpenseItem;
