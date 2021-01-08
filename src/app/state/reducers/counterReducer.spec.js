import {counterReducer } from  "./counterReducer";
import * as actions from '../actions/counter.actions';
// a collection of tests/spec
describe("test suite", () => {
    // one or more test cases
    // it - test specific, plain english word it
    it("should add two position numbers", () => {
        //test case will contains 1 or more match statements
        expect(1 + 2).toBe(3)
    })

    it("should sub two position numbers", () => {
        //test case will contains 1 or more match statements
        expect(2 - 1).toBe(1)
    })
})

describe("  counterReducer ", () => {
    it ("should have default state", () => {
        expect(counterReducer(undefined, {type: 'init.....'})).toBe(0)
    })

    it ("should have return the same state", () => {
        expect(counterReducer(100, {type: 'init.....'})).toBe(100)
    })

    it("should decrement count", () => {
        expect(counterReducer(100, actions.decrement(1) )).toBe(99)
    })
})