// 2a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var tenString = 'azealiabanks';
var stringUpper = tenString.toUpperCase();
console.log('2a. ' + stringUpper);

// 2b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var stringSub = tenString.substring(0,5);
console.log('2b. ' + stringSub);

// 2c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var stringLastSub = tenString.substring(tenString.length - 3);
console.log('2c. ' + stringLastSub);

// 2d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var firstUpper = tenString.substring(0,1).toUpperCase();
var lastLower = tenString.substring(tenString.length - (tenString.length - 1)).toLowerCase();
var stringFirstUpper = firstUpper + lastLower;
console.log('2d. ' + stringFirstUpper);

// 2e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var stringSpace = 'Azealia Banks';
var space = stringSpace.indexOf(' ');
console.log('2d. ' + space);

// 2f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var tenStringSpace = 'orthopedic presidents';
var firstWordUpper = tenStringSpace.substring(0,1).toUpperCase();
var mySpace = tenStringSpace.indexOf(' ');
var firstWordLower = tenStringSpace.substring(1, mySpace);
var secondWordUpper = tenStringSpace.substring(mySpace + 1, mySpace + 2).toUpperCase();
var secondWordLower = tenStringSpace.substring(mySpace + 2);
var tenStringUpper = firstWordUpper + firstWordLower + " " + secondWordUpper + secondWordLower;
console.log('2d. ' + tenStringUpper);