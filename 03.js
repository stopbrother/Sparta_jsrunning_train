function oddeven(z) {
    if (z%2 === 0) {
        return "짝수";
    } else {
        return "홀수";
    }
}

console.log(oddeven(10)); // 결과값 "짝수";
console.log(oddeven(7)); // 결과값 "홀수";