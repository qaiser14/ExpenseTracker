import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import ExpenseList from './ExpenseList';
import Expenseform from './Expenseform';
import Alert from './Alert';

// Creating the data array
const expenseArray = [

  {id:uuidv4(), charge:"car rent", amount:"400"},
  {id:uuidv4(), charge: "Mobile", amount:"800"},
  {id:uuidv4(), charge:"Petrol", amount:"1000"},

]

// The App function
const App = () =>{
  
  // setting hooks for total expenses
  const [expenses, setExpenses] = useState(expenseArray)
 
  // setting value for charge using hooks
  const [charge, setCharge] = useState("")
  
  // setting value for amount using hooks
  const [amount, setAmount] = useState("")

  // setting value for alert using hooks
  const [alert, setAlert] = useState({show:false})

  // setting value for edit using hooks
  const[edit, setEdit] = useState(false)
  const[index, setIndex] = useState(0)

  // Creating function for setting the value of charge
  const handleCharge = (e) =>{
    setCharge(e.target.value)
  }

  // Creating function for setting the value of amount
  const handleAmount = (e) =>{
    setAmount(e.target.value)
  }

  // Creating the handleSubmit function
  const handleSubmit = (e) =>{
    e.preventDefault()

    if(charge !=="" && amount >0){
    const tempExpense = {id:uuidv4(), charge:charge, amount:amount}
      setExpenses([...expenses,tempExpense])

      const item = "ITEM ADDED"
      handleAlert(item)

    } else{
        
      const item = "ATTENTION EXPENSE FIELDS ARE EMPTY"
      handleAlert(item)
    }
  }

  // handleDelete Function
  const handleDelete = (id) => {
    console.log(id, "Delete")
    let deleteExpense = expenses.filter((item)=> item.id != id)
    setExpenses(deleteExpense)

    const item = <h1 style={{color:"red"}}>ALERT ALERT ITEM DELETED</h1>
    handleAlert(item)

  }

  // handleEdit function
  const handleEdit = (id) => {
    console.log("This is Qaiser", id)

    let findEdit = expenses.find((item) => id == item.id)
    console.log(findEdit, "findEdit");

    const {charge, amount} = findEdit
    setCharge(charge)
    setAmount(amount)
    setEdit(true)

    setIndex(id)
    
  }

  // handleAlert function
  const handleAlert = (item) => {
    setAlert({show:true, item:item})
    setTimeout(()=>{
      setAlert({show:false})
    }, 5000)
  }

  
      return(
        <div>
            <h1>Expense Tracker App</h1>

            {alert.show &&<Alert text={alert.item} />}
            <main className="App">
              <Expenseform amount={amount} charge={charge} handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit={handleSubmit}/>
              <ExpenseList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit}/>

              <span style={{fontSize:"40px",marginLeft:"400px"}} className="total">
                Total Expense ${""}
                {expenses.reduce((acc,curr)=>{
                  return acc += parseInt(curr.amount)
                },0)}
              </span>
              
            </main>        
        </div>
      )
}

export default App