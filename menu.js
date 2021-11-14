var menu;
menu=parseInt(prompt("Menu: \n 1)Suma \n 2)Resta \n 3)Multiplicacion \n 4)Division  \n 5)Raiz cuadrada \n 6)Formula general \n 7)Binomio cuadrado perfecto"));

switch(menu){
case 1:
var n1=parseInt(prompt("Introduce Valor del numero 01"));
var n2=parseInt(prompt("Introduce Valor del numero 02"));

function sumar(a,b){

return a+b;
}
var r=sumar(n1,n2);
console.log(`R= ${r}`);
break;

case 2:
var n1=parseInt(prompt("Introduce Valor del numero 01"));
var n2=parseInt(prompt("Introduce Valor del numero 02"));
function restar(a,b){
return a-b;
}

var r=restar(n1,n2);

console.log(`R= ${r}`);
break;

case 3:
var n1=parseInt(prompt("Introduce Valor del numero 01"));
var n2=parseInt(prompt("Introduce Valor del numero 02"));
function multi(a,b){
return a*b;
}

var r=multi(n1,n2);
console.log(`R= ${r}`);
break;

case 4:
var n1=parseInt(prompt("Introduce Valor del numero 01"));
var n2=parseInt(prompt("Introduce Valor del numero 02"));
function Division(a,b){
return a/b;
}

var r=Division(n1,n2);

console.log(`R= ${r}`);
break;

case 5:
var n1=parseInt(prompt("Introduce valor del numero"));   
function Raiz(a){
    var n;
    n=Math.sqrt(a);
return n;
}
var r=Raiz(n1);

console.log(`R= ${r}`);
break;

    
case 6:
var a = parseInt(prompt("Valor de a"));   
var b = parseInt(prompt("Valor de b"));
var c = parseInt(prompt("Valor de c"));   
 var d = -1*b;
 var e = Math.pow(b,2);
 var f = 4*a*c;
 var g = e-f;
 var h = Math.sqrt(g);
 var i = 2*a;
 var j = d+h;
 var k = d-h;

 var res1= j/i;
 var res2= k/i;
 console.log(`resultado 1: ${res1.toFixed(2)}\n resultado 2: ${res2.toFixed(2)}`);
 break;

case 7:
var n1=parseInt(prompt("Introduce Valor del numero 01"));
var n2=parseInt(prompt("Introduce Valor del numero 02"));

function binomiocuadradoperfecto(a,b){
    return(Math.pow(a,2)+(2*a*b)+(Math.pow(b,2)));
}
var r=binomiocuadradoperfecto(n1,n2);
console.log(`(a+b)^2: ${r}`);

function binomiocuadradoperfecto2(a,b){
    return(Math.pow(a,2)-(2*a*b)+(Math.pow(b,2)));
}
var r=binomiocuadradoperfecto2(n1,n2);
console.log(`(a-b)^2: ${r}`);
 }
