const name = "Lucas";
const lastName = "Castro";
const yearsOld = 23;
const weight = 78;
const height = 1.75;
let imc = weight / (height * height); // weight / (height * height)
let yearBorn = 2023 - yearsOld;

console.log(
  name +
    " " +
    lastName +
    " " +
    "has " +
    yearsOld +
    ", " +
    height +
    " and their IMC is " +
    imc.toFixed(2)
);
console.log(name + " was born in " + yearBorn);

console.log(`${name} was born in ${yearBorn}.`) // * Use this *
