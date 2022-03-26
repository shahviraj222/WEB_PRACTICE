// all ways first letter of componets is in capital 
// import logo from './logo.svg';

import './App.css';
import Expense from './componets/expenselist'
import './componets/expenselist.css'
import NewExpense from './componets/NewExpense/NewExpense';
const date=new Date(2022,0,23); // 0 is january so that's why i get +1 month
//below is array creted array element access by id no used in components 
const expen = [
  { id: 1, amount: 520, title: 'Car insurance', date: date },
  { id: 2, amount: 50, title: 'Staionery', date: date },
  { id: 2, amount: 20, title: 'Travel', date: date },
  { id: 4, amount: 10, title: 'Accessory', date: date },
  { id: 5, amount: 570, title: 'Rent', date: date }
]


function App() {

  const saveEnteredData=(enteredData)=>
  {
    const FinalEnteredData={
      ...enteredData
    }
    console.log(enteredData.a);
  }
  return (
    <div className="expenses">
    <NewExpense onEnteredData={saveEnteredData}></NewExpense>
    {/* nakme of array[id-no].name-of-attribute */}
      <Expense date={expen[0].date} title={expen[0].title} amount={expen[0].amount}></Expense>
      <Expense date={expen[1].date} title={expen[1].title} amount={expen[1].amount}></Expense>
      <Expense date={expen[2].date} title={expen[2].title} amount={expen[2].amount}></Expense>
      <Expense date={expen[3].date} title={expen[3].title} amount={expen[3].amount}></Expense>
      </div>    
  );
}

export default App;
