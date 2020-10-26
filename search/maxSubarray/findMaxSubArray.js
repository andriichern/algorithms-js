const ONE = 1;
const ZERO = 0;
const cross = {};
let left, right;

function findMaxCrossingSubarray(arr, start, mid, end) {
  let i,
    lSum = ZERO,
    rSum = ZERO,
    currSum = ZERO;

  for (i = mid; i >= start; --i) {
    currSum = currSum + arr[i];

    if (currSum > lSum) {
      lSum = currSum;
      cross.start = i;
    }
  }

  for (i = mid + ONE, currSum = ZERO; i <= end; ++i) {
    currSum = currSum + arr[i];

    if (currSum > rSum) {
      rSum = currSum;
      cross.end = i;
    }
  }

  cross.sum = lSum + rSum;
}

function findMaxSubarray(arr, start = ZERO, end = arr.length - ONE) {
  if (end === start) {
    return { start, end, sum: arr[start] };
  }

  const mid = ((start + end) >> ONE) | ZERO;
  
  left = findMaxSubarray(arr, start, mid);
  right = findMaxSubarray(arr, mid + ONE, end);
  findMaxCrossingSubarray(arr, start, mid, end);

  if (left.sum >= right.sum && left.sum >= cross.sum) {
    return left;
  }

  if (right.sum >= left.end && right.sum >= cross.sum) {
    return right;
  }

  return cross;
}

module.exports = findMaxSubarray;
