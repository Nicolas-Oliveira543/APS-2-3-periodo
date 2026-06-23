var campofiltro = document.querySelector("#filtrar-tabela");

campofiltro.addEventListener("input", function (){
    var pacientes = document.querySelectorAll(".paciente");;

    for(let i = 0; i < pacientes.length; i++){
        const paciente = pacientes[i];
        var tdnome = paciente.querySelector(".info-nome");
        var nome = tdnome.textContent;

        var expressao = new RegExp(this.value, "i");

        if (!expressao.test(nome)) {
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel");
        }
    }
})