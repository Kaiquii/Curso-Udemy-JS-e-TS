// var data = new Date();

// console.log(data.getHours());
// console.log(data.getMinutes());
// console.log(data.getSeconds());
// console.log(data.getMilliseconds);

var datanova = new Date("March 10, 2026");

// console.log(Date.parse(datanova)); // Data em Milisegundos
// console.log(datanova.getDate()); // Pegar o dia
// console.log(datanova.getMonth()); // Pegar o mês
// console.log(datanova.getDay()); // Pegar dia da Semana
// console.log(datanova.getFullYear()); // Pegar o ano

// console.log(
//   datanova.getDate() +
//     "/" +
//     (datanova.getMonth() + 1) +
//     "/" +
//     datanova.getFullYear()
// );

// console.log(datanova.setDate(datanova.getDate() + 5)); // Somar mais 5 dias

var dias = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sabado",
];

console.log(dias[datanova.getDay()]);
