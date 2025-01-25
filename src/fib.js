function fib(n) {
  if (n <= 1) {
    console.log(n);
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

function makeFibArr(n) {
  let nums = [];
  for (let i = 0; i < n; i++) {
    const x = fib(i);
    nums.push(x);
  }
  return nums;
}

export default makeFibArr;
