/*

// Código para medidas del cuadrado

console.group("Cuadrado")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm")

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado **2;
console.log("El área del cuadrado es: " + areaCuadrado + " cm2");

console.groupEnd();

// Código para medidas del triángulo

console.group("Triángulo");
const ladoTriangulo = 6;
const baseTriangulo = 6;
const alturaTriangulo = 4;

console.log("Las medidas del triángulo son: " + ladoTriangulo + " cm, " + baseTriangulo + " cm, " + " cm, " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo + baseTriangulo + alturaTriangulo;
console.log("El perímetro del triángulo mide: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triángulo es: " + areaTriangulo + " cm2");

console.groupEnd();

// Código para medidas del círculo

console.group("Círculo");

const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + " cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + " cm");

const pi = Math.PI;
console.log("El valor de Pi es: " + pi );

const perimetroCirculo = pi * diametroCirculo;
console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");

const areaCirculo = pi * (radioCirculo ** 2);
console.log("El perímetro del círculo es: " + areaCirculo + " cm2");

console.groupEnd();

*/

// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}


function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}


function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
  }
  function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
  }