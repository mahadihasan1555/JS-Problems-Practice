var business = 450;
var minister = 950;
var sochib = 550;

if (business > minister){
    if (business > sochib){
        console.log("business is bigger");
    }else{
        console.log("sochib is bigger")
    }
    
}else {
    if (minister > sochib){
        console.log("minister is bigger");
    }else{
        console.log("sochib is bigger");
    }
    
}

//max value
var business = 450;
var minister = 950;
var sochib = 550;

var max = Math.max(business, minister);
console.log(max);

//max value
var business = 450;
var minister = 950;
var sochib = 550;

var max = Math.max(business, minister);
console.log(max);

//min value
var business = 450;
var minister = 950;
var sochib = 550;

var min = Math.min(business, minister, sochib);
console.log(min);