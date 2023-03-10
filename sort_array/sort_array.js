function find_smallest(arr) {
  let smallest = arr[0];
  let smallest_index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }

  return smallest_index;
}
function find_largest(arr) {
  let largest = arr[0];
  let largest_index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
      largest_index = i;
    }
  }

  return largest_index;
}

function sort_descending(arr) {
  const new_arr = [];

  for (i = 0; (i = arr.length); i++) {
    let largest_index = find_largest(arr);
    const largest = arr.splice(largest_index, 1)[0];
    new_arr.push(largest);
  }

  return new_arr;
}

function sort_ascending(arr) {
  const new_arr = [];

  for (let i = 0; (i = arr.length); i++) {
    let smallest_index = find_smallest(arr);
    const smallest = arr.splice(smallest_index, 1)[0];
    new_arr.push(smallest);
  }
  return new_arr;
}

const to_be_sorted = [1, 9, 8, 7, 10, 2, 3, 6, 4, 0];

console.log(sort_ascending(to_be_sorted));
console.log(sort_descending(to_be_sorted));
