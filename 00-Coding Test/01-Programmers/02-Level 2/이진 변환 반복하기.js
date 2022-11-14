function solution(s) {
    let binaryCount = 0
    let removedZeroCount = 0

    while (s !== "1") {
        let beforeLength = s.length
        s = s.replaceAll(0, "")
        let afterLength = s.length
        removedZeroCount += beforeLength - afterLength
        s = s.length.toString(2)
        binaryCount++
    }

    return [binaryCount, removedZeroCount]
}