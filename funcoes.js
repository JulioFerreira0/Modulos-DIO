function mostraIdade(nome, idade){
    return console.log(`A idade de ${nome} é ${idade} anos`);
}

function mostraCidade(nome, idade){
    return console.log(`O nome da cidade é ${nome} e tem ela tem ${idade} anos`);
}

function mostraHobby(nome, idade){
    return console.log(`O nome do Hobby é ${nome} e ele é praticado há ${idade} anos`);
}

export{
    mostraIdade,
    mostraCidade,
    mostraHobby
}