import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    props.onChangeFormState(false)
  }

  const collapseForm = () => {
    props.onChangeFormState(false)
  }

  const openForm = () => {
    props.onChangeFormState(true)
  }

  if (!props.formState) {
    return (
      <div className='new-expense'>
        <button onClick={openForm} type="button">Add New Expense</button>
      </div>
    )
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCloseForm={collapseForm} />
    </div>
  )
}

export default NewExpense