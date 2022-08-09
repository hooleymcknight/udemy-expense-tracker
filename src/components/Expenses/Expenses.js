import { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const card_classes = `expenses ${filteredYear}`

  return (
    <div>
      <Card className={card_classes}>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.items.map((expense) => <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          shown={expense.date.getFullYear() == filteredYear}
        />)}
      </Card>
    </div>
  )
}

export default Expenses