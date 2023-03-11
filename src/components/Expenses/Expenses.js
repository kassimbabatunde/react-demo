import React, {useState} from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css"
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) =>{
    const [selectedYear, setSelectedYear]= useState('2020');
    const filterYearHandler = (selectYear) =>{
        setSelectedYear(selectYear)    
    }
    const filteredExpsenses = props.expense.filter((e) => 
        e.date.getFullYear().toString() === selectedYear)
    
    
    return(
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onFilterYear={filterYearHandler}/>
            <ExpensesChart expenses={filteredExpsenses}/>
            <ExpensesList items={filteredExpsenses}/>
        </Card>
        </div>
        
    );
}

export default Expenses;