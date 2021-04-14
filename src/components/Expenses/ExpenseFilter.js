import React from "react";
import styles from "./ExpenseFilter.module.css";

const ExpenseFilter = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    const date = event.target.value;
    props.onPassingDate(date);
  };

  return (
    <div className={styles.ExpenseFilter}>
      <div className={styles.ExpenseFilterControl}>
        <label>Filter by year</label>
        <select value={props.selected} onChange={submitHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
