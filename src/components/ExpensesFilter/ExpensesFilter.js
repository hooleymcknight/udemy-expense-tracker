import { useState } from 'react'
import './ExpensesFilter.css'


const ExpensesFilter = (props) => {
  const [filteredYear, setFilteredYear] = useState('')

  const filterChangeHandler = (e) => {
    props.onFilterYearChange(e.target.value)
    setFilteredYear(e.target.value)
    
    if (filteredYear.length === 0) {
      console.log('first time filter apply')
    }
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={filterChangeHandler}>
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