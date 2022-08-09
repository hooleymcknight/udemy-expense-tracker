import { useState } from 'react'

import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses'

const starter_expenses = [
  {
    id: 0,
    date: new Date(2022, 6, 29),
    title: 'Car Insurance',
    amount: 288.7
  },
  {
    id: 1,
    date: new Date(2022, 7, 3),
    title: 'Stain brush',
    amount: 4.98
  },
  {
    id: 2,
    date: new Date(2019, 9, 1),
    title: 'New bra',
    amount: 49.99
  },
  {
    id: 3,
    date: new Date(2020, 1, 18),
    title: 'Jeep Grand Cherokee down payment',
    amount: 1000
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(starter_expenses)

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App