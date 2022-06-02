const notas = [
    {
        curso: "Educación Física",
        nota: 10,
        credito: 2,
    },
    {
        curso: "Programación",
        nota: 8,
        credito: 5,
    },
    {
        curso: "Finanzas personales",
        nota: 7,
        credito: 5,
    },
];

const notasConCredito = notas.map(function (notaObject) {
    return notaObject.nota * notaObject.credito;
});

const sumaNotasConCredito = notasConCredito.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const creditos = notas.map(function (notaObject) {
    return notaObject.credito;
});

const sumaCreditos = creditos.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const promedioPonderadoNotasConCreditos = sumaNotasConCredito / sumaCreditos;

