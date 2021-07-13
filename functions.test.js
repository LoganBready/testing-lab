const { TestWatcher } = require('jest')
const functions = require('./functions')
// const test = require('./functions')
const {returnTwo, greeting, add, multiply, divide, subtract} = functions


// test('This test should expect to return the value of 2', () => {
//     expect(returnTwo()).toBe(2)
// })

// describe('add', () => {
//     test('this test should add the sum of two numbers', () => {
//         expect(add(1,2)).toBe(3)
//     })
//     test('this test should add the sum of two numbers', () => {
//         expect(add(5,9)).toBe(14)
//     })

// })

// describe('greeting', (name) => {
//     test(`this test should return a string that says "hello, {name}`, ()=> {
//         expect(greeting('James')).toBe('Hello, James')
//     })
//     test(`this test should return a string that says "hello, {name}`, ()=> {
//     expect(greeting('Jill')).toBe('Hello, Jill')
//     })
// })

// describe('Math Functions', () => {
//     test("this should multiply two numbers", () => {
//         expect(multiply(2,2)).toBe(4)
//     })
//     test('this should divide two numbers', () => {
//         expect(divide(10,2)).toBe(5)
//     })
//     test('this should subtract two numbers', () => {
//         expect(subtract(10,2)).toBe(8)
//     })
// })

// //data type
// test('testing data types for add', () => {
//     expect(add(9,5)).toBe("number")
// })

test('testing add', () => {
    expect(add(10,2)).toBeGreaterThan(8)
})


