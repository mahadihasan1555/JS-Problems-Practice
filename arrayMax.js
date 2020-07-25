//maxs
var marks = [23, 52, 62, 35, 22, 36,77];
var max = marks[0];
for (var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}

console.log("Highest value is: ", max);

//min
var numbers = [12, 45, 65, 21, 6, 68];
var smallest = numbers[0];
for(var i = 0; i < numbers.length; i++){
    var num = numbers[i];
    if(smallest > num
){
        smallest = num;
    }
}
console.log("Smallest value is :", smallest)