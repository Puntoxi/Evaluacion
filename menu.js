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

var r=multicacion(n1,n2);

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
var a=parseInt(prompt("Inroduce valor de a"));   
var b=parseInt(prompt("Inroduce valor de b"));
var c=parseInt(prompt("Inroduce valor de c"));   
function x1(a, b, c,r)
{
if(a !=0){
r=b*b-4*a*c;

if(r>0){
return(-b + Math.sqrt(r))/(2*a);
}
else{
    console.log("Las raices son numeros complejos");
}
}else{
    console.log("Esto no es una ecuacion de 2do grado");
}
}
var re=x1(a,b,c);
console.log(`x1= ${re}`);

function x2(a, b, c,r)
{
if(a !=0){
r=b*b- 4*a*c;
if(r>=0){
return(-b - Math.sqrt(r))/(2*a);
}
else{
console.log("Las raices son numeros complejos");
}
}else{
    console.log("Esto no es una ecuacion de 2do grado");
}
}
var r2=x2(a,b,c);
console.log(`x2: ${r2}`);
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
