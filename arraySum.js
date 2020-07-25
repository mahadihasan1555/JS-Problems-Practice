var numbers = [23, 42, 32, 62, 63, 75, 32];
var sum = 0;
    for (var i = 0; i < numbers.length ; i++){
        var element = numbers[i];
        sum = sum + element;
}
console.log("total of the numbers: ", sum);

//with function


function getArraySum(numbers){
    var sum = 0;
    for (var i = 0; i < numbers.length ; i++){
        var element = numbers[i];
        sum = sum + element;
}
return sum;
}
var numbers = [23, 42, 32, 62, 63, 75, 32, 53, 66 ];
var result = getArraySum(numbers);
console.log("total of the numbers: ", result);

var total = getArraySum([24, 26, 62,61, 63, 77, 87]);
console.log("total of the numbers: ", total);

