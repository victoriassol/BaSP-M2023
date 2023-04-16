// 6a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
function suma(a, b){
    return a + b
};
var miSuma = suma(10, 10);
console.log('6a. ' + miSuma);

// 6b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
function sumaB(a, b){
    if (typeof a == 'number' && typeof b == 'number'){
        return a + b
    }
    else{
        //alert('Error in parameter')
        return NaN
    }
};
console.log('6b. ' +sumaB(5,'5'));
console.log('6b. ' +sumaB(5,5));

// 6c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger(num){
    return num % 1 === 0
};
console.log('6c. ' + validateInteger(10.1));
console.log('6c. ' + validateInteger(10));

// 6d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).
function sumaD(a, b){
    if (typeof a !== 'number' || typeof b !== 'number'){
        alert('Error in parameter')
        return NaN
    }
    if (!validateInteger(a)){
        alert('First parameter is a decimal')
        a = Math.round(a)
    }
    if (!validateInteger(b)){
        alert('Second parameter is a decimal')
        b = Math.round(b)
    }
    return a + b
};

function validación(a, b){
    if (typeof a !== 'number' || typeof b !== 'number'){
        alert('Error in parameter')
        return NaN
    }
    if (!validateInteger(a)){
        alert('First parameter is a decimal')
        a = Math.round(a);
    }
    if (!validateInteger(b)){
        alert('Second parameter is a decimal')
        b = Math.round(b);
    }
    return {
        a: a,
        b: b
    }
};
function sumaE(a, b){
    var {a, b} = validación(a, b);
    return a + b
}

console.log(sumaE(1, 1.4))


// 6e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando que todo siga funcionando igual que en el apartado anterior.
/*function validación(a, b){
    if (typeof a !== 'number' || typeof b !== 'number'){
        alert('Error in parameter')
        return NaN
    }
    if (!validateInteger(a)){
        alert('First parameter is a decimal')
        a = Math.round(a);
    }
    if (!validateInteger(b)){
        alert('Second parameter is a decimal')
        b = Math.round(b);
    }
    return [a, b]
};
function sumaE(a, b){
    [a, b] = validación(a, b);
    return a + b
}

console.log(sumaE(2, 'caca'))*/
