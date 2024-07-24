const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];


function addthree(scores) {
    // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
    for (i=0; i < scores.length; i++) {
        scores[i] = scores[i] + 3;
    }
}

addthree(scores);

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]