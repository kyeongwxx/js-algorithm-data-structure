function solution(s) {
    let array = s.split(" ").map(v => +v)

    let max = Math.max(...array)
    let min = Math.min(...array)

    return `${min} ${max}`
}