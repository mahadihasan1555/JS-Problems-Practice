// swap rules 1

var a = 2;
var b = 3;
//console.log("before swap:", "a =", a, ", b =", b);
var tamp = a;
a = b;
b = tamp;
console.log("after swap:", "a =", a, ", b =", b);


var a = 8;
var b = 9;
var tamp = a;
a = b;
b = tamp;
console.log("after swap: a = ", a, ", b =", b);

// swap rules 2
var x = 5;
var y = 6;
x = x + y;
y = x - y;

x = x - y;
console.log("after swap: x = ", x, "y = ", y);

// swap rules 3
var p = 5;
var q = 6;

[p, q] = [q, p];
console.log("after swap: p = ", p, "q = ", q);

var c = 4;
var d = 5;

[c, d] = [d, c]
console.log("after swap: c =", c, ",d = ", d);