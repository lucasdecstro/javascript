function retornaFuncao() {
  const nome = "Lucas";
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao();
console.log(funcao);

// Habilidade de acessar o escopo léxico