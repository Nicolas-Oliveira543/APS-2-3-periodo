/*
var botaoclicado = document.querySelector("#adicionar-paciente");
    botaoclicado.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("fui clicado");
});
*/

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#Forma-adiciona");

    /*
    var nome = form.nome.value;
    var peso = forum.peso.value;
    var altura = forum.altura.value;
    var gordura = forum.gordura.value;
    */

   var paciente = obterpacientedoformulario(form);

   if(valido(paciente.nome, paciente.peso, paciente.altura, paciente.gordura)){
    adicionapacientenatabela(paciente);

    form.reset();
   } else if(!preenchido(paciente.nome, paciente.peso, paciente.altura, paciente.gordura)){
    alert("Preencha todos os campos");
   } else if(!imcehpossivel(paciente.peso, paciente.altura)){
    alert("Peso e altura invalidos");
   } else if(!pesoehvalido(paciente.peso)){
    alert("Peso invalido");
   } else if (!alturaehvalida(paciente.altura)) {
    alert("Altura invalida");
   } else if (!gorduraehvalida(paciente.gordura)) {
    alert("Percentual de gordura invalido")
   }
});

function obterpacientedoformulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: parseFloat(form.peso.value),
        altura: parseFloat(form.altura.value),
        gordura: form.gordura.value,
        imc: calculaimc(parseFloat(form.peso.value), parseFloat(form.altura.value)),
    }
    return paciente;
}

function montatr(paciente){
    var pacienteTr = document.createElement("tr");

    /*
    var nometd = document.createElement("td");
    var pesotd = document.createElement("td");
    var alturatd = document.createElement("td");
    var gorduratd = document.createElement("td");
    var imctd = document.createElement("td");

    nometd.textcontent = paciente.nome;
    pesotd.textContent = paciente.peso;
    alturatd.textContent = paciente.altura;
    gorduratd.textContent = paciente.gordura;
    imctd.textContent = calculaimc(paciente.peso, paciente.altura);
    */
   /* 
   nometd.textcontent = montatd(paciente.nome, "info-nome");
   pesotd.textContent = montatd(paciente.peso, "info-peso");
   alturatd.textContent = montatd(paciente.altura, "info-altura");
   gorduratd.textContent = montatd(paciente.gordura, "info-gordura");
   imctd.textContent = montatd(paciente.imc, "info-imc");
    */


    pacienteTr.appendChild(montatd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montatd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montatd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montatd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montatd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montatd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function adicionapacientenatabela(paciente) {
    var pacientetr = montatr(paciente);
    var tabela = document.querySelector("#tabela-paciente");
    tabela.appendChild(pacientetr);
    paciente.classList.add("paciente");
}