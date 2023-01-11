const form = document.querySelector('.form');

const pessoas = [];

function recebeEventoForm (evento){
    evento.preventDefault();

    const Nome = form.querySelector('#inome');
    const Sobrenome = form.querySelector('#isobrenome');

    pessoas.push({
        Nome: Nome.value,
        Sobrenome: Sobrenome.value
    });
    console.log(pessoas);
}
form.addEventListener ('submit', recebeEventoForm);

