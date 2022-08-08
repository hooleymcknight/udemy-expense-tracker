import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = (props) => {
    const expense_items = []
    props.data.forEach((set) => {
        let filter_show = false
        if (props['data-filtered-year'] === '' || String(new Date(set.date).getFullYear()) === props['data-filtered-year']) {
            filter_show = true
        }
        
        expense_items.push(
            <ExpenseItem 
                date={set.date}
                title={set.title}
                amount={set.amount}
                data-filtered-year={filter_show}
            ></ExpenseItem>
        )
    })

    return (expense_items)
}

export default Expenses