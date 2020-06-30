module.exports = function sort(arr) {
  if (!(arr && arr.length)) {
    return;
  }

  let key, j;

  for (let i = arr.length - 2; i >= 0; --i) {
    key = arr[i];

    j = i + 1;

    while (j < arr.length && arr[j] < key) {
      arr[j - 1] = arr[j];
      j = j + 1;
    }

    arr[j - 1] = key;
  }
};
