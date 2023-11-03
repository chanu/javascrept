function global(){
    let x="surya bhai";
    console.log(x);
}
global();

//closure
var a= 10;
function surya(){ // Outer Function
var b= 20;

var chanu = function(){ // Inner Function
        console.log(b);
}
return chanu;
}
surya();


var inner = surya();
console.log(inner);

