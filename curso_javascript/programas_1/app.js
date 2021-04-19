/*var a = 1;
var b = "rodrigo";

console.log(b);
console.warn(b);
console.error(b);
console.info(a);

console.log(a+a);
*/
/*var a = 20;
function imprimir(b){
	for (var i=0;i<80; i++){
		console.log("imprimio");
	}
	var a = 10;
	if (b === undefined){
		b = 3;
	}
	//b = b || 2//esto es lo mismo que decir: si b es undefined asignale 2 si tiene valor deja su valor  
	console.log(a+b);
	console.log(3=="3");
	console.log(3==="3");
}

console.log(a)
imprimir(5);
*/

function presionoClick(){
	console.log("click en el boton");
}

function mensaje(nombre,valor){
	if(nombre=="age"){
	console.log("INTORDUJISTE:",valor,'EDAD');
	}
	else if (nombre=="seleccionar"){
	console.log('SELECCIONASTE:',valor);
	}
	else if (nombre=="texto"){
	console.log('DESCRIPCION ES: \n',valor)
	}
	
}


//var dic = {'rodri' : 1 , valor : 'valor',1:2};
//console.log(dic.valor)

/*var miObjeto = new Object(),
    cadena = "miCadena",
    aleatorio = Math.random(),
    objeto = new Object();

console.log(miObjeto)

miObjeto.type                 = "Sintaxis con punto";
miObjeto["Fecha de creación"] = "Cadena con espacios y acento";
miObjeto[cadena]              = "String value";
miObjeto[aleatorio]           = "Número Aleatorio";
miObjeto[objeto]              = "Objeto";
miObjeto[""]                  = "Incluso una cadena vacía";

console.log(miObjeto);
*/

function validate(obj, lowval, hival){
  if ((obj.value < lowval) || (obj.value > hival))
    alert("¡Valor inválido!");
}
