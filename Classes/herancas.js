class Dispositivo {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + " ligado");
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + " desligado");
      return;
    }

    this.ligado = false;
  }
}

// const d1 = new Dispositivo("Maça");
// d1.ligar();
// // d1.ligar();
// d1.desligar();
// d1.desligar();
// console.log(d1);

class Smarthphone extends Dispositivo {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends Dispositivo {
  constructor(nome, wifi) {
    super(nome);
    this.wifi = wifi;
  }
}

const s1 = new Smarthphone("iPhone", "Preto", "iPhone 15 Pro Max");
s1.ligar();
console.log(s1);
