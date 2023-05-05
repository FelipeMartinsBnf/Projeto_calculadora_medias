const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando">';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado">';

const atividades = [];
const notas = [];

const spamAprovado = '<spam class="resultado aprovado">Aprovado</spam>';
const spamReprovado = '<spam class="resultado reprovado">Aprovado</spam>';

const notaMinima = parseFloat(prompt("Digite a nota mínima"));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    AddLinha();
    AttTabela();
    AttMediaFinal();
})

function AddLinha(){
    const inputNome = document.getElementById('nome-atividade');
    const inputNota = document.getElementById('nota-atividade');

    if(atividades.includes(inputNome.value)){
        alert('A atividade ' + inputNome.value + ' Já foi inserida!')
    }else{
        atividades.push(inputNome.value);
        notas.push(parseFloat(inputNota.value));
    
        let linha = '<tr>';
        linha += '<td>' + inputNome.value + '</td>';
        linha += '<td>' + inputNota.value + '</td>';
        linha += `<td>${inputNota.value >= notaMinima ? imgAprovado : imgReprovado}`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNome.value = '';
    inputNota.value = '';

};

function AttTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function AttMediaFinal(){
    const mediaFinal = CalculoMediaFinal();

    document.getElementById('media-final').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spamAprovado : spamReprovado;

    }

function CalculoMediaFinal(){
    let soma = 0;
    for(let i =0; i < notas.length; i++){
        soma += notas[i]
    }
    
    const media = soma / notas.length;
    return media
}