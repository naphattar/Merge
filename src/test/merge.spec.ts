import { merge_sort_arrays } from "../merge";

describe('merge()', () => {
  it('should merge and sort all three arrays', () => {
    const col1 = [1, 3, 5];
    const col2 = [10, 8, 4];
    const col3 = [6, 7, 9];
    const result = merge_sort_arrays(col1, col2, col3);
    expect(result).toEqual([1, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should handle empty arrays', () => {
    expect(merge_sort_arrays([], [], [])).toEqual([]);
    expect(merge_sort_arrays([1], [], [])).toEqual([1]);
    expect(merge_sort_arrays([], [3, 2, 1], [])).toEqual([1, 2, 3]);
    expect(merge_sort_arrays([], [], [7, 8])).toEqual([7, 8]);
  });

  it('should handle duplicates', () => {
    const col1 = [1, 2, 2];
    const col2 = [3, 2, 1];
    const col3 = [2, 3, 4];
    const result = merge_sort_arrays(col1, col2, col3);
    expect(result).toEqual([1, 1, 2, 2, 2, 2, 3, 3, 4]);
  });

  it('should handle negative numbers', () => {
    const col1 = [-5, -3, -1];
    const col2 = [10, 8, 4];
    const col3 = [6, 7, 9];
    const result = merge_sort_arrays(col1, col2, col3);
    expect(result).toEqual([-5, -3, -1, 4, 6, 7, 8, 9, 10]);
  });

});
