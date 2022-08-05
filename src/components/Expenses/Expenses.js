import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = (props) => {
    const expense_items = []
    props.data.forEach((set) => {
        expense_items.push(
            <ExpenseItem 
                key={set.id}
                date={set.date}
                title={set.title}
                amount={set.amount}
            ></ExpenseItem>
        )
    })

    return (expense_items)
}

export default Expenses