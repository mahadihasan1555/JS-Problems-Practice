var speech = "I am a good person";
console.log(speech.length);

var speech = "I am a good person";
console.log(speech[2]);

var speech = "I am a good person";
var count = 0;
for (var i = 0; i < speech.length ; i++){
    var char = speech[i];
    if(char == " "){
        count++;
    }
}


console.log(count);

