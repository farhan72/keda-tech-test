const bubleSortDescending = require('../bubleSortDescending')

describe('bubleSortDescending', () => {
    test('should sort an unsorted array as descending [5, 4, 3, 3, 2, 2, 1, 1]', () => {
        expect(bubleSortDescending([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([5, 4, 3, 3, 2, 2, 1, 1])
    });

    test('should handle empty array', () => {
        expect(bubleSortDescending([])).toEqual([]);
    });
});
