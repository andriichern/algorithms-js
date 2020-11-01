# Quick Sort

Base:

- <code>O(n \* ln(n))</code> in general;
- <code>O(n<sup>2</sup>)</code> in the worst case.

The quicksort' in the worst case could degrade in time to <code>O(n<sup>2</sup>)</code>. There are 2 of possible solutions:

- Random base element,
- Median base element chosen from start, end and middle positions (where middle is <code>(start + end) / 2</code>).

Both of these solutions exclude probability of the worst case.

To make algorithm more stable to stack overflow exception there is a modification that uses tail recursion.
In that case second recursive call is omitted on each function call. Time complexity is left the same - <code>O(n \* ln(n))</code>,
but maximum possible stack length is reduced to <code>log<sub>2</sub>n</code>, which in the worst case is just 2.
