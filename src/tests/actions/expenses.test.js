import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

test('should setup remove expense action object', () =>
{
    const action = removeExpense({ id: '123abc' })

    expect(action).toEqual({ type: 'REMOVE_EXPENSE', id: '123abc' })
})

test('should setup edit expense action object', () =>
{
    const action = editExpense('123abc', { note: 'New note value' })

    expect(action).toEqual({ type: 'EDIT_EXPENSE', id: '123abc', updates: { note: 'New note value' }})
})

test('should setup add expense action object with provided values', () =>
{
    const expenseData = { 
        description: 'Rent', 
        amount: 109500, 
        createdAt: 1000, 
        note: 'This was last months rent'
    }

    const action = addExpense(expenseData)

    expect(action).toEqual({ type: 'ADD_EXPENSE', expense: { ...expenseData, id: expect.any(String) }})
})

test('should setup add expense action object with default values', () =>
{
    const action = addExpense()

    const defaultExpenseData = { 
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0
    }

    expect(action).toEqual({type: 'ADD_EXPENSE', expense: { ...defaultExpenseData, id: expect.any(String) }})
})

test('should setup add expense action object with default description', () =>
{
    const expenseData = { 
        note: 'testNote', 
        amount:100, 
        createdAt: 1500 
    }

    const action = addExpense(expenseData)

    expect(action).toEqual({ type: 'ADD_EXPENSE', expense: { ...expenseData, description: '', id: expect.any(String) }})
})

test('should setup add expense action object with default note', () =>
{
    const expenseData = { 
        description: 'test', 
        amount:100, 
        createdAt: 1500 
    }

    const action = addExpense(expenseData)

    expect(action).toEqual({ type: 'ADD_EXPENSE', expense: { ...expenseData, note: '', id: expect.any(String) }})
})

test('should setup add expense action object with default amount', () =>
{
    const expenseData = { 
        description: 'test', 
        note: 'testNote', 
        createdAt: 1500 
    }

    const action = addExpense(expenseData)

    expect(action).toEqual({ type: 'ADD_EXPENSE', expense: { ...expenseData, amount: 0, id: expect.any(String) }})
})

test('should setup add expense action object with default createdAt', () =>
{
    const expenseData = { 
        description: 'test', 
        note: 'testNote', 
        amount: 100 
    }

    const action = addExpense(expenseData)

    expect(action).toEqual({ type: 'ADD_EXPENSE', expense: { ...expenseData, createdAt: 0, id: expect.any(String) }})
})