import { useState } from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle('new')
    }

    let classes = 'expense-item'
    if (props['data-filtered-year'] === false) {
        classes += ' hidden'
    }

    return (
        <Card className={classes}>
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${Number(props.amount).toFixed(2)}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem