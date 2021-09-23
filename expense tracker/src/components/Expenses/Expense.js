import React, { useState } from 'react'
import './Expense.css'
import Card from '../Ui/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpenseList from './ExpenseList'
import ExpenseChart from './ExpenseChart'

const Expense = (props) => {
    const [filterYear, setFilterYear] = useState('2021');
    const chengeFilter = (selectedYear) => {
        setFilterYear(selectedYear);
    }
    const filteredYear = props.items.filter(expense => expense.date.getFullYear().toString() === filterYear);

   
    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onChangeFilter={chengeFilter} />
                <ExpenseChart expenses={filteredYear} />
                <ExpenseList items={filteredYear} />
            </Card>
        </div>
    )


}

export default Expense


/*  {filteredYear.length === 0 && (<p>No expese found!</p>)}
                {filteredYear.length > 0 && ( filteredYear.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)) )} */

