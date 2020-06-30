function merge(arr, start, mid, end) {
  let i, j;
  const left = [],
    right = [];
  const leftLength = mid - start + 1;
  const rightLength = end - mid;

  for (i = 0; i < leftLength; ++i) {
    left[i] = arr[start + i];
  }

  for (j = 0; j < rightLength; ++j) {
    right[j] = arr[mid + j + 1];
  }

  i = 0;
  j = 0;

  for (let k = start; k <= end; ++k) {
    if (
      (left[i] && right[j] && left[i] <= right[j]) ||
      (left[i] && !right[j])
    ) {
      arr[k] = left[i];
      ++i;
    } else if (right[j]) {
      arr[k] = right[j];
      ++j;
    }
  }
}

function sort(arr, start = 0, end = arr.length - 1) {
  if (!(arr && arr.length) || start >= end) {
    return;
  }

  const mid = ((start + end) >> 1) | 0;

  if (mid !== start) {
    sort(arr, start, mid);
  }

  if (mid + 1 !== end) {
    sort(arr, mid + 1, end);
  }

  merge(arr, start, mid, end);
}

module.exports = sort;
