import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import styles from "./Expenses.module.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [pickedDate, setDate] = useState("2020");
  const passedDate = (selectedDate) => {
    setDate(selectedDate);
  };

  const filteredExpensesByYear = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === pickedDate;
  });

  return (
    <div className={styles.Expenses}>
      <ExpenseFilter selected={pickedDate} onPassingDate={passedDate} />
      <ExpensesChart expenses={filteredExpensesByYear} />
      <ExpensesList expenses={filteredExpensesByYear} />
    </div>
  );
};
export default Expenses;
