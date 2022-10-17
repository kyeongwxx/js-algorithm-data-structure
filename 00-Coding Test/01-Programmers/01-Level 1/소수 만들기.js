function solution(nums) {
  let count = 0;
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  const isPrime = (x) => {
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) return false;
    }
    return true;
  };

  for (let i = 0; i <= arr.length - 1; i++) {
    if (isPrime(arr[i])) {
      count++;
    }
  }

  return count;
}
