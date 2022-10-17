function solution(nums) {
    let answer = [...new Set(nums)].length
    let max = nums.length / 2

    return answer >= max ? max : answer
}
