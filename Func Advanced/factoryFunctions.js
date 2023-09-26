// Factory function
// Constructor function

criaPessoa = (nome, sobrenome, a, p) => {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala: (assunto = "?") => {
      return `${nome} está ${assunto}.`;
    },
    altura: a,
    peso: p,

    // Getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
};

const p1 = criaPessoa("Lucas", "Castro", 1.75, 75);
p1.nomeCompleto = "Não faço ideia";
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
