import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)
            )
        }
        {/*props.filters.text*/}
        {/*props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)*/}
        {/*props.expenses.map((expense) => {
            return (
                <ExpenseListItem key={expense.id} {...expense} />
            )
        })*/}
    </div>
)

// Simplified version
const mapStateToProps = (state) =>
{
    return {
        expenses: selectExpenses(state.expenses, state.filters)
        //filters: state.filters
    }
}

// connect() returns a function not the HOC
// So we need to call the returned function with the component

// mapStateToProps = We define the things we want to get from the store
// ExpenseList = We define the component that we want to create the connected version of

// When you connect a component to the Redux Store its reactive, which means that 
// as the store changes, your component is going to get re-rendered with the new values.
export default connect(mapStateToProps)(ExpenseList)

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseList)

// export default ConnectedExpenseList