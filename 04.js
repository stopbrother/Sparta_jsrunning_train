function calculate(num1, operand, num2) {
    // 코드를 작성해주세요.    
    if (operand = "+") {
        return num1 + num2;
    } else if (operand = "-") {
        return num1 - num2;
    } else if (operand = "*") {
        return num1 * num2;
    } else if (operand = "/") {
        return num1 / num2;
    }
}

console.log(calculate(3, "+", 6)); // 결과값 9
console.log(calculate(11, "-", 6)); // 결과값 5
console.log(calculate(6, "*", 3)); // 결과값 18
console.log(calculate(15, "/", 3)); // 결과값 5