import React from 'react'
import './NewExpense.css'

const NewExpenseBtn = (props) => {


    return (
        <div>
            <button onClick={props.onClick}>Add New Expense</button>
        </div>
    )
}

export default NewExpenseBtn
