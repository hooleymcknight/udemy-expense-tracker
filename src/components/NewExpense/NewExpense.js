import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        let new_id = 0
        if (enteredExpenseData[enteredExpenseData.length - 1]) {
            new_id = Number(enteredExpenseData[enteredExpenseData.length - 1].id) + 1
        }
        const expenseData = {
            ...enteredExpenseData,
            id: new_id
        }
        console.log(expenseData)

        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense