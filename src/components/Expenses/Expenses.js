import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import styles from "./Expenses.module.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [pickedDate, setDate] = useState("2020");
  const passedDate = (selectedDate) => {
    setDate(selectedDate);
  };
  return (
    <div className={styles.Expenses}>
      <ExpenseFilter selected={pickedDate} onPassingDate={passedDate} />
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </div>
  );
};
export default Expenses;
