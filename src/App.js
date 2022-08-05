import { useState } from 'react'
import './App.css'
import Card from './components/UI/Card'
import Expenses from './components/Expenses/Expenses'
import ExpensesFilter from './components/ExpensesFilter/ExpensesFilter'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const [appliedFilter, setAppliedFilter] = useState('')

  let expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log(expense)
  }

  const filterYearChangeHandler = (filteredYear) => {
    setAppliedFilter(filteredYear)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter onFilterYearChange={filterYearChangeHandler} />
      <Card className="expenses">
        <Expenses
          data={expenses}
          data-filtered-year={appliedFilter}
        ></Expenses>
      </Card>
    </div>
  )
}

export default App