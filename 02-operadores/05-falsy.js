//short-circuit

// Falso
// false
// 0
// ''
// null
// undefined
// NaN
let nombre = 'Chanchito feliz';
let username = nombre || 'Anonimo';
console.log(username);

function fn1 (x) {
    console.log('Soy funcion 1');
    return false;
}

function fn2 (){
    console.log('Soy funcion 2');
    return true;
}

let x = fn1 () && fn2();