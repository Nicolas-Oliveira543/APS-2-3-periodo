function pesoehvalido(peso) {
    if(peso <= 0 || peso >635){
        return false;
    } else {
        return true;
    }
}

function calculaimc(peso, altura) {
        var imc = 0;
        imc = peso / Math.pow(altura, 2);
        return imc;
}

function alturaehvalida(altura) {
    if(altura <= 0, altura > 2.72){
        return false;
    } else {
        return true;
    }
}

function gorduraehvalida(gordura) {
    if(gordura > 80, gordura <= 2){
        return false;
    } else {
        return true;
    }
}

function imcehpossivel(peso, altura){
    if (pesoehvalido(peso) && alturaehvalida(altura)) {
        return true;
    } else if (!pesoehvalido(peso) && !alturaehvalida(altura)){
        return false;
    } else {
        return true;
    }
}

function preenchido(nome, peso, altura, gordura) {
    if(nome.length == 0 || peso.length == 0 || altura.length == 0 || gordura.length == 0){
        return false;
    } else {
        return true;
    }
}

function valido(nome, peso, altura, gordura){
    if(pesoehvalido(peso) && alturaehvalida(altura) && gorduraehvalida(gordura) && imcehpossivel(peso, altura) && preenchido(nome, peso, altura, gordura)){
        return true;
    } else {
        return false;
    }
}
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso"); 
    var tdaltura = paciente.querySelector(".info-altura");
    var tdimc = paciente.querySelector(".info-imc");
    var tdnome = paciente.querySelector(".info-nome");
    var tdgordura = paciente.querySelector(".info-gordura");
    
    var nome = tdnome.textContent;
    var peso = tdpeso.textContent;
    var altura = tdaltura.textContent;
    var gordura = tdgordura.textContent;
    
    console.log(nome);
    if (!pesoehvalido(peso)) {
        console.log("Peso invalido");
        tdimc.textContent = "Peso invalido";
    }
    
    if (!alturaehvalida(altura)) {
        console.log("Altura invalida");
        tdimc.textContent = "Altura invalida";
    }
    
    if (pesoehvalido(peso)) {
        console.log(peso);
    }
    
    if (alturaehvalida(altura)) {
        console.log(altura);
    }

    if(!gorduraehvalida(gordura)){
        console.log("Percentual de gordura invalido");
    }

    if(gorduraehvalida(gordura)){
        console.log(gordura);
    }
    
    if (imcehpossivel(peso, altura)) {
        //var imc = peso/Math.pow(altura, 2);
        var imc = calculaimc(peso, altura);
        imc.textContent = imc.toFixed(2);
    }
    if(!imcehpossivel(peso, altura)) {
        imc.textContent = "Peso e Altura invalidos!";
    }
}
