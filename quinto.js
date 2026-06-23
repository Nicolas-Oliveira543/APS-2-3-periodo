var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#paciente-5");
var tdpeso = paciente.querySelector(".info-peso"); 
var tdaltura = paciente.querySelector(".info-altura");
var tdimc = paciente.querySelector(".info-imc");
var tdnome = paciente.querySelector(".info-nome");

var nome = tdnome.textContent;
var peso = tdpeso.textContent;
var altura = tdaltura.textContent;

var pesoehvalido = true;
var alturaehvalida = true;

console.log(nome);
if (peso <= 0, peso > 635) {
    console.log("Peso invalido");
    pesoehvalido = false;
    tdimc.textContent = "Peso invalido";
}

if (altura <= 0, altura > 2.72) {
    console.log("Altura invalida");
    alturaehvalida = false;
    tdimc.textContent = "Altura invalida";
}

if (pesoehvalido) {
    console.log(peso);
}

if (alturaehvalida) {
    console.log(altura);
}

if (pesoehvalido && alturaehvalida) {
    var imc = peso/Math.pow(altura, 2);
    console.log(imc.toFixed(2));
}