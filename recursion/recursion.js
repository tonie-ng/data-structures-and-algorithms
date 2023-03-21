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
