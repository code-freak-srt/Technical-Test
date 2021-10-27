var input = [17, 19, 21];
var input2 = [1, 2, 3, 4, 5];

function result(input) {
    let totalScore = 0;
    for (i = 0; i < input.length; i++) {
        if (input[i] == 0 || input[i] % 2 == 0) {
            input[i] = input[i] + 1;
        } else if (input[i] % 2 == 1 && input[i] != 5) {
            input[i] = input[i] + 3;
        } else if (input[i] == 5) {
            input[i] == input[i] + 5;
        }
        totalScore = totalScore + input[i];
    }
    return totalScore;
}
console.log(result(input));
console.log(result(input2));