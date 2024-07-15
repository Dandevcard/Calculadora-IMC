//pegando todos os elementos html e criando variaveis para eles
const nome = document.getElementById("nome");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

//função de calculo imc

function imc() {
  const nome = document.getElementById("nome").value;
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");


  altura = altura/100
  //se os inputs nao estiverem vazios faça isso se nao faça aquilo
  if (nome !== "" && altura !== "" && peso !== "") {
    //calculo do imc peso dividido pelo quadrado da altura
    let valorIMC = (peso / (altura * altura))

    valorIMC = valorIMC.toFixed(2)
    //variavei que vai receber a classificação da pessoa
    let classificacao = "";
    //regrado imc diz q se o calculo imc for menor q 18.5 a pessoa esta a baixo do peso,
    //ai ela vai mandar para a variavel classificacao o  texto inserido do if
    if (valorIMC < 18.5) {
      classificacao = "abaixo do peso!";
    }
    //agora se o peso estiver entre 18.5 e 25 escreva....
    else if (valorIMC < 25) {
      classificacao = "Peso ideal, parabéns!!!";
    }
    //agora se o peso estiver entre 25 e 30 escreva....
    else if (valorIMC < 30) {
      classificacao = "acima do peso!";
    }
    //agora se o peso estiver entre 30 e 35 escreva....
    else if (valorIMC < 35) {
      classificacao = "com obesidade grau 1.";
    }
    //agora se o peso estiver entre 35 e 40 escreva....
    else if (valorIMC < 40) {
      classificacao = "com obesidade grau 2.";
    }
    //agora se o peso estiver acima de 40
    else {
      classificacao = "com obesidade grau 3. Cuidado!";
    }

    //eu jogo o retorno dessa variavel no resultado
    resultado.textContent = ` ${nome}, seu imc é ${valorIMC} e você está ${classificacao}`;
  } else {
    //insira em resultado o texto de erro
    resultado.textContent = "preencha todos os campos";
  }
}

//escute o click e apos isso execulte a função imc
calcular.addEventListener("click", imc);
