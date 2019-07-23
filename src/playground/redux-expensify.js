import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => (
{
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => (
{
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => (
{
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) =>
{
    switch (action.type)
    {
        case 'ADD_EXPENSE':
            //return state.concat(action.expense) // This doesnt change the original state array, it combines the two arrays together and returns the result.
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) =>
            {
                if (expense.id !== action.id) return expense

                return {
                    ...expense,
                    ...action.updates
                }
            })
        default:
            return state
    }
}

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})

// SET_START_DATE
// Undefined is the default for not specifying a parameter when one is required, so we don't
// need to set a default of undefined.
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) =>
{
    switch (action.type)
    {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

// timestamps (milliseconds)
// January 1st 1970 (unix epoch), this is the starting point for all of our timestamps
// positive numbers are after and negative numbers are before.
// 33400, 10, -203 valid timestamps

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) =>
{
    return expenses.filter((expense) =>
    {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) =>
    {
        if (sortBy === 'date')
        {
            return a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0
        }
        else if (sortBy === 'amount')
        {
            return a.amount < b.amount ? 1 : a.amount > b.amount ? -1 : 0
        }

        // if (a.description.toLowerCase() > b.description.toLowerCase())
        // {
        //     return 1
        // }
        // else if(a.description.toLowerCase() < b.description.toLowerCase())
        // {
        //     return -1
        // }
        // else
        // {
        //     return 0
        // }
    })
}

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(() =>
{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

// Action Object is returned from store.dispatch
 const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }))
 const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }))

// console.log(expenseOne)
// console.log(expenseTwo)

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('ffe'))
// store.dispatch(setTextFilter(''))

 store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(999))
// store.dispatch(setEndDate())

const demoState = 
{
    expenses: [
        {
            id: 'test',
            description: 'potato',
            note: 'test test test',
            amount: 10000,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}

// Spreading Objects
// const user = {
//     name: 'Jen',
//     age: 24
// }
// console.log({
//     age: 27,
//     ...user,
//     location: 'Philadelphia',
//     //age: 27
// })