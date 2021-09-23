import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
import NewExpenseBtn from './NewExpenseBtn';

const NewExpense = (props) => {
    const [showText, setShowText] = useState(false);
    const onClick = () => setShowText(!showText);
    const onSaveFormDataHandler = (enterdExpenseData) =>{
        const expenseData = {
            ...enterdExpenseData,
            id: Math.random().toString()
        };
      props.onAddExpense(expenseData);
      onClick();
    }
    if (showText) {
    return (
        <div className="new-expense ">
           <ExpenseForm onSaveFormData={onSaveFormDataHandler} onClick={onClick} />
        </div>
    )
} else {
    return (
    <div className="new-expense ">
           <NewExpenseBtn onClick={onClick} />
        </div>
    )
}


}

export default NewExpense
