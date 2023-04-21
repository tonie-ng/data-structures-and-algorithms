function quick_sort(array) {
  if (array.length < 2) {
    return array;
  } else {
    const pivot = array[0];
    const left = [];
    const right = [];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    return quick_sort(left).concat([pivot], quick_sort(right));
  }
}
