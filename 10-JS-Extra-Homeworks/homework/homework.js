// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];
  for (let key in objeto) {
      array.push([key, objeto[key]]);
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

    var obj = {};
    for (let i = 0; i < string.length; i++) {
     if (obj.hasOwnProperty(string[i])) {
      obj[string[i]]+=1;
     }
     else{
      obj[string[i]]=1;
     }
    }
    return obj;
 }
 


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var min=[];
  var may=[];
  for (let i = 0; i < s.length; i++) {
    //toUpperCase es un metodo de String para convertir a mayusculas
    //toLowerCase es para minusculas, se puede usar para encontrar minusculas o
    //mayusculas en una cadena si lo convinamos con un condicional con el que
    //tenemos abajo de referencia.
    if (s[i]===s[i].toUpperCase()) {
      may.push(s[i]);
    }
    else{
      min.push(s[i]);
    }
    
  }
  return may.concat(min).join("");
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var div=[];
  var rev=[];
  div=str.split(" ");
  rev=div.map(function (x) {
    return x.split("").reverse().join("");
  })
  return rev.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num1=numero.toString();
  //Split y Join solo es un metodo de los String, no funciona con numeros
  if (num1=== num1.split("").reverse().join("")) {
    return "Es capicua"
  }
    return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //Split y Join solo es un metodo de los String, no funciona con numeros
  var newcadena=cadena.split("");
  var cadenamod=newcadena.filter(function(x){
    if (x!=="a" && x!=="b" && x!=="c") {
      return x;
    }
  })
  return cadenamod.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
var x=true;
  while (x) {
    x=false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].length > arr[i + 1].length) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        x=true;
      }
      
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var union=[]; 
  for (let i = 0; i < arreglo1.length; i++) {
    //Includes es un metodo de array para encontrar un valor dentro de un array
    if (arreglo2.includes(arreglo1[i]) ) {
      union.push(arreglo1[i])
    }
  }
  return union;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

