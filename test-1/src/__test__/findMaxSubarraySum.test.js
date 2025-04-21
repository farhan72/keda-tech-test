const findMaxSubarraySum = require('../findMaxSubarraySum');

describe('findMaxSubarraySum', () => {
    test('should return 700 of [100, 200, 300, 400] of length 2', () => {
        expect(findMaxSubarraySum([100, 200, 300, 400], 2)).toBe(700)
    });
    
    test('should return 39 of [1, 4, 2, 10, 23, 3, 1, 0, 20] of length 4', () => {
        expect(findMaxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39)
    });
    
    test('should return 5 of [-3, 4, 0, -2, 6, -1] of length 2', () => {
        expect(findMaxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5)
    });
});