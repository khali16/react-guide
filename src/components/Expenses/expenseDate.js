import React from "react";
import styles from "./ExpenseDate.module.css";
import { getDay, getMonth, getYear } from "../../utils/dateUtils";

const ExpenseDate = ({ date }) => {
  const day = getDay(date);
  const month = getMonth(date);
  const year = getYear(date);
  //tak, wiem powinnam to przenieść do innego pliku, ale nie umiem
  return (
    <div className={styles.ExpenseDate}>
      <div className={styles.ExpenseDateDay}>{day}</div>
      <div className={styles.ExpenseDateMonth}>{month}</div>
      <div className={styles.ExpenseDateYear}>{year}</div>
    </div>
  );
};

export default ExpenseDate;
