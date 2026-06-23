var botaoadicionar = document.querySelector("#buscar-pacientes");

botaoadicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/matthewrpereira/pacientes-api/refs/heads/main/pacientes.json");

    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(paciente => {
                adicionapacientenatabela(paciente);
            });
        }
    })
    xhr.send();
})