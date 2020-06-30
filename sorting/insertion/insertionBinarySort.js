module.exports = function sort(arr) {
  if (!(arr && arr.length)) {
    return;
  }

  let key, start, end, half;

  for (let i = 1; i < arr.length; ++i) {
    key = arr[i];

    start = 0;
    end = i;

    while (start < end) {
      half = (start + end) >> 1;

      if (arr[half] > key) {
        end = half;
      } else {
        start = half + 1;
      }

      if (end == 0 || start == end) {
        end = i - 1;
        break;
      }
    }

    if (start != i && end != i) {
      while (end >= start) {
        arr[end + 1] = arr[end];
        --end;
      }

      arr[start] = key;
    }
  }
};
