function find_smallest(arr) {
  let smallest = arr[0];
  let smallest_index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }

  return smallest_index;
}

function sort_ascending(arr) {
  const new_arr = [];
  let i = 0;

  while (i < arr.length) {
    const smallest = find_smallest(arr);
    const bob = arr.splice(smallest, 1);
    new_arr.push(bob[0]);

    i++;
  }

  return new_arr;
}

const to_be_sorted = [1, 9, 8, 7, 0];

console.log(sort_ascending(to_be_sorted));
