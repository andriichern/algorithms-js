module.exports = function sort(arr) {
  if (!(arr && arr.length)) {
    return;
  }

  let key, j;

  for (let i = 1; i < arr.length; ++i) {
    key = arr[i];

    j = i - 1;

    while (j > 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }
};
