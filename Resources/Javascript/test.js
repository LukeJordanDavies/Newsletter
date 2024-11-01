import { expect } from 'chai';   
import { testFunc } from './main.js';

describe('num', () => {
    it('returns the number 5', () => {
        // Setup
        const expected = 5;

        // Exercise
        const result = testFunc();

        // Verify
        expect(result === expected);
    })
})
