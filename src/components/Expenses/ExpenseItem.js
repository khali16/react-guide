import React, { useState } from "react";
import styles from "./ExpenseItem.module.css";
import ExpenseDate from "./expenseDate";

const ExpenseItem = ({ title, date, amount }) => {
  const [newTitle, setTitle] = useState(title);

  const changeTitleHandler = () => {
    setTitle("Updated!");
  };

  return (
    <li>
      <div className={styles.ExpenseItem}>
        <div className={styles.ExpenseItemDescription}>
          <ExpenseDate date={date} />
          <h2>{newTitle}</h2>
          <div className={styles.ExpenseItemPrice}>{amount}$</div>
        </div>
        <button onClick={changeTitleHandler}>Change Title </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
