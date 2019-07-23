// Expenses Reducer
const expensesReducerDefaultState = []
export default (state = expensesReducerDefaultState, action) =>
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