function countdown(n) {
  console.log(n);

  if (n == 0) {
    return n;
  }

  countdown(n - 1);
}

// countdown(15);

function fact(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

function main() {
  console.log(fact(5));
}

main();

//Finding the sum of an array recursively
console.log(quick_sort([10, 1, 7, 3, 9, 6]));

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sum(arr.slice(1));
  }
}

console.log(sum([1, 2, 3, 4, 5]));
