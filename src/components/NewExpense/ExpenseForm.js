import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const formChangeHandler = (e) => {
        switch (e.target.id) {
            case 'new-expense__title':
                setUserInput((prevState) => {
                    return { ...prevState, enteredTitle: e.target.value}
                })
                break
            case 'new-expense__amount':
                setUserInput((prevState) => {
                    return { ...prevState, enteredAmount: e.target.value}
                })
                break
            case 'new-expense__date':
                setUserInput((prevState) => {
                    return { ...prevState, enteredDate: e.target.value}
                })
                break
            default:
                break
        }
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()

        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }

        props.onSaveExpenseData(expenseData)

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input id="new-expense__title" type="text" value={userInput.enteredTitle} onChange={formChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input id="new-expense__amount" type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={formChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input id="new-expense__date" type="date" value={userInput.enteredDate} min="2019-01-01" max="2022-12-31" onChange={formChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm