import React,{useState} from "react";
import './NewExpense.css';
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [EnteredTitle,setEnterdTitle]=useState('')
    const [EnteredAmount,setEnteredAmount]=useState('');
    const[EnteredDate,setEnteredDate]=useState('');
    const changetitle =(event)=>{
        // console.log(event);//this print the event object on console in this object we get value attribute in that value we have value of title which taken on the form
        
        // console.log(event.target.value);
       setEnterdTitle(event.target.value); 

    };
    const changeAmount=(event)=>
    {
        setEnteredAmount(event.target.value); 
    }
    const changeDate=(event)=>
    {
        setEnteredDate(event.target.value); 
    }
    return <form>
        {/* form taking input of date ,title and amount*/}
        <div className="new-expense__controls" >
            <div className="new-expense__controls">
                <label>Title</label>
                <input type='text' onChange={changetitle} />
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input type='number'  onChange={changeAmount} />
            </div>
            <div className="new-expense__controls"> 
                <label>Date</label>
                <input type='date'  onChange={changeDate}/> 
            </div>
            <div className="new-expense__action">
                <button type="sumbit">Add Expense</button>
            </div>
        </div>
    </form>
}
export default ExpenseForm