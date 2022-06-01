// Código del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");


function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + " cm ^2");

console.groupEnd();



// Código del triángulo
console.group("Triángulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log(
 //   "Los lados del triángulo miden: " 
 //   + ladoTriangulo1 
 //  + "cm, " 
 //  + ladoTriangulo2 
 //   + "cm, " 
 //   + baseTriangulo 
 //   + "cm");

//const alturaTriangulo = 5.5;
//console.log("Los lados del triángulo miden: " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

const raiz = Math.sqrt;

function alturaTrianguloIsosceles(a, b, base){
    if
        (a != b){
            console.error("Los lados a y b no son iguales")
        }
        else{
            return raiz(( a * a) - ((base * base) / 4));

        }
    }

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
//console.log("El área del triángulo es: " + areaTriangulo + " cm");

console.groupEnd();



// Código del círculo
console.group("Círculos");


function diametroCirculo(radio){
    return radio * 2;
}

//console.log("El radio del círculo es: " + radioCirculo + " cm");

//console.log("El diámetro del círculo es: " + diametroCirculo + " cm");

const pi = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}


//console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");


function areaCiculo(radio){
    return (radio * radio) * pi;
}

//console.log("El área del círculo es: " + areaCirculo + " cm");

console.groupEnd();


//Aqui interactuamos con HTML

//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}




//Triangulo
function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}


function calcularAreaTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const area = areaTriangulo(value);
    alert(area);
}