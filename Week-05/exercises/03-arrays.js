// 3a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var fiveEleven = months[5] + ' ' + months[11];
console.log('3a. ' + fiveEleven);

// 3b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
months.sort();
console.log('3b. ' + months);

// 3c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
months.unshift(2022);
months.push(2023);
console.log('3c. ' + months);

// 3d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
months.shift();
months.pop();
console.log('3d. ' + months);

// 3e. Invertir el orden del array (utilizar reverse).
console.log('3e. ' + months.reverse());

//3f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log('3f. ' + months.join('-'));

//3g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months.slice(months.indexOf('Mayo'), months.indexOf('Noviembre') + 1));
