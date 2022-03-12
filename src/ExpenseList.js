import React from 'react'
import Expenseitem from './Expenseitem'

const ExpenseList = (props) => {

// Creating the map function
let response = props.expenses.map((item, i)=>{
        return(
        <div>
            <Expenseitem expense={item} handleDelete={props.handleDelete} handleEdit={props.handleEdit} />
        </div>
        )
    })


    // Creating the response rendering return part
    return(
        <div>
            <ul className="list">
                {response}
            </ul>
        </div>
    )
}

export default ExpenseList