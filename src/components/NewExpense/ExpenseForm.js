import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //DIFFERENT APPROACH
  /* const [userInput, setUserInput] = setState({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
  }) */
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }; //DIFFERENT APPROACH
  /* setUserInput((prevState) => {
        return {...prevState, enteredTitle: event.target.value};
    })  
    */ const amountChangeHandler = (
    event
  ) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpense(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.NewExpenseControls}>
        <div className={styles.NewExpenseControl}>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={styles.NewExpenseControl}>
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className={styles.NewExpenseControl}>
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={styles.NewExpenseActions}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
