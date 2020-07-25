var name = [8, 9, 2, 4, 4, 5, 4, 6, 6, 7, 7, 8, 23, 23, 43, 53, 34, 32];
var uniqueName = [];
for (var i = 0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if (index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);


var name = [6, 6, 7, 7, 8, 23, 23, 43, 53, 34, 32];
var uniqueName = [];
for (var i = 0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if (index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);