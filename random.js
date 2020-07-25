//floor number
var num = 3.33324;
var result = Math.floor(num);
console.log(result);

//ceil number
var num = 3.33324;
var result = Math.ceil(num);
console.log(result);

//round number
var num = 3.33324;
var result = Math.round(num);
console.log(result);

var num = 3.63324;
var result = Math.round(num);
console.log(result);

//random number
var num = 2.33342;
var result = Math.random(num);
console.log(result);

var num = 2.33342;
var result = Math.random(num) * 10;
console.log(result);

//rounded random number
var num = 2.33342;
var result = Math.random() * 2;
var result1 = Math.round(result);
console.log(result1);

// for loop
var num = 3.322;

for (var i = 0; i < 6; i++){
    var randomNumber = Math.random() * 6;
   var output = Math.round(randomNumber);
   console.log(output); 
}

// var num = 4.423;
// for ( var i = 0; i < 6; i++){
//     var input = Math.random() * 6;
//     var output = Math.round(input);
//     console.log(input);
// }