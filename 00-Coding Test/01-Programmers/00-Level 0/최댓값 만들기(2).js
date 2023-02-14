function solution(numbers) {
  if (numbers.length === 2) return numbers[0] * numbers[1];

  const positiveArray = numbers.filter((v) => v >= 0).sort((a, b) => b - a);
  const negativeArray = numbers.filter((v) => v < 0).sort((a, b) => b - a);

  if (positiveArray.length < 2) return negativeArray[0] * negativeArray[1];
  if (negativeArray.length < 2) return positiveArray[0] * positiveArray[1];

  return Math.max(
    positiveArray[0] * positiveArray[1],
    negativeArray[0] * negativeArray[1]
  );
}
