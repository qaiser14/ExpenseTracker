import React from 'react'
import './App.css'
import {MdEdit,MdDelete} from 'react-icons/md'

// Receive every item in this component
// Render the items in this component


const Expenseitem = ({expense, handleDelete, handleEdit}) =>{

    const {charge, amount} = expense
    const {id} = expense
    
    return(
        <div>
             <li className="item">
                    <div className="info"  style={{fontSize:"40px"}}> 
                        <span className="charge">{charge}</span>
                    
                            <div>
                                <span style={{fontSize:"40px"}} className="amount">{amount}</span>
                            </div>
                    </div>

                        <div>
                            <button onClick={()=>handleEdit(id)} className="edit-btn btn">
                              <MdEdit />  Edit
                            </button>
                            <button onClick={()=>handleDelete(id)} className="clear-btn btn">
                               <MdDelete /> Delete
                            </button>
                        </div>

                </li>  
        </div>
    )
}

export default Expenseitem