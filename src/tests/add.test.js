const add = (a, b) => a + b
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('should add two numbers', () => {
    const result = add(3, 4)
    
    // if (result !== 7)
    // {
    //     throw new Error(`You added 4 and 3. The result was ${result}. Expected 7`)
    // }

    expect(result).toBe(7)
})

test('should generate greeting from name', () => {
    const result = generateGreeting('Raul')

    expect(result).toBe('Hello Raul!')
})

test('should generate greeting for no name', () => {
    const result = generateGreeting()

    expect(result).toBe('Hello Anonymous!')
})

// describe('a test suite', () => {
//     test('a test', () => {
//         expect(1).toBe(2);
//     })
// });