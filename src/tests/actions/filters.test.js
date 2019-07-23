import moment from 'moment'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters'

test('should generate set text filter object with text value', () =>
{
    const text = 'Something in'
    const action = setTextFilter(text)

    expect(action).toEqual({ type: 'SET_TEXT_FILTER', text })
})

test('should generate set text filter object with default', () =>
{
    const action = setTextFilter()
    const text = ''

    expect(action).toEqual({ type: 'SET_TEXT_FILTER', text })
})

test('should generate action object for sort by date', () =>
{
    const action = sortByDate()

    expect(action).toEqual({ type: 'SORT_BY_DATE' })
})

test('should generate action object for sort by amount', () =>
{
    const action = sortByAmount()

    expect(action).toEqual({ type: 'SORT_BY_AMOUNT' })
})

test('should generate set start date action object', () =>
{
    const startDate = moment(0)
    const action = setStartDate(startDate)

    expect(action).toEqual({ type: 'SET_START_DATE', startDate })
})

test('should generate set end date action object', () =>
{
    const endDate = moment(0)
    const action = setEndDate(endDate)

    expect(action).toEqual({ type: 'SET_END_DATE', endDate })
})