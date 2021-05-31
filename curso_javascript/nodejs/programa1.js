//console.log('hola mundo')

const exporter = {};

function add(x1,x2){
	return x1 + x2;
}

function substract(x1,x2){
	return x1 - x2;
}

function multiply(x1,x2){
	return x1 * x2;
}

function divide(x1,x2){
	if(x2 == 0){
		console.log('no se puede dividir entre 0');
	} else {
		return x1 / x2;
	}
}

console.log(add(1,2));

//exports.add = add;//esta es una forma de exportar funcion por funcion

exporter.add = add;
exporter.substract = substract;
exporter.multiply = multiply;
exporter.divide = divide;

module.exports = exporter;
