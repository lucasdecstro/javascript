class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  //   Método de instância
  aumentarVolume() {
    this.volume += 2;
  }

  //   Método de instância
  diminuirVolume() {
    this.volume -= 2;
  }

  //   Método estático
  static trocaPilha() {
    console.log("Ok");
  }
}

const controle = new ControleRemoto("LG");
controle.aumentarVolume();
controle.aumentarVolume();
ControleRemoto.trocaPilha();
console.log(controle);
