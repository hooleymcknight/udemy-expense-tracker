import { useState } from 'react'
import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [filteredYear, setFilteredYear] = useState('')

  const filterChangeHandler = (e) => {
    props.onFilterYearChange(e.target.value)
    setFilteredYear(e.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={filterChangeHandler}>
          <option value=''>All Years</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter