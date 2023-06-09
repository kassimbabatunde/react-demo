import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [show, setShow] = useState(false);
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const [enteredAmount, setEnteredAmount] = useState('')
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }

    const [enteredDate, setEnteredDate] =useState('');
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredTitle && enteredAmount ){
            const expenseData = {
                title: enteredTitle,
                amount: +enteredAmount,
                date: new Date(enteredDate)
            }
            props.onSaveExpenseData(expenseData);
        }
        
        //console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const displayAddExpensesHandler = () =>{
        setShow(true);
    }

    const cancleAddExpensesHandler = () =>{
        setShow(false);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return(
            <form onSubmit={submitHandler}>
              {!show === false ? 
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                
                : <div></div>}
                <div className="new-expense__actions">
                {!show === false ? <div><button onClick={cancleAddExpensesHandler}>Cancel</button><button onClick={displayAddExpensesHandler}>Add Expense</button></div>: <div className="new-expense__actions_center" ><button onClick={displayAddExpensesHandler}>Add Expense</button></div>} 
                </div>
            </form>     
           )
}

export default ExpenseForm;