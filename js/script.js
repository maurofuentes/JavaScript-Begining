//variables//

// const cliente = 'Juan';
// cliente = 'Pedro';

// console.log(cliente);
// const divMensaje = document.getElementById('mensaje');

// let aprendiendo = 'aprendiendo',
//     tecnologia = 'JavaScript';

// console.log (`${aprendiendo} ${tecnologia}`);

let banda  = 'Metallica',
    cancion = 'Enter Sandman';


let nombre;

nombre = banda + ": " + cancion;

console.log(banda.length);

// concat

nombre = nombre.concat(" ", "y es genial");

// todas mayusculas

nombre = nombre.toUpperCase();
console.log(nombre);
// todas minusculas 

nombre = nombre.toLowerCase();
console.log(nombre);

// dividir una cadena de texto en arrays

let actividad = 'Estoy aprendiendo JavaScript con el curso';

nombre = actividad.split(' ');
console.log(nombre);

// remplazar un valor

nombre = actividad.replace('JavaScript', 'JS');
console.log(nombre);

//revisa que algo exista

nombre = actividad.includes('JavaScript');
console.log(nombre);

// para repetir

let master = 'Master ',
    puppets = 'of Puppets';

    console.log(master.repeat(3));
    console.log(puppets);

// numeros en JS

const   numero1 = 30,
        numero2 = 20,
        numero3 = 20.20,
        numero4 = -3,
        numero5 = 20;

let resultado;
resultado = numero1+numero2;

console.log(resultado);

// clase Math

resultado = Math.round(2.5);
console.log (resultado);
resultado = Math.floor(2.99);// redondea hacia abajo
console.log(resultado);
resultado = Math.ceil(2.01);//redondea hacia arriba
console.log(resultado);
resultado = Math.sqrt(144); //raiz cuadrada
resultado= Math.abs(numero3); //quita decimales
resultado = Math.pow(8, 3); //eleva 8 a la 3
resultado = Math.min(10,2,4,60,5);//devuelve el minimo del array
resultado = Math.max(10,2,4,60,5);//devuelve el maximo del array
