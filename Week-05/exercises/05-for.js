// 5a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
var array = ['welcome', 'to', 'my', 'web', 'page'];
for (var i = 0; i < array.length; i++){
    alert(array[i])
};

// 5b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
var arrayUpper = []
for (var i = 0; i < array.length; i++){
    var firstUpper = array[i].substring(0,1).toUpperCase();
    var lastLower = array[i].substring(array[i].length - (array[i].length - 1)).toLowerCase();
    var wordFirstUpper = firstUpper + lastLower;
    arrayUpper.push(wordFirstUpper);
    alert(arrayUpper[i]);
};

// 5c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
var sentence = '';
for (var i = 0; i < array.length; i++){
    sentence += ' ' + array[i];
}
alert(sentence);

// 5d. Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
var numArray = [];
for (var i=0; i<10; i++){
    numArray.push(i);    
};
console.log(numArray);