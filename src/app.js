import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
// import { addExpense } from './actions/expenses'
// import { setTextFilter } from './actions/filters'
// import getVisibleExpenses from './selectors/expenses'
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

//console.log('test')

store.subscribe(() =>
{
    // const state = store.getState()
    // const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    // console.log(visibleExpenses)
})

// store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }))
// store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000}))
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }))
// store.dispatch(setTextFilter('bill'))
// store.dispatch(setTextFilter('water'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000);

//console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter/>    
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
//ReactDOM.render(<p>This is my boilerplate</p>, document.getElementById('app'))