import { createStore } from 'redux'

// Action generators - Functions that return action objects

// const add = (data) =>
// {
//     return data_.a + data_.b
// }

//Destructured version
const add = ({ a, b }, c) =>
{
    return a + b + c
}

console.log(add({ a: 1, b: 12 }, 100))

// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// })
//Destructured version
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
    //incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
})

// const decrementCount = (payload = {}) => ({
//     type: 'DECREMENT',
//     decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
// })
//Destructured version
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
    //decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
})

const resetCount = () => ({
    type: 'RESET'
})

// const setCount = (payload = {}) => ({
//     type: 'SET',
//     count: payload.count
// })
//Destructured version
const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})

//############## Reducers ##############

// 1. Reducers are pure functions - The output is only determined by the inputs (things passed into the function).
// Interacting with things outside of its scope, will make it a non pure function.
// Example of not a pure function because what it returns depends on the global variable which can change.
// let a = 10
// const add = (b) => {
//     return a + b
// }
//Example of a pure function
// const add = (a, b) => {
//     return a + b
// }

// 2. Never change state or action in the reducer functions, we dont want to directly change these, 
// we dont want to reassign (to state or action) or mutate (for objects) them.
// We just want to be reading from state or action, returning a object which represents the new state.

const countReducer = (state = { count: 0 }, action) =>
{
    //console.log('running')

    switch (action.type)
    {
        case 'INCREMENT':
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }

    // if (action.type ===  'INCREMENT')
    // {
    //     return {
    //         count: state.count + 1
    //     }
    // }

    // return state
}

// This creates a default state object: state = { count: 0 }
const store = createStore(countReducer)

// To stop subscribing, we can use the return value from the subscribe function,
// to unsubscribe. The return value from Subscribe is just a function, which we call,
// in order to unsubscribe.
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

//console.log(store.getState())

// Actions - Is nothing more than an object that gets sent to the store
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })

store.dispatch(incrementCount({ incrementBy: 5 }))

// We call this whenever we are done, to unsubscribe i.e. the subscription will stop.
//unsubscribe()

// store.dispatch({
//     type: 'INCREMENT'
// })

store.dispatch(incrementCount())

// store.dispatch({
//     type: 'RESET'
// })

store.dispatch(resetCount())

// store.dispatch({
//     type: 'DECREMENT'
// })

store.dispatch(decrementCount())

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// })

store.dispatch(decrementCount({ decrementBy: 10 }))

// store.dispatch({
//     type: 'SET',
//     count: 101
// })

store.dispatch(setCount({ count: -100 }))

//console.log(store.getState())