var salida1, salida2, salida3;
var entero = 5;
var flotante = 5.5;
salida1 = "5 + 5.5 = " + entero + flotante;
salida2 = "El número 2 es un número: " + esPar(2);
salida3 = "El número 3 es un número: " + esPar(3);

document.querySelector("#js_container1").innerHTML = "5 + 5.5 = " + salida1;
document.querySelector("#js_container2").innerHTML = salida2;  
document.querySelector("#js_container3").innerHTML = salida3; 

function esPar(x){
	if(x % 2 == 0) {
		return "par";	
	}else {
		return "impar";
	}
}

