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



function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = document.getElementById("Resultado");
    perimetro.innerText = "El resultado es: " + perimetroCuadrado(value) + "cm";
}


function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = document.getElementById("Resultado");
    area.innerText = "El resultado es: " + areaCuadrado(value) + "cm^2";
}


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

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
//console.log("El área del triángulo es: " + areaTriangulo + " cm");



function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputLado1Triangulo");
    const input2 = document.getElementById("InputLado2Triangulo");
    const input3 = document.getElementById("InputBaseTriangulo");
    
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    const perimetroT = document.getElementById("Resultado");
    perimetroT.innerText = "El resultado es: " + perimetroTriangulo(value1, value2, value3) + "cm";
}


function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputLado1Triangulo");
    const input3 = document.getElementById("InputBaseTriangulo");

    const value1 = input1.value;
    const value3 = input3.value;

    const areaT = document.getElementById("Resultado");
    areaT.innerText = "El resultado es: " + areaTriangulo(value3, value1) + "cm";
}




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


function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = document.getElementById("Resultado");
    perimetro.innerText = "El resultado es: " + perimetroCirculo(value) + "cm^2";
}


function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = document.getElementById("Resultado");
    area.innerText = "El resultado es: " + areaCiculo(value) + "cm^2";
}


console.groupEnd();