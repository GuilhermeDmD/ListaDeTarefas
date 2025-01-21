let tarefa = document.getElementById("tarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");
let contador = 0;

function add(){
    novoInput = tarefa.value;
    if ((novoInput !== "") && (novoInput !== null) && (novoInput !== undefined)){
        contador++;
        let novaTarefa = `<div id="${contador}"class="item">

            <div class="item-icone" onclick="checarTarefa(${contador})">
            <span class="material-symbols-outlined">
                radio_button_unchecked
            </span>
            </div>    

            <div class="item-item" onclick="checarTarefa(${contador})">${novoInput}</div>

            <div class="item-botao">
            <button onclick="deletarTarefa(${contador})" class="material-symbols-outlined">delete</button> 
            </div>
        </div>`;

        main.innerHTML += novaTarefa;
        // ZERANDO CAMPOS
        tarefa.value = "";
        tarefa.focus();
    }
}

tarefa.addEventListener("keyup", function(event){
    // se clicou em enter, correspondente a tecla número 13 o código também vai funcionar
    if (event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})

function deletarTarefa(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function checarTarefa(id){
    var tarefa = document.getElementById(id);
    var icone = document.getElementById(id);
    var classe = tarefa.getAttribute("class");
    console.log(classe)
    if(classe == "item"){
        tarefa.classList.add("clicado");
        tarefa.parentNode.appendChild(tarefa);
        // icone.textContent = "radio_button_checked"
    }else{
        tarefa.classList.remove("clicado");
        var icone = document.getElementById(id);
        // icone.textContent = "radio_button_unchecked"

    }
}